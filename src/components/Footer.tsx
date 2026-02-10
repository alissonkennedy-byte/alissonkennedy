import { Instagram, Linkedin, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20acesso%20ao%20Private%20Office.";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-premium py-12 md:py-16">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          {/* Logo */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div>
              <span className="font-display text-lg font-semibold tracking-tight">
                Alisson Kennedy
              </span>
              <span className="text-primary font-medium"> | Private Office</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-3 text-sm md:items-end">
            <div className="flex items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
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
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="/termos" className="transition-colors hover:text-primary text-xs">
                Termos e Condições
              </a>
              <span className="text-border">|</span>
              <a href="/privacidade" className="transition-colors hover:text-primary text-xs">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground/60">
            © 2026 Alisson Kennedy Private Office. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
