import { Instagram, Linkedin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20Alisson.%20Quero%20solicitar%20triagem.%0A%0A1)%20Demanda%3A%20()%0A2)%20Prazo%20(data%2Fhora)%3A%20()%0A3)%20Cidade%3A%20()%0A4)%20Padr%C3%A3o%2FPrefer%C3%AAncias%3A%20()%0A5)%20Or%C3%A7amento%20ou%20limite%20de%20aprova%C3%A7%C3%A3o%3A%20()%0A6)%20Modelo%3A%20(Avulsa%20%2F%20Mensal%20%2F%20Exclusividade)%0A%0ASe%20for%20urgente%2C%20escreva%3A%20EMERGENCIAL.";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-premium py-12 md:py-16">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          {/* Links */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <nav className="flex items-center gap-6">
              <a href="/" className="link-muted hover:text-primary">
                Home
              </a>
            </nav>
            <span className="hidden text-muted-foreground md:inline">|</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-muted hover:text-primary"
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
              className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/alisson-kennedy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110"
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
