import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ReactNode } from "react";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServicePageProps {
  label: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  accentColor: string;
  accentColorHsl: string;
  icon: ReactNode;
  intro: string;
  features: ServiceFeature[];
  bullets: string[];
  ctaText?: string;
  waMessage: string;
  relatedPages?: { label: string; href: string }[];
}

export function ServicePage({
  label,
  title,
  titleHighlight,
  subtitle,
  imageSrc,
  imageAlt,
  accentColor,
  accentColorHsl,
  icon,
  intro,
  features,
  bullets,
  ctaText = "Falar com Alisson",
  waMessage,
  relatedPages = [],
}: ServicePageProps) {
  const waHref = `https://wa.me/5511967385924?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[70vh] flex items-end overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        <div className="absolute inset-0">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div
            className="absolute inset-0 bg-background/50"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, hsl(220 40% 6%) 10%, hsl(220 40% 6% / 0.8) 50%, hsl(220 40% 6% / 0.5) 100%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 70% 50% at 30% 50%, hsl(${accentColorHsl} / 0.08) 0%, transparent 60%)`,
            }}
          />
          <div className="absolute inset-0 grid-overlay opacity-20" />
        </div>

        <div className="container-premium relative z-10 pb-20 pt-32">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Voltar
          </Link>

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{
              borderColor: `hsl(${accentColorHsl} / 0.4)`,
              background: `hsl(${accentColorHsl} / 0.1)`,
            }}
          >
            <Sparkles size={12} style={{ color: accentColor }} />
            <span
              className="text-[11px] font-semibold tracking-[0.2em] uppercase"
              style={{ color: accentColor }}
            >
              {label}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] max-w-4xl mb-6">
            {title}{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${accentColor}, hsl(${accentColorHsl} / 0.7))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {titleHighlight}
            </span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
            {subtitle}
          </p>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            {ctaText}
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <div
                className="flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                style={{
                  background: `hsl(${accentColorHsl} / 0.12)`,
                  border: `1px solid hsl(${accentColorHsl} / 0.25)`,
                }}
              >
                <span style={{ color: accentColor }}>{icon}</span>
              </div>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
                {intro}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bullets.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: accentColor }}
                    />
                    <span className="text-sm text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div
                className="glass-card p-8 sticky top-24"
                style={{ border: `1px solid hsl(${accentColorHsl} / 0.2)` }}
              >
                <p
                  className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
                  style={{ color: accentColor }}
                >
                  Vamos começar?
                </p>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Fale diretamente comigo
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Me conta o seu projeto. Respondo rápido e sem enrolação.
                </p>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta w-full justify-center"
                >
                  Conversar no WhatsApp
                </a>
                <a href="#contato" className="btn-outline w-full justify-center mt-3">
                  Enviar mensagem
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────── */}
      <section
        className="section-spacing relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, transparent, hsl(${accentColorHsl} / 0.04) 50%, transparent)`,
        }}
      >
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <div className="container-premium relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: accentColor }}
            >
              O que entrego
            </p>
            <h2 className="section-heading">
              Cada projeto,{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${accentColor}, hsl(${accentColorHsl} / 0.6))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                cada detalhe
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={f.title} className="glass-card-hover p-7">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-lg font-black"
                  style={{
                    background: `hsl(${accentColorHsl} / 0.12)`,
                    border: `1px solid hsl(${accentColorHsl} / 0.2)`,
                    color: accentColor,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 50%, hsl(${accentColorHsl} / 0.08) 0%, transparent 60%)`,
          }}
        />
        <div className="container-premium relative z-10 text-center">
          <div
            className="max-w-2xl mx-auto glass-card p-12"
            style={{ border: `1px solid hsl(${accentColorHsl} / 0.2)` }}
          >
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Pronto para sair do lugar?{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${accentColor}, hsl(42 100% 60%))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Me fala.
              </span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Cada conversa começa um projeto. Cada projeto transforma uma realidade.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              {ctaText}
              <ArrowRight size={16} />
            </a>
          </div>

          {relatedPages.length > 0 && (
            <div className="mt-12">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
                Outras soluções
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {relatedPages.map((p) => (
                  <Link key={p.href} to={p.href} className="btn-ghost">
                    {p.label}
                    <ArrowRight size={12} />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
