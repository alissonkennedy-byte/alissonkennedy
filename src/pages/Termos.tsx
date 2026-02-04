import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessageCircle, AlertTriangle } from "lucide-react";
import { useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20quero%20solicitar%20or%C3%A7amento%20do%20servi%C3%A7o%20Alisson%20Kennedy%20%7C%20Personal%20Assistant.%20Minha%20demanda%20%C3%A9%3A%20%5Bdescreva%5D.%20Prazo%3A%20%5Bdata%2Fhora%5D.%20Cidade%3A%20S%C3%A3o%20Paulo.";

const sections = [
  {
    id: "definicoes",
    title: "1) Definições",
    content: `"Contratante" é o cliente que solicita demandas. "Prestador" é Alisson Kennedy | Personal Assistant. "Fornecedores" são terceiros (hotéis, companhias aéreas, motoristas, restaurantes, serviços, plataformas).`,
  },
  {
    id: "natureza",
    title: "2) Natureza do serviço (intermediação)",
    content: `O Prestador atua como assistente pessoal e executivo, realizando curadoria, coordenação, intermediação e acompanhamento de solicitações do Contratante.

O Prestador não é o fornecedor final de passagens, hospedagem, transporte, eventos, ingressos, reservas ou serviços de terceiros. O Prestador não controla políticas, disponibilidade, prazos, preços, qualidade, alterações ou cancelamentos de fornecedores, que são de responsabilidade exclusiva dos respectivos fornecedores.`,
  },
  {
    id: "aprovacao",
    title: "3) Aprovação e execução",
    content: `Toda demanda que envolva custo requer aprovação prévia do Contratante por mensagem escrita (WhatsApp/e-mail), incluindo valores, taxas e condições informadas.

A execução poderá envolver contato com terceiros e compartilhamento mínimo necessário de dados para concluir a solicitação.`,
  },
  {
    id: "pagamentos",
    title: "4) Pagamentos",
    content: `Os valores de serviço do Prestador seguem os modelos vigentes informados ao Contratante.

Custos de terceiros (passagens, hospedagem, deslocamentos, ingressos, taxas e similares) não estão inclusos e são pagos à parte pelo Contratante, conforme combinado.`,
  },
  {
    id: "cancelamento",
    title: "5) Cancelamento, multa e não reembolso",
    content: `Ao contratar e/ou solicitar o início de qualquer demanda, o Contratante reconhece que a prestação pode ser iniciada imediatamente (contatos, cotações, bloqueios, negociações, reservas e tratativas com terceiros).

Em caso de cancelamento por parte do Contratante, será aplicada multa fixa de R$ 200,00 (duzentos reais).

Não há reembolsos de valores pagos ao Prestador, totais ou parciais, independentemente do estágio da execução, uma vez que o serviço pode ter sido iniciado e envolve tempo operacional, contatos e ações irreversíveis.

O Contratante reconhece que podem ocorrer desencontros de informações junto a fornecedores (políticas, disponibilidade, confirmações, alterações), sendo o trabalho do Prestador orientar e mitigar riscos, sem garantia de resultado em casos dependentes de terceiros.`,
  },
  {
    id: "responsabilidade",
    title: "6) Responsabilidade por terceiros",
    content: `O Prestador não se responsabiliza por falhas, atrasos, cancelamentos, overbooking, indisponibilidade, alterações de preço, divergências de informação, políticas internas, qualidade do serviço, condutas de terceiros ou quaisquer eventos atribuíveis aos fornecedores.`,
  },
  {
    id: "limitacoes",
    title: "7) Limitações e riscos",
    content: `O Prestador atua com diligência, método e comunicação objetiva. Ainda assim, algumas demandas envolvem variáveis externas. O Contratante concorda que o Prestador não fornece garantias absolutas de resultado quando a conclusão depende de terceiros.`,
  },
  {
    id: "confidencialidade",
    title: "8) Confidencialidade",
    content: `Informações de rotina, localização, preferências, contatos e demandas do Contratante são tratadas como confidenciais. O Prestador não divulga casos com identificação sem autorização expressa.`,
  },
  {
    id: "lgpd",
    title: "9) Proteção de dados (LGPD)",
    content: `O Prestador trata dados pessoais estritamente para executar solicitações e comunicar status. Dados podem ser compartilhados com fornecedores apenas no mínimo necessário para a execução. O Contratante pode solicitar atualização ou exclusão de dados quando aplicável, respeitadas obrigações legais e registros necessários à prestação.`,
  },
  {
    id: "foro",
    title: "10) Foro e disposições gerais",
    content: `Fica eleito o foro da comarca de São Paulo/SP para dirimir eventuais controvérsias. Ao solicitar e/ou contratar, o Contratante declara que leu e concorda com estes Termos.`,
  },
];

const Termos = () => {
  useEffect(() => {
    document.title = "Termos e Condições | Alisson Kennedy Personal Assistant";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="section-spacing">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl">
            {/* Disclaimer */}
            <div className="animate-fade-up mb-12 flex items-start gap-4 rounded-xl border border-border bg-secondary/50 p-5 backdrop-blur-sm">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Modelo de termos.</span> Recomenda-se validação jurídica antes de publicar.
              </p>
            </div>

            {/* Header */}
            <div className="animate-fade-up-delay-1">
              <h1 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
                Termos e Condições de Uso e Prestação de Serviço
              </h1>
              <p className="mt-4 text-muted-foreground">
                Última atualização: 04/02/2026
              </p>
            </div>

            {/* Top CTA */}
            <div className="animate-fade-up-delay-2 mt-10">
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
            <nav className="animate-fade-up-delay-3 mt-14 rounded-xl border border-border bg-card p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
              <h2 className="font-display text-lg font-semibold">Índice</h2>
              <ol className="mt-5 space-y-3">
                {sections.map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Sections */}
            <div className="mt-16 space-y-14">
              {sections.map((section, index) => (
                <section 
                  key={index} 
                  id={section.id} 
                  className="scroll-mt-28 animate-fade-up"
                  style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                >
                  <h2 className="font-display text-xl font-semibold md:text-2xl">{section.title}</h2>
                  <div className="mt-5 whitespace-pre-line text-muted-foreground leading-relaxed">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 border-t border-border pt-12 text-center">
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
