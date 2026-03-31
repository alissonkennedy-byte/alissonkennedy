import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20Alisson.";

export function CtaSection() {
  return (
    <section id="contato" className="relative section-spacing overflow-hidden">
      {/* Gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(43 55% 53%) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container-premium text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground max-w-3xl mx-auto"
        >
          Tem uma demanda.{" "}
          <span className="text-primary">Eu tenho a solução.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-muted-foreground text-base md:text-lg font-body"
        >
          Sem formulários longos. Sem espera. Uma mensagem resolve.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-12 py-5 text-base"
            style={{ animation: "pulse-gold 3s ease-in-out infinite" }}
          >
            Falar com Alisson no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}