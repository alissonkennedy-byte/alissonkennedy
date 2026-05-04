import { Calendar } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export default function Eventos() {
  return (
    <ServicePage
      label="Produção de Eventos"
      title="Eventos que"
      titleHighlight="ninguém esquece"
      subtitle="Produção completa de eventos sociais e corporativos em São Paulo e em todo o Brasil. Cerimonial, fornecedores, roteiro técnico e coordenação presencial. Cada detalhe no lugar certo."
      imageSrc="/foto_producao_eventos_copy.jpg"
      imageAlt="Produtor de eventos corporativos e sociais em São Paulo"
      accentColor="#a855f7"
      accentColorHsl="271 91% 65%"
      icon={<Calendar size={28} />}
      waMessage="Olá Alisson! Vi seu site e preciso de ajuda na produção de um evento. Podemos conversar?"
      intro="Um evento bem executado não depende de sorte. Depende de planejamento rigoroso, fornecedores confiáveis e uma coordenação que antecipa problemas antes que eles apareçam. Cubro toda a produção de ponta a ponta para que você aproveite o momento sem se preocupar com nada."
      bullets={[
        "Formaturas, casamentos e comemorações",
        "Eventos corporativos e lançamentos de produtos",
        "Cerimonial e protocolo",
        "Gestão e negociação com fornecedores",
        "Roteiro técnico detalhado",
        "Coordenação presencial no dia",
        "Controle de orçamento em tempo real",
        "Audiovisual, decoração e logística",
      ]}
      features={[
        {
          title: "Cerimonial Completo",
          description:
            "Condução do evento com timing preciso, protocolo adequado e atenção a cada detalhe. A experiência do convidado começa no convite e termina na despedida.",
        },
        {
          title: "Gestão de Fornecedores",
          description:
            "Buffets, decoração, audiovisual, segurança, transporte e muito mais. Rede de parceiros qualificados com negociação para o melhor custo sem abrir mão da qualidade.",
        },
        {
          title: "Roteiro Técnico",
          description:
            "Documento com horários, responsabilidades, plano B para cada imprevisto e instruções claras para toda a equipe. Ninguém fica sem saber o que fazer.",
        },
        {
          title: "Produção Audiovisual",
          description:
            "Coordenação de fotografia, vídeo, transmissão ao vivo, palcos, iluminação e sonorização. A atmosfera certa para cada tipo de evento.",
        },
        {
          title: "Gestão de Convidados",
          description:
            "Lista, credenciamento, RSVP, acomodações especiais e experiência VIP. Cada pessoa é recebida do jeito que merece.",
        },
        {
          title: "Pós-Evento",
          description:
            "Desmontagem coordenada, acerto com fornecedores, coleta de feedbacks e relatório completo. O evento termina bem do começo ao fim.",
        },
      ]}
      ctaText="Falar com Alisson"
      relatedPages={[
        { label: "Marketing e Marca", href: "/marketing" },
        { label: "Relações Públicas", href: "/relacoes-publicas" },
        { label: "Web Apps e IA", href: "/web-apps-ia" },
      ]}
    />
  );
}
