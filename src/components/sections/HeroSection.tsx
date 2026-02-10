import { Sparkles } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20acesso%20ao%20Private%20Office.";

export function HeroSection() {
  return (
    <section className="section-spacing-lg border-b border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/20 pointer-events-none" />
      <div className="container-premium relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-semibold mb-10 border border-primary/30">
            <Sparkles className="h-4 w-4" />
            Private Office
          </div>

          <h1 className="animate-fade-up font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-[3.5rem] leading-[1.15] text-foreground">
            <span className="text-gold-gradient">Lifestyle Strategy</span>
            <br />
            <span className="text-gold-gradient">& Intelligence.</span>
          </h1>

          <div className="animate-fade-up-delay-1 mt-8 mx-auto w-12 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <h2 className="animate-fade-up-delay-1 mt-8 font-display text-lg font-medium md:text-xl lg:text-2xl leading-relaxed text-muted-foreground">
            A governança que você exige na sua empresa,
            <br />
            <span className="text-foreground font-semibold">
              agora aplicada à sua vida pessoal.
            </span>
          </h2>

          <p className="animate-fade-up-delay-2 mt-8 text-base text-muted-foreground/80 md:text-lg leading-relaxed max-w-2xl mx-auto tracking-wide">
            Uma estrutura de bastidores desenhada para garantir{" "}
            <span className="text-primary font-medium">fluidez absoluta</span>{" "}
            na vida de quem não pode parar.
          </p>

          <div
            className="animate-fade-up mt-14 flex justify-center"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-5 tracking-wide"
            >
              Solicitar Acesso ao Private Office
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
