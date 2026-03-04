import { Sparkles } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20acesso%20ao%20Private%20Office.";

export function HeroSection() {
  return (
    <section className="min-h-screen border-b border-border relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/20 pointer-events-none" />
      <div className="container-premium relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text + CTA */}
          <div className="text-center md:text-left py-20 md:py-0">
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-semibold mb-10 border border-primary/30">
              <Sparkles className="h-4 w-4" />
              Private Office
            </div>

            <h1 className="animate-fade-up font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-[3.5rem] leading-[1.15] text-foreground">
              <span className="text-gold-gradient">Você decide.</span>
              <br />
              <span className="text-gold-gradient">Nós resolvemos.</span>
            </h1>

            <div className="animate-fade-up-delay-1 mt-8 w-12 h-px bg-gradient-to-r from-primary/60 via-primary/60 to-transparent md:mx-0 mx-auto" />

            <h2 className="animate-fade-up-delay-1 mt-8 font-display text-lg font-medium md:text-xl lg:text-2xl leading-relaxed text-muted-foreground">
              A governança que você exige na sua empresa,
              <br />
              <span className="text-foreground font-semibold">
                agora aplicada à sua vida pessoal.
              </span>
            </h2>

            <p className="animate-fade-up-delay-2 mt-8 text-base text-muted-foreground/80 md:text-lg leading-relaxed max-w-xl tracking-wide">
              Concierge pessoal e intermediação de demandas para executivos, empresários e famílias de alto padrão em São Paulo.{" "}
              <span className="text-primary font-medium">Discrição total</span>. Execução impecável.
            </p>

            <div
              className="animate-fade-up mt-14 flex justify-center md:justify-start"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-12 py-6 tracking-wide"
              >
                Solicitar Acesso ao Private Office
              </a>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="hidden md:flex justify-end items-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-2xl blur-xl" />
              <img
                src={heroPortrait}
                alt="Alisson Kennedy — Private Office"
                className="relative w-full max-w-[480px] h-[600px] lg:h-[700px] object-cover object-top rounded-2xl border border-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
