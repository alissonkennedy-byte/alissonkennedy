import { motion } from "framer-motion";
import { ClipboardList, Building2, Star, Package, Users, Calculator } from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "Pré-produção e Planejamento",
    body: "Briefing, cronograma, orçamento, definição de fornecedores e mapeamento de riscos. A base que garante que a execução funcione.",
  },
  {
    icon: Building2,
    title: "Produção de Eventos Corporativos",
    body: "Convenções, lançamentos, premiações, congressos e reuniões de alto nível. Gestão completa com padrão corporativo real.",
  },
  {
    icon: Star,
    title: "Eventos Sociais",
    body: "Celebrações, formaturas, confraternizações e encontros exclusivos. Produção com curadoria de fornecedores, cenografia e experiência dos convidados.",
  },
  {
    icon: Package,
    title: "Logística e Fornecedores",
    body: "Seleção e coordenação de fornecedores, negociação, contratos e acompanhamento em tempo real. Logística aérea e terrestre integradas.",
  },
  {
    icon: Users,
    title: "Cerimonial e Coordenação no Evento",
    body: "Presença on-site, gestão do cerimonial, alinhamento de equipes e resolução de imprevistos com discrição e rapidez.",
  },
  {
    icon: Calculator,
    title: "Orçamento e Viabilidade",
    body: "Levantamento detalhado de custos, análise de viabilidade e apresentação de proposta personalizada para o seu tipo de evento.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="section-spacing">
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
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center max-w-4xl mx-auto"
        >
          Organização completa de eventos corporativos e sociais
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto"
        >
          Da pré-produção ao encerramento, cada fase gerenciada com
          precisão, foco no resultado e zero margem para improvisos.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-lg border border-border p-8 bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(38_38%_60%/0.1)] hover:-translate-y-1"
            >
              <s.icon className="h-6 w-6 text-primary mb-5" />

              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {s.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {s.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
