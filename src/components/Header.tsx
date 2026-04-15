import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20Alisson!%20Vim%20pelo%20site%20e%20quero%20blindar%20minha%20opera%C3%A7%C3%A3o.";

const navLinks = [
  { label: "Arsenal", href: "#arsenal" },
  { label: "Sobre", href: "#sobre" },
  { label: "Investimento", href: "#investimento" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container-premium flex h-16 items-center justify-between md:h-20">
          <a href="/" className="font-display text-2xl md:text-3xl font-bold text-accent tracking-tight transition-opacity hover:opacity-80">
            AK Co.
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-xs px-6 py-3"
            >
              Quero Blindar Minha Operação
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[70] bg-background md:hidden">
          <div className="flex h-16 items-center justify-between px-6">
            <span className="font-display text-2xl font-bold text-accent">AK Co.</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 -mr-2" aria-label="Fechar menu">
              <X className="h-6 w-6 text-foreground" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center gap-8 pt-20">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display text-2xl text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta mt-4 px-10 py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Quero Blindar Minha Operação
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
