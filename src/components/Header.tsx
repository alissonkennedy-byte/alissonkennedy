import { Instagram, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20quero%20solicitar%20or%C3%A7amento%20do%20servi%C3%A7o%20Alisson%20Kennedy%20%7C%20Personal%20Assistant.%20Minha%20demanda%20%C3%A9%3A%20%5Bdescreva%5D.%20Prazo%3A%20%5Bdata%2Fhora%5D.%20Cidade%3A%20S%C3%A3o%20Paulo.";

const navLinks = [
  { label: "Modelos", href: "#modelos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Confidencialidade", href: "#confidencialidade" },
  { label: "Termos", href: "/termos" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-premium flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="font-display text-lg font-semibold tracking-tight">
          Alisson Kennedy
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link key={link.label} to={link.href} className="link-muted">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="link-muted">
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://www.instagram.com/alissonkennedy_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/alisson-kennedy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary ml-2">
            Solicitar orçamento
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-premium flex flex-col gap-4 py-6">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.instagram.com/alissonkennedy_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/alisson-kennedy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 w-full text-center"
            >
              Solicitar orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
