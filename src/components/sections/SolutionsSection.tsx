import { motion } from "framer-motion";
import { Sparkles, Car, TrendingUp } from "lucide-react";

const WHATSAPP_URLS = {
  privateOffice: "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20acesso%20ao%20Private%20Office.",
  mobilidade: "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20Mobilidade%20Executiva.",
  negocios: "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20Novos%20Neg%C3%B3cios.",
};

const solutions = [
  {
    icon: Sparkles,
    title: "Private Office",
    body: "Gestão de agenda, viagens, eventos e demandas pessoais de alto padrão. Atendimento em São Paulo e Riviera de São Lourenço.",
    tag: "Sob demanda",
    cta: "Solicitar",
    whatsapp: "privateOffice" as const,
  },
  {
    icon: Car,
    title: "Mobilidade Executiva",
    body: "Transporte executivo com cobertura nacional via Velux Mobility e Maiori Mob. Motoristas treinados, veículos premium, atendimento corporativo.",
    tag: "Nacional",
    cta: "Solicitar",
    whatsapp: "mobilidade" as const,
  },
  {
    icon: TrendingUp,
    title: "Novos Negócios",
    body: "Prospecção, parcerias estratégicas e desenvolvimento comercial. Atuação ativa em expansão de marcas e abertura de canais.",
    tag: "Parcerias",
    cta: "Conversar",
    whatsapp: "negocios" as const,
  },
];

export function SolutionsSection() {
  return (
    <section id="solucoes" className="section-spacing">
      <div className="container-premium">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="label-accent text-center mb-4"
        >
          O que fazemos
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center max-w-3xl mx-auto"
        >
          Soluções sob medida, entregues pessoalmente.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mt-14 md:mt-16">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative flex flex-col rounded-lg border-t-2 border-primary p-8 transition-all duration-500 hover:shadow-[0_0_30px_hsl(43_55%_53%/0.1)] hover:-translate-y-1"
              style={{ backgroundColor: "hsl(220 26% 9%)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <s.icon className="h-5 w-5 text-primary" />
                <span className="font-body text-xs font-medium tracking-wider uppercase text-primary border border-primary/30 rounded-full px-3 py-1">
                  {s.tag}
                </span>
              </div>

              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
                {s.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                {s.body}
              </p>

              <a
                href={WHATSAPP_URLS[s.whatsapp]}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-semibold text-primary tracking-wide uppercase transition-colors hover:text-foreground"
              >
                {s.cta} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}