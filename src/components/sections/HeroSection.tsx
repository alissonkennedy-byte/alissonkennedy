import heroImage from "@/assets/alisson-kennedy.png";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20acesso%20ao%20Private%20Office.";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with B&W + dark overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Executive environment"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="animate-fade-up font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground uppercase">
          Alisson Kennedy
        </h1>

        <p className="animate-fade-up-delay-1 mt-4 text-xl md:text-2xl lg:text-3xl font-light tracking-[0.3em] uppercase text-foreground/80">
          Private Office
        </p>

        <div className="animate-fade-up-delay-2 mt-8 mx-auto w-20 h-px bg-primary" />

        <p className="animate-fade-up-delay-2 mt-8 text-primary text-base md:text-lg font-medium tracking-widest uppercase">
          Gestão Executiva. Discrição. Resultado.
        </p>

        <div className="animate-fade-up-delay-3 mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-12 py-5"
          >
            Solicite sua triagem
          </a>
        </div>
      </div>
    </section>
  );
}
