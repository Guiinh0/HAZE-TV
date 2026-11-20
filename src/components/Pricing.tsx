"use client";

import { Check, Sparkles, ArrowRight } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";
import { Reveal } from "@/components/Reveal";
import { motion, useReducedMotion } from "framer-motion";

export function Pricing() {
  const shouldReduceMotion = useReducedMotion();

  // Foco exclusivo nos planos ativos: Mensal (R$ 35) e Trimestral (R$ 90 - Mais Escolhido)
  const plans = [
    {
      name: "Plano Mensal",
      period: "Por mês • Sem fidelidade",
      price: SITE_CONFIG.pricing.monthly,
      description: "Ideal para experimentar com liberdade total e qualidade máxima em qualquer tela.",
      featured: false,
      features: [
        "1 Tela simultânea em qualquer dispositivo",
        "Acesso completo ao vivo, filmes e séries",
        "Qualidade em 4K e Full HD",
        "Suporte direto no WhatsApp",
        "Sem fidelidade e sem multas",
      ],
      whatsappMsg: "Olá! Gostaria de assinar o Plano Mensal de R$ 35 da Haze TV.",
    },
    {
      name: "Plano Trimestral",
      period: "A cada 3 meses • Mais econômico",
      price: SITE_CONFIG.pricing.quarterly,
      description: "A melhor relação custo-benefício. Economia garantida para quem quer estabilidade contínua.",
      featured: true, // Destaque oficial do Manual de Identidade Visual
      features: [
        "Acesso completo aos 1.700+ canais",
        "Catálogo com 31.000+ filmes e 9.000+ séries",
        "Transmissão esportiva e cinema em até 4K UHD",
        "Prioridade no atendimento e suporte",
        "Renovação simples e sem burocracia",
      ],
      whatsappMsg: "Olá! Gostaria de assinar o Plano Trimestral de R$ 90 da Haze TV.",
    },
  ];

  return (
    <section id="planos" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <div className="inline-block px-3.5 py-1 rounded-full bg-haze-card border border-haze-line text-xs font-semibold text-haze-primary uppercase tracking-wider mb-3">
              Planos Oficiais 2026
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-haze-text mb-4">
              Escolha seu plano e acenda a tela
            </h2>
            <p className="text-base text-haze-muted">
              Transparência total. Sem multas de fidelidade e com ativação imediata no WhatsApp.
            </p>
          </div>
        </Reveal>

        {/* Grid focado nos 2 planos principais de venda */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            return (
              <Reveal key={idx} delay={idx * 0.1} className="h-full">
                {plan.featured ? (
                  /* Card Trimestral - MAIS ESCOLHIDO com borda roxa animada */
                  <div className="relative rounded-2xl p-[2px] overflow-hidden h-full shadow-purple-glow md:-translate-y-2 group">
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

                    <div className="relative rounded-2xl p-8 sm:p-9 flex flex-col justify-between bg-haze-card h-full">
                      {/* Badge MAIS ESCOLHIDO Oficial do Manual */}
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-haze-cta text-haze-base text-xs font-black tracking-wider shadow-green-glow uppercase z-10">
                        Mais Escolhido
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-display font-bold text-2xl text-haze-text">
                            {plan.name}
                          </h3>
                        </div>

                        <p className="text-sm text-haze-muted mb-6 leading-relaxed">
                          {plan.description}
                        </p>

                        <div className="mb-6 p-4 rounded-xl bg-haze-base border border-haze-line/80">
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-display font-black text-4xl text-haze-text tracking-tight">
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
                        className="w-full py-4 px-6 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all bg-haze-cta text-haze-base hover:brightness-110 shadow-green-glow"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Assinar no WhatsApp</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                ) : (
                  /* Card Mensal */
                  <div className="relative rounded-2xl p-8 sm:p-9 flex flex-col justify-between bg-haze-card border border-haze-line hover:border-haze-primary/50 transition-all duration-300 h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-display font-bold text-2xl text-haze-text">
                          {plan.name}
                        </h3>
                      </div>

                      <p className="text-sm text-haze-muted mb-6 leading-relaxed">
                        {plan.description}
                      </p>

                      <div className="mb-6 p-4 rounded-xl bg-haze-base border border-haze-line/80">
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-display font-black text-4xl text-haze-text tracking-tight">
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
                      className="w-full py-4 px-6 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all bg-haze-base border border-haze-line text-haze-text hover:border-haze-primary hover:text-white"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Assinar no WhatsApp</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        {/* Rodapé da tabela com selos de confirmação */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-haze-muted">
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-haze-primary" /> 4K / Full HD
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-haze-primary" /> Esportes ao Vivo
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-haze-primary" /> Séries e Filmes Completos
            </span>
          </div>

          <div className="mt-8 text-center text-sm text-haze-muted">
            Quer experimentar antes de assinar?{" "}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-haze-cta hover:underline font-bold"
            >
              Solicite aqui seu teste grátis de 4 horas sem compromisso.
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
