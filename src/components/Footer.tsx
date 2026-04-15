import { Instagram, Linkedin, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20Alisson!%20Vim%20pelo%20site.";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="container-premium">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="/" className="font-display text-2xl font-extrabold text-primary">
              AK
            </a>
            <p className="mt-2 text-sm text-muted-foreground font-body">
              Alisson Kennedy, Arquiteto de Negócios Digitais
            </p>
            <p className="mt-1 text-xs text-muted-foreground/70 font-body italic">
              Tecnologia que humaniza e escala o seu negócio.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/alissonkennedy_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/alisson-kennedy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-body">
          <p>© 2026 Alisson Kennedy Company. Todos os direitos reservados.</p>
          <p>São Paulo, SP · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
