import { motion } from "framer-motion";
import { Trophy, Wrench, Handshake } from "lucide-react";

const highlights = [
  {
    icon: Trophy,
    title: "Liderança comprovada",
    desc: "Experiências em grandes corporações",
  },
  {
    icon: Wrench,
    title: "Execução direta",
    desc: "Sem equipe intermediária, você fala com quem resolve",
  },
  {
    icon: Handshake,
    title: "Rede qualificada",
    desc: "Parceiros estratégicos em mobilidade e negócios",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="section-spacing" style={{ backgroundColor: "hsl(220 26% 9%)" }}>
      <div className="container-premium">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[3/4] md:aspect-[4/5] rounded-lg overflow-hidden bg-secondary flex items-center justify-center"
          >
            <img
              src={perfilImg}
              alt="Alisson Kennedy"
              className="w-full h-full object-cover"
            />
            {/* Replace with real photo */}
          </motion.div>

          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="label-accent mb-4"
            >
              Quem está por trás
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            >
              Alisson Kennedy
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 space-y-4"
            >
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
                Com passagens por Itaú, Cargill, BTG Pactual, Nestlé, Disney, Adidas e Shopee,
                Alisson Kennedy construiu uma trajetória sólida em Recursos Humanos,
                Comunicação Corporativa e Desenvolvimento de Negócios.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
                Hoje, opera como ponto único de contato para quem precisa de execução
                real — sem intermediários, sem ruído, com o padrão de quem conhece
                os dois lados do balcão.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 3 highlight cards */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16 md:mt-20">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-lg bg-background/50 border border-border"
            >
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/10 shrink-0">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-body text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}