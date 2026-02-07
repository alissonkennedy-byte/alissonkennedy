export function ManifestoSection() {
  return (
    <section id="manifesto" className="section-spacing border-b border-border">
      <div className="container-premium">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="scroll-reveal font-display text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground">
            O Novo Código do Luxo
          </h2>

          <div className="scroll-reveal reveal-delay-1 mt-10 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed md:leading-loose">
              Em um mundo de excesso de acesso, a verdadeira exclusividade é a{" "}
              <span className="text-primary font-medium">curadoria</span>.
              Atuamos na intersecção entre a logística impecável e o acesso
              restrito. Somos invisíveis na execução e inesquecíveis no
              resultado. Para quem entende que a{" "}
              <span className="text-foreground font-medium">
                tranquilidade é o único ativo inegociável
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
