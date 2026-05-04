import { Code2 } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export default function WebAppsIA() {
  return (
    <ServicePage
      label="Web Apps e Inteligência Artificial"
      title="Tecnologia que"
      titleHighlight="escala seu negócio"
      subtitle="Sites profissionais, sistemas sob medida e automações com IA. Cada projeto entregue com design moderno, performance real e código limpo que você pode evoluir."
      imageSrc="/banner_tech_ia_copy.jpg"
      imageAlt="Desenvolvimento de sites e sistemas com inteligência artificial em São Paulo"
      accentColor="#3b82f6"
      accentColorHsl="217 91% 60%"
      icon={<Code2 size={28} />}
      waMessage="Olá Alisson! Vi seu site e tenho interesse em desenvolver um site ou sistema. Podemos conversar?"
      intro="Sua presença digital precisa vender mesmo quando você não está disponível. Desenvolvo sites, plataformas e sistemas internos que combinam visual premium com tecnologia de ponta, incluindo automações e integrações com Inteligência Artificial para destravar o que trava o seu time."
      bullets={[
        "Desenvolvimento full-stack personalizado",
        "Integração com APIs e plataformas externas",
        "Automação de processos com IA",
        "Interfaces responsivas para mobile e desktop",
        "CRM, ERP e painéis de gestão",
        "SEO técnico e performance otimizada",
        "Hospedagem, deploy e manutenção",
        "Documentação e treinamento da equipe",
      ]}
      features={[
        {
          title: "Sites e Landing Pages de Alta Conversão",
          description:
            "Design que encanta e código que performa. Do portfólio institucional ao e-commerce, com foco em velocidade de carregamento, SEO e experiência do usuário.",
        },
        {
          title: "Sistemas de Gestão Personalizados",
          description:
            "CRMs, ERPs, painéis administrativos e ferramentas internas criadas especificamente para o seu fluxo. Nada de adaptação forçada em plataforma genérica.",
        },
        {
          title: "Inteligência Artificial Aplicada",
          description:
            "Chatbots treinados com dados do seu negócio, classificação automática de leads, análise preditiva e automações que economizam horas de trabalho manual.",
        },
        {
          title: "Integrações e APIs",
          description:
            "Conexão com Stripe, WhatsApp Business, Google Workspace, ERPs legados e qualquer plataforma que o seu negócio já usa. Tudo funcionando junto.",
        },
        {
          title: "Performance e SEO Técnico",
          description:
            "Core Web Vitals otimizados, carregamento rápido, estrutura de dados correta e indexação eficiente para o seu site aparecer onde precisa aparecer.",
        },
        {
          title: "Suporte Contínuo",
          description:
            "Manutenção, atualizações de segurança e evolução do sistema ao longo do tempo. Você não fica abandonado depois do lançamento.",
        },
      ]}
      ctaText="Falar com Alisson"
      relatedPages={[
        { label: "Marketing e Marca", href: "/marketing" },
        { label: "Relações Públicas", href: "/relacoes-publicas" },
        { label: "Food Service", href: "/food-service" },
      ]}
    />
  );
}
