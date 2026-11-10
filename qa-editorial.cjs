const { chromium }=require('playwright');const fs=require('fs');
const url='http://127.0.0.1:4173/';const report={sizes:[],issues:[],noJS:{},pdf:{},jsonLD:{}};
const fail=m=>report.issues.push(m);
(async()=>{
fs.mkdirSync('qa-report',{recursive:true});const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
for(const width of [390,768,1024,1440]){
 const page=await browser.newPage({viewport:{width,height:850},deviceScaleFactor:1});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const res=await page.goto(url,{waitUntil:'domcontentloaded'});await page.screenshot({path:'qa-report/site-'+width+'.png',fullPage:true});
 const data=await page.evaluate(()=>({h1:document.querySelectorAll('h1').length,title:document.title,scrollWidth:document.documentElement.scrollWidth,width:innerWidth,text:document.querySelector('main')?.innerText.length||0,imagePaths:[...document.images].map(x=>x.getAttribute('src')),og:document.querySelector('meta[property="og:image"]')?.content,ld:document.querySelector('script[type="application/ld+json"]')?.textContent}));
 let missing=[];for(const src of data.imagePaths){if(!src)continue;const r=await page.request.get(new URL(src,url).href);if(!r.ok())missing.push(src+':'+r.status());}
 report.sizes.push({width,status:res.status(),h1:data.h1,scrollWidth:data.scrollWidth,text:data.text,missing,jsErrors:errors});
 if(res.status()!==200)fail('HTTP status '+res.status()+' at '+width);
 if(data.h1!==1)fail('Wrong H1 count at '+width);
 if(data.scrollWidth>width+1)fail('Horizontal overflow '+width);
 if(data.text<3300)fail('Too little main text '+width);
 if(missing.length)fail('Missing images at '+width+': '+missing.join(','));
 if(errors.length)fail('JS exception at '+width+': '+errors.join(','));
 try{const j=JSON.parse(data.ld);report.jsonLD.type=j['@type'];report.jsonLD.person=j.mainEntity?.name;if(!j.mainEntity?.name?.includes('Alisson'))fail('JSONLD missing Person');}catch(e){fail('Invalid JSON-LD: '+e.message)}
 await page.close();
}
const noJs=await browser.newPage({viewport:{width:390,height:850},javaScriptEnabled:false});
await noJs.goto(url,{waitUntil:'domcontentloaded'});await noJs.screenshot({path:'qa-report/no-js-mobile.png',fullPage:true});
report.noJS={textLength:(await noJs.locator('main').innerText()).length,hasCase:await noJs.locator('#case').count(),hasExperience:await noJs.locator('#experiencia').count(),h1:await noJs.locator('h1').count()};
if(report.noJS.textLength<3300||!report.noJS.hasCase||!report.noJS.hasExperience)fail('Without-JS content missing');
await noJs.close();
const rp=await browser.newPage();const pdf=await rp.request.get(url+'Alisson_Kennedy.pdf');report.pdf={status:pdf.status(),mime:pdf.headers()['content-type'],size:(await pdf.body()).length};if(pdf.status()!==200||report.pdf.size<1000)fail('PDF unavailable');await rp.close();
await browser.close();fs.writeFileSync('qa-report/browser.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));if(report.issues.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=2});