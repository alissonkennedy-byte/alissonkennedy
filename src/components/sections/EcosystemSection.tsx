import { PenTool, Car, Waves } from "lucide-react";

const verticals = [
  {
    icon: PenTool,
    title: "Concierge Signature",
    description:
      "O Core Business. Gestão integral de agenda, reservas, health concierge e demandas de alta complexidade. A inteligência por trás da sua rotina. O principal serviço de assistência pessoal em São Paulo.",
    link: null,
  },
  {
    icon: Car,
    title: "Maiori Mob",
    description:
      "Transporte executivo blindado para diretoria, roadshows e eventos em São Paulo. Frota própria e parceira com pontualidade e discrição absoluta.",
    link: "https://www.instagram.com/maiorimob/",
  },
  {
    icon: Waves,
    title: "Concierge Riviera",
    description:
      "Seasonal Management. Gestão de propriedades e experiências de lazer no Litoral Norte (Riviera de São Lourenço). O padrão da capital, pé na areia.",
    link: "https://www.instagram.com/conciergeriviera/",
  },
];

export function EcosystemSection() {
  return (
    <section
      id="ecossistema"
      className="section-spacing border-b border-border relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="container-premium relative">
        <p className="scroll-reveal text-center text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-6">
          Ecossistema
        </p>

        <h2 className="scroll-reveal text-center font-display text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground leading-tight">
          O Ecossistema
        </h2>

        <div className="scroll-reveal reveal-delay-1 mt-4 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <p className="scroll-reveal reveal-delay-1 mt-6 text-center text-muted-foreground max-w-xl mx-auto tracking-wide leading-relaxed">
          Três verticais integradas sob uma única gestão estratégica.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {verticals.map((vertical, index) => {
            const content = (
              <div
                className={`scroll-reveal-scale reveal-delay-${index + 1} card-premium-hover group ${vertical.link ? "cursor-pointer" : ""}`}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-300 border border-primary/30">
                  <vertical.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground tracking-tight">
                  {vertical.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-[1.8] tracking-wide">
                  {vertical.description}
                </p>
              </div>
            );

            return vertical.link ? (
              <a
                key={index}
                href={vertical.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
