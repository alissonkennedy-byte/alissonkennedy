import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20Alisson!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
      style={{
        backgroundColor: "#25D366",
        color: "#fff",
        minWidth: "56px",
        minHeight: "56px",
      }}
      aria-label="Solicitar orçamento via WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Orçamento</span>
    </a>
  );
}
