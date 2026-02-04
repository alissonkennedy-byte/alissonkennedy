import { ArrowRight, Check, Calendar, Users, Sparkles, Car, ChevronDown, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20quero%20solicitar%20or%C3%A7amento%20do%20servi%C3%A7o%20Alisson%20Kennedy%20%7C%20Personal%20Assistant.%20Minha%20demanda%20%C3%A9%3A%20%5Bdescreva%5D.%20Prazo%3A%20%5Bdata%2Fhora%5D.%20Cidade%3A%20S%C3%A3o%20Paulo.";

const heroBullets = [
  "Curadoria objetiva + execução ponta a ponta",
  "Confirmação e reconfirmação para reduzir falhas",
  "Um ponto único de confiança para rotina pessoal e executiva",
  "Discrição como regra: rotina e preferências protegidas",
];

const targetAudience = [
  "Executivos, C-levels e diretores",
  "Empresários e investidores",
  "Famílias de alto padrão",
  "Pessoas públicas (prioridade em discrição)",
];

const services = [
  {
    icon: Calendar,
    title: "Agenda e logística executiva",
    description: "deslocamentos, reservas, confirmações e follow-up",
  },
  {
    icon: Users,
    title: "Assistência pessoal e familiar",
    description: "rotina, compras, presentes e viagens",
  },
  {
    icon: Sparkles,
    title: "Concierge sob demanda",
    description: "experiências, reservas, contratações",
  },
  {
    icon: Car,
    title: "Mobilidade premium",
    description: "coordenação terrestre e plano B",
  },
];

const pricingPlans = [
  {
    name: "Avulsa Simples",
    price: "R$ 500",
    description: "Execução direta, poucas etapas, baixo risco.",
  },
  {
    name: "Avulsa Média",
    price: "R$ 1.500",
    description: "Múltiplas etapas, curadoria e coordenação ponta a ponta.",
  },
  {
    name: "Avulsa Emergencial",
    price: "R$ 2.000",
    description: "Prazo crítico e prioridade operacional.",
  },
  {
    name: "Mensal",
    price: "R$ 10.000/mês",
    description: "Operação recorrente para reduzir fricção no dia a dia.",
    featured: true,
  },
  {
    name: "Mensal Exclusividade",
    price: "R$ 30.000/mês",
    description: "Prioridade máxima + capacidade reservada.",
  },
];

const processSteps = [
  "Briefing",
  "Curadoria objetiva (até 2 opções quando necessário)",
  "Aprovação",
  "Confirmação e reconfirmação",
  "Acompanhamento e pós-entrega",
];

const faqItems = [
  {
    question: "Você compra passagens e reservas?",
    answer: "Eu coordeno e confirmo com aprovação do cliente; custos de terceiros são pagos à parte.",
  },
  {
    question: "Você é 24/7?",
    answer: "Mensal Exclusividade tem janela estendida; demais modelos seguem atendimento combinado.",
  },
  {
    question: "O que é emergencial?",
    answer: "Prazo crítico e risco imediato de agenda.",
  },
  {
    question: "Você garante preço de fornecedor?",
    answer: "Não. Eu intermedio/coordeno; valores e políticas são do fornecedor.",
  },
  {
    question: "Como começo?",
    answer: "Chame no WhatsApp e solicite onboarding.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="section-spacing-lg border-b border-border">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-fade-in font-display text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Execução impecável para quem não pode perder tempo.
            </h1>
            <p className="mt-6 animate-fade-in text-lg text-muted-foreground md:text-xl" style={{ animationDelay: "0.1s" }}>
              Assistência pessoal e executiva premium para quem exige discrição, previsibilidade e entrega sem ruído.
            </p>

            <ul className="mt-10 space-y-3 text-left md:mx-auto md:max-w-xl">
              {heroBullets.map((bullet, index) => (
                <li
                  key={index}
                  className="animate-fade-in flex items-start gap-3"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
                  <span className="text-muted-foreground">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Solicitar orçamento no WhatsApp
              </a>
              <a href="#modelos" className="btn-secondary w-full sm:w-auto">
                Ver modelos de atendimento
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Atendimento via WhatsApp. Base: São Paulo/SP.
            </p>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="section-spacing border-b border-border">
        <div className="container-premium">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Para quem tempo e erro custam caro
            </h2>

            <ul className="mt-8 space-y-3 text-left md:mx-auto md:max-w-md">
              {targetAudience.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-muted-foreground">
              Não é serviço genérico. É operação pessoal e executiva premium.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-subtle mt-6 inline-flex items-center gap-2"
            >
              Falar no WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* O que eu faço */}
      <section className="section-spacing border-b border-border">
        <div className="container-premium">
          <h2 className="text-center font-display text-2xl font-semibold md:text-3xl">
            O que eu resolvo (ponta a ponta)
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="card-premium-hover">
                <service.icon className="h-6 w-6 text-foreground" />
                <h3 className="mt-4 font-display text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Processo:</span> briefing → curadoria → confirmação → reconfirmação → acompanhamento → pós-entrega.
          </p>

          <div className="mt-8 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </section>

      {/* Modelos de atendimento */}
      <section id="modelos" className="section-spacing border-b border-border bg-secondary/30">
        <div className="container-premium">
          <div className="text-center">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Modelos de atendimento
            </h2>
            <p className="mt-4 text-muted-foreground">
              Avulso ou recorrente. Eu te encaixo no modelo ideal no WhatsApp.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={plan.featured ? "pricing-card-featured" : "pricing-card"}>
                <div>
                  <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-1 font-display text-2xl font-bold">{plan.price}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-full justify-center text-center"
                >
                  Solicitar orçamento
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar orçamento no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="section-spacing border-b border-border">
        <div className="container-premium">
          <h2 className="text-center font-display text-2xl font-semibold md:text-3xl">
            Como funciona
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="step-indicator">{index + 1}</div>
                <p className="mt-4 text-sm text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </section>

      {/* Operação internacional */}
      <section className="section-spacing border-b border-border">
        <div className="container-premium">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Operação internacional
            </h2>
            <p className="mt-6 text-muted-foreground">
              Demandas que exijam viagem para representação ou operação internacional presencial:{" "}
              <span className="font-semibold text-foreground">US$ 15.000 (quinze mil dólares)</span> — inegociável, além de custos de viagem e despesas pagos à parte.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar orçamento no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Confidencialidade */}
      <section id="confidencialidade" className="section-spacing border-b border-border bg-secondary/30">
        <div className="container-premium">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Discrição é regra
            </h2>
            <p className="mt-6 text-muted-foreground">
              Rotina, localização, preferências e contatos são tratados como confidenciais. Não divulgamos casos sem autorização expressa.
            </p>
          </div>
        </div>
      </section>

      {/* Quem opera */}
      <section className="section-spacing border-b border-border">
        <div className="container-premium">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Quem opera
            </h2>
            <p className="mt-6 text-muted-foreground">
              Alisson Kennedy atua com negociação, coordenação, execução e relacionamento com decisores. Operação orientada a padrão, previsibilidade e entrega.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/alissonkennedy_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/alisson-kennedy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing border-b border-border">
        <div className="container-premium">
          <h2 className="text-center font-display text-2xl font-semibold md:text-3xl">
            Perguntas frequentes
          </h2>

          <div className="mx-auto mt-10 max-w-2xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="card-premium overflow-hidden border"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-display text-base font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
