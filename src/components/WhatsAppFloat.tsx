import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511967385924?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20Alisson.";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
      style={{ backgroundColor: "hsl(142 70% 45%)" }}
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </a>
  );
}