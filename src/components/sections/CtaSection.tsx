import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20Alisson!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

export function CtaSection() {
  return (
    <section id="contato" className="section-spacing relative overflow-hidden">
      {/* Gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container-premium text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto"
        >
          Seu próximo evento começa com uma conversa.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-muted-foreground text-base max-w-xl mx-auto"
        >
          Sem formulários longos. Sem espera. Entre em contato diretamente
          e receba uma proposta alinhada à sua demanda.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-12 py-5 text-sm w-full sm:w-auto"
            style={{ animation: "pulse-gold 3s ease-in-out infinite" }}
          >
            Falar com Alisson no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
