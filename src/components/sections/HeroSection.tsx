import { Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20acesso%20ao%20Private%20Office.";

export function HeroSection() {
  return (
    <section className="section-spacing-lg border-b border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/20 pointer-events-none" />
      <div className="container-premium relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-semibold mb-8 border border-primary/30">
            <Sparkles className="h-4 w-4" />
            Private Office
          </div>

          <h1 className="animate-fade-up font-display text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground">
            Alisson Kennedy
            <br />
            <span className="text-gold-gradient">Private Office</span>
          </h1>

          <h2 className="animate-fade-up-delay-1 mt-6 font-display text-lg font-medium md:text-xl lg:text-2xl text-muted-foreground">
            Lifestyle Strategy & Intelligence.
            <br />
            <span className="text-foreground">
              O Hub de gestão operacional executiva e pessoal em São Paulo.
            </span>
          </h2>

          <p className="animate-fade-up-delay-2 mt-8 text-base text-muted-foreground md:text-lg leading-relaxed max-w-2xl mx-auto">
            Não vendemos tempo. Vendemos o privilégio de não precisar escolher.
            Uma estrutura de bastidores desenhada para garantir{" "}
            <span className="text-primary font-medium">fluidez absoluta</span>.
          </p>

          <div
            className="animate-fade-up mt-12 flex justify-center"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-5"
            >
              Solicitar Triagem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
