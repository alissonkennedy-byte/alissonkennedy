import { ArrowRight, Check, Calendar, Users, Sparkles, Car, ChevronDown, Instagram, Linkedin, MessageCircle, Star, Globe } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import alissonPhoto from "@/assets/alisson-kennedy.png";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20Alisson.%20Quero%20solicitar%20triagem.%0A%0A1)%20Demanda%3A%20()%0A2)%20Prazo%20(data%2Fhora)%3A%20()%0A3)%20Cidade%3A%20()%0A4)%20Padr%C3%A3o%2FPrefer%C3%AAncias%3A%20()%0A5)%20Or%C3%A7amento%20ou%20limite%20de%20aprova%C3%A7%C3%A3o%3A%20()%0A6)%20Modelo%3A%20(Avulsa%20%2F%20Mensal%20%2F%20Exclusividade)%0A%0ASe%20for%20urgente%2C%20escreva%3A%20EMERGENCIAL.";

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
  },
  {
    icon: Users,
    title: "Assistência pessoal e familiar",
  },
  {
    icon: Sparkles,
    title: "Concierge sob demanda",
  },
  {
    icon: Car,
    title: "Mobilidade premium",
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
  {
    name: "Operação Internacional",
    price: "Sob consulta",
    description: "Demandas que exijam viagem para representação ou operação internacional presencial. Custos de viagem pagos à parte.",
    international: true,
    limited: true,
    icon: Globe,
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
    answer: "Chame no WhatsApp e solicite triagem.",
  },
  {
    question: "O que é o aceite antes de iniciar?",
    answer: "Antes de iniciar qualquer execução, envio no WhatsApp um aceite objetivo com: (1) intermediação e responsabilidade de fornecedores, (2) custos de terceiros pagos à parte, (3) multa de R$ 200 em cancelamento após início, (4) não reembolso após início da execução. A execução começa somente após você responder 'ACEITO'.",
  },
];

const Index = () => {
  const scrollRef = useScrollReveal();

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
    <div ref={scrollRef} className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="section-spacing-lg border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/20 pointer-events-none" />
        <div className="container-premium relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-semibold mb-8 border border-primary/30">
              <Sparkles className="h-4 w-4" />
              Assistência Premium
            </div>
            <h1 className="animate-fade-up font-display text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground">
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
                  <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
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
                Solicitar triagem no WhatsApp
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
      <section id="para-quem" className="section-spacing border-b border-border">
        <div className="container-premium">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="scroll-reveal font-display text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground">
              Para quem
            </h2>

            <ul className="mt-10 space-y-4 text-left md:mx-auto md:max-w-md">
              {targetAudience.map((item, index) => (
                <li key={index} className={`scroll-reveal reveal-delay-${index + 1} flex items-start gap-3 hover-lift`}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <p className="scroll-reveal reveal-delay-5 mt-10 text-muted-foreground">
              Não é serviço genérico. É operação pessoal e executiva premium.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="scroll-reveal link-subtle mt-8 inline-flex items-center gap-2 hover-lift"
            >
              Falar com o Alisson
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* O que eu faço */}
      <section id="servicos" className="section-spacing border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
        <div className="container-premium relative">
          <h2 className="scroll-reveal text-center font-display text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground">
            O que eu resolvo
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className={`scroll-reveal-scale reveal-delay-${index + 1} card-premium-hover group`}>
                <div className="h-12 w-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-300 border border-primary/30">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{service.title}</h3>
              </div>
            ))}
          </div>

          <p className="scroll-reveal mt-12 text-center text-sm text-muted-foreground">
            <span className="font-medium text-primary">Processo:</span> briefing → curadoria → confirmação → reconfirmação → acompanhamento → pós-entrega.
          </p>

          <div className="scroll-reveal mt-10 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Ver disponibilidade
            </a>
          </div>
        </div>
      </section>

      {/* Modelos de atendimento */}
      <section id="modelos" className="section-spacing border-b border-border bg-gradient-to-b from-secondary/80 to-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-premium relative">
          <div className="text-center">
            <h2 className="scroll-reveal font-display text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground">
              Modelos de atendimento
            </h2>
            <p className="scroll-reveal reveal-delay-1 mt-5 text-muted-foreground">
              Avulso ou recorrente. Eu te encaixo no modelo ideal no WhatsApp.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`scroll-reveal-scale reveal-delay-${(index % 3) + 1} ${
                  plan.international
                    ? "pricing-card-international"
                    : plan.exclusive 
                    ? "pricing-card-exclusive" 
                    : plan.featured 
                    ? "pricing-card-featured" 
                    : "pricing-card"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-lg font-semibold text-foreground">{plan.name}</h3>
                    {plan.exclusive && <Star className="h-4 w-4 text-primary" />}
                    {plan.international && plan.icon && <plan.icon className="h-4 w-4 text-primary" />}
                  </div>
                  <p className="mt-2 font-display text-2xl font-bold text-gold-gradient">{plan.price}</p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                  {plan.limited && (
                    <div className="mt-4">
                      <span className="badge-limited">Vagas limitadas</span>
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
              className="btn-primary"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar triagem no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="section-spacing border-b border-border">
        <div className="container-premium">
          <h2 className="scroll-reveal text-center font-display text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground">
            Como funciona
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={index} className={`scroll-reveal reveal-delay-${index + 1} flex flex-col items-center text-center hover-lift`}>
                <div className="step-indicator">{index + 1}</div>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{step}</p>
              </div>
            ))}
          </div>

          <div className="scroll-reveal mt-14 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Ver disponibilidade
            </a>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <TestimonialsCarousel />

      {/* Confidencialidade */}
      <section id="confidencialidade" className="section-spacing border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container-premium relative">
          <div className="mx-auto max-w-2xl text-center">
            <div className="scroll-reveal-scale inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/15 mb-6 border border-primary/30">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h2 className="scroll-reveal font-display text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground">
              Discrição é regra
            </h2>
            <p className="scroll-reveal reveal-delay-1 mt-6 text-muted-foreground leading-relaxed">
              Rotina, localização, preferências e contatos são tratados como confidenciais. Não divulgamos casos sem autorização expressa.
            </p>
          </div>
        </div>
      </section>

      {/* Quem opera */}
      <section id="quem-opera" className="section-spacing border-b border-border">
        <div className="container-premium">
          <div className="mx-auto max-w-2xl text-center">
            <div className="scroll-reveal-scale mb-8">
              <img 
                src={alissonPhoto} 
                alt="Alisson Kennedy" 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover border-4 border-primary/30 shadow-lg"
              />
            </div>
            <h2 className="scroll-reveal font-display text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground">
              Quem opera
            </h2>
            <p className="scroll-reveal reveal-delay-1 mt-6 text-muted-foreground leading-relaxed">
              Alisson Kennedy atua com negociação, coordenação, execução e relacionamento com decisores. Operação orientada a padrão, previsibilidade e entrega.
            </p>
            <div className="scroll-reveal reveal-delay-2 mt-8 flex items-center justify-center gap-5">
              <a
                href="https://www.instagram.com/alissonkennedy_/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 border border-primary/30"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/alisson-kennedy/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 border border-primary/30"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="scroll-reveal reveal-delay-3 btn-primary mt-10"
            >
              Falar com o Alisson
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-spacing border-b border-border bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-premium">
          <h2 className="scroll-reveal text-center font-display text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground">
            Perguntas frequentes
          </h2>

          <div className="mx-auto mt-12 max-w-2xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={`scroll-reveal reveal-delay-${index + 1} card-premium overflow-hidden border transition-all duration-300 hover:border-primary/40`}
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-display text-base font-semibold hover:no-underline text-foreground">
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
