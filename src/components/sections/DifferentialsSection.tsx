import { ShieldCheck, Zap, GraduationCap, Network, UserCheck, Lock } from "lucide-react";

const differentials = [
  { icon: ShieldCheck, title: "Discrição absoluta" },
  { icon: Zap, title: "Perfil executor" },
  { icon: GraduationCap, title: "Formação em Relações Públicas" },
  { icon: Network, title: "Rede consolidada" },
  { icon: UserCheck, title: "Atendimento sem intermediários" },
  { icon: Lock, title: "Vagas limitadas" },
];

export function DifferentialsSection() {
  return (
    <section className="section-spacing" style={{ backgroundColor: "hsl(0 0% 10%)" }}>
      <div className="container-premium">
        <div className="text-center mb-14">
          <h2 className="scroll-reveal font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Por que eu
          </h2>
          <div className="scroll-reveal reveal-delay-1 mt-4 mx-auto w-16 h-px bg-primary/50" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
          {differentials.map((item, index) => (
            <div
              key={index}
              className={`scroll-reveal reveal-delay-${index + 1} flex flex-col items-center text-center gap-4`}
            >
              <div className="h-14 w-14 rounded-full flex items-center justify-center border border-primary/30"
                style={{ backgroundColor: "hsl(43 78% 46% / 0.1)" }}
              >
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm md:text-base font-medium text-foreground tracking-wide">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
