import { Star, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20acesso%20ao%20Private%20Office.";

const tiers = [
  {
    name: "The Private Mission",
    label: "On-Demand",
    description:
      "Atuação cirúrgica para demandas pontuais. Logística de viagens curtas, aquisições complexas ou crises operacionais.",
    detail: "Investimento único por missão",
  },
  {
    name: "The Lifestyle Management",
    label: "Recorrência",
    description:
      "Gestão contínua de rotina. Acesso ao Hub para organização de vida pessoal, familiar e agenda social.",
    detail: "Membership Mensal — Vagas Limitadas",
    featured: true,
    limited: true,
  },
  {
    name: "The Signature Collection",
    label: "Exclusividade",
    description:
      "O ápice do Private Office. Disponibilidade ampliada, gestão patrimonial leve e travel design global.",
    detail: "Apenas 3 famílias — Lista de Espera",
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
          <h2 className="scroll-reveal font-display text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground">
            Modelos de Atuação
          </h2>
          <p className="scroll-reveal reveal-delay-1 mt-5 text-muted-foreground">
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
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {tier.name}
                  </h3>
                  {tier.exclusive && <Star className="h-4 w-4 text-primary" />}
                </div>
                <span className="inline-block mt-2 text-xs text-primary font-semibold tracking-wider uppercase">
                  {tier.label}
                </span>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {tier.description}
                </p>
                <p className="mt-4 text-xs text-muted-foreground/80 italic">
                  {tier.detail}
                </p>
                {tier.limited && (
                  <div className="mt-5">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-bold border border-primary/40 animate-pulse">
                      <Star className="h-4 w-4" />
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
            className="btn-primary text-lg px-10 py-5"
          >
            <MessageCircle className="h-5 w-5" />
            Solicitar Triagem
          </a>
        </div>
      </div>
    </section>
  );
}
