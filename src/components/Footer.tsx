import { Instagram, Linkedin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20quero%20solicitar%20or%C3%A7amento%20do%20servi%C3%A7o%20Alisson%20Kennedy%20%7C%20Personal%20Assistant.%20Minha%20demanda%20%C3%A9%3A%20%5Bdescreva%5D.%20Prazo%3A%20%5Bdata%2Fhora%5D.%20Cidade%3A%20S%C3%A3o%20Paulo.";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container-premium py-12 md:py-16">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          {/* Links */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <nav className="flex items-center gap-6">
              <a href="/" className="link-muted">
                Home
              </a>
              <a href="/termos" className="link-muted">
                Termos
              </a>
            </nav>
            <span className="hidden text-muted-foreground md:inline">|</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-muted"
            >
              WhatsApp +55 11 96738-5924
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
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
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © Alisson Kennedy | Personal Assistant — São Paulo/SP
          </p>
        </div>
      </div>
    </footer>
  );
}
