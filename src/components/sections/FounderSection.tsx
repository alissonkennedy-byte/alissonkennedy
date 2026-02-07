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
            <h2 className="scroll-reveal font-display text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground">
              A Estratégia por trás da Operação
            </h2>
            <p className="scroll-reveal reveal-delay-1 mt-6 text-muted-foreground leading-relaxed">
              Alisson Kennedy não atua apenas como concierge, mas como{" "}
              <span className="text-foreground font-medium">
                estrategista pessoal
              </span>
              . Com background em Relações Públicas e Logística Executiva,
              fundou o Private Office para preencher a lacuna entre o
              secretariado comum e a gestão de grandes fortunas. É o ponto focal
              de confiança para quem decide o futuro de grandes negócios.
            </p>
            <div className="scroll-reveal reveal-delay-2 mt-8 flex items-center justify-center lg:justify-start gap-5">
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
              className="scroll-reveal reveal-delay-3 btn-primary mt-10 inline-flex"
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
