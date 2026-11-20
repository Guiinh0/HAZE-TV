import { Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";
import { Reveal } from "@/components/Reveal";

export function CtaBanner() {
  return (
    <section className="py-14 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-r from-[#141224] via-[#1A1433] to-[#121021] border border-haze-primary/30 shadow-purple-glow-lg text-center overflow-hidden">
            {/* Névoa decorativa interna */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 bg-haze-primary/20 blur-3xl rounded-full"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 bg-haze-primary/20 blur-3xl rounded-full"
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-haze-text mb-4 leading-tight">
                Pronto para acender a tela e curtir sem travamentos?
              </h2>
              <p className="text-base text-haze-muted mb-8 leading-relaxed">
                Solicite o seu teste gratuito de 4 horas agora mesmo no WhatsApp e comprove a estabilidade do sinal.
              </p>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-haze-cta text-haze-base font-bold text-base md:text-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-green-glow"
              >
                <Sparkles className="w-5 h-5 text-haze-base" />
                <span>Solicitar Teste Grátis de 4h</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
