const fs=require('node:fs');
const {chromium}=require('playwright');
const path=require('node:path');
const base='http://127.0.0.1:4173/';
const results={tested_at:new Date().toISOString(),sizes:[],issues:[],other:{}};
const assert=(cond,msg)=>{if(!cond)results.issues.push(msg)};
(async()=>{
 await fs.promises.mkdir('qa-results',{recursive:true});
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 for (const width of [390,768,1024,1440]) {
   const page=await browser.newPage({viewport:{width,height:850},deviceScaleFactor:1});
   const errors=[];page.on('pageerror',e=>errors.push(String(e.message)));
   const response=await page.goto(base,{waitUntil:'networkidle',timeout:60000});
   await page.screenshot({path:'qa-results/screen-'+width+'.png',fullPage:true});
   const metrics=await page.evaluate(()=>{
     const h1=document.querySelectorAll('h1').length;
     const missingImages=[...document.images].filter(x=>!x.complete||x.naturalWidth===0).map(x=>x.src);
     return {h1,title:document.title,docWidth:document.documentElement.scrollWidth,innerWidth:innerWidth,links:[...document.querySelectorAll('a[href]')].length,images:document.images.length,missingImages,bodyText:document.body.innerText.length};
   });
   results.sizes.push({width,status:response.status(),...metrics,pageErrors:errors});
   assert(response.ok(),'HTTP failure at '+width);
   assert(metrics.h1===1,'H1 count '+metrics.h1+' at '+width);
   assert(metrics.docWidth<=metrics.innerWidth+1,'Horizontal overflow at '+width+' ('+metrics.docWidth+')');
   assert(metrics.bodyText>2200,'Incomplete text body at '+width);
   assert(metrics.missingImages.length===0,'Broken image at '+width+': '+metrics.missingImages);
   assert(errors.length===0,'Page JS error at '+width+': '+errors);
   await page.close();
 }
 const noJS=await browser.newPage({viewport:{width:390,height:850},javaScriptEnabled:false});
 await noJS.goto(base,{waitUntil:'load'});await noJS.screenshot({path:'qa-results/no-js-mobile.png',fullPage:true});
 const noText=await noJS.locator('body').innerText();results.other.noJSLength=noText.length;
 assert(noText.length>2200,'JS disabled: text missing');
 assert(noText.includes('Alisson')&&noText.includes('Trajetória'),'JS disabled: key sections missing');
 await noJS.close();
 const reduced=await browser.newPage({viewport:{width:390,height:850},reducedMotion:'reduce'});
 await reduced.goto(base,{waitUntil:'networkidle'});await reduced.screenshot({path:'qa-results/reduced-motion-mobile.png',fullPage:true});results.other.reduced=await reduced.evaluate(()=>matchMedia('(prefers-reduced-motion: reduce)').matches);await reduced.close();
 const pdf=await browser.newPage();let pdfresponse=await pdf.request.get(base+'Alisson_Kennedy.pdf');results.other.pdf={status:pdfresponse.status(),contentType:pdfresponse.headers()['content-type'],length:(await pdfresponse.body()).length};assert(pdfresponse.ok(),'PDF returned HTTP error');assert((await pdfresponse.body()).length>1000,'PDF seems empty');await pdf.close();
 await browser.close();
 fs.writeFileSync('qa-results/report.json',JSON.stringify(results,null,2));
 console.log(JSON.stringify(results,null,2));
 process.exitCode=results.issues.length?1:0;
})().catch(e=>{console.error(e);process.exitCode=2});
