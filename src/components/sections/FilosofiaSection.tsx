export function FilosofiaSection() {
  return (
    <section className="section-spacing border-b border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="container-premium relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="scroll-reveal text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-6">
            Filosofia
          </p>

          <h2 className="scroll-reveal font-display text-2xl font-bold md:text-3xl lg:text-4xl text-foreground uppercase tracking-wide leading-tight">
            Não somos secretariado.
            <br />
            <span className="text-gold-gradient">Somos estratégia.</span>
          </h2>

          <div className="scroll-reveal reveal-delay-1 mt-6 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <p className="scroll-reveal reveal-delay-1 mt-8 text-muted-foreground leading-[1.85] text-base md:text-lg tracking-wide">
            O secretariado executa tarefas. Nós desenhamos fluxos. Enquanto o
            mercado tradicional foca em "fazer reservas", o{" "}
            <span className="text-foreground font-medium">
              Alisson Kennedy Private Office
            </span>{" "}
            foca em{" "}
            <span className="text-primary font-semibold">
              Logística e Governança
            </span>
            .
          </p>

          <p className="scroll-reveal reveal-delay-2 mt-5 text-muted-foreground leading-[1.85] text-base md:text-lg tracking-wide">
            Nosso papel não é apenas atender ao seu pedido — é{" "}
            <span className="text-foreground font-medium">
              antecipar a necessidade
            </span>{" "}
            antes que ela vire uma interrupção. Atuamos no silêncio
            para que o seu único barulho seja o do resultado.
          </p>
        </div>
      </div>
    </section>
  );
}
