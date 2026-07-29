import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoBranco from "@/assets/LOGO_AK_BRANCO.png";

const links = [
  { id: "sobre", label: "Sobre" },
  { id: "atuacao", label: "Onde atuo" },
  { id: "experiencia", label: "Experiência" },
  { id: "contato", label: "Contato" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          solid ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container-ak flex h-[72px] items-center justify-between">
          <a href="#topo" aria-label="Alisson Kennedy, início" className="flex items-center">
            <span className="display text-xl tracking-tight">
              Alisson <span className="text-accent">Kennedy</span>
            </span>
          </a>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Navegação principal">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="link-underline text-[0.8rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-[0.75rem] uppercase tracking-[0.2em] text-muted-foreground"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            Menu
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-background md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="container-ak flex h-[72px] items-center justify-between">
              <img src={logoBranco} alt="Alisson Kennedy" className="h-9 w-auto object-contain" />
              <button
                className="text-[0.75rem] uppercase tracking-[0.2em] text-muted-foreground"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
              >
                Fechar
              </button>
            </div>
            <nav className="container-ak mt-16 flex flex-col gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="display text-5xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
