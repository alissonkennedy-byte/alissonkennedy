import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL =
  "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20corporativo.";

export default function Corporate() {
  const scrollRef = useScrollReveal();

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

      {/* Section 1 — Hero */}
      <section
        className="flex items-center justify-start min-h-screen pt-20"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="w-full max-w-[900px] mx-auto px-6 md:px-16 py-20 md:py-32">
          <div
            className="scroll-reveal mb-12"
            style={{ width: "48px", height: "1px", backgroundColor: "#FFFFFF" }}
          />
          <h1
            className="scroll-reveal reveal-delay-1 text-[1.75rem] md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] tracking-tight"
            style={{ color: "#FFFFFF" }}
          >
            Corporate Solutions:
            <br />
            Inteligência, Automação
            <br />
            e Posicionamento de Elite.
          </h1>
          <p
            className="scroll-reveal reveal-delay-2 mt-8 md:mt-10 text-sm md:text-lg leading-[1.9] max-w-[680px]"
            style={{ color: "rgba(255,255,255,0.6)", fontWeight: 400 }}
          >
            Não vendemos serviços genéricos. Orquestramos a presença digital, a
            comunicação visual e a logística corporativa para empresas que exigem
            previsibilidade e rigor técnico.
          </p>
        </div>
      </section>

      {/* Section 2 — Engenharia Digital */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="w-full max-w-[900px] mx-auto px-6 md:px-16 py-20 md:py-32">
          <div
            className="scroll-reveal mb-10"
            style={{ width: "32px", height: "1px", backgroundColor: "#000000" }}
          />
          <h2
            className="scroll-reveal reveal-delay-1 text-xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight"
            style={{ color: "#000000" }}
          >
            Engenharia Digital e
            <br />
            Automação de Processos
          </h2>
          <p
            className="scroll-reveal reveal-delay-2 mt-8 md:mt-10 text-sm md:text-lg leading-[1.9] max-w-[640px]"
            style={{ color: "rgba(0,0,0,0.6)", fontWeight: 400 }}
          >
            A lentidão operacional custa capital. Desenvolvemos plataformas de
            gestão sob medida, sites otimizados para ranqueamento avançado no
            Google e integramos ferramentas de Inteligência Artificial para dar
            velocidade à sua operação diária. Estruturamos a tecnologia dos
            bastidores para que a sua linha de frente execute com precisão
            militar.
          </p>
        </div>
      </section>

      {/* Section 3 — Posicionamento */}
      <section style={{ backgroundColor: "#000000" }}>
        <div className="w-full max-w-[900px] mx-auto px-6 md:px-16 py-20 md:py-32">
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
            className="scroll-reveal reveal-delay-2 mt-8 md:mt-10 text-sm md:text-lg leading-[1.9] max-w-[640px]"
            style={{ color: "rgba(255,255,255,0.6)", fontWeight: 400 }}
          >
            A perceção do mercado dita o valor do seu contrato. Assumimos o
            desenvolvimento da identidade visual, roteiros corporativos e
            estratégias de conteúdo para redes sociais. Garantimos uma estética
            institucional de alto impacto (High-End), eliminando ruídos de
            comunicação e posicionando a sua empresa no topo da cadeia do seu
            setor.
          </p>
        </div>
      </section>

      {/* Section 4 — Logística e Eventos */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="w-full max-w-[900px] mx-auto px-6 md:px-16 py-20 md:py-32">
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
            className="scroll-reveal reveal-delay-2 mt-8 md:mt-10 text-sm md:text-lg leading-[1.9] max-w-[640px]"
            style={{ color: "rgba(0,0,0,0.6)", fontWeight: 400 }}
          >
            O controle total do seu terreno físico. Assumimos a curadoria de
            fornecedores, o rigor dos orçamentos e a orquestração logística para
            eventos empresariais. Através de uma rede de confiança, gerenciamos
            transfers executivos, garantindo pontualidade, discrição e segurança
            inegociável para a sua diretoria e stakeholders. O nosso papel é
            intermediar o acesso às melhores soluções, cobrando exclusivamente
            pela entrega de um cenário resolvido.
          </p>
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
              Solicitar Diagnóstico Corporativo
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
