import { motion } from "framer-motion";
import { Palette, Globe, Share2 } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20Alisson!%20Quero%20saber%20sobre%20os%20servi%C3%A7os%20de%20branding.";

const extras = [
  { icon: Palette, label: "Logotipos Profissionais" },
  { icon: Globe, label: "Sites Institucionais" },
  { icon: Share2, label: "Redes Sociais" },
];

export function ExtrasSection() {
  return (
    <section id="extras" className="py-16 md:py-28 relative">
      <div className="relative z-10 container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 sm:p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-48 h-48 rounded-full opacity-10 blur-[80px] pointer-events-none" style={{ background: "hsl(var(--neon))" }} />

          <div className="relative z-10">
            <span className="label-accent">Ecossistema Completo</span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Precisa ir além do Aplicativo?
            </h2>
            <p className="mt-3 md:mt-4 text-muted-foreground text-sm md:text-base max-w-2xl mx-auto font-body leading-relaxed">
              Oferecemos consultoria completa de Branding: Criação de Logotipos Profissionais, Sites Institucionais e Estruturação de Redes Sociais.
            </p>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
              {extras.map((e, i) => (
                <motion.div
                  key={e.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 glass-card px-5 py-3.5 md:px-6 md:py-4"
                >
                  <e.icon className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground font-body">{e.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 md:mt-10"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-8 md:px-10 py-3.5 md:py-4 text-xs md:text-sm"
              >
                Consultar Valores no WhatsApp
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
