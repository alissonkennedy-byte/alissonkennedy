type W = Window & { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };
const w = window as unknown as W;
const root = document.documentElement;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
root.classList.add("js");
if (!reduce) root.classList.add("motion");
w.dataLayer = w.dataLayer || [];
const push = (o: Record<string, unknown>) => w.dataLayer.push(o);

// Eventos GA4 via dataLayer (sem PII: só nome do evento e posição do link)
document.addEventListener("click", (e) => {
  const a = (e.target as Element).closest<HTMLElement>("[data-track]");
  if (a) push({ event: a.dataset.track, link_location: a.dataset.loc });
});

// Scroll depth 25/50/75/100 + barra de progresso
const marks = [25, 50, 75, 100];
const sent = new Set<number>();
const bar = document.querySelector<HTMLElement>(".progress span");
let ticking = false;
const listeners: ((y: number) => void)[] = [];
function onScroll() {
  ticking = false;
  const max = root.scrollHeight - innerHeight;
  const p = max <= 0 ? 100 : (scrollY / max) * 100;
  if (bar) bar.style.transform = `scaleX(${p / 100})`;
  for (const m of marks) if (p >= m - 0.5 && !sent.has(m)) { sent.add(m); push({ event: "scroll_depth", percent: m }); }
  listeners.forEach((f) => f(scrollY));
}
addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();

// Consentimento (barra discreta, não modal)
const consent = document.getElementById("consent");
let saved: string | null = null;
try { saved = localStorage.getItem("ak_consent"); } catch { /* */ }
if (consent && !saved) consent.hidden = false;
consent?.addEventListener("click", (e) => {
  const v = (e.target as HTMLElement).dataset.consent;
  if (!v) return;
  try { localStorage.setItem("ak_consent", v); } catch { /* */ }
  w.gtag?.("consent", "update", { analytics_storage: v });
  consent.hidden = true;
});

// Reveal + contadores decorativos (valor final já está no HTML)
const fmt = new Intl.NumberFormat("pt-BR");
function count(el: HTMLElement) {
  const end = Number(el.dataset.count); const t0 = performance.now();
  const step = (t: number) => {
    const k = Math.min(1, (t - t0) / 1400); const v = Math.round(end * (1 - Math.pow(1 - k, 3)));
    el.textContent = el.dataset.format ? fmt.format(v) : String(v);
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
if (!reduce && "IntersectionObserver" in window) {
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    e.target.querySelectorAll<HTMLElement>("[data-count]").forEach(count);
    io.unobserve(e.target);
  }), { rootMargin: "0px 0px -10% 0px" });
  document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
}

// Tilt só com mouse e movimento permitido
if (!reduce && matchMedia("(hover:hover) and (pointer:fine)").matches) {
  document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 8}deg`);
      el.style.setProperty("--rx", `${-((e.clientY - r.top) / r.height - 0.5) * 8}deg`);
    });
    el.addEventListener("pointerleave", () => { el.style.removeProperty("--rx"); el.style.removeProperty("--ry"); });
  });
}

// 3D adiado: depois do load + idle, só com WebGL e sem economia de dados
function hasWebGL() { try { const c = document.createElement("canvas"); return !!(c.getContext("webgl2") || c.getContext("webgl")); } catch { return false; } }
const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
function boot() {
  const canvas = document.getElementById("sphere") as HTMLCanvasElement | null;
  if (!canvas || !hasWebGL() || conn?.saveData) return;
  import("./sphere").then((m) => {
    const api = m.startSphere(canvas, { reduce, low: (navigator.hardwareConcurrency || 4) <= 4 || innerWidth < 760 });
    root.classList.add("webgl");
    listeners.push((y) => api.setScroll(Math.min(1, y / innerHeight)));
  }).catch(() => { /* fallback CSS permanece */ });
}
const idle = (cb: () => void) => ("requestIdleCallback" in window ? (window as any).requestIdleCallback(cb, { timeout: 2500 }) : setTimeout(cb, 1200));
if (document.readyState === "complete") idle(boot); else addEventListener("load", () => idle(boot), { once: true });
