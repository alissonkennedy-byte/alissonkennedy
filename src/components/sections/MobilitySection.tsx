import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20Alisson!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20transfer%20executivo.";

export function MobilitySection() {
  return (
    <section id="mobilidade" className="section-spacing" style={{ backgroundColor: "hsl(0 0% 8%)" }}>
      <div className="container-premium">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="label-accent mb-4"
            >
              Parceria Estratégica
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            >
              Mobilidade executiva integrada ao seu evento
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-muted-foreground text-base leading-relaxed max-w-lg"
            >
              Para garantir que a experiência comece antes mesmo da chegada,
              a Alisson Kennedy Company atua em parceria com a Maiori Mobilidade —
              referência nacional em transporte executivo e transfer corporativo.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-muted-foreground text-base leading-relaxed max-w-lg"
            >
              Motoristas treinados, frota premium e cobertura em todo o Brasil.
              Uma extensão natural do serviço, para que a logística terrestre
              do seu evento seja tão precisa quanto o evento em si.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Solicitar Transfer
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=1920&q=80"
              alt="Transfer executivo para eventos corporativos — veículo premium"
              className="w-full rounded-lg object-cover aspect-[4/3]"
              width={800}
              height={600}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
