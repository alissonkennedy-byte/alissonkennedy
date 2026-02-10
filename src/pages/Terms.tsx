import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20acesso%20ao%20Private%20Office.";

const Terms = () => {
  useEffect(() => {
    document.title = "Termos e Condições | Alisson Kennedy Private Office";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-premium section-spacing-lg">
        <header className="mb-16 text-center">
          <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Termos e Condições <span className="text-gold-gradient">de Uso</span>
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Última atualização: Fevereiro de 2026
          </p>
        </header>

        <div className="mx-auto max-w-3xl space-y-12 text-muted-foreground leading-relaxed">
          {/* Intro */}
          <section className="space-y-4">
            <p>
              Bem-vindo ao <span className="text-foreground font-medium">Alisson Kennedy | Private Office</span>.
            </p>
            <p>
              Estes Termos e Condições regem o uso dos serviços de consultoria, concierge e gestão de lifestyle oferecidos pelo{" "}
              <span className="text-foreground font-medium">ALISSON KENNEDY PRIVATE OFFICE</span>{" "}
              ("Nós", "Nosso" ou "Contratada") através do site alissonkennedy.com e seus canais oficiais de atendimento.
            </p>
            <p>
              Ao contratar qualquer serviço (seja na modalidade On-Demand ou Membership) ou efetuar o pagamento de taxas de ativação, o Cliente ("Você" ou "Contratante") declara ter lido, compreendido e aceito integralmente as cláusulas abaixo.
            </p>
          </section>

          {/* 1 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground">
              <span className="text-primary">1.</span> Natureza dos Serviços
            </h2>
            <p>
              <span className="text-foreground font-medium">1.1. Atividade de Meio:</span>{" "}
              A nossa atuação é de inteligência operacional, curadoria e gestão. A natureza da nossa obrigação é de MEIO, e não de FIM. Comprometemo-nos a empregar os melhores esforços (Best Efforts) e expertise técnica para viabilizar as suas solicitações.
            </p>
            <p>
              <span className="text-foreground font-medium">1.2. Limitação:</span>{" "}
              Não garantimos resultados que dependam exclusivamente de terceiros (ex: disponibilidade de mesas em restaurantes lotados, voos esgotados ou itens de coleção fora de estoque), embora atuemos estrategicamente para mitigar essas barreiras.
            </p>
          </section>

          {/* 2 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground">
              <span className="text-primary">2.</span> Modelos de Contratação e Escopo
            </h2>
            <p>
              <span className="text-foreground font-medium">2.1. The Private Mission (Pontual):</span>{" "}
              Contratação para resolução de uma única demanda específica. O vínculo encerra-se automaticamente após a entrega da solução ou itinerário.
            </p>
            <p>
              <span className="text-foreground font-medium">2.2. Lifestyle Membership (Assinatura):</span>{" "}
              Gestão recorrente de agenda, viagens e rotina residencial.
            </p>
            <p>
              <span className="text-foreground font-medium">2.3. Política de Uso Justo (Fair Usage Policy):</span>{" "}
              Os planos mensais cobrem a manutenção da rotina padrão. Demandas extraordinárias que exijam dedicação exclusiva ou fujam do escopo de manutenção (ex: organização de grandes eventos, mudanças de residência, gestão de obras complexas) estarão sujeitas a uma{" "}
              <span className="text-foreground font-medium">Taxa de Excesso (Over-Demand) de R$ 500,00</span> por demanda.
            </p>
          </section>

          {/* 3 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground">
              <span className="text-primary">3.</span> Pagamentos e Reembolsos
            </h2>
            <p>
              <span className="text-foreground font-medium">3.1. Política de Não-Reembolso (No Refund):</span>{" "}
              Considera-se iniciado o serviço no exato momento em que nossa equipe começa a despender horas de trabalho (pesquisas, contatos, reservas) após o seu aceite. Uma vez iniciado o serviço, não haverá reembolso dos valores pagos a título de honorários (Service Fee), independentemente do resultado final da demanda junto a terceiros ou de desistência posterior por sua parte.
            </p>
            <p>
              <span className="text-foreground font-medium">3.2. Validade das Propostas:</span>{" "}
              Para demandas pontuais (On-Demand), os links de pagamento ou dados bancários enviados têm validade de{" "}
              <span className="text-foreground font-medium">30 (trinta) minutos</span> para garantir a disponibilidade na agenda.
            </p>
          </section>

          {/* 4 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground">
              <span className="text-primary">4.</span> Custos de Terceiros e Financeiro
            </h2>
            <p>
              <span className="text-foreground font-medium">4.1. Responsabilidade de Custos:</span>{" "}
              A nossa remuneração refere-se exclusivamente à gestão. Todos os custos finais (passagens, hospedagem, taxas, compras de bens) são de responsabilidade do Cliente.
            </p>
            <p>
              <span className="text-foreground font-medium">4.2. Não-Financiamento:</span>{" "}
              O Private Office não financia despesas. Pagamentos a terceiros devem ser feitos diretamente pelo Cliente ou via cartão de crédito fornecido para a operação.
            </p>
            <p>
              <span className="text-foreground font-medium">4.3. Gestão Financeira (Add-On):</span>{" "}
              Por padrão, nossos planos não incluem acesso a contas bancárias ou pagamentos manuais. Caso este serviço seja necessário, aplica-se uma taxa adicional de{" "}
              <span className="text-foreground font-medium">R$ 1.500,00 mensais por CPF</span>, mediante assinatura de Procuração Pública específica e Termo de Compliance.
            </p>
          </section>

          {/* 5 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground">
              <span className="text-primary">5.</span> Isenção de Responsabilidade
            </h2>
            <p>
              <span className="text-foreground font-medium">5.1. Atuação de Terceiros:</span>{" "}
              Não nos responsabilizamos por falhas, cancelamentos, atrasos ou má prestação de serviço por parte de fornecedores finais (cias aéreas, hotéis, staffs terceirizados), limitando nossa atuação à gestão administrativa e busca de soluções/reembolsos em seu favor.
            </p>
            <p>
              <span className="text-foreground font-medium">5.2. Segurança:</span>{" "}
              Não realizamos transporte de valores em espécie nem transporte armado. A segurança patrimonial e física é de responsabilidade de empresas especializadas contratadas pelo Cliente.
            </p>
          </section>

          {/* 6 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground">
              <span className="text-primary">6.</span> Confidencialidade e Privacidade
            </h2>
            <p>
              <span className="text-foreground font-medium">6.1.</span>{" "}
              Todas as informações, dados pessoais, rotinas e segredos de negócio compartilhados conosco são tratados com{" "}
              <span className="text-foreground font-medium">Sigilo Absoluto</span>, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>
            <p>
              <span className="text-foreground font-medium">6.2.</span>{" "}
              O compartilhamento de dados com terceiros restringe-se ao estritamente necessário para a execução operacional (ex: fornecer dados para check-in de voo ou reserva de hotel).
            </p>
          </section>

          {/* 7 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground">
              <span className="text-primary">7.</span> Conduta e Rescisão
            </h2>
            <p>
              <span className="text-foreground font-medium">7.1.</span>{" "}
              Reservamo-nos o direito de recusar ou encerrar a prestação de serviços unilateralmente caso haja solicitação de atividades ilícitas, tratamento desrespeitoso à equipe ou inadimplência recorrente.
            </p>
            <p>
              <span className="text-foreground font-medium">7.2.</span>{" "}
              O cancelamento de planos mensais deve ser comunicado com aviso prévio de{" "}
              <span className="text-foreground font-medium">30 (trinta) dias</span>.
            </p>
          </section>

          {/* Contact */}
          <section className="mt-16 rounded-xl border border-border bg-card p-8 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Fale Conosco
            </h2>
            <p className="mt-3 text-muted-foreground">
              Em caso de dúvidas sobre estes termos, entre em contato através dos canais oficiais:
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 text-sm">
              <a
                href="mailto:contato@alissonkennedy.com"
                className="text-primary transition-colors hover:text-primary/80"
              >
                contato@alissonkennedy.com
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary transition-colors hover:text-primary/80"
              >
                WhatsApp: +55 11 96738-5924
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
