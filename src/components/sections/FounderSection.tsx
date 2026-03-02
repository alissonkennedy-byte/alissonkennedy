import { Instagram, Linkedin } from "lucide-react";
import alissonPhoto from "@/assets/alisson-kennedy.png";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20acesso%20ao%20Private%20Office.";

export function FounderSection() {
  return (
    <section id="founder" className="section-spacing border-b border-border">
      <div className="container-premium">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          {/* Texto à esquerda */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="scroll-reveal text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-6">
              Sobre o Founder
            </p>

            <h2 className="scroll-reveal font-display text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground leading-tight">
              A Estratégia por trás da Operação
            </h2>

            <div className="scroll-reveal reveal-delay-1 mt-4 mx-auto lg:mx-0 w-16 h-px bg-gradient-to-r from-primary/50 via-primary/50 to-transparent" />

            <p className="scroll-reveal reveal-delay-1 mt-8 text-muted-foreground leading-[1.85] tracking-wide">
              Alisson Kennedy traz para a gestão de lifestyle o rigor e a{" "}
              <span className="text-foreground font-medium">governança</span>{" "}
              das grandes corporações. Com{" "}
              <span className="text-foreground font-medium">
                MBA em Marketing
              </span>{" "}
              pela{" "}
              <span className="text-foreground font-medium">
                Universidade de São Paulo (USP)
              </span>{" "}
              e background em Relações Públicas, construiu sua trajetória
              gerenciando ativos de alto valor e stakeholders estratégicos em
              gigantes como Banco do Brasil Seguros e Prosegur.
            </p>
            <p className="scroll-reveal reveal-delay-2 mt-5 text-muted-foreground leading-[1.85] tracking-wide">
              Sua expertise não se limita a executar tarefas; é moldada pela
              gestão de crises, negociações complexas e logística de eventos de
              grande porte. Do agronegócio ao mercado de luxo, Alisson traduz a
              eficiência corporativa para a vida privada, atuando como o{" "}
              <span className="text-foreground font-medium">
                principal assistente pessoal e gestor de rotina
              </span>{" "}
              para executivos e famílias que exigem bastidores impecáveis.
            </p>
            <div className="scroll-reveal reveal-delay-3 mt-8 flex items-center justify-center lg:justify-start gap-5">
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
              className="scroll-reveal reveal-delay-4 btn-primary mt-10 inline-flex tracking-wide"
            >
              Solicitar Triagem
            </a>
          </div>

          {/* Foto à direita */}
          <div className="order-1 lg:order-2 scroll-reveal-scale flex justify-center lg:justify-end">
            <img
              src={alissonPhoto}
              alt="Alisson Kennedy — Founder, Private Office"
              className="w-80 h-80 md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-2xl object-cover border-4 border-primary/30 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
