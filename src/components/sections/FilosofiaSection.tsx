export function FilosofiaSection() {
  return (
    <section className="section-spacing border-b border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="container-premium relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="scroll-reveal font-display text-2xl font-bold md:text-3xl lg:text-4xl text-foreground uppercase tracking-wide">
            Não somos secretariado.{" "}
            <span className="text-gold-gradient">Somos estratégia.</span>
          </h2>

          <p className="scroll-reveal reveal-delay-1 mt-8 text-muted-foreground leading-relaxed text-base md:text-lg">
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

          <p className="scroll-reveal reveal-delay-2 mt-6 text-muted-foreground leading-relaxed text-base md:text-lg">
            Nosso papel não é apenas atender ao seu pedido, é antecipar a
            necessidade antes que ela vire uma interrupção. Atuamos no silêncio
            para que o seu único barulho seja o do resultado.
          </p>
        </div>
      </div>
    </section>
  );
}
