import { useState } from "react";
import {
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Home,
  Building2,
  UserPlus,
  Receipt,
  PiggyBank,
  ChevronDown,
  Sparkles,
  HeartHandshake,
  FileText,
} from "lucide-react";
import { HiveLogo } from "@/components/HiveLogo";
import alissonAsset from "@/assets/alisson.jpg.asset.json";

const WA =
  "https://wa.me/5511934698384?text=Oi,%20Alisson!%20Vi%20seu%20site%20e%20quero%20saber%20quanto%20posso%20economizar%20na%20minha%20conta%20de%20luz.";

const WaButton = ({
  children = "Falar no WhatsApp",
  className = "",
  size = "md",
  pulse = false,
}: {
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
}) => (
  <a
    href={WA}
    target="_blank"
    rel="noopener noreferrer"
    className={`btn-wa ${size === "lg" ? "btn-wa-lg" : ""} ${size === "sm" ? "!px-4 !py-2 !text-sm" : ""} ${pulse ? "pulse-cta" : ""} ${className}`}
  >
    <MessageCircle size={size === "lg" ? 22 : 18} />
    {children}
  </a>
);

const faqs = [
  { q: "Preciso fazer obra ou instalar algo na minha casa?", a: "Não. Você não instala nada, não faz nenhuma obra e não precisa colocar placa solar no telhado. Tudo é 100% digital." },
  { q: "Vou trocar de distribuidora?", a: "Não. Você continua com a mesma distribuidora de sempre (Enel, CPFL, Light, Cemig, Equatorial, etc.). Nada muda na sua rede." },
  { q: "Tem fidelidade ou multa?", a: "Não. Sem fidelidade e sem multa. Você pode cancelar quando quiser." },
  { q: "Por que recebo dois boletos?", a: "Um boleto vem da sua distribuidora (taxas de uso da rede e iluminação pública) e outro da Hive Energy (a energia que você consumiu, já com desconto). Somados, os dois ficam menores do que você paga hoje." },
  { q: "Quanto tempo até o desconto começar?", a: "Cerca de 90 dias após o cadastro, que é o tempo de ativação do sistema junto à distribuidora." },
  { q: "Posso cancelar quando quiser?", a: "Sim, a qualquer momento, sem multa." },
  { q: "Quais regiões são atendidas?", a: "Atendemos vários estados do Brasil. Me chame no WhatsApp para confirmar a disponibilidade na sua região." },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="rounded-2xl border bg-white shadow-sm overflow-hidden" style={{ borderColor: "hsl(var(--border))" }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-base sm:text-lg" style={{ color: "hsl(var(--hive-dark))" }}>{f.q}</span>
              <ChevronDown size={20} className={`flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} style={{ color: "hsl(var(--primary))" }} />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/85 border-b" style={{ borderColor: "hsl(var(--border))" }}>
        <div className="container-x flex h-16 sm:h-20 items-center justify-between">
          <a href="#top" aria-label="hive Energy"><HiveLogo /></a>
          <WaButton size="sm" className="!rounded-full">
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </WaButton>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-hive-soft">
        <div className="absolute inset-0 grid-radial pointer-events-none" />
        <div className="container-x relative py-14 sm:py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <div className="chip mb-5" style={{ background: "hsl(var(--accent) / 0.25)", color: "hsl(var(--hive-dark))" }}>
                <Sparkles size={14} /> Energia por assinatura, regulamentada por lei
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05]" style={{ color: "hsl(var(--hive-dark))" }}>
                Pague menos na <span className="text-hive">conta de luz</span> todo mês.{" "}
                <span className="text-energy">Sem obra. Sem dor de cabeça.</span>
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-2xl">
                Eu sou o Alisson, consultor da Hive Energy. Te ajudo a colocar desconto na sua conta de energia, com atendimento humano do começo ao fim. É rápido, 100% digital e você fala direto comigo.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <WaButton size="lg" pulse>Quero economizar (WhatsApp)</WaButton>
                <a href="#como-funciona" className="inline-flex items-center gap-2 px-5 py-3 font-semibold text-hive hover:underline">
                  Como funciona <ChevronDown size={18} />
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium" style={{ color: "hsl(var(--hive-dark))" }}>
                {["Sem obra", "Sem trocar de distribuidora", "Sem fidelidade", "100% digital"].map(t => (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-hive" /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual: bill comparison card */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="card-soft p-6 sm:p-8 rounded-[28px]" style={{ boxShadow: "0 30px 80px -30px hsl(var(--primary) / 0.45)" }}>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Sua conta hoje</span>
                    <Receipt size={20} className="text-muted-foreground" />
                  </div>
                  <div className="text-4xl font-extrabold line-through" style={{ color: "hsl(var(--hive-dark) / 0.35)" }}>R$ 480,00</div>

                  <div className="my-6 h-px bg-border" />

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-hive">Com Hive Energy</span>
                    <Zap size={20} className="text-energy" fill="currentColor" />
                  </div>
                  <div className="text-5xl font-black text-hive">R$ 384,00*</div>
                  <p className="mt-2 text-sm text-muted-foreground">*Exemplo ilustrativo. A economia exata varia por estado e distribuidora.</p>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold" style={{ background: "hsl(var(--accent) / 0.3)", color: "hsl(var(--hive-dark))" }}>
                    <PiggyBank size={14} /> Até 25% de desconto na energia
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 rounded-2xl px-4 py-2 text-xs font-bold shadow-lg" style={{ background: "hsl(var(--primary))", color: "white" }}>
                  Regulamentado pela Lei 14.300/2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOR + VIRADA */}
      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-hive mb-3">Conta de luz pesando?</p>
            <h2 className="text-3xl sm:text-4xl mb-5" style={{ color: "hsl(var(--hive-dark))" }}>
              Você não está sozinho. E existe uma saída <span className="text-hive">legal, simples e sem obra.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A tarifa de energia subiu, as bandeiras vermelhas voltaram e a conta no fim do mês não cabe mais no orçamento. A boa notícia: hoje você pode receber energia mais barata em casa ou na sua empresa, sem mudar nada na sua instalação.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "Até 25%", l: "de desconto na energia" },
              { v: "0 obras", l: "nada muda na sua casa" },
              { v: "0 fidelidade", l: "cancele quando quiser" },
              { v: "100%", l: "digital, sem burocracia" },
            ].map(s => (
              <div key={s.l} className="card-soft text-center !p-5">
                <div className="text-3xl font-black text-hive">{s.v}</div>
                <div className="text-xs mt-1 font-semibold text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-16 sm:py-24 bg-hive-soft">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-hive mb-3">Como funciona</p>
            <h2 className="text-3xl sm:text-4xl" style={{ color: "hsl(var(--hive-dark))" }}>
              3 passos simples para começar a <span className="text-hive">economizar</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: UserPlus, t: "Você se cadastra", d: "Me chama no WhatsApp. Eu te explico tudo e cuido do cadastro com você. Leva poucos minutos." },
              { icon: Zap, t: "Recebe energia com desconto", d: "Você passa a consumir energia de fontes limpas, com tarifa mais barata do que a da distribuidora." },
              { icon: Home, t: "Continua na mesma distribuidora", d: "Sem obra, sem técnico na sua casa, sem placa solar. A luz que chega na sua tomada é a mesma." },
            ].map((s, i) => (
              <div key={s.t} className="card-soft relative">
                <div className="absolute -top-4 left-6 rounded-full px-3 py-1 text-xs font-black text-white" style={{ background: "hsl(var(--primary))" }}>
                  Passo {i + 1}
                </div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: "hsl(var(--primary) / 0.12)" }}>
                  <s.icon size={24} className="text-hive" />
                </div>
                <h3 className="text-xl mb-2" style={{ color: "hsl(var(--hive-dark))" }}>{s.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOIS BOLETOS */}
      <section className="py-16 sm:py-24 bg-hive-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-radial-dark pointer-events-none" />
        <div className="container-x relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-energy mb-3">Transparência total</p>
            <h2 className="text-3xl sm:text-4xl text-white">
              Você vai receber <span className="text-energy">dois boletos</span>. E ainda assim vai pagar menos.
            </h2>
            <p className="mt-4 text-white/70 text-lg">
              Eu explico do jeito mais simples possível, sem letra miúda.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="card-dark">
              <div className="flex items-center gap-2 mb-3"><Receipt size={20} className="text-energy" /><span className="text-xs font-bold uppercase tracking-wider text-energy">Boleto 1</span></div>
              <h3 className="text-2xl mb-2 text-white">Sua distribuidora</h3>
              <p className="text-white/70 mb-4">Continua chegando, só que bem menor. Cobre o uso da rede, a iluminação pública e os impostos obrigatórios.</p>
              <div className="text-3xl font-black text-white">R$ 120 <span className="text-base font-medium text-white/60">(exemplo)</span></div>
            </div>
            <div className="card-dark" style={{ borderColor: "hsl(var(--accent) / 0.6)" }}>
              <div className="flex items-center gap-2 mb-3"><Zap size={20} className="text-energy" fill="currentColor" /><span className="text-xs font-bold uppercase tracking-wider text-energy">Boleto 2</span></div>
              <h3 className="text-2xl mb-2 text-white">Hive Energy</h3>
              <p className="text-white/70 mb-4">A energia que você consumiu, já com desconto. Sem taxa de adesão e sem fidelidade.</p>
              <div className="text-3xl font-black text-white">R$ 264 <span className="text-base font-medium text-white/60">(exemplo)</span></div>
            </div>
          </div>

          <div className="mt-8 max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 text-center" style={{ background: "hsl(var(--accent))", color: "hsl(var(--hive-dark))" }}>
            <p className="text-sm font-bold uppercase tracking-widest mb-2">Somando os dois</p>
            <div className="text-4xl sm:text-5xl font-black">R$ 384 <span className="text-xl font-bold">em vez de R$ 480</span></div>
            <p className="mt-2 font-semibold">Mais barato que a conta cheia que você paga hoje. Exemplo ilustrativo, a economia exata depende da sua região.</p>
          </div>
        </div>
      </section>

      {/* QUANTO ECONOMIZO */}
      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-10 md:grid-cols-2 items-center">
          <div className="card-soft" style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.06), hsl(var(--accent) / 0.08))" }}>
            <p className="text-sm font-bold uppercase tracking-widest text-hive mb-3">Quanto eu economizo?</p>
            <div className="text-6xl sm:text-7xl font-black text-hive leading-none">até 25%</div>
            <p className="mt-3 text-lg font-semibold" style={{ color: "hsl(var(--hive-dark))" }}>de desconto na parte de energia da sua conta.</p>
            <p className="mt-4 text-muted-foreground">A economia exata varia conforme seu estado e sua distribuidora, eu calculo a sua quando você me chama.</p>
            <div className="mt-6"><WaButton>Calcular minha economia</WaButton></div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl mb-4" style={{ color: "hsl(var(--hive-dark))" }}>
              Sem promessa milagrosa. <span className="text-hive">Conta honesta.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Não acredito em prometer percentual fixo na internet. Cada cidade tem uma tarifa, cada distribuidora tem uma regra. O que eu te garanto é que, se valer a pena, eu te mostro o cálculo real, com transparência.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Se não fizer sentido pra você, eu mesmo te digo. Atendimento humano é isso.
            </p>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-16 sm:py-24 bg-hive-soft">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-hive mb-3">Para quem é</p>
            <h2 className="text-3xl sm:text-4xl" style={{ color: "hsl(var(--hive-dark))" }}>
              Serve pra sua <span className="text-hive">casa</span> e pro seu <span className="text-hive">negócio.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="card-soft">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "hsl(var(--primary) / 0.12)" }}>
                <Home size={26} className="text-hive" />
              </div>
              <h3 className="text-2xl mb-2" style={{ color: "hsl(var(--hive-dark))" }}>Residências</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">Para a sua casa ou apartamento. Conta de luz acima de R$ 200 já costuma compensar muito.</p>
              <ul className="space-y-2 text-sm">
                {["Desconto todo mês na conta", "Sem mexer na fiação", "Cancele quando quiser"].map(i => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-hive" /> {i}</li>
                ))}
              </ul>
            </div>
            <div className="card-soft">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "hsl(var(--accent) / 0.25)" }}>
                <Building2 size={26} style={{ color: "hsl(var(--hive-dark))" }} />
              </div>
              <h3 className="text-2xl mb-2" style={{ color: "hsl(var(--hive-dark))" }}>Pequenas e médias empresas</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">Comércios, escritórios, clínicas, indústrias leves. Reduza um custo fixo importante todo mês.</p>
              <ul className="space-y-2 text-sm">
                {["Mais margem no seu negócio", "Energia limpa, bom pro ESG", "Sem investimento inicial"].map(i => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-hive" /> {i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* É SEGURO */}
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="max-w-4xl mx-auto card-soft p-8 sm:p-12 text-center" style={{ borderColor: "hsl(var(--primary) / 0.3)" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5" style={{ background: "hsl(var(--primary) / 0.12)" }}>
              <ShieldCheck size={32} className="text-hive" />
            </div>
            <h2 className="text-3xl sm:text-4xl mb-4" style={{ color: "hsl(var(--hive-dark))" }}>
              É seguro? É <span className="text-hive">legalizado?</span> É golpe?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              Não é golpe. Energia por assinatura é um modelo <strong>regulamentado pela Lei 14.300/2022</strong> (marco da geração distribuída no Brasil). É legítimo, transparente, sem custo de adesão e sem fidelidade.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8 text-left">
              {[
                { i: FileText, t: "Lei 14.300/2022", d: "Marco da geração distribuída" },
                { i: ShieldCheck, t: "Sem fidelidade", d: "Cancele a qualquer momento" },
                { i: HeartHandshake, t: "Sem custo de adesão", d: "Você não paga nada para entrar" },
              ].map(item => (
                <div key={item.t} className="rounded-2xl p-4" style={{ background: "hsl(var(--secondary))" }}>
                  <item.i size={20} className="text-hive mb-2" />
                  <div className="font-bold" style={{ color: "hsl(var(--hive-dark))" }}>{item.t}</div>
                  <div className="text-sm text-muted-foreground">{item.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ATENDIMENTO HUMANO - ALISSON */}
      <section className="py-16 sm:py-24 bg-hive-soft">
        <div className="container-x grid gap-10 md:grid-cols-2 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl max-w-sm mx-auto" style={{ boxShadow: "0 30px 80px -30px hsl(var(--primary) / 0.5)" }}>
              <img
                src={alissonAsset.url}
                alt="Alisson, consultor da Hive Energy, atendimento humano por WhatsApp"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:right-12 rounded-2xl px-4 py-3 shadow-lg" style={{ background: "hsl(var(--accent))" }}>
              <div className="text-xs font-bold uppercase tracking-wider" style={{ color: "hsl(var(--hive-dark))" }}>Atendimento</div>
              <div className="text-lg font-black" style={{ color: "hsl(var(--hive-dark))" }}>100% humano</div>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-hive mb-3">Quem te atende</p>
            <h2 className="text-3xl sm:text-4xl mb-4" style={{ color: "hsl(var(--hive-dark))" }}>
              Oi, eu sou o <span className="text-hive">Alisson.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Sou consultor da Hive Energy e cuido pessoalmente de cada cliente. Aqui você não fala com robô, não fica em fila de URA, não recebe mensagem automática.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Eu te explico tudo, tiro suas dúvidas com calma, faço o cálculo da sua economia e acompanho passo a passo até o desconto chegar na sua conta.
            </p>
            <WaButton size="lg" pulse>Falar agora com o Alisson</WaButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="container-x max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-widest text-hive mb-3">Perguntas frequentes</p>
            <h2 className="text-3xl sm:text-4xl" style={{ color: "hsl(var(--hive-dark))" }}>
              Tire suas dúvidas em <span className="text-hive">30 segundos</span>
            </h2>
          </div>
          <Faq />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 sm:py-24 bg-hive-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-radial-dark pointer-events-none" />
        <div className="container-x relative text-center max-w-3xl">
          <div className="chip mx-auto mb-5" style={{ background: "hsl(var(--accent) / 0.2)", color: "hsl(var(--accent))" }}>
            <Zap size={14} fill="currentColor" /> Pronto pra economizar?
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-5">
            Sua próxima conta de luz pode chegar <span className="text-energy">muito menor.</span>
          </h2>
          <p className="text-lg text-white/75 mb-8">
            Me chama no WhatsApp agora. Em poucos minutos eu calculo o quanto você pode economizar, com total transparência.
          </p>
          <div className="flex justify-center">
            <WaButton size="lg" pulse>Quero falar com o Alisson</WaButton>
          </div>
          <p className="mt-5 text-sm text-white/50">Sem custo, sem compromisso e sem enrolação.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-white border-t" style={{ borderColor: "hsl(var(--border))" }}>
        <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HiveLogo />
            <span className="hidden sm:inline text-sm text-muted-foreground">com Alisson</span>
          </div>
          <div className="text-sm text-muted-foreground text-center">
            Alisson, Consultor Hive Energy &middot; Atendimento via{" "}
            <a href={WA} target="_blank" rel="noopener noreferrer" className="text-hive font-semibold hover:underline">WhatsApp</a>
          </div>
        </div>
        <p className="container-x mt-4 text-xs text-muted-foreground/70 text-center max-w-3xl">
          Conteúdo informativo. Economia exata varia conforme distribuidora, estado e perfil de consumo. Modelo regulamentado pela Lei 14.300/2022. © {new Date().getFullYear()}
        </p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold text-white shadow-2xl pulse-cta"
        style={{ background: "hsl(var(--whatsapp))" }}
      >
        <MessageCircle size={22} />
        <span className="hidden sm:inline">Fale no WhatsApp</span>
      </a>
    </div>
  );
}
