export function AboutSection() {
  return (
    <section id="sobre" className="section-spacing" style={{ backgroundColor: "hsl(0 0% 10%)" }}>
      <div className="container-premium">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="flex gap-8 items-start">
            {/* Gold vertical line */}
            <div className="hidden md:block w-px min-h-full bg-primary shrink-0" />

            <div>
              <p className="scroll-reveal text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-6">
                Quem somos
              </p>

              <h2 className="scroll-reveal font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Quem sou
              </h2>

              <div className="scroll-reveal reveal-delay-1 mt-3 w-16 h-px bg-primary/40" />

              <p className="scroll-reveal reveal-delay-1 mt-8 text-muted-foreground text-base md:text-lg leading-[2] tracking-wide">
                Sou Alisson Kennedy — profissional de gestão executiva com 10 anos de experiência em grandes corporações, atuando em marketing, comunicação, eventos, patrocínios e relações institucionais. Sempre no relacionamento direto com o alto escalão empresarial e governamental. Fundei o Private Office em 2026 para colocar tudo isso a serviço de quem valoriza tempo, discrição e resultado. Cada demanda é executada por mim, pessoalmente. Sem intermediários.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
