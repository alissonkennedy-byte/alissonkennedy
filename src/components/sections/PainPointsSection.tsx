import { motion } from "framer-motion";
import { PackageX, MessageSquareX, Landmark } from "lucide-react";

const painPoints = [
  {
    icon: PackageX,
    title: "O Furo de Estoque",
    description:
      "Vender o que não tem na prateleira gera frustração e destrói a sua reputação com o cliente.",
  },
  {
    icon: MessageSquareX,
    title: "O Atendimento Desorganizado",
    description:
      "Perder vendas porque a mensagem se perdeu no meio de dezenas de conversas.",
  },
  {
    icon: Landmark,
    title: "A Armadilha das Plataformas",
    description:
      "Pagar aluguéis caros e taxas por cada venda em sistemas que não são seus.",
  },
];

export function PainPointsSection() {
  return (
    <section id="dores" className="section-spacing relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-8 blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--neon)) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="label-accent">Compreensão Real</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Nós sabemos o quanto é difícil{" "}
            <span className="text-primary">administrar tudo sozinho.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card p-8 text-center group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <point.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
