"use client";

import { Check, Sparkles } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";
import { Reveal } from "@/components/Reveal";
import { motion, useReducedMotion } from "framer-motion";

export function Pricing() {
  const shouldReduceMotion = useReducedMotion();

  const plans = [
    {
      name: "Mensal",
      period: "Por mês",
      price: SITE_CONFIG.pricing.monthly,
      description: "Ideal para experimentar e testar a plataforma no seu dia a dia.",
      featured: false,
      features: [
        "Acesso completo ao catálogo e ao vivo",
        "Qualidade em até 4K/Full HD",
        "Suporte direto no WhatsApp",
        "Sem taxa de cancelamento",
        "1 conexão simultânea",
      ],
      whatsappMsg: "Olá! Gostaria de assinar o plano Mensal da Haze TV.",
    },
    {
      name: "Trimestral",
      period: "A cada 3 meses",
      price: SITE_CONFIG.pricing.quarterly,
      description: "A melhor relação custo-benefício para quem quer tranquilidade e economia.",
      featured: true, // Destaque "Mais Escolhido" com borda de gradiente roxo giratório
      features: [
        "Acesso completo ao catálogo e ao vivo",
        "Qualidade em até 4K/Full HD",
        "Prioridade no atendimento e suporte",
        "Renovação sem burocracia",
        "Mais economia por mês",
      ],
      whatsappMsg: "Olá! Gostaria de assinar o plano Trimestral da Haze TV.",
    },
    {
      name: "Anual",
      period: "Por ano",
      price: SITE_CONFIG.pricing.annual,
      description: "Máxima economia para quem deseja a experiência Haze TV durante o ano todo.",
      featured: false,
      features: [
        "Acesso completo durante 12 meses",
        "Qualidade em até 4K/Full HD",
        "Suporte VIP dedicado",
        "Maior desconto acumulado",
        "Sem reajuste durante o período",
      ],
      whatsappMsg: "Olá! Gostaria de assinar o plano Anual da Haze TV.",
    },
  ];

  return (
    <section id="planos" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <div className="inline-block px-3 py-1 rounded-full bg-haze-card border border-haze-line text-xs font-semibold text-haze-primary uppercase tracking-wider mb-3">
              Planos & Assinaturas
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-haze-text mb-4">
              Escolha o plano ideal para a sua sessão
            </h2>
            <p className="text-base text-haze-muted">
              Transparência do início ao fim. Sem fidelidade, sem pegadinhas e com ativação imediata.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            return (
              <Reveal key={idx} delay={idx * 0.08} className="h-full">
                {plan.featured ? (
                  /* Item 7: Borda com gradiente roxo girando lentamente */
                  <div className="relative rounded-2xl p-[2px] overflow-hidden h-full shadow-purple-glow md:-translate-y-2 group">
                    {/* Gradiente roxo giratório */}
                    <motion.div
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              rotate: 360,
                            }
                      }
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,#8B5CF6,transparent_65%,#8B5CF6)] origin-center"
                    />

                    {/* Card Interno */}
                    <div className="relative rounded-2xl p-8 flex flex-col justify-between bg-haze-card h-full">
                      {/* Badge Mais Escolhido (Verde CTA exclusivo) */}
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-haze-cta text-haze-base text-xs font-bold tracking-wide shadow-green-glow uppercase z-10">
                        Mais Escolhido
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-display font-bold text-2xl text-haze-text">
                            {plan.name}
                          </h3>
                        </div>

                        <p className="text-sm text-haze-muted mb-6 leading-relaxed">
                          {plan.description}
                        </p>

                        <div className="mb-6 p-4 rounded-xl bg-haze-base border border-haze-line/80">
                          <div className="flex items-baseline gap-1">
                            <span className="font-display font-bold text-3xl sm:text-4xl text-haze-text tracking-tight">
                              {plan.price}
                            </span>
                          </div>
                          <span className="text-xs text-haze-muted">{plan.period}</span>
                        </div>

                        <ul className="space-y-3.5 mb-8">
                          {plan.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-3 text-sm text-haze-muted">
                              <div className="w-5 h-5 rounded-full bg-haze-base border border-haze-line flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3.5 h-3.5 text-haze-primary" />
                              </div>
                              <span className="text-haze-text/90 leading-tight">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={getWhatsAppUrl(plan.whatsappMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all bg-haze-cta text-haze-base hover:brightness-110 shadow-green-glow"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Assinar no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="relative rounded-2xl p-8 flex flex-col justify-between bg-haze-card border border-haze-line hover:border-haze-primary/50 transition-all duration-300 h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-display font-bold text-2xl text-haze-text">
                          {plan.name}
                        </h3>
                      </div>

                      <p className="text-sm text-haze-muted mb-6 leading-relaxed">
                        {plan.description}
                      </p>

                      <div className="mb-6 p-4 rounded-xl bg-haze-base border border-haze-line/80">
                        <div className="flex items-baseline gap-1">
                          <span className="font-display font-bold text-3xl sm:text-4xl text-haze-text tracking-tight">
                            {plan.price}
                          </span>
                        </div>
                        <span className="text-xs text-haze-muted">{plan.period}</span>
                      </div>

                      <ul className="space-y-3.5 mb-8">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3 text-sm text-haze-muted">
                            <div className="w-5 h-5 rounded-full bg-haze-base border border-haze-line flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5 text-haze-primary" />
                            </div>
                            <span className="text-haze-text/90 leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={getWhatsAppUrl(plan.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all bg-haze-base border border-haze-line text-haze-text hover:border-haze-primary hover:text-white"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Assinar no WhatsApp</span>
                    </a>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center text-sm text-haze-muted">
            Deseja testar antes de escolher um plano?{" "}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-haze-primary hover:underline font-semibold"
            >
              Solicite aqui o seu teste grátis de 4 horas sem compromisso.
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
