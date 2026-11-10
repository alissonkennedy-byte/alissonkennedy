/* AK / CLAREZA EM MOVIMENTO
   Progressive enhancement: critical content is in HTML; no external dependencies.
   Motion uses compositor transforms; 3D is CSS, not a blocking WebGL bundle. */
(() => {
  "use strict";
  const doc=document, root=doc.documentElement;
  const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine=matchMedia("(hover: hover) and (pointer: fine)").matches;
  const header=doc.getElementById("site-header");
  const hero=doc.getElementById("inicio");
  const mobileBar=doc.getElementById("mobile-conversion");
  const mobileMenu=doc.getElementById("mobile-nav");
  const progress=doc.getElementById("read-progress-bar");
  const orbit=doc.getElementById("hero-orbit");
  let tick=false;
  const points=[25,50,75,100], seen=new Set();
  const layer=window.dataLayer=window.dataLayer||[];
  let allowed=false,gtmInserted=false;

  function push(event, extra) {
    if(!allowed)return;
    layer.push(Object.assign({event},extra||{}));
  }
  // Consent mode v2: denied by default, load the container only after opt-in.
  function gtag(){layer.push(arguments)}
  gtag("consent","default",{ad_storage:"denied",analytics_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"});
  function loadGTM() {
    if(gtmInserted)return;
    gtmInserted=true;
    layer.push({"gtm.start":Date.now(),event:"gtm.js"});
    const s=doc.createElement("script");
    s.async=true;s.src="https://www.googletagmanager.com/gtm.js?id=GTM-MBM785PR";
    s.dataset.akGtm="true";doc.head.appendChild(s);
  }
  function setConsent(state){
    allowed=state==="granted";
    try{localStorage.setItem("ak_consent",state)}catch(_){}
    gtag("consent","update",{analytics_storage:allowed?"granted":"denied"});
    if(allowed)loadGTM();
    const btn=doc.getElementById("metrics-opt-in");
    if(btn)btn.textContent=allowed?"DESATIVAR MÉTRICAS OPCIONAIS":"ATIVAR MÉTRICAS OPCIONAIS";
  }
  try{allowed=localStorage.getItem("ak_consent")==="granted"}catch(_){}
  if(allowed){gtag("consent","update",{analytics_storage:"granted"});loadGTM()}
  const metrics=doc.getElementById("metrics-opt-in");
  if(metrics)metrics.textContent=allowed?"DESATIVAR MÉTRICAS OPCIONAIS":"ATIVAR MÉTRICAS OPCIONAIS";
  metrics?.addEventListener("click",()=>setConsent(allowed?"denied":"granted"));

  function update() {
    tick=false;
    const y=window.scrollY||0;
    const max=Math.max(1,root.scrollHeight-innerHeight);
    const percent=Math.min(100,Math.max(0,Math.round(y/max*100)));
    progress && (progress.style.transform="scaleX("+(percent/100)+")");
    header?.classList.toggle("is-scrolled",y>28);
    for(const m of points){
      if(percent>=m && !seen.has(m)){seen.add(m);push("scroll_depth",{percent:m})}
    }
    if(!reduced && orbit && y<innerHeight*1.2){
      orbit.style.setProperty("--orbit-shift-y",Math.round(y*.11)+"px");
    }
    if(mobileBar){
      mobileBar.classList.toggle("is-visible",y>Math.max(400,hero?.offsetHeight*.68||500));
    }
  }
  function queueUpdate(){if(!tick){tick=true;requestAnimationFrame(update)}}
  addEventListener("scroll",queueUpdate,{passive:true});
  addEventListener("resize",queueUpdate,{passive:true});
  update();

  // Clicking a CTA is always direct; tracking is an optional side effect.
  doc.addEventListener("click",event=>{
    const a=event.target.closest?.("[data-track]");
    if(a)push(a.dataset.track,{link_location:a.dataset.place||"site"});
    const navLink=event.target.closest?.(".mobile-nav nav a");
    if(navLink && mobileMenu)mobileMenu.removeAttribute("open");
    if(mobileMenu?.open && !event.target.closest?.("#mobile-nav"))mobileMenu.removeAttribute("open");
  });
  doc.addEventListener("keydown",event=>{
    if(event.key==="Escape" && mobileMenu?.open){mobileMenu.open=false;mobileMenu.querySelector("summary")?.focus()}
  });

  // Entradas decorativas são inicializadas apenas quando necessárias.
  // No mobile, a primeira rolagem/toque ativa o sistema e as órbitas CSS 3D.
  let revealsReady=false;
  function setupReveals(){
    if(revealsReady||reduced||!("IntersectionObserver" in window))return;
    revealsReady=true;root.classList.add("motion-enabled");
    const targets=doc.querySelectorAll(".manifesto-copy,.practice-heading,.practice-card,.case-lead,.case-board,.case-steps article,.journey-top,.journey-list li,.about-content,.closing-wrap>h2");
    targets.forEach(x=>x.classList.add("motion-target"));
    const io=new IntersectionObserver(entries=>{
      for(const e of entries){if(e.isIntersecting){e.target.classList.add("is-revealed");io.unobserve(e.target)}}
    },{threshold:.08,rootMargin:"0px 0px -6% 0px"});
    targets.forEach(x=>io.observe(x));
    const caseBoard=doc.querySelector(".case-graph");
    if(caseBoard){
      const chartIO=new IntersectionObserver(entries=>{
        if(entries[0]?.isIntersecting){caseBoard.classList.add("graph-active");chartIO.disconnect()}
      },{threshold:.35});
      chartIO.observe(caseBoard);
    }
  }
  if(matchMedia("(max-width:800px)").matches && !reduced){
    const engage=()=>{root.classList.add("site-interacted");setupReveals()};
    addEventListener("scroll",engage,{once:true,passive:true});
    addEventListener("pointerdown",engage,{once:true,passive:true});
  }else{
    setupReveals();
  }

  // Depth follows pointer only on devices with an actual mouse. Touch works without hover.
  if(!reduced && fine){
    hero?.addEventListener("pointermove",e=>{
      const r=hero.getBoundingClientRect();
      const dx=(e.clientX-r.left)/Math.max(1,r.width)-.5;
      const dy=(e.clientY-r.top)/Math.max(1,r.height)-.5;
      if(orbit){orbit.style.setProperty("--orbit-shift-x",Math.round(dx*24)+"px");orbit.style.setProperty("--orbit-shift-y",Math.round(dy*20+window.scrollY*.11)+"px")}
    },{passive:true});
    doc.querySelectorAll(".perspective-card").forEach(card=>{
      card.addEventListener("pointermove",e=>{
        const r=card.getBoundingClientRect();
        const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        card.style.setProperty("--ry",(x*5).toFixed(1)+"deg");
        card.style.setProperty("--rx",(-y*5).toFixed(1)+"deg");
      },{passive:true});
      card.addEventListener("pointerleave",()=>{
        card.style.removeProperty("--ry");card.style.removeProperty("--rx");
      });
    });
  }
})();