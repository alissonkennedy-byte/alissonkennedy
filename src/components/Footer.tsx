import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="container-premium">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="/" className="font-display text-2xl font-bold text-accent">
            AK Co.
          </a>

          <p className="text-sm text-muted-foreground font-body">
            Alisson Kennedy | Soluções Digitais em Escala
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/alissonkennedy_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/alisson-kennedy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
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
