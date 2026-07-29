import { Tilt3D, Depth, Reveal } from "@/components/ak/Motion3D";
import Nav from "@/components/ak/Nav";
import foto1 from "@/assets/FOTO_1.jpeg";
import foto2 from "@/assets/FOTO_2.jpg";
import foto3 from "@/assets/FOTO_3.jpg";
import foto4 from "@/assets/FOTO_4.jpg";
import logoBranco from "@/assets/LOGO_AK_BRANCO.png";

const WHATSAPP =
  "https://wa.me/5511934698384?text=" +
  encodeURIComponent("Olá, Alisson. Tenho uma demanda e gostaria de conversar.");
const EMAIL = "mailto:alisson.kennedy@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/alissonkennedy";

const areas = [
  {
    n: "01",
    title: "Redução de custos",
    items: ["Energia", "Previdenciário*", "Tributário*", "Negociação", "Eficiência operacional"],
    note: "* Empresas acima de 50 colaboradores. Faturamento anual superior a R$ 30 milhões.",
  },
  {
    n: "02",
    title: "Mobilidade",
    items: ["Deslocamentos executivos", "Operações especiais", "Projetos de mobilidade"],
  },
  {
    n: "03",
    title: "Expansão de negócios",
    items: ["Desenvolvimento comercial", "Representação estratégica", "Novos mercados"],
  },
  {
    n: "04",
    title: "Projetos especiais",
    items: ["Demandas que exigem estratégia, coordenação e execução."],
  },
];

const resultados = [
  { k: "270", d: "eventos entregues em um ano." },
  { k: "60%", d: "de redução de custos com fornecedores." },
  { k: "140%", d: "de aumento de ticket." },
  { k: "C-Level", d: "relacionamento direto com decisores." },
];

export default function Index() {
  return (
    <div id="topo" className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32 md:items-center md:pb-0">
        <div className="container-ak grid w-full items-center gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow mb-8">Estratégia · Negociação · Execução</p>
            <h1 className="display text-[2.75rem] leading-[0.96] sm:text-6xl lg:text-[5.2rem]">
              Algumas decisões
              <br />
              não admitem
              <br />
              <span className="italic text-accent">improviso.</span>
            </h1>

            <p className="mt-10 display text-2xl leading-tight text-foreground/90 md:text-3xl">
              Você não precisa se preocupar.
              <br />
              Eu resolvo.
            </p>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Conecto estratégia, negociação e execução.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center border border-accent bg-accent px-9 text-[0.78rem] uppercase tracking-[0.22em] text-accent-foreground transition-colors duration-500 hover:bg-transparent hover:text-accent"
              >
                Vamos conversar
              </a>
              <a
                href="#atuacao"
                className="link-underline self-start text-[0.78rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground sm:self-auto"
              >
                Conheça minha atuação
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <Tilt3D intensity={7}>
              <div className="photo-frame grain aspect-[4/5] w-full">
                <img
                  src={foto3}
                  alt="Alisson Kennedy observando a cidade a partir de um escritório corporativo"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </Tilt3D>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="border-t border-border py-28 md:py-40">
        <div className="container-ak grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Sobre</p>
            <Depth range={40} className="mt-10 hidden md:block">
              <Tilt3D intensity={5}>
                <div className="photo-frame grain aspect-[3/4]">
                  <img
                    src={foto2}
                    alt="Alisson Kennedy em ambiente corporativo"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Tilt3D>
            </Depth>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <Reveal>
              <h2 className="display text-4xl leading-[1.03] md:text-[3.4rem]">
                Eu não coordeno fornecedores.
                <br />
                Eu assumo o problema.
              </h2>
            </Reveal>

            <div className="mt-12 space-y-8 text-lg leading-relaxed text-muted-foreground">
              <Reveal delay={0.05}>
                <p>
                  Começo entendendo a decisão que precisa ser tomada. Não a tarefa. A decisão.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Reduzo o número de variáveis, defino o caminho mais curto e trago apenas os
                  especialistas necessários. Você conversa comigo. O resto acontece.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  Trabalho com discrição, prazo e clareza. Cada projeto tem um responsável único do
                  primeiro contato até a conclusão.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-foreground">
                  É por isso que meus clientes voltam: eles economizam a parte mais cara de tudo,
                  o próprio tempo.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ONDE ATUO */}
      <section id="atuacao" className="border-t border-border py-28 md:py-40">
        <div className="container-ak">
          <p className="eyebrow">Onde atuo</p>

          <div className="mt-16 divide-y divide-border border-y border-border">
            {areas.map((a, i) => (
              <Reveal key={a.n} delay={i * 0.04}>
                <div className="grid gap-6 py-12 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-1">
                    <span className="text-[0.7rem] tracking-[0.3em] text-accent">{a.n}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="display text-3xl md:text-[2.4rem]">{a.title}</h3>
                  </div>
                  <div className="md:col-span-7">
                    <ul className="space-y-3 text-lg text-muted-foreground">
                      {a.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                    {a.note && (
                      <p className="mt-6 max-w-md text-xs leading-relaxed text-muted-foreground/70">
                        {a.note}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGEM DE RESPIRO */}
      <section className="relative overflow-hidden">
        <Depth range={70}>
          <div className="photo-frame grain h-[55vh] w-full md:h-[80vh]">
            <img
              src={foto1}
              alt="Alisson Kennedy em retrato corporativo"
              className="h-full w-full scale-110 object-cover object-top"
              loading="lazy"
            />
          </div>
        </Depth>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/60" />
        <div className="container-ak pointer-events-none absolute inset-x-0 bottom-10 md:bottom-16">
          <p className="display max-w-2xl text-2xl leading-tight md:text-4xl">
            Um interlocutor.
            <br />
            <span className="text-accent italic">Uma responsabilidade.</span>
          </p>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="border-t border-border py-28 md:py-40">
        <div className="container-ak">
          <p className="eyebrow">Experiência</p>
          <Reveal>
            <h2 className="mt-10 display max-w-3xl text-4xl leading-[1.03] md:text-[3.4rem]">
              Trajetória medida por resultado, não por logotipos.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {resultados.map((r, i) => (
              <Reveal key={r.k} delay={i * 0.05} className="bg-background">
                <div className="flex h-full flex-col justify-between p-8 md:p-10">
                  <span className="display text-5xl text-accent md:text-6xl">{r.k}</span>
                  <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <Reveal>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Negociações nacionais e internacionais. Operações de alta complexidade conduzidas do
                planejamento à entrega, com fornecedores, prazos e riscos sob controle.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Interlocução direta com conselhos, diretorias e sócios. Confidencialidade como
                método, não como cláusula.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="border-t border-border py-28 md:py-40">
        <div className="container-ak grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow">Contato</p>
            <Reveal>
              <h2 className="mt-10 display text-4xl leading-[1.03] md:text-[3.6rem]">
                Me conte o que precisa
                <br />
                <span className="italic text-accent">acontecer.</span>
              </h2>
            </Reveal>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              Uma conversa curta costuma ser suficiente para saber se posso ajudar.
            </p>

            <div className="mt-12 space-y-6">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between border-b border-border pb-4 transition-colors hover:border-accent"
              >
                <span className="display text-2xl md:text-3xl">WhatsApp</span>
                <span className="text-sm text-muted-foreground transition-colors group-hover:text-accent">
                  +55 11 93469-8384
                </span>
              </a>
              <a
                href={EMAIL}
                className="group flex items-baseline justify-between border-b border-border pb-4 transition-colors hover:border-accent"
              >
                <span className="display text-2xl md:text-3xl">E-mail</span>
                <span className="break-all text-sm text-muted-foreground transition-colors group-hover:text-accent">
                  alisson.kennedy@gmail.com
                </span>
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between border-b border-border pb-4 transition-colors hover:border-accent"
              >
                <span className="display text-2xl md:text-3xl">LinkedIn</span>
                <span className="text-sm text-muted-foreground transition-colors group-hover:text-accent">
                  /in/alissonkennedy
                </span>
              </a>
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <Tilt3D intensity={6}>
              <div className="photo-frame grain aspect-[4/5]">
                <img
                  src={foto4}
                  alt="Retrato de Alisson Kennedy"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Tilt3D>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-14">
        <div className="container-ak flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <img src={logoBranco} alt="Alisson Kennedy" className="h-12 w-auto object-contain" />
          <div className="flex flex-wrap gap-8 text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="link-underline">
              WhatsApp
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="link-underline">
              LinkedIn
            </a>
            <a href={EMAIL} className="link-underline">
              E-mail
            </a>
          </div>
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Alisson Kennedy. São Paulo, Brasil.
          </p>
        </div>
      </footer>
    </div>
  );
}
