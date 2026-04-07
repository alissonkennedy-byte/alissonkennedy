import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20Alisson!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const navLinks = [
  { label: "Eventos", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Clientes", href: "#clientes" },
  { label: "Mobilidade", href: "#mobilidade" },
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
          <a href="/" className="font-display text-2xl md:text-3xl font-bold text-primary tracking-tight transition-opacity hover:opacity-80">
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
              className="btn-primary text-xs px-6 py-3"
            >
              Solicitar Orçamento
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
            <span className="font-display text-2xl font-bold text-primary">AK Co.</span>
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
              className="btn-primary mt-4 px-10 py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
