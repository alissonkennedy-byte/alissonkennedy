import { Megaphone } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export default function Marketing() {
  return (
    <ServicePage
      label="Marketing Digital e Posicionamento de Marca"
      title="Marca que"
      titleHighlight="vende todo dia"
      subtitle="Estratégia de marketing, identidade visual e campanhas focadas em resultado. Seu negócio posicionado para atrair o cliente certo, gerar autoridade e converter de verdade."
      imageSrc="/banner_marketing_copy.jpg"
      imageAlt="Marketing digital e posicionamento de marca em São Paulo"
      accentColor="#f97316"
      accentColorHsl="25 95% 55%"
      icon={<Megaphone size={28} />}
      waMessage="Olá Alisson! Vi seu site e quero conversar sobre marketing e posicionamento da minha marca. Podemos falar?"
      intro="Marketing sem estratégia é dinheiro jogado fora. Desenvolvo o posicionamento que faz a sua marca ser reconhecida, lembrada e escolhida no momento certo. Com análise de dados, criatividade aplicada e campanhas otimizadas para o seu público, o investimento retorna em forma de cliente e receita."
      bullets={[
        "Estratégia de marca e posicionamento",
        "Planejamento de campanhas 360 graus",
        "Gestão de redes sociais",
        "Google Ads e Meta Ads",
        "Identidade visual e branding",
        "Email marketing e automações",
        "Análise de métricas e ROI",
        "Funis de marketing e vendas",
      ]}
      features={[
        {
          title: "Estratégia e Posicionamento de Marca",
          description:
            "Tom de voz, proposta de valor, arquitetura de marca e diferencial competitivo definidos com clareza. O cliente certo precisa reconhecer você antes de comprar de você.",
        },
        {
          title: "Tráfego Pago e Performance",
          description:
            "Google Ads e Meta Ads com estrutura focada em ROAS: segmentação precisa, criativos testados e otimização constante para reduzir custo por aquisição.",
        },
        {
          title: "Conteúdo e Redes Sociais",
          description:
            "Estratégia editorial, produção de conteúdo de autoridade e gestão de comunidade. Seguidores que viram clientes e clientes que viram promotores da sua marca.",
        },
        {
          title: "Identidade Visual",
          description:
            "Logo, paleta de cores, tipografia, elementos gráficos e guia de marca. Consistência visual em todos os pontos de contato com o cliente.",
        },
        {
          title: "Email Marketing e Nutrição",
          description:
            "Sequências de boas-vindas, campanhas de retenção e automações segmentadas. Sua base de contatos trabalhando para gerar receita recorrente.",
        },
        {
          title: "Relatórios e Otimização",
          description:
            "Dashboard em tempo real e análise dos KPIs que realmente importam para o negócio. Decisões baseadas em dado, não em achismo.",
        },
      ]}
      ctaText="Falar com Alisson"
      relatedPages={[
        { label: "Web Apps e IA", href: "/web-apps-ia" },
        { label: "Relações Públicas", href: "/relacoes-publicas" },
        { label: "Eventos", href: "/eventos" },
      ]}
    />
  );
}
