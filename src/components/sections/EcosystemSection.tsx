import { PenTool, Car, Waves, Wine } from "lucide-react";

const verticals = [
  {
    icon: PenTool,
    title: "Concierge Signature",
    description:
      "O Core Business. Gestão integral de agenda, reservas, health concierge e demandas de alta complexidade. A inteligência por trás da sua rotina.",
  },
  {
    icon: Car,
    title: "Maiori Mobility",
    description:
      "Logística Executiva Blindada. Frota própria e parceira para transporte de diretoria e roadshows com segurança e pontualidade militar.",
  },
  {
    icon: Waves,
    title: "Concierge Riviera",
    description:
      "Seasonal Management. Gestão de propriedades e experiências de lazer no Litoral Norte (Riviera de São Lourenço). O padrão da capital, pé na areia.",
  },
  {
    icon: Wine,
    title: "Dio Mio Events",
    description:
      "Social Connection. Curadoria gastronômica e networking estratégico através de experiências privadas e corporativas.",
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
        <h2 className="scroll-reveal text-center font-display text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground">
          O Ecossistema
        </h2>
        <p className="scroll-reveal reveal-delay-1 mt-4 text-center text-muted-foreground max-w-xl mx-auto">
          Quatro verticais integradas sob uma única gestão estratégica.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {verticals.map((vertical, index) => (
            <div
              key={index}
              className={`scroll-reveal-scale reveal-delay-${index + 1} card-premium-hover group`}
            >
              <div className="h-12 w-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-300 border border-primary/30">
                <vertical.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {vertical.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {vertical.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
