import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    document.title = "Política de Privacidade | Alisson Kennedy Private Office";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-premium section-spacing-lg">
        <header className="mb-16 text-center">
          <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Política de <span className="text-gold-gradient">Privacidade</span>
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Última atualização: Fevereiro de 2026
          </p>
        </header>

        <div className="mx-auto max-w-3xl space-y-12 text-muted-foreground leading-relaxed">
          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground">
              <span className="text-primary">1.</span> Compromisso
            </h2>
            <p>
              Seguimos rigorosamente a{" "}
              <span className="text-foreground font-medium">Lei Geral de Proteção de Dados (LGPD)</span>.
              A sua privacidade é tratada com o mesmo nível de sigilo e excelência que aplicamos em todas as nossas operações.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground">
              <span className="text-primary">2.</span> Coleta de Dados
            </h2>
            <p>
              Coletamos dados de identificação, contato e preferências apenas para a{" "}
              <span className="text-foreground font-medium">execução do serviço</span> contratado.
              Nenhum dado é coletado sem o seu conhecimento ou consentimento.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground">
              <span className="text-primary">3.</span> Uso dos Dados
            </h2>
            <p>
              Seus dados são utilizados exclusivamente para viabilizar reservas, compras, logística e garantir a{" "}
              <span className="text-foreground font-medium">segurança operacional</span> das suas demandas.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground">
              <span className="text-primary">4.</span> Compartilhamento
            </h2>
            <p>
              O compartilhamento de dados restringe-se aos parceiros estritamente necessários para viabilizar sua demanda, como{" "}
              <span className="text-foreground font-medium">companhias aéreas, hotéis e prestadores de serviço</span>.
              Jamais compartilhamos dados para fins comerciais ou publicitários.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground">
              <span className="text-primary">5.</span> Segurança
            </h2>
            <p>
              Utilizamos <span className="text-foreground font-medium">criptografia e acesso restrito</span> sob sigilo absoluto.{" "}
              <span className="text-primary font-semibold">Não vendemos dados</span>.
              Todas as informações são protegidas com os mais altos padrões de segurança da informação.
            </p>
          </section>

          <section className="mt-16 rounded-xl border border-border bg-card p-8 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Fale Conosco
            </h2>
            <p className="mt-3 text-muted-foreground">
              Em caso de dúvidas sobre esta política, entre em contato:
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 text-sm">
              <a
                href="mailto:contato@alissonkennedy.com"
                className="text-primary transition-colors hover:text-primary/80"
              >
                contato@alissonkennedy.com
              </a>
              <a
                href="https://wa.me/5511967385924"
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

export default Privacy;
