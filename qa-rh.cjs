const fs=require('node:fs');const {chromium}=require('playwright');
const base='http://127.0.0.1:4173/';const results={viewports:[],issues:[],interactions:{},seo:{}};
const failure=x=>results.issues.push(x);
(async()=>{
 fs.mkdirSync('qa-rh',{recursive:true});
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 for(const [width,height] of [[320,740],[360,800],[390,844],[430,932],[768,1024],[1024,768],[1440,900]]){
   const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});
   let errors=[];page.on('pageerror',e=>errors.push(e.message));
   let resp=await page.goto(base,{waitUntil:'networkidle',timeout:60000});
   await page.evaluate(()=>document.fonts.ready);
   await page.screenshot({path:'qa-rh/hero-'+width+'.png',animations:'disabled'});
   let v=await page.evaluate(()=>{
     const h=document.querySelector('h1'),button=document.querySelector('.hero-buttons .button-dark');
     const r=button.getBoundingClientRect();
     return {mainText:document.querySelector('main')?.innerText.length||0,docWidth:document.documentElement.scrollWidth,viewport:innerWidth,h1:document.querySelectorAll('h1').length,ctaTop:Math.round(r.top),ctaBottom:Math.round(r.bottom),ctaWidth:Math.round(r.width),imageSrc:[...document.images].map(x=>x.getAttribute('src')),waLinks:document.querySelectorAll('a[href*="wa.me/"]').length,nav:document.querySelectorAll('nav').length,clippedHeadings:[...document.querySelectorAll('h1,h2,h3')].filter(el=>el.scrollWidth>el.clientWidth+4).map(el=>({text:el.textContent.trim().slice(0,55),scroll:el.scrollWidth,client:el.clientWidth}))};
   });
   if(!resp.ok())failure('HTTP non-200 '+width);
   if(v.docWidth>width+1)failure('Horizontal overflow '+width+' '+v.docWidth);
   if(v.h1!==1)failure('H1 count '+width);
   if(v.clippedHeadings.length)failure('Headline overflow at '+width+': '+JSON.stringify(v.clippedHeadings));
   if(v.mainText<2200)failure('Missing text '+width);
   if(v.ctaWidth<170)failure('Hero CTA too narrow '+width);
   if(width<=430&&v.ctaTop>height-30)failure('Hero CTA below first viewport '+width+' at '+v.ctaTop);
   if(v.waLinks<3)failure('Missing conversion CTA '+width);
   const broken=[];
   for(const src of v.imageSrc){const x=await page.request.get(new URL(src,base).href);if(!x.ok())broken.push(src+':'+x.status())}
   if(broken.length)failure('Broken images '+width+':'+broken);
   if(width===390){
     const menu=page.locator('.mobile-menu summary');await menu.click();
     const opened=await page.locator('#mobileMenu').evaluate(n=>n.open);
     results.interactions.menuOpened=opened;if(!opened)failure('Menu did not open');
     await menu.click();
     await page.locator('#atuacao').scrollIntoViewIfNeeded();await page.waitForTimeout(250);
     const sticky=await page.locator('#stickyContact').evaluate(el=>el.classList.contains('show'));
     results.interactions.stickyVisible=sticky;if(!sticky)failure('Sticky WhatsApp does not show');
     for(const sel of ['.interlude img','.personal-photo img']){
       const el=page.locator(sel);await el.scrollIntoViewIfNeeded();
       await el.evaluate(async img=>{try{await img.decode()}catch(_){}});
       const okay=await el.evaluate(img=>img.complete&&img.naturalWidth>0);
       results.interactions[sel+'Loaded']=okay;if(!okay)failure('Lazy image failed '+sel);
     }
     await page.evaluate(()=>scrollTo(0,0));
     await page.screenshot({path:'qa-rh/mobile-full-390.png',fullPage:true,animations:'disabled'});
   }else if([320,430,1440].includes(width)){
     await page.locator('#contato').scrollIntoViewIfNeeded();
     await page.screenshot({path:'qa-rh/full-'+width+'.png',fullPage:true,animations:'disabled'});
   }
   if(errors.length)failure('JS error '+width+':'+errors.join(';'));
   results.viewports.push({width,height,status:resp.status(),...v,broken,errors});
   await page.close();
 }
 const noJs=await browser.newPage({viewport:{width:390,height:844},javaScriptEnabled:false});
 await noJs.goto(base,{waitUntil:'load'});results.interactions.noJsText=await noJs.locator('main').innerText().then(x=>x.length);
 if(results.interactions.noJsText<2200)failure('Content inaccessible without JS');
 await noJs.screenshot({path:'qa-rh/no-js.png',fullPage:true,animations:'disabled'});await noJs.close();
 const reduced=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
 await reduced.goto(base,{waitUntil:'load'});results.interactions.reduced=await reduced.evaluate(()=>matchMedia('(prefers-reduced-motion: reduce)').matches);
 if(!results.interactions.reduced)failure('Reduced motion preference ignored');await reduced.close();
 const page=await browser.newPage();await page.goto(base);
 results.seo=await page.evaluate(()=>{let data=null,err=null;try{data=JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)}catch(e){err=e.message}return{title:document.title,description:document.querySelector('meta[name=description]')?.content,canonical:document.querySelector('link[rel=canonical]')?.href,ld:data?.['@type'],ldPerson:data?.mainEntity?.name,ldError:err}});
 if(results.seo.ldError)failure('JSON-LD invalid');if(results.seo.title.length>60)failure('Title too long');
 if(results.seo.description.length>160)failure('Description too long');
 const html=await page.content();
 if(/[\u2013\u2014]/.test(await page.locator('main').innerText()))failure('Travessao ainda visivel');
 for(const term of ['festa junina','déficit','faturamento bruto','R$ 15 mil','R$ 96 mil'])if(html.toLowerCase().includes(term.toLowerCase()))failure('Case remains: '+term);
 for(const term of ['Dio Mio','ETAPA Educacional','Brasilseg','doTerra Brasil','Grupo Virtus','LEGACY','Wendell Carvalho']) if(html.includes(term))failure('Forbidden employer/brand: '+term);
 await page.close();await browser.close();
 fs.writeFileSync('qa-rh/report.json',JSON.stringify(results,null,2));
 console.log(JSON.stringify(results,null,2));process.exitCode=results.issues.length?1:0;
})().catch(e=>{console.error(e);process.exitCode=2});