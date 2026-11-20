"use client";

import { useEffect, useState } from "react";
import { Play, Tv, Film, Clapperboard, Radio, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface FeaturedItem {
  cat: string;
  tag: string;
  title: string;
  shortTitle: string;
  res: string;
  desc: string;
  icon: typeof Play;
  accentBg: string;
}

const FEATURED_ITEMS: FeaturedItem[] = [
  {
    cat: "ESPORTES",
    tag: "ESPORTES AO VIVO",
    title: "Grande Final Internacional",
    shortTitle: "Arena Ao Vivo 1",
    res: "4K 60FPS",
    desc: "Experiência imersiva em altíssima definição com áudio espacial e baixa latência de ponta a ponta.",
    icon: Tv,
    accentBg: "from-purple-950/70 via-indigo-950/40 to-[#0A0A0E]",
  },
  {
    cat: "CINEMA",
    tag: "CINEMA EXCLUSIVO",
    title: "Estreia Noturna: O Horizonte",
    shortTitle: "Cine Haze Premiere",
    res: "Full HD",
    desc: "Lançamento em altíssima resolução com cores vívidas e som cinema sem cortes.",
    icon: Film,
    accentBg: "from-violet-950/70 via-purple-950/40 to-[#0A0A0E]",
  },
  {
    cat: "SÉRIES",
    tag: "SÉRIES EM MARATONA",
    title: "Protocolo Zero: Temporada Completa",
    shortTitle: "Maratona Sci-Fi",
    res: "Full HD",
    desc: "Temporada completa liberada para maratonar sem interrupção e com carregamento instantâneo.",
    icon: Clapperboard,
    accentBg: "from-fuchsia-950/60 via-purple-950/40 to-[#0A0A0E]",
  },
  {
    cat: "NOTÍCIAS",
    tag: "JORNALISMO 24 HORAS",
    title: "Cobertura Global em Tempo Real",
    shortTitle: "Jornalismo 24 Horas",
    res: "Full HD",
    desc: "Fique por dentro dos principais acontecimentos do Brasil e do mundo com transmissão ininterrupta.",
    icon: Radio,
    accentBg: "from-blue-950/60 via-purple-950/40 to-[#0A0A0E]",
  },
];

export function PlayerMockup() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [seconds, setSeconds] = useState(2537); // Começa em 00:42:17

  // 1. Destaque rotativo automático a cada 5s
  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURED_ITEMS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, shouldReduceMotion]);

  // 4. Relógio "AO VIVO • HH:MM:SS" contando a cada segundo
  useEffect(() => {
    const clockInterval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  const formatTime = (total: number) => {
    const h = String(Math.floor(total / 3600)).padStart(2, "0");
    const m = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
    const s = String(total % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const currentItem = FEATURED_ITEMS[activeIndex];

  return (
    <div className="bg-haze-card rounded-xl md:rounded-2xl overflow-hidden border border-haze-line/60">
      {/* Barra superior de player / app */}
      <div className="px-4 py-3 bg-haze-base/90 border-b border-haze-line flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 font-display font-semibold text-haze-text">HAZE TV PLAYER</span>
        </div>

        <div className="flex items-center gap-3 text-haze-muted">
          {/* Selo ULTRA HD 4K com brilho sutil */}
          <div className="relative overflow-hidden px-2.5 py-0.5 rounded bg-haze-card border border-haze-line text-[11px] text-haze-primary font-mono font-medium">
            <span>ULTRA HD 4K</span>
            {!shouldReduceMotion && (
              <motion.span
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-[#8B5CF6]/35 to-transparent"
              />
            )}
          </div>

          {/* SINAL ATIVO com ponto pulsando suavemente */}
          <span className="inline-flex items-center gap-1.5 text-[11px] text-haze-cta font-medium">
            <span className="relative flex h-2 w-2">
              <motion.span
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: [1, 1.8, 1],
                        opacity: [0.75, 0, 0.75],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inline-flex h-full w-full rounded-full bg-haze-cta"
              />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-haze-cta" />
            </span>
            SINAL ATIVO
          </span>
        </div>
      </div>

      {/* Corpo da Interface */}
      <div className="p-4 md:p-8 bg-[#0D0D12]">
        {/* Banner com Blob roxo desfocado ao fundo em loop */}
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-[#171329] via-[#1A1630] to-[#12111E] p-6 md:p-10 border border-haze-line/50 min-h-[240px] flex items-center justify-between">
          {/* Blob roxo se movendo devagar em loop */}
          <motion.div
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    x: [-20, 30, -10, -20],
                    y: [-15, 20, -10, -15],
                    scale: [1, 1.15, 0.95, 1],
                  }
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#8B5CF6]/20 blur-[90px]"
          />

          <div className="relative z-10 max-w-xl w-full">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Linha superior do banner: Tag + Relógio + Equalizador */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-block px-3 py-1 rounded bg-haze-primary/20 text-haze-primary text-xs font-semibold border border-haze-primary/30">
                    {currentItem.tag}
                  </span>

                  {/* Relógio "AO VIVO • HH:MM:SS" */}
                  <span className="text-xs text-haze-muted font-mono inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-haze-base/60 border border-haze-line/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    AO VIVO • {formatTime(seconds)}
                  </span>

                  {/* Equalizador animado de 5 barras */}
                  <div className="flex items-end gap-[3px] h-3.5" aria-hidden="true">
                    {[0.6, 1.0, 0.4, 0.8, 0.5].map((val, barIdx) => (
                      <motion.span
                        key={barIdx}
                        animate={
                          shouldReduceMotion
                            ? { scaleY: val }
                            : { scaleY: [0.3, 1, 0.2, 0.9, 0.3] }
                        }
                        transition={{
                          duration: 0.7 + barIdx * 0.15,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: barIdx * 0.1,
                        }}
                        style={{ transformOrigin: "bottom" }}
                        className="w-[2.5px] h-full rounded-full bg-haze-primary shadow-[0_0_6px_#8B5CF6]"
                      />
                    ))}
                  </div>
                </div>

                {/* Título do Destaque */}
                <div className="font-display font-bold text-2xl md:text-3xl text-haze-text mb-2">
                  {currentItem.title}
                </div>

                {/* Descrição */}
                <p className="text-sm text-haze-muted mb-6 leading-relaxed line-clamp-2">
                  {currentItem.desc}
                </p>

                <div className="inline-flex items-center gap-3">
                  <div className="px-5 py-2.5 rounded-xl bg-haze-primary text-white text-xs font-semibold shadow-purple-glow cursor-default select-none inline-flex items-center gap-2">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Assistir Agora</span>
                  </div>
                  <div className="px-4 py-2.5 rounded-xl bg-haze-card border border-haze-line text-xs text-haze-muted cursor-default select-none">
                    Grade Completa
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Miniatura gráfica de live monitor à direita no banner */}
          <div className="hidden lg:flex relative w-48 h-32 rounded-xl bg-[#09090D] border border-haze-primary/30 p-2.5 flex-col justify-between overflow-hidden shadow-purple-glow shrink-0 ml-4">
            <div className="flex items-center justify-between text-[10px] text-haze-muted">
              <span className="font-mono text-haze-primary font-semibold">FEED #0{activeIndex + 1}</span>
              <span className="flex items-center gap-1 text-haze-cta text-[9px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-haze-cta animate-ping" />
                60 FPS
              </span>
            </div>
            
            <div className="w-full h-14 rounded-lg bg-gradient-to-tr from-haze-primary/20 to-transparent flex items-center justify-center border border-haze-line/40">
              <Play className="w-6 h-6 text-haze-primary animate-pulse" />
            </div>

            <div className="flex items-center justify-between text-[9px] text-haze-muted font-mono">
              <span>LATÊNCIA: 12ms</span>
              <span className="text-haze-primary font-bold">{currentItem.res}</span>
            </div>
          </div>
        </div>

        {/* Fileira de Cards da Programação em Destaque */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3 text-xs text-haze-muted font-medium">
            <span>Programação em Destaque (Clique para alternar)</span>
            <span className="text-haze-primary font-mono text-[11px]">4 transmissões ativas</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
            {FEATURED_ITEMS.map((item, idx) => {
              const isActive = activeIndex === idx;
              const Icon = item.icon;

              return (
                <motion.div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`relative rounded-xl p-3.5 overflow-hidden cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "border-haze-primary bg-[#1C172E] shadow-purple-glow"
                      : "bg-haze-card border-haze-line/70 hover:border-haze-primary/50 hover:shadow-purple-glow"
                  }`}
                >
                  {/* Miniatura gráfica com fundo estilizado e brilho diagonal */}
                  <div
                    className={`aspect-video rounded-lg mb-2.5 flex items-center justify-center border relative overflow-hidden bg-gradient-to-br ${item.accentBg} ${
                      isActive ? "border-haze-primary/60" : "border-haze-line/40"
                    }`}
                  >
                    <motion.div
                      animate={
                        isActive && !shouldReduceMotion
                          ? { scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }
                          : {}
                      }
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Icon
                        className={`w-6 h-6 transition-colors ${
                          isActive ? "text-haze-primary" : "text-haze-muted/70"
                        }`}
                      />
                    </motion.div>

                    {/* Badge Ao Vivo ou Res */}
                    <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/70 text-[9px] font-mono text-haze-primary font-bold">
                      {item.res}
                    </div>

                    {/* Brilho diagonal roxo atravessando a cada ~5s */}
                    {!shouldReduceMotion && (
                      <motion.div
                        animate={{ x: ["-130%", "230%"] }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          repeatDelay: 2.8,
                          ease: "easeInOut",
                          delay: idx * 0.35,
                        }}
                        className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-[#8B5CF6]/35 to-transparent"
                      />
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-haze-primary font-bold tracking-wider uppercase">
                      {item.cat}
                    </span>
                    {isActive && (
                      <span className="text-[9px] font-bold text-haze-cta uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-haze-cta animate-ping" />
                        No Ar
                      </span>
                    )}
                  </div>

                  <div className="text-xs font-semibold text-haze-text truncate">
                    {item.shortTitle}
                  </div>

                  {/* Barra de progresso de 5s no card ativo */}
                  {isActive && !shouldReduceMotion && (
                    <motion.div
                      key={`progress-${activeIndex}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-haze-primary origin-left shadow-[0_0_8px_#8B5CF6]"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
