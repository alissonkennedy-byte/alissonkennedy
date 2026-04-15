import { motion } from "framer-motion";
import { Check } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20Alisson!%20Quero%20agendar%20minha%20implementa%C3%A7%C3%A3o.";

export function PricingSection() {
  return (
    <section id="investimento" className="py-16 md:py-28 relative">
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--neon)) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="label-accent">Engenharia Financeira</span>
          <h2 className="mt-3 font-display text-2xl md:text-3xl lg:text-5xl font-bold text-foreground">
            Uma parceria verdadeira,{" "}
            <span className="text-primary">sem letras miúdas.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto glass-card p-6 sm:p-10 md:p-14 relative overflow-hidden neon-glow"
          style={{ borderColor: "hsl(var(--neon) / 0.4)" }}
        >
          <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: "inset 0 0 80px hsl(var(--neon) / 0.04)" }} />

          <div className="relative z-10 space-y-8 md:space-y-10">
            <div>
              <p className="label-accent mb-2">Setup VIP (Implementação)</p>
              <p className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary">R$ 497<span className="text-xl sm:text-2xl text-muted-foreground">,00</span></p>
              <p className="text-muted-foreground text-sm mt-1 font-body">Pagamento Único</p>
              <ul className="mt-4 md:mt-6 space-y-2.5 md:space-y-3">
                {[
                  "Personalização completa com suas cores e identidade",
                  "Setup do servidor e estruturação do catálogo",
                  "Integração nativa SuperFrete + PagSeguro",
                  "Entregue funcionando, pronto para vender",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground font-body">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border" />

            <div>
              <p className="label-accent mb-2">Manutenção Fixa</p>
              <p className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground">
                R$ 149<span className="text-xl sm:text-2xl text-muted-foreground">,90/mês</span>
              </p>
              <p className="text-muted-foreground text-sm mt-1 font-body">Congelado em Contrato</p>
              <ul className="mt-4 md:mt-6 space-y-2.5 md:space-y-3">
                {[
                  "Banco de dados seguro e estabilidade garantida",
                  "Suporte direto com o desenvolvedor",
                  "Domínio gratuito no primeiro ano",
                  "Zero comissões sobre suas vendas!",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground font-body">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta w-full py-4 md:py-5 text-xs md:text-sm"
              style={{ animation: "pulse-neon 3s ease-in-out infinite" }}
            >
              Agendar Minha Implementação
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
