export function ManifestoSection() {
  return (
    <section id="manifesto" className="section-spacing border-b border-border bg-[#000]">
      <div className="container-premium">
        <div className="mx-auto max-w-xl text-center">
          <div className="scroll-reveal mx-auto w-20 h-px bg-primary mb-8" />

          <p className="scroll-reveal text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-6">
            Manifesto
          </p>

          <h2 className="scroll-reveal font-display text-3xl font-semibold md:text-4xl lg:text-5xl text-foreground leading-tight">
            Concierge de Alto Padrão: O Novo Código do Luxo
          </h2>

          <div className="scroll-reveal reveal-delay-1 mt-6 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="scroll-reveal reveal-delay-1 mt-10 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />
            <p className="text-muted-foreground text-base md:text-lg leading-[2] tracking-wide">
              Em um mundo de excesso de acesso, a verdadeira exclusividade é a{" "}
              <span className="text-primary font-medium">curadoria</span>.
              Oferecemos assistência pessoal e concierge executivo para quem entende que{" "}
              <span className="text-foreground font-medium">
                tempo e tranquilidade são os únicos ativos inegociáveis
              </span>
              . Somos invisíveis na execução e inesquecíveis no resultado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
