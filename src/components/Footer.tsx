import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-premium py-12 md:py-16">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          {/* Logo & Contact */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div>
              <span className="font-display text-lg font-semibold tracking-tight">
                Alisson Kennedy
              </span>
              <span className="text-primary font-medium"> | Private Office</span>
            </div>
            <span className="text-sm text-muted-foreground">
              +55 11 96738-5924
            </span>
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

        {/* Legal */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Atendimento exclusivo mediante análise de perfil. Todos os direitos
            reservados.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/60">
            © Alisson Kennedy | Private Office — São Paulo/SP
          </p>
        </div>
      </div>
    </footer>
  );
}
