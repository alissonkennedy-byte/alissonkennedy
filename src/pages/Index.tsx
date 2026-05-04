import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Code2,
  Calendar,
  TrendingUp,
  Megaphone,
  Users,
  ChevronDown,
  Star,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const WA = (msg: string) =>
  `https://wa.me/5511967385924?text=${encodeURIComponent(msg)}`;

const services = [
  {
    icon: Code2,
    label: "Web Apps e IA",
    tagline: "Tecnologia que escala seu negócio",
    description:
      "Sites, sistemas de gestão, automações e integrações com Inteligência Artificial. Cada projeto entregue com design moderno, performance e código limpo.",
    href: "/web-apps-ia",
    gradient: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Calendar,
    label: "Produção de Eventos",
    tagline: "Experiências que ficam na memória",
    description:
      "Cerimonial, fornecedores, roteiros técnicos e coordenação completa de eventos sociais e corporativos. Do planejamento ao encerramento, sem improviso.",
    href: "/eventos",
    gradient: "from-purple-500/20 to-pink-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: TrendingUp,
    label: "SDR e Food Service",
    tagline: "Prospecção que gera resultado",
    description:
      "Estratégia comercial, qualificação de leads e desenvolvimento de negócios no setor de food service com foco real em ROI e crescimento escalável.",
    href: "/food-service",
    gradient: "from-green-500/20 to-emerald-500/10",
    iconColor: "text-green-400",
  },
  {
    icon: Megaphone,
    label: "Marketing e Marca",
    tagline: "Posicionamento que converte",
    description:
      "Campanhas, identidade visual e conteúdo pensados para atrair o cliente certo e transformar visibilidade em receita.",
    href: "/marketing",
    gradient: "from-orange-500/20 to-yellow-500/10",
    iconColor: "text-orange-400",
  },
  {
    icon: Users,
    label: "Relações Públicas",
    tagline: "Você pede, eu resolvo",
    description:
      "Networking estratégico, gestão de relacionamentos e facilitação de negócios. Conexões que abrem portas e aceleram decisões.",
    href: "/relacoes-publicas",
    gradient: "from-rose-500/20 to-red-500/10",
    iconColor: "text-rose-400",
  },
];

const stats = [
  { value: "5+", label: "Frentes de Atuação" },
  { value: "100%", label: "Foco em Resultado" },
  { value: "360°", label: "Visão Estratégica" },
  { value: "1", label: "Ponto de Contato" },
];

const differentials = [
  "Abordagem multidisciplinar integrada",
  "Estratégia personalizada para cada cliente",
  "Execução com prazos e qualidade garantidos",
  "Comunicação direta e acompanhamento próximo",
  "Visão sistêmica de negócios",
  "Rede de parceiros especializados",
];

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const xPct = (e.clientX / window.innerWidth - 0.5) * 2;
      const yPct = (e.clientY / window.innerHeight - 0.5) * 2;
      heroRef.current.style.setProperty("--mx", `${xPct * 30}px`);
      heroRef.current.style.setProperty("--my", `${yPct * 20}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 40%, hsl(28 100% 58% / 0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 10% 80%, hsl(220 80% 50% / 0.05) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float"
          style={{ background: "radial-gradient(circle, hsl(28 100% 58% / 0.4), transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl animate-float animation-delay-300"
          style={{ background: "radial-gradient(circle, hsl(220 80% 60% / 0.5), transparent 70%)" }}
        />

        <div className="container-premium relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 mb-6">
                <Sparkles size={12} className="text-orange-400" />
                <span className="label-accent text-orange-400 text-[11px]">
                  Especialista Multidisciplinar
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] mb-6">
                Desafios complexos.{" "}
                <span className="gradient-text">Resultados excepcionais.</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
                Um único ponto de contato para projetos de{" "}
                <strong className="text-foreground font-semibold">
                  tecnologia, eventos, vendas, marketing e relações públicas.
                </strong>{" "}
                Estratégia personalizada e execução sem improviso.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href={WA("Olá Alisson! Vi seu site e quero conversar sobre uma parceria.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta"
                >
                  Falar com Alisson
                  <ArrowRight size={16} />
                </a>
                <a href="#solucoes" className="btn-outline">
                  Ver Soluções
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border/40">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="stat-number text-3xl md:text-4xl">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-1 font-medium leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: hero image */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{
                  background:
                    "conic-gradient(from 0deg, hsl(28 100% 58% / 0.3), transparent, hsl(42 100% 60% / 0.2), transparent, hsl(28 100% 58% / 0.3))",
                  filter: "blur(40px)",
                }}
              />
              <div className="relative w-full max-w-md">
                <div
                  className="relative rounded-3xl overflow-hidden neon-glow"
                  style={{
                    border: "1px solid hsl(28 100% 58% / 0.2)",
                    boxShadow:
                      "0 32px 80px hsl(220 40% 6% / 0.8), 0 0 60px hsl(28 100% 58% / 0.15)",
                  }}
                >
                  <img
                    src="/foto_perfil_principal_copy.jpg"
                    alt="Alisson Kennedy especialista em eventos, tecnologia e marketing"
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: "3/4", objectPosition: "center top" }}
                    loading="eager"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, hsl(220 40% 6%) 0%, transparent 40%)",
                    }}
                  />
                  <div
                    className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card"
                    style={{ border: "1px solid hsl(28 100% 58% / 0.2)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: "hsl(28 100% 58% / 0.15)" }}
                      >
                        <Star size={18} className="text-orange-400" fill="currentColor" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">Alisson Kennedy</p>
                        <p className="text-xs text-muted-foreground">
                          Especialista Multidisciplinar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-full glass-card text-xs font-bold animate-float"
                  style={{ border: "1px solid hsl(28 100% 58% / 0.3)", color: "hsl(28 100% 58%)" }}
                >
                  ✦ Multidisciplinar
                </div>
                <div
                  className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full glass-card text-xs font-bold animate-float animation-delay-400"
                  style={{ border: "1px solid hsl(42 100% 60% / 0.3)", color: "hsl(42 100% 60%)" }}
                >
                  ✦ Resultados Reais
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#solucoes"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">Explorar</span>
          <ChevronDown size={16} />
        </a>
      </section>

      {/* ── SOBRE ─────────────────────────────────────────── */}
      <section className="section-spacing relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 0% 50%, hsl(28 100% 58% / 0.07) 0%, transparent 60%)",
          }}
        />
        <div className="container-premium relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="relative order-2 lg:order-1">
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  border: "1px solid hsl(var(--border) / 0.5)",
                  boxShadow: "0 32px 80px hsl(220 40% 6% / 0.6)",
                }}
              >
                <img
                  src="/foto_sobre_mim_copy.jpg"
                  alt="Alisson Kennedy produtor de eventos corporativos e consultor de negócios em São Paulo"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "4/5", objectPosition: "center top" }}
                  loading="lazy"
                />
              </div>
              <div
                className="absolute -z-10 -bottom-6 -left-6 w-full h-full rounded-3xl"
                style={{
                  border: "1px solid hsl(28 100% 58% / 0.1)",
                  background: "hsl(28 100% 58% / 0.03)",
                }}
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="label-accent mb-4">Sobre</p>
              <h2 className="section-heading mb-6">
                Uma visão <span className="gradient-text">estratégica única</span> para cada desafio
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Alisson Kennedy reúne competências que raramente coexistem em um único profissional. Tecnologia, eventos, vendas, marketing e relações públicas trabalhando de forma integrada para que o seu negócio avance em todas as frentes ao mesmo tempo.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Cada projeto começa com escuta ativa. O contexto completo do seu negócio é o ponto de partida para uma estratégia que entrega resultado real, não só relatório.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {differentials.map((diff) => (
                  <div key={diff} className="flex items-center gap-3">
                    <CheckCircle
                      size={16}
                      className="flex-shrink-0"
                      style={{ color: "hsl(28 100% 58%)" }}
                    />
                    <span className="text-sm text-muted-foreground">{diff}</span>
                  </div>
                ))}
              </div>

              <a
                href={WA("Olá Alisson! Quero saber mais sobre como você pode ajudar meu negócio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
              >
                Entrar em Contato
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUÇÕES ──────────────────────────────────────── */}
      <section id="solucoes" className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, hsl(28 100% 58% / 0.05) 0%, transparent 60%)",
          }}
        />

        <div className="container-premium relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="label-accent mb-4">O que eu faço</p>
            <h2 className="section-heading mb-6">
              Cinco especialidades.{" "}
              <span className="gradient-text">Um único contato.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cada frente funciona sozinha. Mas quando trabalham juntas, os resultados se multiplicam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  to={service.href}
                  className={`glass-card-hover p-8 flex flex-col gap-5 group ${
                    index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div
                    className={`icon-wrapper bg-gradient-to-br ${service.gradient}`}
                    style={{ border: "1px solid hsl(var(--border) / 0.3)" }}
                  >
                    <Icon size={24} className={service.iconColor} />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                      {service.tagline}
                    </p>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-orange-400 group-hover:gap-3 transition-all">
                    Saiba mais
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, hsl(28 100% 58% / 0.1) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 grid-overlay opacity-20" />

        <div className="container-premium relative z-10 text-center">
          <div
            className="max-w-3xl mx-auto glass-card p-12 md:p-16"
            style={{ border: "1px solid hsl(28 100% 58% / 0.2)" }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
              style={{
                borderColor: "hsl(28 100% 58% / 0.3)",
                background: "hsl(28 100% 58% / 0.08)",
              }}
            >
              <Sparkles size={12} className="text-orange-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-orange-400">
                Pronto para começar?
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Seu próximo resultado começa{" "}
              <span className="gradient-text">com uma conversa</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Me conta o seu desafio. Sem compromisso. A gente descobre juntos qual é o melhor caminho.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={WA("Olá Alisson! Vi seu site e quero conversar sobre uma parceria.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
              >
                Falar com Alisson
                <ArrowRight size={16} />
              </a>
              <a href="#contato" className="btn-outline">
                Deixar uma mensagem
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
