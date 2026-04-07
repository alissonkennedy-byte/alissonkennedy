import { motion } from "framer-motion";
import { GraduationCap, UserCheck, MapPin } from "lucide-react";
import perfilImg from "@/assets/perfil-about.png";

const highlights = [
  {
    icon: GraduationCap,
    title: "Formação Técnica",
    text: "Relações Públicas e MBA em Marketing",
  },
  {
    icon: UserCheck,
    title: "Atendimento Direto",
    text: "Você fala com quem executa, do início ao fim",
  },
  {
    icon: MapPin,
    title: "Atuação Nacional",
    text: "Eventos em qualquer cidade do Brasil",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="section-spacing" style={{ backgroundColor: "hsl(0 0% 8%)" }}>
      <div className="container-premium">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={perfilImg}
              alt="Alisson Kennedy — especialista em eventos corporativos e sociais em São Paulo"
              className="w-full max-w-md mx-auto rounded-lg object-cover"
              width={500}
              height={600}
              loading="lazy"
            />
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
              Especialista
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-muted-foreground text-base leading-relaxed max-w-lg"
            >
              Formado em Relações Públicas e com MBA em Marketing, Alisson Kennedy
              acumula mais de uma década de atuação na produção e gestão de eventos
              corporativos e sociais em todo o Brasil. Cada projeto é conduzido
              diretamente por ele — sem intermediários, sem ruídos e sem espaço para
              improviso.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-muted-foreground text-base leading-relaxed max-w-lg"
            >
              Sua trajetória inclui eventos para grandes empresas nacionais e
              multinacionais, personalidades de expressão nacional, figuras do cenário
              federal e convidados internacionais. Um histórico construído na prática,
              com metodologia, discrição e entrega real.
            </motion.p>
          </div>
        </div>

        {/* Highlight blocks */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-lg border border-border bg-card"
            >
              <h.icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">{h.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{h.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
