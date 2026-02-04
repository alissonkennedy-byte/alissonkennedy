import { Instagram, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20Alisson.%20Quero%20solicitar%20triagem.%0A%0A1)%20Demanda%3A%20()%0A2)%20Prazo%20(data%2Fhora)%3A%20()%0A3)%20Cidade%3A%20()%0A4)%20Padr%C3%A3o%2FPrefer%C3%AAncias%3A%20()%0A5)%20Or%C3%A7amento%20ou%20limite%20de%20aprova%C3%A7%C3%A3o%3A%20()%0A6)%20Modelo%3A%20(Avulsa%20%2F%20Mensal%20%2F%20Exclusividade)%0A%0ASe%20for%20urgente%2C%20escreva%3A%20EMERGENCIAL.";

const navLinks = [
  { label: "Para quem", href: "#para-quem" },
  { label: "Serviços", href: "#servicos" },
  { label: "Modelos", href: "#modelos" },
  { label: "Processo", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Quem opera", href: "#quem-opera" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container-premium flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <a 
          href="/" 
          className="flex flex-col transition-opacity duration-300 hover:opacity-70"
        >
          <span className="font-display text-lg font-semibold tracking-tight">Alisson Kennedy</span>
          <span className="text-xs text-primary font-medium tracking-wider">Premium Concierge</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="relative text-sm text-muted-foreground transition-all duration-300 hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 md:flex">
          <a
            href="https://www.instagram.com/alissonkennedy_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/alisson-kennedy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary ml-2"
          >
            Solicitar triagem
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden transition-all duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`border-t border-border bg-background md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-premium flex flex-col gap-4 py-6">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-5 pt-4">
            <a
              href="https://www.instagram.com/alissonkennedy_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-all duration-300 hover:scale-110"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/alisson-kennedy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-all duration-300 hover:scale-110"
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
            Solicitar triagem
          </a>
        </nav>
      </div>
    </header>
  );
}
