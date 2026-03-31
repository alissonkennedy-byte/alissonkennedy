import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "hsl(0 0% 5%)" }}>
      <div className="container-premium py-12 md:py-16">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Logo */}
          <div>
            <span className="font-display text-2xl font-bold tracking-tight text-foreground">
              AK
            </span>
            <p className="mt-1 text-xs text-muted-foreground tracking-[0.2em] uppercase">
              Alisson Kennedy Company
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="/termos" className="transition-colors hover:text-primary">
              Termos e Condições
            </a>
            <span className="text-border">|</span>
            <a href="/privacidade" className="transition-colors hover:text-primary">
              Política de Privacidade
            </a>
          </div>

          {/* CNPJ + Address */}
          <p className="text-xs text-muted-foreground/60">
            CNPJ: 65.246.551/0001-85 | Av. Faria Lima, São Paulo — SP
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
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

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/40">
            © 2026 Alisson Kennedy Private Office. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
