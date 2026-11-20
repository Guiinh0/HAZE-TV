import { Sparkles, ArrowRight, Zap } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";
import { Reveal } from "@/components/Reveal";

export function CtaBanner() {
  return (
    <section className="py-14 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-r from-[#141224] via-[#1A1433] to-[#121021] border border-haze-primary/40 shadow-purple-glow-lg text-center overflow-hidden">
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
              {/* Badge Oficial da Peça Comercial da Prancha 05 */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-haze-primary/20 border border-haze-primary/40 text-xs font-bold text-haze-primary uppercase tracking-wider mb-5">
                <Zap className="w-3.5 h-3.5 text-haze-cta" />
                <span>Liberação Imediata</span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-haze-text mb-4 leading-tight">
                Teste Grátis por 4 Horas
              </h2>
              <p className="text-base text-haze-muted mb-8 leading-relaxed">
                Experimente a estabilidade da Haze TV na sua tela antes de escolher seu plano. Ativação rápida em até 5 minutos direto no WhatsApp.
              </p>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-haze-cta text-haze-base font-bold text-base md:text-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-green-glow"
              >
                <Sparkles className="w-5 h-5 text-haze-base" />
                <span>Pedir Acesso no WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="mt-4 text-xs text-haze-muted">
                Canal oficial: <span className="text-haze-text font-medium">@hazetv.oficial</span> • Sem cartão de crédito
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
