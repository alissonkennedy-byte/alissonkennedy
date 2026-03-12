import { Instagram, Linkedin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20acesso%20ao%20Private%20Office.";

const sectionLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#modelos" },
  { label: "Cases", href: "#cases" },
  { label: "Corporate", href: "/corporate" },
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
    : sectionLinks.map((l) =>
        l.href.startsWith("#") ? { ...l, href: `/${l.href}` } : l
      );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[60] border-b border-border/50 bg-background/90 backdrop-blur-md">
        <div className="container-premium flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-70">
            <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-foreground">
              AK
            </span>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-semibold tracking-wide text-foreground leading-none">
                Alisson Kennedy
              </span>
              <span className="text-[10px] text-primary font-medium tracking-wider uppercase">
                Private Office
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + socials */}
          <div className="hidden items-center gap-5 md:flex">
            <a href="https://www.instagram.com/alissonkennedy_/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-all duration-300 hover:text-foreground" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/alisson-kennedy/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-all duration-300 hover:text-foreground" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs px-5 py-2.5">
              Solicitar Triagem
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-[70] md:hidden" style={{ backgroundColor: "hsl(0 0% 8%)" }}>
          <nav className="px-6 flex flex-col gap-1 py-8 h-full overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-foreground py-3 border-b border-border/30"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center gap-6 pt-6 mt-4 border-t border-border/30">
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
