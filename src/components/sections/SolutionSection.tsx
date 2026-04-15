import { motion } from "framer-motion";
import { ShieldCheck, Smartphone, Store } from "lucide-react";

const solutions = [
  {
    icon: ShieldCheck,
    title: "Trava Absoluta de Estoque",
    description:
      "O cliente só consegue colocar no carrinho o que você realmente tem físico. Fim das vendas duplicadas.",
  },
  {
    icon: Smartphone,
    title: "Design Mobile Premium",
    description:
      "Navegação intuitiva, rápida e projetada para máxima facilidade de uso em telas de celular.",
  },
  {
    icon: Store,
    title: "Sua Marca no Topo",
    description:
      "O aplicativo é entregue com o nome personalizado do seu negócio e domínio próprio.",
  },
];

export function SolutionSection() {
  return (
    <section id="solucao" className="py-16 md:py-28 relative">
      <div className="relative z-10 container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="label-accent">O Motor Tecnológico</span>
          <h2 className="mt-3 font-display text-2xl md:text-3xl lg:text-5xl font-bold text-foreground max-w-4xl mx-auto">
            A tecnologia que as grandes agências cobram fortunas,{" "}
            <span className="text-primary">agora acessível para o seu negócio.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card p-6 md:p-8 relative overflow-hidden group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 blur-[50px] pointer-events-none" style={{ background: "hsl(var(--neon))" }} />
              <div className="relative z-10">
                <div className="mb-4 md:mb-6 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
