import { ArrowRight, Check, Calendar, Users, Sparkles, Car, ChevronDown, Instagram, Linkedin, MessageCircle, Star } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";

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
    price: "Sob consulta",
    description: "Prioridade máxima + capacidade reservada.",
    exclusive: true,
    limited: true,
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
  useEffect(() => {
    document.title = "Alisson Kennedy | Personal Assistant — Operação Premium";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Assistência pessoal e executiva premium com curadoria, discrição e execução ponta a ponta. Base São Paulo.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Assistência pessoal e executiva premium com curadoria, discrição e execução ponta a ponta. Base São Paulo.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="section-spacing-lg border-b border-border">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-fade-up font-display text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Execução impecável para quem não pode perder tempo.
            </h1>
            <p className="animate-fade-up-delay-1 mt-6 text-lg text-muted-foreground md:text-xl">
              Assistência pessoal e executiva premium para quem exige discrição, previsibilidade e entrega sem ruído.
            </p>

            <ul className="mt-12 space-y-4 text-left md:mx-auto md:max-w-xl">
              {heroBullets.map((bullet, index) => (
                <li
                  key={index}
                  className="animate-fade-up flex items-start gap-3"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
                  <span className="text-muted-foreground">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="animate-fade-up mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center" style={{ animationDelay: "0.6s" }}>
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

            <p className="animate-fade-up mt-8 text-sm text-muted-foreground" style={{ animationDelay: "0.7s" }}>
              Atendimento via WhatsApp. Base: São Paulo/SP.
            </p>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="section-spacing border-b border-border">
        <div className="container-premium">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-semibold md:text-3xl lg:text-4xl">
              Para quem tempo e erro custam caro
            </h2>

            <ul className="mt-10 space-y-4 text-left md:mx-auto md:max-w-md">
              {targetAudience.map((item, index) => (
                <li key={index} className="flex items-start gap-3 hover-lift">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-muted-foreground">
              Não é serviço genérico. É operação pessoal e executiva premium.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-subtle mt-8 inline-flex items-center gap-2 hover-lift"
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
          <h2 className="text-center font-display text-2xl font-semibold md:text-3xl lg:text-4xl">
            O que eu resolvo (ponta a ponta)
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="card-premium-hover">
                <service.icon className="h-6 w-6 text-foreground" />
                <h3 className="mt-5 font-display text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Processo:</span> briefing → curadoria → confirmação → reconfirmação → acompanhamento → pós-entrega.
          </p>

          <div className="mt-10 text-center">
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
      <section id="modelos" className="section-spacing border-b border-border bg-gradient-to-b from-secondary/30 to-background">
        <div className="container-premium">
          <div className="text-center">
            <h2 className="font-display text-2xl font-semibold md:text-3xl lg:text-4xl">
              Modelos de atendimento
            </h2>
            <p className="mt-5 text-muted-foreground">
              Avulso ou recorrente. Eu te encaixo no modelo ideal no WhatsApp.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={
                  plan.exclusive 
                    ? "pricing-card-exclusive" 
                    : plan.featured 
                    ? "pricing-card-featured" 
                    : "pricing-card"
                }
              >
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
                    {plan.exclusive && <Star className="h-4 w-4 text-foreground" />}
                  </div>
                  <p className="mt-2 font-display text-2xl font-bold">{plan.price}</p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                  {plan.limited && (
                    <div className="mt-4">
                      <span className="badge-limited">Vagas limitadas</span>
                    </div>
                  )}
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

          <div className="mt-12 text-center">
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
          <h2 className="text-center font-display text-2xl font-semibold md:text-3xl lg:text-4xl">
            Como funciona
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center hover-lift">
                <div className="step-indicator">{index + 1}</div>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
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
      <section className="section-spacing border-b border-border bg-gradient-to-b from-background to-secondary/30">
        <div className="container-premium">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-semibold md:text-3xl lg:text-4xl">
              Operação internacional
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Demandas que exijam viagem para representação ou operação internacional presencial.
            </p>
            <p className="mt-4 font-display text-2xl font-bold text-foreground">
              Sob consulta
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Além de custos de viagem e despesas pagos à parte.
            </p>
            <div className="mt-6 flex justify-center">
              <span className="badge-limited">Vagas limitadas</span>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar orçamento no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Confidencialidade */}
      <section id="confidencialidade" className="section-spacing border-b border-border">
        <div className="container-premium">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-semibold md:text-3xl lg:text-4xl">
              Discrição é regra
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Rotina, localização, preferências e contatos são tratados como confidenciais. Não divulgamos casos sem autorização expressa.
            </p>
          </div>
        </div>
      </section>

      {/* Quem opera */}
      <section className="section-spacing border-b border-border">
        <div className="container-premium">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-semibold md:text-3xl lg:text-4xl">
              Quem opera
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Alisson Kennedy atua com negociação, coordenação, execução e relacionamento com decisores. Operação orientada a padrão, previsibilidade e entrega.
            </p>
            <div className="mt-8 flex items-center justify-center gap-5">
              <a
                href="https://www.instagram.com/alissonkennedy_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/alisson-kennedy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing border-b border-border bg-gradient-to-b from-secondary/30 to-background">
        <div className="container-premium">
          <h2 className="text-center font-display text-2xl font-semibold md:text-3xl lg:text-4xl">
            Perguntas frequentes
          </h2>

          <div className="mx-auto mt-12 max-w-2xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="card-premium overflow-hidden border transition-all duration-300 hover:border-muted-foreground/20"
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-display text-base font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed">
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
