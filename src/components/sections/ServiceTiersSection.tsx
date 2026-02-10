import { Star, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20acesso%20ao%20Private%20Office.";

const tiers = [
  {
    name: "The Private Mission",
    label: "On-Demand",
    price: "R$ 1.200",
    period: "/ Demanda",
    description:
      "Resolução pontual de alta complexidade. Coordenação logística, acesso à rede de parceiros e acompanhamento remoto até a conclusão.",
  },
  {
    name: "Lifestyle Membership",
    label: "Recorrência",
    price: "R$ 6.900",
    period: "/ Mês",
    description:
      "A assinatura de gestão de rotina. Centralização da sua agenda pessoal, travel design, gestão residencial básica e suporte via Hub.",
    featured: true,
    limited: true,
  },
  {
    name: "Signature Collection",
    label: "Exclusividade",
    price: "Sob consulta",
    period: "",
    description:
      "Estrutura de Family Office dedicada. Disponibilidade ampliada (finais de semana), gestão híbrida presencial e logística blindada exclusiva.",
    exclusive: true,
    limited: true,
  },
];

export function ServiceTiersSection() {
  return (
    <section
      id="modelos"
      className="section-spacing border-b border-border bg-gradient-to-b from-secondary/80 to-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="container-premium relative">
        <div className="text-center">
          <p className="scroll-reveal text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-6">
            Investimento
          </p>

          <h2 className="scroll-reveal font-display text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground leading-tight">
            Modelos de Atuação
          </h2>

          <div className="scroll-reveal reveal-delay-1 mt-4 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <p className="scroll-reveal reveal-delay-1 mt-6 text-muted-foreground tracking-wide">
            Três níveis de acesso desenhados para diferentes perfis de
            complexidade.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`scroll-reveal-scale reveal-delay-${index + 1} ${
                tier.exclusive
                  ? "pricing-card-exclusive"
                  : tier.featured
                    ? "pricing-card-featured"
                    : "pricing-card"
              }`}
            >
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-lg font-semibold text-foreground tracking-tight">
                    {tier.name}
                  </h3>
                  {tier.exclusive && <Star className="h-4 w-4 text-primary" />}
                </div>
                <span className="inline-block mt-2 text-xs text-primary font-semibold tracking-[0.2em] uppercase">
                  {tier.label}
                </span>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-3xl font-bold text-foreground tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted-foreground tracking-wide">
                    {tier.period}
                  </span>
                </div>

                <div className="mt-4 w-full h-px bg-border" />

                <p className="mt-4 text-sm text-muted-foreground leading-[1.8] tracking-wide">
                  {tier.description}
                </p>
                {tier.limited && (
                  <div className="mt-5">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/40 tracking-wider uppercase animate-pulse">
                      <Star className="h-3.5 w-3.5" />
                      Vagas limitadas
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-reveal mt-14 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-10 py-5 tracking-wide"
          >
            <MessageCircle className="h-5 w-5" />
            Solicitar Acesso ao Private Office
          </a>
        </div>
      </div>
    </section>
  );
}
