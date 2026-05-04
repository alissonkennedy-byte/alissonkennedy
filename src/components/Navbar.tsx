import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Web Apps & IA", href: "/web-apps-ia" },
  { label: "Eventos", href: "/eventos" },
  { label: "Food Service", href: "/food-service" },
  { label: "Marketing", href: "/marketing" },
  { label: "Relações Públicas", href: "/relacoes-publicas" },
];

const WA_HOME = `https://wa.me/5511967385924?text=${encodeURIComponent("Olá Alisson! Vi seu site e quero conversar sobre uma parceria.")}`;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-premium">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg group-hover:shadow-orange-500/40 transition-shadow duration-300">
              <Zap size={18} className="text-white" fill="white" />
            </div>
            <div>
              <span className="font-black text-base tracking-tight text-foreground">
                Alisson Kennedy
              </span>
              <p className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase leading-none">
                Hub de Soluções
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? "text-foreground bg-muted/40"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href={WA_HOME}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta py-2.5 px-6 text-xs"
            >
              Falar com Alisson
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-xl border-t border-border/50 py-4">
          <div className="container-premium flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? "text-foreground bg-muted/60"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border/30 mt-2">
              <a
                href={WA_HOME}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta w-full justify-center py-3 text-xs"
              >
                Falar com Alisson
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
