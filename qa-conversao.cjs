const fs=require('fs');
const {chromium}=require('playwright');
const BASE='http://127.0.0.1:4173/';
const report={tested:new Date().toISOString(),screens:[],issues:[],links:{},seo:{}};
const bad=x=>report.issues.push(x);
(async()=>{
  fs.mkdirSync('qa-ak',{recursive:true});
  const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
  for(const [width,height] of [[320,740],[360,780],[390,844],[430,932],[768,1024],[1024,768],[1440,900]]){
    const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    const res=await page.goto(BASE,{waitUntil:'networkidle',timeout:60000});
    await page.evaluate(()=>document.fonts.ready);
    await page.screenshot({path:'qa-ak/ak-'+width+'.png',fullPage:true,animations:'disabled'});
    await page.screenshot({path:'qa-ak/ak-hero-'+width+'.png',fullPage:false,animations:'disabled'});
    const m=await page.evaluate(()=>{
      const h=document.querySelector('h1').getBoundingClientRect();
      const c=document.querySelector('.hero-actions .action-accent').getBoundingClientRect();
      return {docW:document.documentElement.scrollWidth,viewportW:innerWidth,bodyLen:document.body.innerText.length,mainLen:document.querySelector('main')?.innerText.length,h1:document.querySelectorAll('h1').length,heroHeadline:{left:Math.round(h.left),right:Math.round(h.right),height:Math.round(h.height)},cta:{top:Math.round(c.top),bottom:Math.round(c.bottom),width:Math.round(c.width)},wa:document.querySelectorAll('a[href*="wa.me/"]').length,images:[...document.images].map(x=>x.getAttribute('src')),title:document.title};});
    const images=[];
    for(const src of m.images){const rr=await page.request.get(new URL(src,BASE).href);if(!rr.ok())images.push({src,status:rr.status()})}
    report.screens.push({width,height,status:res.status(),...m,brokenImages:images,jsErrors:errors});
    if(!res.ok())bad('Page HTTP '+res.status()+' at '+width);
    if(m.docW>width+1)bad('Horizontal overflow at '+width+': '+m.docW);
    if(m.h1!==1)bad('Incorrect h1 count at '+width+': '+m.h1);
    if(m.mainLen<3000)bad('Incomplete HTML at '+width);
    if(m.wa<5)bad('Insufficient WhatsApp touchpoints at '+width);
    if(images.length)bad('Broken image at '+width+': '+JSON.stringify(images));
    if(errors.length)bad('JS runtime error at '+width+': '+errors.join(';'));
    if(width===390){
       const nav=page.locator('#mobile-nav summary');await nav.click();
       report.links.mobileMenu=await page.locator('#mobile-nav').evaluate(x=>x.open);
       if(!report.links.mobileMenu)bad('Mobile menu does not open');
       await nav.click();
       await page.evaluate(()=>scrollTo(0,document.querySelector('.hero').getBoundingClientRect().height*.86));
       await page.waitForTimeout(450);
       const shown=await page.locator('#mobile-conversion').evaluate(x=>x.classList.contains('is-visible'));
       report.links.mobileStickyCTA=shown;if(!shown)bad('Sticky CTA not shown after hero');
    }
    await page.close();
  }
  const noJS=await browser.newPage({viewport:{width:390,height:844},javaScriptEnabled:false});
  await noJS.goto(BASE,{waitUntil:'load'});await noJS.screenshot({path:'qa-ak/ak-no-js.png',fullPage:true,animations:'disabled'});
  const nj=await noJS.evaluate(()=>({h1:document.querySelectorAll('h1').length,main:document.querySelector('main')?.textContent.length,sections:document.querySelectorAll('main section').length}));
  report.noJS=nj;if(nj.main<3000||nj.sections<6)bad('No-JS content incomplete');await noJS.close();
  const reduced=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
  await reduced.goto(BASE,{waitUntil:'load'});
  report.reduced=await reduced.locator('.ring-one').evaluate(x=>getComputedStyle(x).animationName);
  if(report.reduced!=='none')bad('Reduced motion ignored');
  await reduced.close();
  const page=await browser.newPage();await page.goto(BASE,{waitUntil:'domcontentloaded'});
  report.seo=await page.evaluate(()=>{
    let j=null,err=null;try{j=JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)}catch(e){err=e.message}
    return {title:document.title,description:document.querySelector('meta[name="description"]')?.content,canonical:document.querySelector('link[rel="canonical"]')?.href,ldType:j?.['@type'],ldName:j?.mainEntity?.name,ldError:err};
  });
  if(report.seo.ldError)bad('Invalid JSON-LD');
  if(report.seo.title.length>60)bad('SEO title too long');
  if(report.seo.description.length>160)bad('Meta description too long');
  const html=await page.content();for(const term of ['Dio Mio','ETAPA Educacional','Brasilseg','doTerra Brasil','Legacy','Grupo Virtus']){if(html.includes(term))bad('Employer/product brand in site: '+term)}
  report.links.whatsapp=await page.locator('a[href*="wa.me/"]').first().getAttribute('href');
  if(!report.links.whatsapp.includes('5511967385924'))bad('Incorrect WhatsApp phone');
  await page.close();await browser.close();
  fs.writeFileSync('qa-ak/summary.json',JSON.stringify(report,null,2));
  console.log(JSON.stringify(report,null,2));
  process.exitCode=report.issues.length?1:0;
})().catch(e=>{console.error(e);process.exitCode=2});