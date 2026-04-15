import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20Alisson!%20Quero%20conversar%20sobre%20meu%20aplicativo.";

export function CtaSection() {
  return (
    <section id="contato" className="section-spacing relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--neon)) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container-premium text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto"
        >
          Pronto para transformar o seu negócio?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-muted-foreground text-base max-w-xl mx-auto font-body"
        >
          Fale diretamente comigo e descubra como ter um aplicativo próprio, com estoque blindado e vendas no automático.
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
            className="btn-cta px-12 py-5 text-sm w-full sm:w-auto"
            style={{ animation: "pulse-neon 3s ease-in-out infinite" }}
          >
            Falar com o Alisson no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
