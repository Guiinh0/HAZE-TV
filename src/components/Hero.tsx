"use client";

import { useRef } from "react";
import { Sparkles, Play, ShieldCheck, Zap } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";
import { CountUp } from "@/components/CountUp";
import { PlayerMockup } from "@/components/PlayerMockup";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function Hero() {
  const mockupRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Parallax 3D com scroll no mockup do player
  const { scrollYProgress } = useScroll({
    target: mockupRef,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge de boas-vindas com animação CSS suave e zero hydration mismatch */}
          <div className="animate-hero-badge">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-haze-card border border-haze-line text-xs font-medium text-haze-muted mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-haze-cta animate-pulse" />
              <span>{SITE_CONFIG.secondarySlogan}</span>
            </div>
          </div>

          {/* Headline Principal (H1 Único) - Visível Imediatamente e Animado */}
          <div className="animate-hero-title">
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-haze-text tracking-tight leading-[1.1] mb-6">
              {SITE_CONFIG.slogan}
            </h1>
          </div>

          {/* Subheadline sobre estabilidade e qualidade */}
          <div className="animate-hero-subtitle">
            <p className="text-base sm:text-lg md:text-xl text-haze-muted leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Plataforma de entretenimento digital com transmissão contínua, baixa latência e qualidade em até 4K. Esportes ao vivo, cinema e séries com a estabilidade que a sua sessão merece.
            </p>
          </div>

          {/* CTAs */}
          <div className="animate-hero-cta">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-haze-cta text-haze-base font-bold text-base md:text-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-green-glow"
              >
                <Sparkles className="w-5 h-5 text-haze-base" />
                <span>Solicitar Teste Grátis de 4h</span>
              </a>
              
              <a
                href="#planos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-haze-card border border-haze-line text-haze-text font-medium text-base hover:border-haze-primary/60 transition-all"
              >
                <span>Ver Planos Disponíveis</span>
              </a>
            </div>
          </div>

          {/* Micro selos de confiança com animação CountUp */}
          <div className="animate-hero-badges">
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-haze-muted">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Play className="w-4 h-4 text-haze-primary" />
                <span>
                  <CountUp to={1700} suffix="+" /> Canais ao Vivo
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Zap className="w-4 h-4 text-haze-primary" />
                <span>
                  <CountUp to={31000} suffix="+" /> Filmes & <CountUp to={9000} suffix="+" /> Séries
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-haze-cta" /> Teste Grátis 4 Horas
              </span>
            </div>
          </div>
        </div>

        {/* Mockup do Player com Perspective 1200 e Scroll Parallax 3D */}
        <div
          ref={mockupRef}
          style={{ perspective: 1200 }}
          className="mt-14 md:mt-20 max-w-5xl mx-auto"
        >
          <motion.div
            style={
              shouldReduceMotion
                ? {}
                : {
                    rotateX,
                    scale,
                    opacity,
                    transformStyle: "preserve-3d",
                  }
            }
            className="relative rounded-2xl md:rounded-3xl p-2 md:p-3 bg-gradient-to-b from-haze-line to-transparent border border-haze-line shadow-purple-glow-lg"
          >
            <PlayerMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
