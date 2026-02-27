import { Instagram, Linkedin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20acesso%20ao%20Private%20Office.";

const sectionLinks = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Modelos", href: "#modelos" },
  { label: "Founder", href: "#founder" },
  { label: "Protocolo", href: "#protocolo" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const navLinks = isHome
    ? sectionLinks
    : sectionLinks.map((l) => ({ ...l, href: `/${l.href}` }));

  return (
    <>
      <header className="sticky top-0 z-[60] border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
        <div className="container-premium flex h-14 items-center justify-between md:h-20">
          <a href="/" className="flex flex-col transition-opacity duration-300 hover:opacity-70">
            <span className="font-display text-base md:text-lg font-semibold tracking-tight">
              Alisson Kennedy
            </span>
            <span className="text-[10px] md:text-xs text-primary font-medium tracking-wider">
              Private Office
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm text-muted-foreground transition-all duration-300 hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/corporate"
              className="relative text-sm text-muted-foreground transition-all duration-300 hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
            >
              Corporate
            </a>
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <a href="https://www.instagram.com/alissonkennedy_/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-110" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/alisson-kennedy/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-110" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary ml-2">
              Solicitar Triagem
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu — OUTSIDE header to avoid stacking context issues */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-14 z-[70] md:hidden" style={{ backgroundColor: "#080808" }}>
          <nav className="px-6 flex flex-col gap-1 py-8 h-full overflow-y-auto">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-foreground py-3 border-b border-border/50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/corporate"
              className="text-lg font-medium py-3 border-b border-border/50 text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Corporate Solutions →
            </a>

            <div className="flex items-center gap-6 pt-6 mt-4 border-t border-border">
              <a href="https://www.instagram.com/alissonkennedy_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-foreground" />
              </a>
              <a href="https://www.linkedin.com/in/alisson-kennedy/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full text-center"
            >
              Solicitar Triagem
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
