import { MessageCircle, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Botão flutuante WhatsApp com destaque verde e glow */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar Teste Grátis no WhatsApp"
        className="group flex items-center gap-3 px-4 py-3.5 rounded-full bg-haze-cta text-haze-base font-bold text-sm shadow-green-glow hover:brightness-110 active:scale-95 transition-all duration-200"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <span className="hidden sm:inline">Teste Grátis 4h</span>
        <MessageCircle className="w-5 h-5 text-haze-base fill-current" />
      </a>
    </div>
  );
}

