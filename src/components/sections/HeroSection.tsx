import { motion } from "framer-motion";
import appMockup from "@/assets/app-mockup.png";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20Alisson!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20o%20aplicativo.";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-15 blur-[150px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--neon)) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--neon)) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container-premium">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="label-accent">Arquiteto de Negócios Digitais</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-[1.08]"
            >
              Sua loja merece mais do que o caos do WhatsApp.{" "}
              <span className="text-primary">Transforme suas vendas em um Aplicativo Premium.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 md:mt-8 text-muted-foreground text-base md:text-lg max-w-xl font-body leading-relaxed"
            >
              Desenvolvimento focado em pequenos e médios negócios. Acabe com os furos de estoque, fuja das taxas abusivas de plataformas e entregue uma experiência de compra de alto padrão para o seu cliente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta px-10 py-4 text-sm w-full sm:w-auto"
                style={{ animation: "pulse-neon 3s ease-in-out infinite" }}
              >
                Falar com o Alisson no WhatsApp
              </a>
              <a href="#solucao" className="btn-outline px-10 py-4 text-sm w-full sm:w-auto">
                Ver a Solução
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={appMockup}
              alt="Mockup de aplicativo mobile premium para e-commerce"
              width={500}
              height={500}
              className="w-full max-w-[420px] lg:max-w-[500px] drop-shadow-2xl"
              style={{ animation: "float 4s ease-in-out infinite" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
