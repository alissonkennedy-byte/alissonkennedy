import { motion } from "framer-motion";

const clients = [
  "Hinode Group",
  "Prosegur",
  "doTERRA",
  "BB Seguros",
  "Etapa Educacional",
  "Personalidades e autoridades nacionais, federais e internacionais",
];

export function ClientsSection() {
  return (
    <section id="clientes" className="section-spacing" style={{ backgroundColor: "hsl(0 0% 8%)" }}>
      <div className="container-premium">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="label-accent text-center mb-4"
        >
          Histórico de atuação
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center max-w-3xl mx-auto"
        >
          Eventos realizados para quem exige padrão
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto"
        >
          Uma trajetória construída junto a organizações que não abrem mão
          de qualidade, pontualidade e discrição.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {clients.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center justify-center p-6 rounded-lg border border-border bg-card text-center transition-all duration-300 hover:border-primary/40"
            >
              <span className="font-body text-sm text-foreground font-medium tracking-wide">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center text-primary/80 italic text-sm font-display"
        >
          Nomes omitidos por protocolo de confidencialidade.
        </motion.p>
      </div>
    </section>
  );
}
