import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessageCircle, AlertTriangle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20quero%20solicitar%20or%C3%A7amento%20do%20servi%C3%A7o%20Alisson%20Kennedy%20%7C%20Personal%20Assistant.%20Minha%20demanda%20%C3%A9%3A%20%5Bdescreva%5D.%20Prazo%3A%20%5Bdata%2Fhora%5D.%20Cidade%3A%20S%C3%A3o%20Paulo.";

const sections = [
  {
    title: "1) Definições",
    content: `"Contratante" é o cliente que solicita demandas. "Prestador" é Alisson Kennedy | Personal Assistant. "Fornecedores" são terceiros (hotéis, companhias aéreas, motoristas, restaurantes, serviços, plataformas).`,
  },
  {
    title: "2) Natureza do serviço (intermediação)",
    content: `O Prestador atua como assistente pessoal e executivo, realizando curadoria, coordenação, intermediação e acompanhamento de solicitações do Contratante.

O Prestador não é o fornecedor final de passagens, hospedagem, transporte, eventos, ingressos, reservas ou serviços de terceiros. O Prestador não controla políticas, disponibilidade, prazos, preços, qualidade, alterações ou cancelamentos de fornecedores, que são de responsabilidade exclusiva dos respectivos fornecedores.`,
  },
  {
    title: "3) Aprovação e execução",
    content: `Toda demanda que envolva custo requer aprovação prévia do Contratante por mensagem escrita (WhatsApp/e-mail), incluindo valores, taxas e condições informadas.

A execução poderá envolver contato com terceiros e compartilhamento mínimo necessário de dados para concluir a solicitação.`,
  },
  {
    title: "4) Pagamentos",
    content: `Os valores de serviço do Prestador seguem os modelos vigentes informados ao Contratante.

Custos de terceiros (passagens, hospedagem, deslocamentos, ingressos, taxas e similares) não estão inclusos e são pagos à parte pelo Contratante, conforme combinado.`,
  },
  {
    title: "5) Cancelamento, multa e não reembolso",
    content: `Ao contratar e/ou solicitar o início de qualquer demanda, o Contratante reconhece que a prestação pode ser iniciada imediatamente (contatos, cotações, bloqueios, negociações, reservas e tratativas com terceiros).

Em caso de cancelamento por parte do Contratante, será aplicada multa fixa de R$ 200,00 (duzentos reais).

Não há reembolsos de valores pagos ao Prestador, totais ou parciais, independentemente do estágio da execução, uma vez que o serviço pode ter sido iniciado e envolve tempo operacional, contatos e ações irreversíveis.

O Contratante reconhece que podem ocorrer desencontros de informações junto a fornecedores (políticas, disponibilidade, confirmações, alterações), sendo o trabalho do Prestador orientar e mitigar riscos, sem garantia de resultado em casos dependentes de terceiros.`,
  },
  {
    title: "6) Responsabilidade por terceiros",
    content: `O Prestador não se responsabiliza por falhas, atrasos, cancelamentos, overbooking, indisponibilidade, alterações de preço, divergências de informação, políticas internas, qualidade do serviço, condutas de terceiros ou quaisquer eventos atribuíveis aos fornecedores.`,
  },
  {
    title: "7) Limitações e riscos",
    content: `O Prestador atua com diligência, método e comunicação objetiva. Ainda assim, algumas demandas envolvem variáveis externas. O Contratante concorda que o Prestador não fornece garantias absolutas de resultado quando a conclusão depende de terceiros.`,
  },
  {
    title: "8) Confidencialidade",
    content: `Informações de rotina, localização, preferências, contatos e demandas do Contratante são tratadas como confidenciais. O Prestador não divulga casos com identificação sem autorização expressa.`,
  },
  {
    title: "9) Proteção de dados (LGPD)",
    content: `O Prestador trata dados pessoais estritamente para executar solicitações e comunicar status. Dados podem ser compartilhados com fornecedores apenas no mínimo necessário para a execução. O Contratante pode solicitar atualização ou exclusão de dados quando aplicável, respeitadas obrigações legais e registros necessários à prestação.`,
  },
  {
    title: "10) Foro e disposições gerais",
    content: `Fica eleito o foro da comarca de São Paulo/SP para dirimir eventuais controvérsias. Ao solicitar e/ou contratar, o Contratante declara que leu e concorda com estes Termos.`,
  },
];

const Termos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="section-spacing">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl">
            {/* Disclaimer */}
            <div className="mb-10 flex items-start gap-4 rounded-lg border border-border bg-secondary/50 p-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Modelo de termos.</span> Recomenda-se validação jurídica antes de publicar.
              </p>
            </div>

            {/* Header */}
            <h1 className="font-display text-2xl font-bold md:text-4xl">
              Termos e Condições de Uso e Prestação de Serviço
            </h1>
            <p className="mt-4 text-muted-foreground">
              Última atualização: XX/XX/20XX
            </p>

            {/* Top CTA */}
            <div className="mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>

            {/* Table of Contents */}
            <nav className="mt-12 rounded-lg border border-border p-6">
              <h2 className="font-display text-lg font-semibold">Índice</h2>
              <ol className="mt-4 space-y-2">
                {sections.map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#section-${index + 1}`}
                      className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Sections */}
            <div className="mt-12 space-y-10">
              {sections.map((section, index) => (
                <section key={index} id={`section-${index + 1}`} className="scroll-mt-24">
                  <h2 className="font-display text-xl font-semibold">{section.title}</h2>
                  <div className="mt-4 whitespace-pre-line text-muted-foreground">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 border-t border-border pt-10 text-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Termos;
