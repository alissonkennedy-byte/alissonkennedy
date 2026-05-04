import { Link } from "react-router-dom";
import { Zap, Mail, MapPin, Phone } from "lucide-react";

const services = [
  { label: "Web Apps e Inteligência Artificial", href: "/web-apps-ia" },
  { label: "Produção de Eventos", href: "/eventos" },
  { label: "SDR e Food Service", href: "/food-service" },
  { label: "Marketing e Marca", href: "/marketing" },
  { label: "Relações Públicas", href: "/relacoes-publicas" },
];



const WA_CONTACT = `https://wa.me/5511967385924?text=${encodeURIComponent("Olá Alisson! Vi seu site e quero conversar sobre uma parceria.")}`;

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/40 bg-background">
      <div className="divider-neon opacity-60" />

      <div id="contato" className="container-premium py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: info */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg">
                <Zap size={20} className="text-white" fill="white" />
              </div>
              <div>
                <span className="font-black text-lg tracking-tight text-foreground block">
                  Alisson Kennedy
                </span>
                <p className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase leading-none">
                  Hub de Soluções
                </p>
              </div>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-8">
              Especialista multidisciplinar em tecnologia, eventos, vendas, marketing e relações públicas. Um único contato para resolver o que o seu negócio precisa.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <a
                href={WA_CONTACT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-muted/60 flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                  <Phone size={14} />
                </div>
                <span>+55 (11) 96738-5924</span>
              </a>
              <a
                href="mailto:alisson.kennedy@gmail.com"
                className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-muted/60 flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                  <Mail size={14} />
                </div>
                <span>alisson.kennedy@gmail.com</span>
              </a>
              <div className="inline-flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-muted/60 flex items-center justify-center">
                  <MapPin size={14} />
                </div>
                <span>São Paulo, SP — Atendimento em todo o Brasil</span>
              </div>
            </div>


          </div>

          {/* Right: quick contact form */}
          <div>
            <p className="label-accent mb-3">Contato Direto</p>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Vamos conversar sobre o seu projeto?
            </h3>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const msg = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                const url = `https://wa.me/5511967385924?text=${encodeURIComponent(`Olá Alisson! Meu nome é ${name}. ${msg}`)}`;
                window.open(url, "_blank");
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  required
                  className="input-premium"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Seu e-mail"
                  className="input-premium"
                />
              </div>
              <input
                name="subject"
                type="text"
                placeholder="Qual serviço você precisa?"
                className="input-premium"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Me conte o que você precisa..."
                required
                className="input-premium resize-none"
              />
              <button type="submit" className="btn-cta w-full justify-center">
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>

        <div className="divider-neon my-12 opacity-30" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {services.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted-foreground whitespace-nowrap">
            © {new Date().getFullYear()} Alisson Kennedy
          </p>
        </div>
      </div>
    </footer>
  );
}
