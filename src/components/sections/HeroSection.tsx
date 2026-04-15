import { motion } from "framer-motion";
import appMockup from "@/assets/app-mockup.png";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20Alisson!%20Vim%20pelo%20site%20e%20quero%20blindar%20minha%20opera%C3%A7%C3%A3o.";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-10 blur-[150px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--emerald)) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container-premium">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.1]"
            >
              Pare de Perder Vendas para o Caos.{" "}
              <span className="text-primary">Tenha um Aplicativo Próprio com Estoque Blindado.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 md:mt-8 text-muted-foreground text-base md:text-lg max-w-xl font-body leading-relaxed"
            >
              A maioria das plataformas cobra caro para engessar o seu negócio. Eu construo o seu próprio ecossistema mobile: sem taxas ocultas, com a inteligência de quem entende o seu processo e com o pedido caindo pronto no seu celular.
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
                style={{ animation: "pulse-emerald 3s ease-in-out infinite" }}
              >
                Quero Blindar Minha Operação
              </a>
              <a href="#arsenal" className="btn-outline px-10 py-4 text-sm w-full sm:w-auto">
                Ver o Arsenal
              </a>
            </motion.div>
          </div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={appMockup}
              alt="Mockup de aplicativo de e-commerce com controle de estoque e carrinho inteligente"
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
