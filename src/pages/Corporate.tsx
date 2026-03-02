import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";
import heroImg from "@/assets/corporate-hero.jpg";
import digitalImg from "@/assets/corporate-digital.jpg";
import brandImg from "@/assets/corporate-brand.jpg";
import eventsImg from "@/assets/corporate-events.jpg";

const WHATSAPP_URL =
  "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20corporativo.";

export default function Corporate() {
  const scrollRef = useScrollReveal();

  useEffect(() => {
    document.title = "Corporate Solutions SP | Alisson Kennedy Private Office";
    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.content = content;
    };
    setMeta("description", "Engenharia digital, automação e posicionamento de marca para empresas em São Paulo. Eleve a operação corporativa ao próximo nível. Solicite um diagnóstico.");
    setMeta("keywords", "corporate solutions São Paulo, engenharia digital, automação empresarial, comunicação visual corporativa, eventos corporativos, transfers executivos, posicionamento de marca");
    setMeta("og:title", "Corporate Solutions SP | Alisson Kennedy", true);
    setMeta("og:description", "Engenharia digital, automação e posicionamento de marca para empresas em São Paulo. Solicite um diagnóstico.", true);
    setMeta("og:url", "https://alissonkennedy.com.br/corporate", true);
    setMeta("og:image", "https://alissonkennedy.com.br/og-image.jpg", true);
    setMeta("twitter:title", "Corporate Solutions SP | Alisson Kennedy");
    setMeta("twitter:description", "Engenharia digital, automação e posicionamento de marca para empresas em São Paulo. Solicite um diagnóstico.");
    setMeta("twitter:image", "https://alissonkennedy.com.br/og-image.jpg");
    
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://alissonkennedy.com.br/corporate";
  }, []);

  return (
    <div ref={scrollRef} className="min-h-screen" style={{ fontFamily: "'Inter', 'Helvetica Neue', system-ui, sans-serif" }}>
      {/* Minimal Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-16 md:h-20"
        style={{ backgroundColor: "#000000", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <a href="/" className="text-sm tracking-[0.2em] uppercase" style={{ color: "#FFFFFF", letterSpacing: "0.2em" }}>
          Alisson Kennedy
        </a>
        <span className="text-xs tracking-[0.3em] uppercase hidden md:block" style={{ color: "rgba(255,255,255,0.4)" }}>
          Corporate Division
        </span>
      </header>

      {/* Section 1 — Hero with background image */}
      <section className="relative min-h-screen flex items-end pt-20" style={{ backgroundColor: "#000000" }}>
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Corporate architecture"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #000000 15%, transparent 60%)" }} />
        </div>
        <div className="relative w-full max-w-[900px] mx-auto px-6 md:px-16 py-20 md:py-32">
          <div
            className="scroll-reveal mb-12"
            style={{ width: "48px", height: "1px", backgroundColor: "#FFFFFF" }}
          />
          <h1
            className="scroll-reveal reveal-delay-1 text-[1.75rem] md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] tracking-tight"
            style={{ color: "#FFFFFF" }}
          >
            Soluções Corporativas de Alto
            <br />
            Padrão para Empresas que Não
            <br />
            Aceitam Mediocridade.
          </h1>
          <p
            className="scroll-reveal reveal-delay-2 mt-8 md:mt-10 text-sm md:text-lg leading-[1.9] max-w-[680px]"
            style={{ color: "rgba(255,255,255,0.6)", fontWeight: 400 }}
          >
            Presença digital, identidade visual, logística executiva e automação
            de processos — estruturados para empresas em São Paulo que exigem
            previsibilidade, rigor e resultado.
          </p>
        </div>
      </section>

      {/* Section 2 — Engenharia Digital */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-16 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div
                className="scroll-reveal mb-10"
                style={{ width: "32px", height: "1px", backgroundColor: "#000000" }}
              />
              <h2
                className="scroll-reveal reveal-delay-1 text-xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight"
                style={{ color: "#000000" }}
              >
                Automação de Processos e
                <br />
                Desenvolvimento de Plataformas Corporativas
              </h2>
              <p
                className="scroll-reveal reveal-delay-2 mt-8 md:mt-10 text-sm md:text-base leading-[1.9]"
                style={{ color: "rgba(0,0,0,0.6)", fontWeight: 400 }}
              >
                A lentidão operacional custa capital. Desenvolvemos plataformas de
                gestão sob medida, sites otimizados para ranqueamento no Google e
                integramos Inteligência Artificial para dar velocidade à operação.
                Para empresas em São Paulo que querem tecnologia funcionando nos
                bastidores — enquanto a linha de frente executa com precisão.
              </p>
            </div>
            <div className="scroll-reveal-scale reveal-delay-2">
              <img
                src={digitalImg}
                alt="Digital engineering workspace"
                className="w-full h-auto"
                style={{ filter: "grayscale(100%) contrast(1.1)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Posicionamento */}
      <section style={{ backgroundColor: "#000000" }}>
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-16 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="scroll-reveal-scale reveal-delay-1 order-2 md:order-1">
              <img
                src={brandImg}
                alt="Brand identity materials"
                className="w-full h-auto"
                style={{ filter: "grayscale(100%) contrast(1.1)" }}
              />
            </div>
            <div className="order-1 md:order-2">
              <div
                className="scroll-reveal mb-10"
                style={{ width: "32px", height: "1px", backgroundColor: "#FFFFFF" }}
              />
              <h2
                className="scroll-reveal reveal-delay-1 text-xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight"
                style={{ color: "#FFFFFF" }}
              >
                Arquitetura de Marca e
                <br />
                Comunicação Visual Corporativa
              </h2>
              <p
                className="scroll-reveal reveal-delay-2 mt-8 md:mt-10 text-sm md:text-base leading-[1.9]"
                style={{ color: "rgba(255,255,255,0.6)", fontWeight: 400 }}
              >
                Desenvolvemos a identidade visual, materiais institucionais e
                estratégia de conteúdo para empresas que precisam transmitir
                autoridade antes mesmo de abrir a boca. Branding high-end e
                posicionamento de marca em São Paulo — para quem compete no topo
                da cadeia do seu setor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Logística e Eventos */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-16 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div
                className="scroll-reveal mb-10"
                style={{ width: "32px", height: "1px", backgroundColor: "#000000" }}
              />
              <h2
                className="scroll-reveal reveal-delay-1 text-xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight"
                style={{ color: "#000000" }}
              >
                Gestão de Eventos Corporativos
                <br />
                e Transfers Executivos
              </h2>
              <p
                className="scroll-reveal reveal-delay-2 mt-8 md:mt-10 text-sm md:text-base leading-[1.9]"
                style={{ color: "rgba(0,0,0,0.6)", fontWeight: 400 }}
              >
                Curadoria completa de fornecedores, orçamentos e logística para
                eventos corporativos em São Paulo. Gerenciamos transfers executivos
                blindados para diretoria, roadshows e stakeholders — com
                pontualidade e discrição garantidas. Você descreve o cenário. Nós
                entregamos resolvido.
              </p>
            </div>
            <div className="scroll-reveal-scale reveal-delay-2">
              <img
                src={eventsImg}
                alt="Executive transport"
                className="w-full h-auto"
                style={{ filter: "grayscale(100%) contrast(1.1)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — CTA Footer */}
      <section style={{ backgroundColor: "#000000" }}>
        <div className="w-full max-w-[900px] mx-auto px-6 md:px-16 py-20 md:py-32 text-center">
          <div
            className="scroll-reveal mb-12 mx-auto"
            style={{ width: "48px", height: "1px", backgroundColor: "rgba(255,255,255,0.2)" }}
          />
          <h3
            className="scroll-reveal reveal-delay-1 text-lg md:text-2xl lg:text-3xl font-bold tracking-tight"
            style={{ color: "#FFFFFF" }}
          >
            A governança corporativa exige
            <br />
            bastidores controlados.
          </h3>
          <div className="scroll-reveal reveal-delay-2 mt-12 md:mt-14">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs md:text-sm font-semibold tracking-[0.1em] uppercase px-8 md:px-10 py-4 transition-opacity duration-300 hover:opacity-80"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#000000",
                borderRadius: "2px",
              }}
            >
              SOLICITAR DIAGNÓSTICO GRATUITO
            </a>
          </div>
          <p
            className="mt-16 text-xs tracking-[0.2em] uppercase"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            © {new Date().getFullYear()} Alisson Kennedy Private Office
          </p>
        </div>
      </section>
    </div>
  );
}
