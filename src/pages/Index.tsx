import { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  ShieldCheck,
  Home,
  Building2,
  Receipt,
  ChevronDown,
} from "lucide-react";
import { HiveLogo } from "@/components/HiveLogo";
import alissonAsset from "@/assets/alisson.jpg.asset.json";

const WA =
  "https://wa.me/5511934698384?text=Oi,%20Alisson!%20Vi%20seu%20site%20e%20quero%20saber%20quanto%20posso%20economizar%20na%20minha%20conta%20de%20luz.";

const LICENSEE_NAME = "Alisson";

/* Unsplash, gratuito. Tratamento de cor unificado aplicado via overlays + filtros CSS. */
const IMG = {
  hero: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=70", // painéis solares + céu
  pme: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1400&q=70",   // mercadinho de bairro
  casa: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=70",     // comerciante à mesa fazendo contas (calculadora + boletos)
  ctaBg: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=70", // linha de transmissão entardecer
};

const WaButton = ({
  children = "Falar no WhatsApp",
  className = "",
  size = "md",
  pulse = false,
}: {
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
}) => (
  <a
    href={WA}
    target="_blank"
    rel="noopener noreferrer"
    className={`btn-wa ${size === "lg" ? "btn-wa-lg" : ""} ${
      size === "sm" ? "!px-4 !py-2.5 !text-sm" : ""
    } ${pulse ? "pulse-cta" : ""} ${className}`}
  >
    <MessageCircle size={size === "lg" ? 22 : 18} />
    {children}
  </a>
);

const Bolt = ({ className = "", size = 18 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
);

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const faqs = [
  { q: "Preciso fazer obra ou instalar algo na minha casa?", a: "Não. Você não instala nada, não faz nenhuma obra e não precisa colocar placa solar no telhado. Tudo é 100% digital." },
  { q: "Vou trocar de distribuidora?", a: "Não. Você continua com a mesma distribuidora de sempre (Enel, CPFL, Light, Cemig, Equatorial, etc.). Nada muda na sua rede." },
  { q: "Tem fidelidade ou multa?", a: "Não. Sem fidelidade e sem multa. Você pode cancelar quando quiser." },
  { q: "Por que recebo dois boletos?", a: "Um boleto vem da sua distribuidora (taxas de uso da rede e iluminação pública) e outro da Hive Energy (a energia que você consumiu, já com desconto). Somados, os dois ficam menores do que você paga hoje." },
  { q: "Quanto tempo até o desconto começar?", a: "Cerca de 90 dias após o cadastro, que é o tempo de ativação do sistema junto à distribuidora." },
  { q: "Posso cancelar quando quiser?", a: "Sim, a qualquer momento, sem multa." },
  { q: "Quais regiões são atendidas?", a: "Atendemos vários estados do Brasil. Me chame no WhatsApp para confirmar a disponibilidade na sua região." },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b" style={{ borderColor: "hsl(var(--border))" }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-6 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-display font-bold text-lg sm:text-2xl text-white group-hover:text-energy transition-colors">
                {f.q}
              </span>
              <span
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  isOpen ? "bg-energy text-[#160F1F] rotate-180" : "bg-white/5 text-white/70"
                }`}
              >
                <ChevronDown size={18} />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden text-white/70 leading-relaxed text-base sm:text-lg pr-12">{f.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* Treated image — uniform color tone (slight desaturation + violet tint) */
const TreatedImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className={`w-full h-full object-cover ${className}`}
    style={{ filter: "saturate(0.75) contrast(1.05) brightness(0.85)" }}
  />
);

export default function Index() {
  useReveal();
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-hive-darker text-white">
      {/* COMPLIANCE BAR */}
      <div className="w-full text-[14px] font-medium text-white border-b" style={{ background: "#1A0E2E", borderColor: "hsl(var(--border))" }}>
        <div className="container-x py-2.5 flex items-center justify-center gap-2 text-center">
          <Bolt size={14} className="text-energy flex-shrink-0" />
          <span className="flex items-center gap-2">
            ⚡ Página independente de <strong className="text-white">{LICENSEE_NAME}</strong>, Licenciado Hive Global autorizado.
          </span>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-xl border-b" style={{ background: "rgba(14,10,20,0.78)", borderColor: "hsl(var(--border))" }}>
        <div className="container-x flex h-16 sm:h-20 items-center justify-between">
          <a href="#top" className="flex flex-col" aria-label="hive Energy">
            <HiveLogo variant="dark" />
            <span className="text-[11px] sm:text-xs font-semibold text-white tracking-wide mt-0.5 leading-none">
              Licenciado Independente Autorizado
            </span>
          </a>
          <WaButton size="sm" className="!rounded-full">
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </WaButton>
        </div>
      </header>

      {/* HERO — full-bleed photo, editorial typography */}
      <section id="top" ref={heroRef} className="relative overflow-hidden min-h-[92vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <TreatedImage src={IMG.hero} alt="Parque solar com painéis fotovoltaicos sob céu aberto, símbolo de energia limpa por assinatura" className="scale-105" />
          {/* Violet/dark overlay for legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(14,10,20,0.92) 0%, rgba(22,15,31,0.82) 45%, rgba(127,96,253,0.35) 100%)",
            }}
          />
          <div className="absolute inset-0" style={{ background: "radial-gradient(60% 60% at 20% 30%, rgba(127,96,253,0.25), transparent 70%)" }} />
        </div>

        <div className="container-x relative z-10 pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-40 w-full">
          <div className="max-w-5xl">
            <div className="chip mb-8" style={{ background: "rgba(127,96,253,0.18)", color: "white", border: "1px solid rgba(127,96,253,0.45)", backdropFilter: "blur(10px)" }}>
              <Bolt size={12} className="text-energy" /> Energia por assinatura, Lei 14.300/2022
            </div>

            <h1 className="font-display text-[2.5rem] leading-[0.95] sm:text-[5rem] lg:text-[7.5rem] text-white">
              Pague <span className="text-hive">menos</span> na sua<br />
              conta de luz.<br />
              <span className="relative inline-block">
                <span className="text-white/85">Todo mês.</span>
                <Bolt size={48} className="text-energy absolute -top-2 -right-12 sm:-right-16 float-slow" />
              </span>
            </h1>

            <p className="mt-8 text-lg sm:text-2xl text-white/85 max-w-2xl font-light leading-snug">
              Energia mais barata, sem obra, sem trocar de distribuidora. Atendimento humano, do começo ao fim.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <WaButton size="lg" pulse>Quero economizar agora</WaButton>
              <a href="#como" className="btn-ghost-dark backdrop-blur-md" style={{ background: "rgba(255,255,255,0.05)" }}>
                Como funciona <ChevronDown size={16} />
              </a>
            </div>
            <p className="mt-5 text-sm text-white/75 max-w-xl">
              Não custa nada para começar. Você só passa a pagar menos na sua conta.
            </p>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-3xl">
              {["Sem obra", "Sem trocar de distribuidora", "Sem fidelidade", "100% digital"].map((t) => (
                <div key={t} className="flex items-start gap-2 text-sm text-white/90 font-medium">
                  <Bolt size={14} className="text-energy mt-1 flex-shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO — one idea, big air */}
      <section className="relative py-28 sm:py-40">
        <div className="container-tight reveal">
          <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-20 items-start">
            <div className="font-display font-black text-white/[0.06] leading-none select-none" style={{ fontSize: "clamp(8rem, 18vw, 16rem)" }}>
              01
            </div>
            <div className="lg:pt-8">
              <p className="font-mono-grotesk text-xs uppercase tracking-[0.3em] text-energy mb-6">O problema</p>
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white leading-[0.95]">
                Sua conta de luz<br />
                sobe quase todo ano.<br />
                <span className="text-white/40">E continua pesando no fim do mês.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA — editorial steps */}
      <section id="como" className="relative py-24 sm:py-32 border-t" style={{ borderColor: "hsl(var(--border))" }}>
        <div className="glow-purple" style={{ width: 500, height: 500, top: 100, left: -200, opacity: 0.45 }} />
        <div className="container-tight relative">
          <div className="reveal mb-20 grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-20 items-start">
            <div className="font-display font-black text-white/[0.06] leading-none select-none" style={{ fontSize: "clamp(8rem, 18vw, 16rem)" }}>
              02
            </div>
            <div className="lg:pt-8 max-w-3xl">
              <p className="font-mono-grotesk text-xs uppercase tracking-[0.3em] text-energy mb-4">Como funciona</p>
              <h2 className="font-display text-4xl sm:text-6xl text-white leading-[0.95]">
                Três passos.<br />
                <span className="text-gradient-hive">Zero obra.</span>
              </h2>
            </div>
          </div>

          <div className="space-y-px">
            {[
              { n: "01", t: "Você me chama no WhatsApp", d: "Eu te escuto, calculo sua economia real e cuido do cadastro com você. Leva poucos minutos." },
              { n: "02", t: "Recebe energia com desconto", d: "Energia de fontes limpas, tarifa mais barata que a da distribuidora. Sem investimento inicial." },
              { n: "03", t: "Continua na mesma distribuidora", d: "Sem obra, sem técnico, sem placa no telhado. A luz que chega na tomada é a mesma." },
            ].map((s) => (
              <div
                key={s.n}
                className="reveal group grid grid-cols-[auto_1fr] gap-6 sm:gap-12 py-10 border-t hover:border-energy/50 transition-colors"
                style={{ borderColor: "hsl(var(--border))" }}
              >
                <div className="font-display text-3xl sm:text-5xl font-black text-white/20 group-hover:text-energy transition-colors">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">{s.t}</h3>
                  <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-xl">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOIS BOLETOS — split image + text */}
      <section className="relative py-24 sm:py-32 border-t overflow-hidden" style={{ borderColor: "hsl(var(--border))", background: "#0A0710" }}>
        <div className="glow-yellow" style={{ width: 500, height: 500, top: 50, right: -150 }} />
        <div className="container-tight relative">
          <div className="reveal mb-16 grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-20 items-start">
            <div className="font-display font-black text-white/[0.06] leading-none select-none" style={{ fontSize: "clamp(8rem, 18vw, 16rem)" }}>
              03
            </div>
            <div className="lg:pt-8 max-w-3xl">
              <p className="font-mono-grotesk text-xs uppercase tracking-[0.3em] text-energy mb-4">Transparência</p>
              <h2 className="font-display text-4xl sm:text-6xl text-white leading-[0.95]">
                Dois boletos.<br />
                <span className="text-energy">Conta menor.</span>
              </h2>
              <p className="mt-6 text-lg text-white/70 max-w-2xl">Sem letra miúda. É assim que funciona, de verdade.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-stretch reveal">
            <div className="relative rounded-3xl overflow-hidden min-h-[320px] lg:min-h-0" style={{ border: "1px solid hsl(var(--border))" }}>
              <TreatedImage src={IMG.casa} alt="Pessoa em casa conferindo a conta de luz com tranquilidade" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(14,10,20,0.2) 0%, rgba(14,10,20,0.85) 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="font-mono-grotesk text-xs uppercase tracking-[0.3em] text-energy mb-2">No fim do mês</p>
                <p className="font-display text-2xl sm:text-3xl text-white leading-tight">
                  A soma dos dois fica menor do que a conta cheia que você paga hoje.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="card-glass">
                <div className="flex items-center justify-between mb-4">
                  <span className="chip" style={{ background: "hsl(var(--muted))", color: "white" }}>
                    <Receipt size={12} /> Boleto 1
                  </span>
                  <span className="font-mono-grotesk text-xs text-white/40">Distribuidora</span>
                </div>
                <h3 className="font-display text-2xl text-white mb-2">Sua distribuidora</h3>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  Continua chegando, só que bem menor. Cobre uso da rede, iluminação pública e impostos obrigatórios.
                </p>
              </div>

              <div className="card-glass-accent">
                <div className="flex items-center justify-between mb-4">
                  <span className="chip" style={{ background: "hsl(var(--accent))", color: "hsl(var(--hive-dark))" }}>
                    <Bolt size={12} /> Boleto 2
                  </span>
                  <span className="font-mono-grotesk text-xs text-energy">Hive Energy</span>
                </div>
                <h3 className="font-display text-2xl text-white mb-2">Hive Energy</h3>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  A energia que você consumiu, já com desconto. Sem adesão e sem fidelidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECONOMIA — quiet, centered */}
      <section className="relative py-28 sm:py-40 border-t overflow-hidden" style={{ borderColor: "hsl(var(--border))" }}>
        <div className="glow-purple" style={{ width: 700, height: 700, top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.4 }} />
        <div className="container-tight relative reveal">
          <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-20 items-start mb-10">
            <div className="font-display font-black text-white/[0.06] leading-none select-none" style={{ fontSize: "clamp(8rem, 18vw, 16rem)" }}>
              04
            </div>
            <div className="lg:pt-8">
              <p className="font-mono-grotesk text-xs uppercase tracking-[0.3em] text-energy mb-4">Sua economia</p>
              <h2 className="font-display text-4xl sm:text-6xl lg:text-[5.5rem] text-white leading-[0.95]">
                Até <span className="text-gradient-hive">25%</span> mais barato na parte de energia da sua conta.
              </h2>
              <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl font-light leading-relaxed">
                A economia varia conforme sua distribuidora, estado e perfil de consumo. O cálculo exato a gente faz juntos, de forma transparente, no WhatsApp.
              </p>
              <div className="mt-10">
                <WaButton size="lg" pulse>Calcular minha economia</WaButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É — image + cards */}
      <section className="relative py-24 sm:py-32 border-t overflow-hidden" style={{ borderColor: "hsl(var(--border))", background: "#0A0710" }}>
        <div className="container-tight">
          <div className="reveal mb-16 grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-20 items-start">
            <div className="font-display font-black text-white/[0.06] leading-none select-none" style={{ fontSize: "clamp(8rem, 18vw, 16rem)" }}>
              05
            </div>
            <div className="lg:pt-8">
              <p className="font-mono-grotesk text-xs uppercase tracking-[0.3em] text-energy mb-4">Para quem é</p>
              <h2 className="font-display text-4xl sm:text-6xl text-white leading-[0.95]">
                Sua casa.<br />
                <span className="text-white/40">Seu negócio.</span>
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-stretch reveal">
            <div className="relative rounded-3xl overflow-hidden min-h-[380px]" style={{ border: "1px solid hsl(var(--border))" }}>
              <TreatedImage src={IMG.pme} alt="Pequeno comércio brasileiro em funcionamento, atendido por energia por assinatura" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(127,96,253,0.25) 0%, rgba(14,10,20,0.5) 60%, rgba(14,10,20,0.9) 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <Bolt size={20} className="text-energy mb-3" />
                <p className="font-display text-2xl sm:text-3xl text-white leading-tight">
                  Pequenos comércios também pagam menos na conta de luz.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="card-glass group">
                <Home size={28} className="text-hive mb-4" />
                <h3 className="font-display text-2xl sm:text-3xl text-white mb-3">Residências</h3>
                <p className="text-white/65 mb-5 leading-relaxed">
                  Para casa ou apartamento. Quanto maior a sua conta de energia, mais você pode economizar.
                </p>
                <ul className="space-y-2 text-sm text-white/75">
                  {["Desconto todo mês na conta", "Sem mexer na fiação", "Cancele quando quiser"].map((i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Bolt size={12} className="text-energy" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-glass group">
                <Building2 size={28} className="text-energy mb-4" />
                <h3 className="font-display text-2xl sm:text-3xl text-white mb-3">Pequenas e médias empresas</h3>
                <p className="text-white/65 mb-5 leading-relaxed">
                  Comércios, escritórios, clínicas, indústrias leves. Reduza um custo fixo importante.
                </p>
                <ul className="space-y-2 text-sm text-white/75">
                  {["Mais margem no seu negócio", "Energia limpa, bom pro ESG", "Sem investimento inicial"].map((i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Bolt size={12} className="text-energy" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEGURO / LEI */}
      <section className="relative py-24 sm:py-32 border-t" style={{ borderColor: "hsl(var(--border))" }}>
        <div className="container-tight">
          <div className="reveal grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
            <div>
              <p className="font-mono-grotesk text-xs uppercase tracking-[0.3em] text-energy mb-4">06 — É legal</p>
              <h2 className="font-display text-4xl sm:text-6xl text-white leading-[0.9]">
                Não é golpe.<br />
                É <span className="text-gradient-hive">lei.</span>
              </h2>
            </div>
            <div>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Energia por assinatura é um modelo <strong className="text-white">regulamentado pela Lei 14.300/2022</strong>, marco da geração distribuída no Brasil. Legítimo, transparente, sem custo de adesão e sem fidelidade.
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { t: "Lei 14.300/2022", d: "Geração distribuída" },
                  { t: "Sem fidelidade", d: "Cancele quando quiser" },
                  { t: "Sem adesão", d: "Você não paga p/ entrar" },
                ].map((item) => (
                  <div key={item.t} className="rounded-2xl p-4 border" style={{ borderColor: "hsl(var(--border))" }}>
                    <ShieldCheck size={18} className="text-hive mb-2" />
                    <div className="font-display font-bold text-white text-sm">{item.t}</div>
                    <div className="text-xs text-white/55 mt-0.5">{item.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALISSON */}
      <section className="relative py-24 sm:py-32 border-t overflow-hidden" style={{ borderColor: "hsl(var(--border))", background: "#0A0710" }}>
        <div className="glow-purple" style={{ width: 500, height: 500, top: -100, left: -100, opacity: 0.45 }} />
        <div className="container-tight relative">
          <div className="grid gap-12 lg:grid-cols-[auto_1fr] items-center reveal">
            <div className="relative mx-auto lg:mx-0">
              <div className="rounded-[2rem] overflow-hidden w-[280px] sm:w-[360px] relative" style={{ border: "1px solid hsl(var(--border))" }}>
                <img
                  src={alissonAsset.url}
                  alt="Alisson, Licenciado Hive Energy, atendimento humano por WhatsApp"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  style={{ filter: "saturate(0.85) contrast(1.05)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0710] via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-2" style={{ background: "hsl(var(--accent))", color: "hsl(var(--hive-dark))" }}>
                <Bolt size={16} />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider">Atendimento</div>
                  <div className="text-base font-black leading-none">100% humano</div>
                </div>
              </div>
            </div>
            <div>
              <p className="font-mono-grotesk text-xs uppercase tracking-[0.3em] text-energy mb-4">07 — Quem te atende</p>
              <h2 className="font-display text-5xl sm:text-7xl text-white mb-6 leading-[0.9]">
                Oi, eu sou o<br />
                <span className="text-gradient-hive">Alisson.</span>
              </h2>
              <p className="text-lg text-white/75 leading-relaxed mb-4 max-w-xl">
                Sou Licenciado da Hive Energy. Aqui você não fala com robô, não fica em fila, não recebe mensagem automática.
              </p>
              <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-xl">
                Eu explico tudo com calma, faço o cálculo da sua economia e acompanho até o desconto chegar na sua conta.
              </p>
              <WaButton size="lg" pulse>Falar agora com o Alisson</WaButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 sm:py-32 border-t" style={{ borderColor: "hsl(var(--border))" }}>
        <div className="container-tight max-w-4xl">
          <div className="reveal mb-12 grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-20 items-start">
            <div className="font-display font-black text-white/[0.06] leading-none select-none" style={{ fontSize: "clamp(7rem, 16vw, 14rem)" }}>
              08
            </div>
            <div className="lg:pt-6">
              <p className="font-mono-grotesk text-xs uppercase tracking-[0.3em] text-energy mb-4">FAQ</p>
              <h2 className="font-display text-4xl sm:text-6xl text-white leading-[0.95]">
                Dúvidas?<br />
                <span className="text-white/40">Responde aqui.</span>
              </h2>
            </div>
          </div>
          <div className="reveal"><Faq /></div>
        </div>
      </section>

      {/* CTA FINAL — full-bleed photo */}
      <section className="relative py-32 sm:py-44 border-t overflow-hidden" style={{ borderColor: "hsl(var(--border))" }}>
        <div className="absolute inset-0 z-0">
          <TreatedImage src={IMG.ctaBg} alt="Linha de transmissão de energia ao entardecer, simbolizando energia limpa que chega na sua casa" className="scale-110" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(14,10,20,0.94) 0%, rgba(22,15,31,0.88) 50%, rgba(127,96,253,0.5) 100%)",
            }}
          />
        </div>

        <div className="container-tight relative z-10 text-center reveal">
          <Bolt size={48} className="text-energy mx-auto mb-8 float-slow" />
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white leading-[0.9]">
            Sua próxima conta<br />
            pode chegar <span className="text-gradient-hive">muito menor.</span>
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-white/80 max-w-xl mx-auto">
            Me chama no WhatsApp. Em minutos eu calculo o quanto você pode economizar.
          </p>
          <div className="mt-10 flex justify-center">
            <WaButton size="lg" pulse>Quero falar com o Alisson</WaButton>
          </div>
          <p className="mt-6 text-sm text-white/60">Sem custo, sem compromisso, sem enrolação.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t" style={{ borderColor: "hsl(var(--border))", background: "#0A0710" }}>
        <div className="container-x py-14">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] items-start">
            <div>
              <div className="flex flex-col">
                <HiveLogo variant="dark" />
                <span className="text-xs sm:text-sm font-semibold text-white tracking-wide mt-1 leading-none">
                  Licenciado Independente Autorizado
                </span>
              </div>
              <p className="mt-4 text-sm text-white/65 max-w-md leading-relaxed">
                Atendimento humano via WhatsApp com <strong className="text-white">{LICENSEE_NAME}</strong>, Licenciado Hive Global autorizado.
              </p>
            </div>
            <WaButton size="sm" className="!rounded-full">Falar no WhatsApp</WaButton>
          </div>

          <div className="mt-10 rounded-2xl p-5 border" style={{ borderColor: "hsl(var(--accent) / 0.4)", background: "hsl(var(--accent) / 0.06)" }}>
            <div className="flex items-start gap-3">
              <Bolt size={18} className="text-energy mt-0.5 flex-shrink-0" />
              <p className="text-[14px] sm:text-base text-white leading-relaxed">
                <strong>Aviso de conformidade:</strong> Esta página é operada de forma independente por <strong>{LICENSEE_NAME}</strong>, Licenciado autorizado pela Hive Global.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/50" style={{ borderColor: "hsl(var(--border))" }}>
            <p>
              Conteúdo informativo. Economia exata varia conforme distribuidora, estado e perfil de consumo. Modelo regulamentado pela Lei 14.300/2022.
            </p>
            <p>© {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold text-white shadow-2xl pulse-cta"
        style={{ background: "hsl(var(--whatsapp))" }}
      >
        <MessageCircle size={22} />
        <span className="hidden sm:inline">Fale no WhatsApp</span>
      </a>
    </div>
  );
}
