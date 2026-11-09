import * as THREE from "three";

// 1.000 pontos = mais de 1.000 eventos. Começam dispersos e "entram em foco" na esfera.
export function startSphere(canvas: HTMLCanvasElement, o: { reduce: boolean; low: boolean }) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !o.low, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, o.low ? 1 : 1.5));
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(40, 1, 0.1, 50); cam.position.z = 6.2;
  const group = new THREE.Group(); scene.add(group);

  const N = o.low ? 500 : 1000;
  const sph = new Float32Array(N * 3), scat = new Float32Array(N * 3), seed = new Float32Array(N);
  const g = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), t = g * i;
    sph.set([Math.cos(t) * r * 1.6, y * 1.6, Math.sin(t) * r * 1.6], i * 3);
    const d = 2.5 + Math.random() * 3.5, a = Math.random() * 6.283, b = Math.acos(2 * Math.random() - 1);
    scat.set([d * Math.sin(b) * Math.cos(a), d * Math.cos(b), d * Math.sin(b) * Math.sin(a)], i * 3);
    seed[i] = Math.random();
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(sph, 3));
  geo.setAttribute("scatter", new THREE.BufferAttribute(scat, 3));
  geo.setAttribute("seed", new THREE.BufferAttribute(seed, 1));
  const uni = { uT: { value: 0 }, uF: { value: o.reduce ? 1 : 0 }, uPx: { value: renderer.getPixelRatio() } };
  const pts = new THREE.Points(geo, new THREE.ShaderMaterial({
    uniforms: uni, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `attribute vec3 scatter;attribute float seed;uniform float uT,uF,uPx;varying float vA,vL;
      void main(){float f=smoothstep(0.,1.,clamp(uF*1.4-seed*.4,0.,1.));vec3 p=mix(scatter,position,f);
      vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
      vA=.35+.65*(.5+.5*sin(uT*1.6+seed*40.));vL=step(.93,seed);
      gl_PointSize=(1.6+vL*2.4)*uPx*(6./-mv.z);}`,
    fragmentShader: `varying float vA,vL;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;
      vec3 c=mix(vec3(.93,.94,.92),vec3(.78,.96,.23),vL);gl_FragColor=vec4(c,vA*(1.-d*2.));}`,
  }));
  group.add(pts);

  // vidro: fresnel
  group.add(new THREE.Mesh(new THREE.SphereGeometry(1.5, 48, 48), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `varying vec3 n,v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}`,
    fragmentShader: `varying vec3 n,v;void main(){float f=pow(1.-max(dot(n,v),0.),3.);gl_FragColor=vec4(vec3(.78,.96,.23)*f*.5+vec3(.9)*f*.15,f*.6);}`,
  })));

  // órbitas
  const rings: THREE.LineLoop[] = [];
  [[2.3, 0.35, 0.2], [2.0, -0.5, 1.1], [2.6, 0.12, 2.2]].forEach(([r, tx, tz]) => {
    const c = new THREE.EllipseCurve(0, 0, r, r, 0, Math.PI * 2).getPoints(128);
    const l = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(c), new THREE.LineBasicMaterial({ color: 0xedefea, transparent: true, opacity: 0.14 }));
    l.rotation.set(Math.PI / 2 + tx, 0, tz); group.add(l); rings.push(l);
  });

  let w = 0, h = 0;
  const resize = () => { const r = canvas.getBoundingClientRect(); if (r.width === w && r.height === h) return; w = r.width; h = r.height; renderer.setSize(w, h, false); cam.aspect = w / h || 1; cam.updateProjectionMatrix(); };
  new ResizeObserver(resize).observe(canvas); resize();

  let mx = 0, my = 0, scroll = 0;
  if (!o.reduce) addEventListener("pointermove", (e) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; }, { passive: true });

  let visible = true, raf = 0; const t0 = performance.now();
  const frame = () => {
    raf = 0; resize();
    const t = (performance.now() - t0) / 1000;
    uni.uT.value = t; uni.uF.value = o.reduce ? 1 : Math.min(1, t / 2.2);
    group.rotation.y = t * 0.08 + mx * 0.4 + scroll * 1.2;
    group.rotation.x = my * 0.25 + scroll * 0.3;
    rings.forEach((r, i) => { r.rotation.z += 0.0008 * (i + 1); r.scale.setScalar(1 + scroll * 0.25 * (i + 1)); });
    group.scale.setScalar(1 - scroll * 0.15);
    renderer.render(scene, cam);
    if (!o.reduce && visible && !document.hidden) raf = requestAnimationFrame(frame);
  };
  const kick = () => { if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame); };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick(); }).observe(canvas);
  document.addEventListener("visibilitychange", kick);
  frame();
  return { setScroll(p: number) { scroll = p; if (o.reduce) kick(); } };
}
