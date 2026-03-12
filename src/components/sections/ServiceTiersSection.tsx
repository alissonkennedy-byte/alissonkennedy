import { Star, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20acesso%20ao%20Private%20Office.";

const tiers = [
  {
    name: "The Private Mission",
    label: "ON-DEMAND",
    price: "R$ 1.200",
    period: "/ Demanda",
    description:
      "Um problema complexo, resolvido do início ao fim. Você descreve — eu coordeno, aciono e entrego. Sem você precisar aparecer.",
  },
  {
    name: "Lifestyle Membership",
    label: "RECORRÊNCIA",
    price: "R$ 6.900",
    period: "/ Mês",
    description:
      "Sua rotina gerenciada por completo. Agenda, viagens, residência e demandas do dia a dia centralizadas em um único ponto de contato — eu.",
    featured: true,
    limited: true,
  },
  {
    name: "Signature Collection",
    label: "EXCLUSIVIDADE",
    price: "Sob consulta",
    period: "",
    description:
      "Presença dedicada, disponibilidade ampliada e logística exclusiva para quem exige o mais alto padrão — dentro e fora de São Paulo.",
    limited: true,
  },
];

export function ServiceTiersSection() {
  return (
    <section
      id="modelos"
      className="section-spacing"
      style={{ backgroundColor: "hsl(0 0% 17%)" }}
    >
      <div className="container-premium">
        <div className="text-center">
          <h2 className="scroll-reveal font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Modelos de Atuação
          </h2>

          <div className="scroll-reveal reveal-delay-1 mt-4 mx-auto w-16 h-px bg-primary/50" />

          <p className="scroll-reveal reveal-delay-1 mt-6 text-primary text-sm md:text-base tracking-wide font-medium">
            Três níveis de acesso desenhados para diferentes perfis de complexidade.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 items-stretch">
          {tiers.map((tier, index) => {
            const isFeatured = tier.featured;
            return (
              <div
                key={index}
                className={`scroll-reveal-scale reveal-delay-${index + 1} flex flex-col justify-between rounded-lg border p-8 transition-all duration-500 ${
                  isFeatured
                    ? "border-primary/60 md:scale-105 md:z-10"
                    : "border-primary/25 hover:border-primary/40"
                }`}
                style={{
                  backgroundColor: isFeatured ? "hsl(0 0% 12%)" : "hsl(0 0% 14%)",
                  boxShadow: "var(--shadow-card)",
                  minHeight: "340px",
                }}
              >
                <div>
                  <span className="text-xs text-primary font-semibold tracking-[0.2em] uppercase">
                    {tier.label}
                  </span>

                  <h3 className="mt-3 font-display text-xl font-bold text-foreground tracking-tight">
                    {tier.name}
                  </h3>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="font-display text-3xl md:text-4xl font-bold text-foreground">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-xs text-muted-foreground tracking-wide">
                        {tier.period}
                      </span>
                    )}
                  </div>

                  <div className="mt-5 w-full h-px bg-border" />

                  <p className="mt-5 text-sm text-muted-foreground leading-[1.9] tracking-wide">
                    {tier.description}
                  </p>
                </div>

                {tier.limited && (
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase border border-primary/40 text-primary"
                      style={{ backgroundColor: "hsl(43 78% 46% / 0.12)" }}
                    >
                      <Star className="h-3.5 w-3.5" />
                      Vagas Limitadas
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="scroll-reveal mt-14 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-10 py-5"
          >
            <MessageCircle className="h-5 w-5" />
            Solicitar Acesso
          </a>
        </div>
      </div>
    </section>
  );
}
