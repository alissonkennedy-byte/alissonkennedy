import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20Alisson.";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gold gradient glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(43 55% 53%) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container-premium text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.1]"
        >
          Aqui, cada demanda{" "}
          <br className="hidden md:block" />
          tem <span className="text-primary">solução.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-6 md:mt-8 text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-body leading-relaxed"
        >
          Mobilidade. Lifestyle. Novos negócios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#solucoes" className="btn-primary px-10 py-4 text-sm">
            Conheça as soluções
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-10 py-4 text-sm"
          >
            Falar agora
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground animate-bounce-subtle" />
      </motion.div>
    </section>
  );
}