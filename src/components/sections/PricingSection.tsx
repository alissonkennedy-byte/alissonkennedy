import { motion } from "framer-motion";
import { Check } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20Alisson!%20Quero%20agendar%20minha%20implementa%C3%A7%C3%A3o.";

export function PricingSection() {
  return (
    <section id="investimento" className="section-spacing relative">
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="label-accent">Modelo de Negócio</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Tecnologia de Plataforma Grande.{" "}
            <span className="text-accent">Preço de Parceria.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto glass-card p-10 md:p-14 relative overflow-hidden"
          style={{ borderColor: "hsl(var(--gold) / 0.4)" }}
        >
          {/* Gold border glow */}
          <div className="absolute inset-0 rounded-xl pointer-events-none" style={{ boxShadow: "inset 0 0 60px hsl(var(--gold) / 0.05)" }} />

          <div className="relative z-10 space-y-10">
            {/* Setup */}
            <div>
              <p className="label-accent mb-2">Pacote VIP de Implementação</p>
              <p className="font-display text-5xl md:text-6xl font-bold text-accent">R$ 497<span className="text-2xl text-muted-foreground">,00</span></p>
              <p className="text-muted-foreground text-sm mt-1 font-body">Setup Único</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Personalização completa da sua vitrine digital",
                  "Estruturação do catálogo de produtos",
                  "Integração nativa SuperFrete + PagSeguro",
                  "Entregue funcionando, pronto para vender",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground font-body">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border" />

            {/* Monthly */}
            <div>
              <p className="label-accent mb-2">Licença Fixa de Manutenção</p>
              <p className="font-display text-5xl md:text-6xl font-bold text-foreground">
                R$ 149<span className="text-2xl text-muted-foreground">,90/mês</span>
              </p>
              <p className="text-muted-foreground text-sm mt-1 font-body">Congelado em Contrato</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Hospedagem de alta performance",
                  "Banco de dados robusto e escalável",
                  "Domínio gratuito no primeiro ano",
                  "Zero taxas sobre o seu volume de vendas",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground font-body">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta w-full py-5 text-sm"
              style={{ animation: "pulse-emerald 3s ease-in-out infinite" }}
            >
              Agendar Minha Implementação
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
