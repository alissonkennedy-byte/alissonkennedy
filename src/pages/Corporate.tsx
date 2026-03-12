import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import heroImg from "@/assets/hero-corporate.jpeg";
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
    <div ref={scrollRef} className="relative min-h-screen">
      {/* Faria Lima background fixed behind entire page */}
      <div className="fixed inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <Header />

      {/* Hero — fullscreen, transparent to show background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <h1 className="animate-fade-up font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground uppercase">
            Soluções Empresariais
            <br />
            e Corporativas
          </h1>
          <div className="animate-fade-up-delay-1 mt-6 mx-auto w-20 h-px bg-primary" />
          <p className="animate-fade-up-delay-2 mt-8 text-muted-foreground text-base md:text-lg max-w-[680px] mx-auto leading-relaxed tracking-wide">
            Presença digital, identidade visual, logística executiva e automação
            de processos — estruturados para empresas em São Paulo que exigem
            previsibilidade, rigor e resultado.
          </p>
        </div>
      </section>

      {/* Section — Engenharia Digital */}
      <section className="section-spacing" style={{ backgroundColor: "hsl(0 0% 14%)" }}>
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div className="scroll-reveal w-8 h-px bg-primary mb-8" />
              <h2 className="scroll-reveal reveal-delay-1 font-display text-xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-tight">
                Automação de Processos e
                <br />
                Desenvolvimento de Plataformas Corporativas
              </h2>
              <p className="scroll-reveal reveal-delay-2 mt-8 text-muted-foreground text-sm md:text-base leading-[1.9] tracking-wide">
                A lentidão operacional custa capital. Desenvolvo plataformas de
                gestão sob medida, sites otimizados para ranqueamento no Google e
                integro Inteligência Artificial para dar velocidade à operação.
                Para empresas em São Paulo que querem tecnologia funcionando nos
                bastidores — enquanto a linha de frente executa com precisão.
              </p>
            </div>
            <div className="scroll-reveal-scale reveal-delay-2">
              <img
                src={digitalImg}
                alt="Digital engineering workspace"
                className="w-full h-auto rounded-lg grayscale contrast-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section — Posicionamento */}
      <section className="section-spacing" style={{ backgroundColor: "hsl(0 0% 10%)" }}>
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="scroll-reveal-scale reveal-delay-1 order-2 md:order-1">
              <img
                src={brandImg}
                alt="Brand identity materials"
                className="w-full h-auto rounded-lg grayscale contrast-110"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="scroll-reveal w-8 h-px bg-primary mb-8" />
              <h2 className="scroll-reveal reveal-delay-1 font-display text-xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-tight">
                Arquitetura de Marca e
                <br />
                Comunicação Visual Corporativa
              </h2>
              <p className="scroll-reveal reveal-delay-2 mt-8 text-muted-foreground text-sm md:text-base leading-[1.9] tracking-wide">
                Desenvolvo a identidade visual, materiais institucionais e
                estratégia de conteúdo para empresas que precisam transmitir
                autoridade antes mesmo de abrir a boca. Branding high-end e
                posicionamento de marca em São Paulo — para quem compete no topo
                da cadeia do seu setor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section — Logística e Eventos */}
      <section className="section-spacing" style={{ backgroundColor: "hsl(0 0% 14%)" }}>
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div className="scroll-reveal w-8 h-px bg-primary mb-8" />
              <h2 className="scroll-reveal reveal-delay-1 font-display text-xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-tight">
                Gestão de Eventos Corporativos
                <br />
                e Transfers Executivos
              </h2>
              <p className="scroll-reveal reveal-delay-2 mt-8 text-muted-foreground text-sm md:text-base leading-[1.9] tracking-wide">
                Curadoria completa de fornecedores, orçamentos e logística para
                eventos corporativos em São Paulo. Gerencio transfers executivos
                blindados para diretoria, roadshows e stakeholders — com
                pontualidade e discrição garantidas. Você descreve o cenário. Eu
                entrego resolvido.
              </p>
            </div>
            <div className="scroll-reveal-scale reveal-delay-2">
              <img
                src={eventsImg}
                alt="Executive transport"
                className="w-full h-auto rounded-lg grayscale contrast-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final — Gold */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "hsl(43 78% 46%)" }}>
        <div className="container-premium text-center">
          <h3 className="scroll-reveal font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: "hsl(0 0% 5%)" }}>
            A governança corporativa exige
            <br />
            bastidores controlados.
          </h3>
          <div className="scroll-reveal reveal-delay-1 mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark text-base px-12 py-5"
            >
              Solicitar Diagnóstico Gratuito
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
