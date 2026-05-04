import { Users } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export default function RelacaoPublica() {
  return (
    <ServicePage
      label="Relações Públicas e Conexões Estratégicas"
      title="Você pede,"
      titleHighlight="eu resolvo"
      subtitle="Networking estratégico, gestão de relacionamentos e acesso a quem decide. As conexões certas abreviam anos de esforço. Eu coloco o seu nome na frente das pessoas certas."
      imageSrc="/foto_networking_rp_copy.jpg"
      imageAlt="Relações públicas e networking estratégico em São Paulo"
      accentColor="#f43f5e"
      accentColorHsl="343 90% 60%"
      icon={<Users size={28} />}
      waMessage="Olá Alisson! Vi seu site e quero conversar sobre relações públicas e networking estratégico. Podemos falar?"
      intro="Em um mercado competitivo, quem você conhece define o quanto você cresce. Através de uma rede construída com integridade e estratégia, facilito conexões reais: parcerias, acesso a tomadores de decisão, oportunidades de negócio e resolução de situações que exigem o contato certo no momento certo."
      bullets={[
        "Networking estratégico de alto nível",
        "Facilitação de parcerias e negócios",
        "Gestão de reputação e imagem",
        "Acesso a tomadores de decisão",
        "Mediação de conflitos corporativos",
        "Assessoria de imprensa e mídia",
        "Eventos de relacionamento exclusivos",
        "Resolução de situações delicadas",
      ]}
      features={[
        {
          title: "Networking Estratégico",
          description:
            "Conexão com investidores, parceiros, clientes de alto valor e líderes de setor. Abordagem que gera confiança, não constrangimento. O relacionamento certo muda o jogo.",
        },
        {
          title: "Facilitação de Negócios",
          description:
            "Identifico oportunidades, apresento as partes e conduzo o início da conversa. O negócio começa com a apresentação certa, feita do jeito certo.",
        },
        {
          title: "Gestão de Reputação",
          description:
            "Monitoramento da percepção pública, estratégias de posicionamento junto a stakeholders e comunidades relevantes. Sua imagem é um ativo que precisa ser cuidado.",
        },
        {
          title: "Gestão de Crises",
          description:
            "Protocolo de resposta, comunicação estratégica sob pressão e mediação de conflitos para proteger o que levou anos para construir.",
        },
        {
          title: "Assessoria de Imprensa",
          description:
            "Redação e distribuição de releases, conquista de espaço em veículos relevantes e construção de credibilidade junto à mídia certa para o seu mercado.",
        },
        {
          title: "Acesso e Resolução",
          description:
            "Quando a situação exige o contato certo, agilidade e discrição, eu encontro o caminho. Você faz o pedido e eu resolvo.",
        },
      ]}
      ctaText="Falar com Alisson"
      relatedPages={[
        { label: "Marketing e Marca", href: "/marketing" },
        { label: "Eventos", href: "/eventos" },
        { label: "Food Service", href: "/food-service" },
      ]}
    />
  );
}
