import { TrendingUp } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export default function FoodService() {
  return (
    <ServicePage
      label="SDR e Estratégia Comercial para Food Service"
      title="Prospecção que"
      titleHighlight="fecha negócio"
      subtitle="Desenvolvimento comercial especializado no setor de food service. Qualificação de leads, pipeline estruturado e estratégia de vendas com foco em ROI real e crescimento que escala."
      imageSrc="/foto_atuacao_sdr_copy.jpg"
      imageAlt="SDR e estratégia comercial para food service e restaurantes"
      accentColor="#22c55e"
      accentColorHsl="142 71% 45%"
      icon={<TrendingUp size={28} />}
      waMessage="Olá Alisson! Vi seu site e quero conversar sobre prospecção e estratégia comercial no food service. Podemos falar?"
      intro="Crescer no food service exige mais do que bom produto. Exige processo comercial eficiente, abordagem certeira e qualificação rigorosa antes de qualquer reunião. Construo pipelines que realmente convertem, com metodologia testada e foco absoluto em resultado financeiro."
      bullets={[
        "Prospecção outbound estruturada",
        "Qualificação de leads com BANT e SPIN",
        "Mapeamento do perfil ideal de cliente",
        "Cadências multicanal com sequências testadas",
        "Estruturação de CRM e funil de vendas",
        "Treinamento de equipes SDR",
        "Análise competitiva e posicionamento",
        "Relatórios de performance com KPIs claros",
      ]}
      features={[
        {
          title: "Prospecção Estratégica",
          description:
            "Identificação e abordagem dos leads certos usando cold calling, cold email e social selling com sequências que já funcionam no setor de alimentação e food service.",
        },
        {
          title: "Qualificação de Alta Precisão",
          description:
            "BANT, SPIN e MEDDIC aplicados para filtrar oportunidades reais antes de chegar ao time de vendas. Menos reunião improdutiva, mais fechamento.",
        },
        {
          title: "Mapeamento de ICP",
          description:
            "Definição clara do perfil ideal de cliente para o food service: ticket médio, porte, região geográfica e potencial de LTV. Segmentação que direciona esforço certo.",
        },
        {
          title: "Estrutura de Pipeline",
          description:
            "CRM configurado, etapas do funil definidas, automações de follow-up e dashboard de performance para que você saiba exatamente onde está cada oportunidade.",
        },
        {
          title: "Estratégia Go-to-Market",
          description:
            "Planejamento de entrada em novos canais ou mercados dentro do food service com análise de concorrência, proposta de valor diferenciada e roteiro de execução.",
        },
        {
          title: "Playbook Comercial",
          description:
            "Manual de vendas completo para o seu time, com scripts, objeções mapeadas e processos documentados. O resultado não depende só de mim.",
        },
      ]}
      ctaText="Falar com Alisson"
      relatedPages={[
        { label: "Marketing e Marca", href: "/marketing" },
        { label: "Web Apps e IA", href: "/web-apps-ia" },
        { label: "Relações Públicas", href: "/relacoes-publicas" },
      ]}
    />
  );
}
