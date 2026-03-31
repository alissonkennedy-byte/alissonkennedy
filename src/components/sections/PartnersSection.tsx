import { motion } from "framer-motion";

const partners = [
  {
    name: "Velux Mobility",
    desc: "Operação regional SP, padrão Velux",
  },
  {
    name: "Maiori Mob",
    desc: "Mobilidade executiva, cobertura nacional",
  },
  {
    name: "Dio Mio Gelato",
    desc: "Desenvolvimento de novos negócios e parcerias",
  },
];

export function PartnersSection() {
  return (
    <section id="parceiros" className="section-spacing">
      <div className="container-premium">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="label-accent text-center mb-4"
        >
          Ecossistema de parceiros
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center"
        >
          Estrutura real por trás de cada entrega
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-6 mt-14 md:mt-16">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-lg border border-border p-8 text-center transition-all duration-500 hover:border-primary/50"
              style={{ backgroundColor: "hsl(220 26% 9%)" }}
            >
              {/* Logo placeholder */}
              <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-secondary flex items-center justify-center">
                <span className="font-display text-xl font-bold text-primary">
                  {p.name.charAt(0)}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {p.name}
              </h3>

              <p className="text-sm text-muted-foreground font-body">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}