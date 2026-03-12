const cases = [
  "Gestão de agenda de diretoria e presidência de grande estatal bancária brasileira em evento nacional de agronegócio",
  "Gestão de agenda e compromissos de alta autoridade federal brasileira",
  "Recepção e protocolo do Cônsul da Irlanda em evento privado",
  "Recepção e protocolo do Cônsul dos Estados Unidos em evento privado",
];

export function CasesSection() {
  return (
    <section id="cases" className="section-spacing" style={{ backgroundColor: "hsl(0 0% 12%)" }}>
      <div className="container-premium">
        <div className="max-w-3xl mx-auto">
          <h2 className="scroll-reveal text-center font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Cases de Referência
          </h2>

          <div className="scroll-reveal reveal-delay-1 mt-4 mx-auto w-16 h-px bg-primary/50" />

          <p className="scroll-reveal reveal-delay-1 mt-6 text-center text-muted-foreground text-sm md:text-base leading-relaxed tracking-wide">
            Ao longo da minha trajetória, executei pessoalmente demandas de alto nível para pessoas e instituições que exigiam o mais absoluto sigilo e precisão.
          </p>
          <p className="scroll-reveal reveal-delay-1 mt-3 text-center text-primary/80 text-sm italic tracking-wide">
            Por política de discrição, os nomes das instituições e autoridades são preservados.
          </p>

          <div className="mt-12 space-y-6">
            {cases.map((item, index) => (
              <div
                key={index}
                className={`scroll-reveal reveal-delay-${index + 1} flex items-start gap-4`}
              >
                <div className="mt-2 w-8 h-px bg-primary shrink-0" />
                <p className="text-muted-foreground text-base leading-relaxed tracking-wide">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
