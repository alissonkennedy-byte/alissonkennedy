const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20acesso%20ao%20Private%20Office.";

export function CtaSection() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: "hsl(43 78% 46%)" }}
    >
      <div className="container-premium text-center">
        <h2 className="scroll-reveal font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          style={{ color: "hsl(0 0% 5%)" }}
        >
          Pronto para ter alguém que resolve?
        </h2>

        <p className="scroll-reveal reveal-delay-1 mt-6 text-base md:text-lg font-medium tracking-wide"
          style={{ color: "hsl(0 0% 15%)" }}
        >
          Atendimento por triagem. Vagas limitadas.
        </p>

        <div className="scroll-reveal reveal-delay-2 mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark text-base px-12 py-5"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
