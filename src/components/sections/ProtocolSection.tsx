import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20acesso%20ao%20Private%20Office.";

const steps = [
  {
    number: "01",
    title: "Solicitação de Triagem",
    subtitle: "Via WhatsApp",
  },
  {
    number: "02",
    title: "Diagnóstico de Perfil",
    subtitle: "Validation",
  },
  {
    number: "03",
    title: "Setup & Onboarding",
    subtitle: "Início Imediato",
  },
  {
    number: "04",
    title: "Execução Silenciosa",
    subtitle: "Fluidez Total",
  },
];

export function ProtocolSection() {
  return (
    <section
      id="protocolo"
      className="section-spacing border-b border-border relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
      <div className="container-premium relative">
        <h2 className="scroll-reveal text-center font-display text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground">
          Protocolo de Acesso
        </h2>
        <p className="scroll-reveal reveal-delay-1 mt-4 text-center text-muted-foreground max-w-lg mx-auto">
          Um processo estruturado para garantir alinhamento e execução impecável.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`scroll-reveal reveal-delay-${index + 1} flex flex-col items-center text-center hover-lift`}
            >
              <div className="step-indicator text-lg font-bold">
                {step.number}
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-primary font-medium">
                {step.subtitle}
              </p>
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
