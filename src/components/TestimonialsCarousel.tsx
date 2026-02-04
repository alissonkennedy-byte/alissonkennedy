import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    role: "CEO",
    location: "São Paulo (SP)",
    quote: "Eu vivia apagando incêndio com voo, reserva e motorista. Com o Alisson, isso simplesmente saiu da minha cabeça. Eu mando a demanda, ele volta com o que faz sentido e entrega confirmado. A agenda ficou leve.",
  },
  {
    role: "CFO",
    location: "Brasília (DF)",
    quote: "Eu sou chata com detalhe e prazo. O Alisson é do tipo que confirma, reconfirma e ainda te avisa o que pode dar errado antes de dar. Ele cuidou de voos, hotel e mobilidade com uma calma que passa confiança.",
  },
  {
    role: "Sócio-fundador",
    location: "Ribeirão Preto (SP)",
    quote: "Eu não precisava de 'ajuda', eu precisava de alguém que resolvesse. O Alisson organizou reservas, deslocamentos e ajustes de última hora sem drama. O melhor é que ele não te ocupa com conversa — só com o que você precisa aprovar.",
  },
  {
    role: "Diretor Comercial",
    location: "São Paulo (SP)",
    quote: "Na prática: eu parei de perder tempo com logística. O Alisson alinha horário, reserva, motorista, janela de chegada… e você só recebe a confirmação pronta. Quando muda alguma coisa, ele já aparece com o plano B.",
  },
  {
    role: "Empresária",
    location: "Rio Grande do Sul (RS)",
    quote: "Eu valorizo discrição e odeio ruído. O Alisson é direto, rápido e muito cuidadoso. Ele cuidou de voos, reservas e mobilidade do jeito que eu gosto: sem exposição, sem atrito, só funcionando.",
  },
  {
    role: "Diretora de Operações",
    location: "Brasília (DF)",
    quote: "Eu coloquei o Alisson na minha rotina e senti a diferença na primeira semana. Reserva em cima da hora, troca de voo, carro na porta no horário… tudo fluiu. É aquele tipo de suporte que dá paz.",
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const getVisibleTestimonials = useCallback(() => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  return (
    <section id="depoimentos" className="section-spacing border-b border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      <div className="container-premium relative">
        <h2 className="scroll-reveal text-center font-display text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground mb-14">
          O que dizem os clientes
        </h2>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 border border-primary/30"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 border border-primary/30"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid gap-6 md:grid-cols-3 px-8 md:px-12">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.originalIndex}-${currentIndex}`}
                className="card-premium p-6 md:p-8 relative group hover:border-primary/40 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto">
                  <p className="font-display font-semibold text-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-6 bg-primary" 
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Authorization Note */}
        <p className="scroll-reveal text-center text-sm text-muted-foreground mt-10">
          * Depoimentos publicados com autorização prévia dos clientes.
        </p>
      </div>
    </section>
  );
}
