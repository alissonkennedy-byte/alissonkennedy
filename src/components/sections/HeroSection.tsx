import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20Alisson!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
          alt="Evento corporativo de grande porte com iluminação profissional"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Gold gradient glow */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container-premium text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]"
        >
          Especialista em Eventos{" "}
          <br className="hidden md:block" />
          <span className="text-primary">Corporativos e Sociais</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-6 md:mt-8 text-muted-foreground text-base md:text-lg max-w-3xl mx-auto font-body leading-relaxed"
        >
          Planejamento completo, produção integrada e logística de ponta a ponta. Do primeiro contato à última entrega.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-4 text-sm w-full sm:w-auto"
          >
            Solicitar Orçamento
          </a>
          <a href="#servicos" className="btn-outline px-10 py-4 text-sm w-full sm:w-auto">
            Conhecer os Serviços
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 md:mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {["Atuação nacional", "Atendimento direto", "Eventos sociais e corporativos", "Logística integrada"].map((item) => (
            <span key={item} className="text-muted-foreground text-xs font-body tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

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
