"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  Sparkles,
  ArrowDown,
  MessageCircle,
  Tv,
  CheckCircle2,
  ExternalLink,
  Download,
  Server,
  Star,
  ShieldCheck,
  Radio,
  Sliders,
  Settings,
  User,
  HelpCircle,
  Lock,
  ListPlus,
  PlaySquare,
  Film,
  Music,
  Volume2,
  VolumeX,
  Video,
  Subtitles,
  X,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { getWhatsAppUrl } from "@/config/site";

interface TutorialZuxoProps {
  onCopyProvider?: () => void;
  copiedProvider?: boolean;
}

const STEP_NARRATIONS = [
  "Primeiro, abra a loja de aplicativos da sua TV, celular ou computador, pesquise por Zuxo Player e toque em Baixar ou Instalar.",
  "Ao abrir o aplicativo, aparece a tela de boas-vindas. Leia rapidamente e toque em Entendi e concordo.",
  "Na próxima mensagem, toque em Começar para entrar no aplicativo.",
  "Na tela inicial, toque no botão Adicionar, no canto superior direito.",
  "Agora escolha a primeira opção: Tem uma lista de provedor?",
  "Por último, no campo do servidor digite 111. Depois, informe o usuário e a senha que enviamos pelo WhatsApp e toque em Entrar. Pronto, é só aproveitar a sua sessão!",
];

export function TutorialZuxo({ onCopyProvider, copiedProvider }: TutorialZuxoProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [localCopied, setLocalCopied] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Estados de Narração, Legendas e Modal de Vídeo
  const [isNarrationEnabled, setIsNarrationEnabled] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoFormat, setVideoFormat] = useState<"16x9" | "9x16">("16x9");

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const stepStartTimeRef = useRef<number>(Date.now());

  // Carregar preferência salva em localStorage
  useEffect(() => {
    try {
      const savedNarration = localStorage.getItem("haze_narration_enabled");
      if (savedNarration === "true") {
        setIsNarrationEnabled(true);
      }
      const savedSubtitles = localStorage.getItem("haze_subtitles_enabled");
      if (savedSubtitles === "false") {
        setShowSubtitles(false);
      }
    } catch {
      // Ignora erro em modo privado
    }
  }, []);

  // Salvar preferências em localStorage
  const toggleNarration = () => {
    setHasUserInteracted(true);
    setIsNarrationEnabled((prev) => {
      const nextState = !prev;
      try {
        localStorage.setItem("haze_narration_enabled", String(nextState));
      } catch {}
      return nextState;
    });
  };

  const toggleSubtitles = () => {
    setShowSubtitles((prev) => {
      const nextState = !prev;
      try {
        localStorage.setItem("haze_subtitles_enabled", String(nextState));
      } catch {}
      return nextState;
    });
  };

  // Lazy load: IntersectionObserver para pausar quando sair da tela
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      badge: "Passo 1 • Instalação",
      title: "Baixe o Zuxo Player na Loja de Apps",
      instruction:
        "Abra a loja de aplicativos da sua Smart TV, celular ou console e pesquise por 'Zuxo Player'. Em seguida, clique no botão Baixar / Instalar.",
      callout: "Disponível nas principais lojas oficiais sem custo de download.",
      chips: [
        "Samsung",
        "LG",
        "Roku",
        "Android / PlayStore",
        "iOS",
        "Fire Stick",
        "macOS",
        "Xbox",
        "PlayStation",
      ],
    },
    {
      number: "02",
      badge: "Passo 2 • Termos",
      title: "Confirme os Termos de Uso",
      instruction:
        "Ao abrir o aplicativo pela primeira vez, você verá o aviso de boas-vindas do reprodutor. Basta clicar no botão verde 'Entendi e concordo'.",
      callout: "O Zuxo é um reprodutor de mídia homologado para carregar sua lista de transmissão.",
    },
    {
      number: "03",
      badge: "Passo 3 • Inicialização",
      title: "Clique em 'Começar'",
      instruction:
        "Na tela 'Bem-vindo às Minhas Listas', clique no botão verde 'Começar' para ir até a tela principal de gerenciamento.",
      callout: "Configuração rápida de primeiro acesso realizada apenas uma vez.",
    },
    {
      number: "04",
      badge: "Passo 4 • Adicionar",
      title: "Clique no Botão '+ Adicionar'",
      instruction:
        "No canto superior direito da tela inicial do Zuxo Player, clique no botão verde com ícone '+ Adicionar'.",
      callout: "Aqui você adiciona a sua conexão exclusiva da Haze TV.",
    },
    {
      number: "05",
      badge: "Passo 5 • Tipo de Lista",
      title: "Selecione 'Tem uma lista de provedor?'",
      instruction:
        "Entre as opções apresentadas, escolha a primeira alternativa em destaque: 'Tem uma lista de provedor?'.",
      callout: "Esta opção conecta diretamente aos servidores de alta performance da Haze TV.",
    },
    {
      number: "06",
      badge: "Passo 6 • Login",
      title: "Insira o Código 111, seu Usuário e Senha",
      instruction:
        "No primeiro campo (URL ou código do servidor), digite 111. Nos campos Usuário e Senha, digite exatamente as credenciais enviadas pela nossa equipe no seu WhatsApp.",
      callout: "Após preencher, clique em 'Entrar' e aproveite sua sessão completa em até 4K!",
      hasProviderCopy: true,
    },
  ];

  const totalSteps = steps.length;

  // Função auxiliar para avançar passo
  const advanceStep = useCallback(() => {
    setCurrentStep((prev) => (prev + 1) % totalSteps);
    stepStartTimeRef.current = Date.now();
  }, [totalSteps]);

  // Controle de reprodução de áudio e sincronização
  useEffect(() => {
    // Parar áudio anterior se houver
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    stepStartTimeRef.current = Date.now();

    if (!isNarrationEnabled || !hasUserInteracted || !isInView || !isPlaying) {
      return;
    }

    const audioUrl = `/audio/tutorial/passo-${currentStep + 1}.mp3`;
    const audio = new Audio(audioUrl);
    audioRef.current = audio;

    audio.play().catch(() => {
      // Falha de autoplay se ainda não houve interação
    });

    // Quando o áudio terminar, espera garantir o mínimo de 5s no passo antes de avançar
    audio.onended = () => {
      if (!isPlaying || !isNarrationEnabled) return;
      const elapsed = Date.now() - stepStartTimeRef.current;
      const remainingTime = Math.max(500, 5000 - elapsed);
      setTimeout(() => {
        advanceStep();
      }, remainingTime);
    };

    return () => {
      audio.pause();
      audio.onended = null;
    };
  }, [currentStep, isNarrationEnabled, hasUserInteracted, isInView, isPlaying, advanceStep]);

  // Se a narração estiver pausada/desligada, usamos o timer padrão de 5s
  useEffect(() => {
    if (isNarrationEnabled) return; // Narração controla o tempo via áudio
    if (!isPlaying || !isInView || shouldReduceMotion) return;

    const timer = setInterval(() => {
      advanceStep();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying, isInView, shouldReduceMotion, isNarrationEnabled, advanceStep]);

  // Pausar/despausar o áudio com o botão de reprodução geral
  const handleTogglePlay = () => {
    setHasUserInteracted(true);
    const nextPlay = !isPlaying;
    setIsPlaying(nextPlay);
    if (!nextPlay && audioRef.current) {
      audioRef.current.pause();
    } else if (nextPlay && isNarrationEnabled && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  const handleManualStepChange = (newStep: number) => {
    setHasUserInteracted(true);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setCurrentStep(newStep);
  };

  const handleCopy = () => {
    if (onCopyProvider) {
      onCopyProvider();
    } else {
      navigator.clipboard.writeText("111");
      setLocalCopied(true);
      setTimeout(() => setLocalCopied(false), 2000);
    }
  };

  const isCopied = copiedProvider || localCopied;

  const scrollToFilters = () => {
    const el = document.getElementById("filtros-players");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeStep = steps[currentStep];

  return (
    <section
      id="tutorial-zuxo"
      ref={sectionRef}
      className="mb-14 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 bg-gradient-to-br from-[#151224] via-haze-card to-[#100E1D] border-2 border-haze-primary/40 shadow-purple-glow-lg relative overflow-hidden"
    >
      {/* Glow de fundo sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-haze-primary/15 blur-3xl rounded-full"
      />

      <div className="relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-haze-primary/20 border border-haze-primary/40 text-xs font-bold text-haze-primary uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-haze-primary" />
            <span>Passo a Passo com Narração em Voz & Vídeo</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-haze-text tracking-tight mb-2.5">
            Como instalar e fazer login no Zuxo Player
          </h2>
          <p className="text-sm sm:text-base text-haze-muted">
            Veja na prática como baixar o app e entrar em menos de 2 minutos.
          </p>
        </div>

        {/* Indicadores / Tabs de Passos (1 a 6) */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-8 overflow-x-auto pb-2">
          {steps.map((step, idx) => {
            const isActive = currentStep === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleManualStepChange(idx)}
                className={`relative px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-haze-primary text-white shadow-purple-glow scale-105"
                    : "bg-haze-base/70 border border-haze-line text-haze-muted hover:text-haze-text hover:border-haze-primary/50"
                }`}
              >
                <span className="font-mono text-[11px] opacity-80">{step.number}</span>
                <span className="hidden md:inline">{step.badge.split("•")[1] || step.badge}</span>
                {isActive && isPlaying && !shouldReduceMotion && (
                  <motion.div
                    key={`step-progress-${currentStep}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: isNarrationEnabled ? 9 : 5, ease: "linear" }}
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-haze-cta origin-left rounded-b-xl"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Card Interativo Principal: Layout Lado a Lado no Desktop */}
        <div className="rounded-2xl p-4 sm:p-6 md:p-8 bg-haze-base/80 border border-haze-line/80 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Coluna da Esquerda (Texto e Instruções) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-haze-primary/20 text-haze-primary text-xs font-bold mb-3 border border-haze-primary/30">
                  {activeStep.badge}
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-haze-text mb-3 leading-snug">
                  {activeStep.title}
                </h3>

                <p className="text-sm text-haze-muted leading-relaxed mb-4">
                  {activeStep.instruction}
                </p>

                {/* Callout de apoio */}
                <div className="p-3.5 rounded-xl bg-haze-card border border-haze-line/80 text-xs text-haze-muted flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-haze-cta shrink-0 mt-0.5" />
                  <span className="leading-tight">{activeStep.callout}</span>
                </div>

                {/* Chips de aparelhos no Passo 1 */}
                {activeStep.chips && (
                  <div className="mt-4 pt-4 border-t border-haze-line/50">
                    <div className="text-[11px] font-semibold text-haze-muted uppercase tracking-wider mb-2">
                      Lojas compatíveis:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeStep.chips.map((chip, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 rounded bg-haze-card border border-haze-line text-[10px] text-haze-text/90"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Destaque do Provider no Passo 6 */}
                {activeStep.hasProviderCopy && (
                  <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-haze-primary/20 to-transparent border border-haze-primary/40 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] text-haze-muted uppercase tracking-wider">Código Provider:</div>
                      <div className="font-mono font-black text-2xl text-haze-cta tracking-wider">111</div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-haze-primary text-white text-xs font-bold shadow-purple-glow hover:brightness-110 active:scale-95 transition-all shrink-0"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-haze-cta" />
                          <span>Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Provider</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Controles de Navegação + Narração + Vídeo */}
              <div className="pt-4 border-t border-haze-line/60 space-y-3">
                {/* Linha 1: Controles de Passos & Play/Pause */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        handleManualStepChange(currentStep > 0 ? currentStep - 1 : totalSteps - 1)
                      }
                      className="p-2.5 rounded-xl bg-haze-card border border-haze-line text-haze-muted hover:text-haze-text hover:border-haze-primary/50 transition-all"
                      title="Passo Anterior"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleTogglePlay}
                      className="px-3.5 py-2 rounded-xl bg-haze-card border border-haze-line text-xs font-semibold text-haze-text hover:border-haze-primary/50 transition-all flex items-center gap-2"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5 text-haze-primary" />
                          <span>Pausar</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 text-haze-cta fill-current" />
                          <span>Reproduzir</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleManualStepChange((currentStep + 1) % totalSteps)}
                      className="p-2.5 rounded-xl bg-haze-card border border-haze-line text-haze-muted hover:text-haze-text hover:border-haze-primary/50 transition-all"
                      title="Próximo Passo"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-xs font-mono text-haze-muted">
                    <span className="text-haze-text font-bold">{currentStep + 1}</span> de {totalSteps}
                  </div>
                </div>

                {/* Linha 2: Botão de Narração, Legendas e Assistir em Vídeo */}
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  {/* Botão de Narração em Voz */}
                  <button
                    type="button"
                    onClick={toggleNarration}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      isNarrationEnabled
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 shadow-green-glow"
                        : "bg-haze-card border border-haze-line text-haze-muted hover:text-haze-text"
                    }`}
                  >
                    {isNarrationEnabled ? (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                        <span>Narração Ativa</span>
                      </>
                    ) : (
                      <>
                        <VolumeX className="w-3.5 h-3.5" />
                        <span>Ativar narração</span>
                      </>
                    )}
                  </button>

                  {/* Botão de Legendas */}
                  <button
                    type="button"
                    onClick={toggleSubtitles}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      showSubtitles
                        ? "bg-haze-primary/20 text-haze-primary border border-haze-primary/40"
                        : "bg-haze-card border border-haze-line text-haze-muted hover:text-haze-text"
                    }`}
                  >
                    <Subtitles className="w-3.5 h-3.5" />
                    <span>Legendas {showSubtitles ? "ON" : "OFF"}</span>
                  </button>

                  {/* Botão Assistir em Vídeo */}
                  <button
                    type="button"
                    onClick={() => setIsVideoModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-haze-primary to-purple-600 text-white text-xs font-bold shadow-purple-glow hover:brightness-110 active:scale-95 transition-all ml-auto"
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Assistir em vídeo</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Simulador HD Vectorizado da Tela da TV */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden bg-[#0A0A0E] border-2 border-haze-primary/40 shadow-2xl">
                {/* Barra superior da TV / Moldura */}
                <div className="px-4 py-2.5 bg-[#0F0E17] border-b border-haze-line flex items-center justify-between text-[11px] text-haze-muted font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-1 text-haze-text font-semibold flex items-center gap-1.5">
                      <Tv className="w-3.5 h-3.5 text-haze-primary" />
                      SIMULADOR DE TELA • SMART TV / APP
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {isNarrationEnabled && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-emerald-400 font-bold">
                        <Volume2 className="w-3 h-3 animate-pulse" />
                        Voz Francisca
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded bg-haze-card border border-haze-line text-[10px] text-haze-cta font-bold">
                      PASSO {activeStep.number}
                    </span>
                  </div>
                </div>

                {/* Conteúdo Dinâmico do Simulador em Alta Resolução */}
                <div className="relative min-h-[340px] sm:min-h-[390px] w-full bg-[#07070B] flex items-center justify-center p-3 sm:p-5 overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.25 }}
                      className="w-full h-full flex flex-col justify-center"
                    >
                      <ZuxoScreenSimulator step={currentStep} />
                    </motion.div>
                  </AnimatePresence>

                  {/* Legenda Sincronizada com a Fala (CC) */}
                  {showSubtitles && (
                    <motion.div
                      key={`subtitle-${currentStep}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 rounded-xl bg-black/90 border border-emerald-500/40 backdrop-blur-md shadow-2xl flex items-center gap-2.5 z-20 pointer-events-none"
                    >
                      <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 font-bold text-[11px] flex items-center justify-center shrink-0">
                        CC
                      </span>
                      <p className="text-xs sm:text-[13px] text-zinc-100 font-medium leading-snug">
                        {STEP_NARRATIONS[currentStep]}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Rodapé da Moldura com status */}
                <div className="px-4 py-2 bg-[#09090D] border-t border-haze-line/40 flex items-center justify-between text-[10px] text-haze-muted">
                  <span className="flex items-center gap-1.5 text-haze-cta font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-haze-cta animate-ping" />
                    Interface Digital HD Vetorial (Ultra Nítida)
                  </span>
                  <span className="hidden sm:inline font-mono">Resolução 4K Nativa</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ações Finais: Ver todos os players & WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-haze-line/40">
          <button
            type="button"
            onClick={scrollToFilters}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-haze-card border border-haze-line text-haze-text text-sm font-semibold hover:border-haze-primary/60 hover:text-white transition-all shadow-sm"
          >
            <ArrowDown className="w-4 h-4 text-haze-primary" />
            <span>Ver todos os players abaixo</span>
          </button>

          <a
            href={getWhatsAppUrl("Olá! Gostaria de ajuda para instalar e fazer login no Zuxo Player.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-haze-cta text-haze-base text-sm font-bold shadow-green-glow hover:brightness-110 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com o Suporte no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Modal de Vídeo MP4 (16:9 e 9:16) */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-haze-card border border-haze-primary/50 rounded-2xl md:rounded-3xl p-5 sm:p-6 shadow-2xl overflow-hidden"
            >
              {/* Cabeçalho do Modal */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-haze-line">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-haze-primary/20 text-haze-primary flex items-center justify-center font-bold">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">
                      Tutorial em Vídeo • Zuxo Player
                    </h3>
                    <p className="text-xs text-haze-muted">
                      Assista ao passo a passo completo narrado com áudio e legendas
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-2 rounded-xl bg-haze-base border border-haze-line text-haze-muted hover:text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Seletor de Formato: 16:9 ou 9:16 */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setVideoFormat("16x9")}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    videoFormat === "16x9"
                      ? "bg-haze-primary text-white shadow-purple-glow"
                      : "bg-haze-base border border-haze-line text-haze-muted hover:text-white"
                  }`}
                >
                  🖥️ 16:9 Widescreen (Smart TV / Desktop)
                </button>
                <button
                  type="button"
                  onClick={() => setVideoFormat("9x16")}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    videoFormat === "9x16"
                      ? "bg-haze-primary text-white shadow-purple-glow"
                      : "bg-haze-base border border-haze-line text-haze-muted hover:text-white"
                  }`}
                >
                  📱 9:16 Vertical (Reels / WhatsApp)
                </button>
              </div>

              {/* Player de Vídeo */}
              <div
                className={`w-full mx-auto bg-black rounded-xl overflow-hidden border border-white/10 flex items-center justify-center ${
                  videoFormat === "16x9" ? "aspect-[16/9]" : "max-w-xs aspect-[9/16]"
                }`}
              >
                <video
                  key={videoFormat}
                  src={`/videos/tutorial-zuxo-${videoFormat}.mp4`}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Rodapé com Download e WhatsApp */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 mt-4 border-t border-haze-line text-xs">
                <a
                  href={`/videos/tutorial-zuxo-${videoFormat}.mp4`}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-haze-base border border-haze-line text-haze-muted hover:text-white transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Baixar Arquivo MP4 ({videoFormat})</span>
                </a>

                <a
                  href={getWhatsAppUrl("Olá! Assisti ao vídeo do Zuxo Player e gostaria de ativar minha conta.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-haze-cta text-haze-base font-bold shadow-green-glow hover:brightness-110 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ativar Agora no WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

/**
 * Simulador Visual de Telas do Zuxo Player em Vetor Ultra Nítido
 * Recriado do zero em código para máxima legibilidade e qualidade visual.
 */
function ZuxoScreenSimulator({ step }: { step: number }) {
  // Passo 1: Loja de Apps
  if (step === 0) {
    return (
      <div className="w-full max-w-xl mx-auto rounded-xl p-4 sm:p-5 bg-gradient-to-b from-[#121420] to-[#0A0B10] border border-haze-line text-left shadow-xl">
        {/* Topo da Loja */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-500/30 flex items-center justify-center text-blue-400 text-[9px] font-bold">
              ⊞
            </div>
            <span className="font-semibold text-zinc-300">Smart TV App Store</span>
          </div>
          <span className="text-[11px] text-zinc-500">Busca: &quot;Zuxo Player&quot;</span>
        </div>

        {/* Card do App */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-black border border-white/15 p-2 flex flex-col items-center justify-center shadow-lg shrink-0">
            <span className="font-black text-sm tracking-wider text-white">
              Zux<span className="text-emerald-400">o</span>
            </span>
            <span className="text-[8px] font-mono text-zinc-400">PLAYER</span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-black text-base sm:text-lg text-white">Zuxo Player</h4>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] font-bold">
                OFICIAL
              </span>
            </div>
            <p className="text-xs text-zinc-400 mb-1">Michael Cunningham • Entretenimento</p>
            <div className="flex items-center gap-2 text-[11px] text-yellow-400">
              <span>★★★★★</span>
              <span className="text-zinc-300 font-bold">4.4</span>
              <span className="text-zinc-500">• Gratuito</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-zinc-300 mb-5 leading-relaxed">
          Zuxo Player — o player para as suas listas de vídeo e canais. Monte suas playlists ou conecte com o servidor do seu provedor.
        </p>

        {/* Ação Destacada com Foco */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-emerald-500/30 blur-sm animate-pulse" />
            <button
              type="button"
              className="relative w-full sm:w-auto px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg ring-2 ring-emerald-400"
            >
              <Download className="w-4 h-4" />
              <span>Baixar / Instalar</span>
            </button>
          </div>

          <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400 flex items-center gap-2 justify-center">
            <span className="w-5 h-5 rounded bg-emerald-600/30 text-emerald-400 font-black text-xs flex items-center justify-center">
              L
            </span>
            <span>Classificação Livre</span>
          </div>
        </div>
      </div>
    );
  }

  // Passo 2: Termos de Uso ("Entendi e concordo")
  if (step === 1) {
    return (
      <div className="w-full max-w-lg mx-auto rounded-xl p-4 sm:p-6 bg-[#0E0F16] border-2 border-emerald-500/40 text-center shadow-2xl relative">
        {/* Topo simulado do Zuxo */}
        <div className="flex items-center justify-between text-xs text-zinc-500 mb-4 pb-2 border-b border-white/5 font-mono">
          <span className="font-bold text-white">
            Zux<span className="text-emerald-400">o</span>
          </span>
          <span>10:46 • Domingo</span>
          <span className="text-[10px] text-emerald-400">Servidor Ativo</span>
        </div>

        {/* Modal dos Termos */}
        <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <ShieldCheck className="w-5 h-5" />
        </div>

        <h4 className="font-display font-black text-lg text-white mb-1.5">
          Bem-vindo ao Zuxo Player
        </h4>

        <div className="my-3 p-3 rounded-lg bg-black/50 border border-white/5 text-left text-[11px] sm:text-xs text-zinc-300 space-y-2 max-h-32 overflow-y-auto leading-relaxed">
          <p>
            <strong className="text-white">O Zuxo Player é um reprodutor de mídia:</strong> toca a lista do seu provedor e os seus vídeos com aceleração gráfica na Smart TV.
          </p>
          <p>
            <strong className="text-white">O Zuxo Player não fornece canais próprios:</strong> todo o conteúdo é transmitido via conexão segura fornecida pela <strong className="text-emerald-400">Haze TV</strong>.
          </p>
        </div>

        {/* Botão de foco com anel verde */}
        <div className="relative mt-4">
          <div className="absolute -inset-1 rounded-xl bg-emerald-400/30 blur-md animate-pulse" />
          <button
            type="button"
            className="relative w-full py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-sm tracking-wide shadow-green-glow ring-2 ring-white flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>Entendi e concordo</span>
          </button>
        </div>
        <p className="mt-2 text-[10px] text-zinc-500">👉 Pressione OK no controle remoto para prosseguir</p>
      </div>
    );
  }

  // Passo 3: Começar
  if (step === 2) {
    return (
      <div className="w-full max-w-lg mx-auto rounded-xl p-4 sm:p-6 bg-[#0E0F16] border-2 border-emerald-500/40 text-center shadow-2xl relative">
        <div className="flex items-center justify-between text-xs text-zinc-500 mb-4 pb-2 border-b border-white/5 font-mono">
          <span className="font-bold text-white">
            Zux<span className="text-emerald-400">o</span>
          </span>
          <span>10:47 • Domingo</span>
          <span className="text-[10px] text-zinc-400">Minhas Listas</span>
        </div>

        <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
          <PlaySquare className="w-6 h-6" />
        </div>

        <h4 className="font-display font-black text-lg text-white mb-2">
          Bem-vindo às Minhas Listas
        </h4>

        <p className="text-xs sm:text-sm text-zinc-300 mb-5 leading-relaxed max-w-md mx-auto">
          Aqui as listas são suas: conecte suas credenciais da <strong className="text-emerald-400">Haze TV</strong> para carregar canais ao vivo, filmes e séries instantaneamente.
        </p>

        {/* Botão Começar */}
        <div className="relative max-w-xs mx-auto">
          <div className="absolute -inset-1 rounded-xl bg-emerald-400/30 blur-md animate-pulse" />
          <button
            type="button"
            className="relative w-full py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-sm tracking-wider shadow-green-glow ring-2 ring-white flex items-center justify-center gap-2"
          >
            <span>Começar</span>
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
        <p className="mt-2 text-[10px] text-zinc-500">Configuração inicial rápida realizada uma única vez</p>
      </div>
    );
  }

  // Passo 4: Clicar no botão "+ Adicionar"
  if (step === 3) {
    return (
      <div className="w-full max-w-xl mx-auto rounded-xl p-4 sm:p-5 bg-[#090A0E] border border-white/10 text-left shadow-2xl">
        {/* Barra superior com foco no botão + Adicionar */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
          <div className="flex items-center gap-2 font-black text-base text-white">
            <span>Zux<span className="text-emerald-400">o</span></span>
            <span className="text-xs font-mono text-zinc-500 font-normal">| 10:47</span>
          </div>

          {/* Botão + Adicionar em foco máximo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-emerald-400/40 blur-sm animate-pulse" />
              <button
                type="button"
                className="relative px-4 py-2 rounded-xl bg-emerald-500 text-black font-black text-xs flex items-center gap-1.5 shadow-lg ring-2 ring-white"
              >
                <span className="text-base leading-none font-bold">+</span>
                <span>Adicionar</span>
              </button>
            </div>

            <div className="flex items-center gap-1 text-zinc-500 text-xs">
              <span className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">⚙</span>
              <span className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">👤</span>
            </div>
          </div>
        </div>

        {/* Grade de Cards do Zuxo Player */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-3">
          <div className="p-3 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-emerald-500/30">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2">
              <PlaySquare className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-white">Minhas Listas</div>
            <div className="text-[10px] text-zinc-500">Adicionar / Gerenciar</div>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900/50 border border-white/5 opacity-70">
            <div className="w-7 h-7 rounded-lg bg-white/5 text-zinc-400 flex items-center justify-center mb-2">
              <Film className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-zinc-300">Todos os Vídeos</div>
            <div className="text-[10px] text-zinc-500">Filmes e Séries</div>
          </div>

          <div className="hidden sm:block p-3 rounded-xl bg-zinc-900/50 border border-white/5 opacity-70">
            <div className="w-7 h-7 rounded-lg bg-white/5 text-zinc-400 flex items-center justify-center mb-2">
              <Music className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-zinc-300">Todas as Músicas</div>
            <div className="text-[10px] text-zinc-500">Áudio & Rádios</div>
          </div>
        </div>

        {/* Dica visual */}
        <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 flex items-center gap-2">
          <span className="font-bold">👉 Ação:</span>
          <span>Clique no botão verde <strong>&quot;+ Adicionar&quot;</strong> no canto superior direito.</span>
        </div>
      </div>
    );
  }

  // Passo 5: Selecionar "Tem uma lista de provedor?"
  if (step === 4) {
    return (
      <div className="w-full max-w-xl mx-auto rounded-xl p-4 sm:p-5 bg-[#0A0B10] border border-white/10 text-left shadow-2xl">
        <div className="text-xs text-zinc-400 font-mono mb-2">ADICIONAR NOVA LISTA</div>
        <h4 className="font-display font-black text-base sm:text-lg text-white mb-4">
          Como você quer adicionar a sua lista?
        </h4>

        {/* Opção 1: Em Foco Total */}
        <div className="relative mb-2.5">
          <div className="absolute -inset-1 rounded-2xl bg-emerald-500/30 blur-sm animate-pulse" />
          <div className="relative p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 via-zinc-900 to-zinc-900 border-2 border-emerald-400 flex items-center justify-between gap-3 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-black flex items-center justify-center font-bold shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold text-sm sm:text-base text-white flex items-center gap-2">
                  <span>Tem uma lista de provedor?</span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-400 text-black text-[9px] font-black uppercase">
                    ESCOLHA ESTE
                  </span>
                </div>
                <div className="text-[11px] text-zinc-300">
                  Conecte com o Provider <strong>111</strong>, Usuário e Senha da Haze TV
                </div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-emerald-400 shrink-0" />
          </div>
        </div>

        {/* Opção 2: Desfocada */}
        <div className="p-3 rounded-xl bg-zinc-900/40 border border-white/5 flex items-center justify-between text-zinc-500 mb-2 opacity-60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 text-xs">
              🔗
            </div>
            <div className="text-xs">Lista via link web / M3U</div>
          </div>
          <span className="text-[10px] text-zinc-600">Outros formatos</span>
        </div>

        {/* Opção 3: Desfocada */}
        <div className="p-3 rounded-xl bg-zinc-900/40 border border-white/5 flex items-center justify-between text-zinc-500 opacity-60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 text-xs">
              📁
            </div>
            <div className="text-xs">Arquivo salvo no aparelho</div>
          </div>
          <span className="text-[10px] text-zinc-600">Local</span>
        </div>
      </div>
    );
  }

  // Passo 6: Login com Provider 111
  return (
    <div className="w-full max-w-lg mx-auto rounded-xl p-4 sm:p-5 bg-[#0C0D14] border-2 border-emerald-500/40 text-left shadow-2xl">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
        <span className="font-black text-white">
          Zux<span className="text-emerald-400">o</span> • CONECTAR PROVEDOR
        </span>
        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
          4K UHD
        </span>
      </div>

      <div className="space-y-3 mb-4">
        {/* Campo Provider 111 em Super Destaque */}
        <div>
          <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>URL ou Código do Servidor</span>
            <span className="text-emerald-400 font-mono text-[10px] font-bold">★ CÓDIGO DA HAZE TV</span>
          </label>
          <div className="relative">
            <input
              type="text"
              readOnly
              value="111"
              className="w-full px-4 py-2.5 rounded-xl bg-black border-2 border-emerald-400 font-mono font-black text-xl text-emerald-400 tracking-widest shadow-green-glow"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">
              PROVIDER
            </span>
          </div>
        </div>

        {/* Campo Usuário */}
        <div>
          <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
            Usuário
          </label>
          <div className="w-full px-4 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-200">
            seu-usuario-aqui
          </div>
        </div>

        {/* Campo Senha */}
        <div>
          <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
            Senha
          </label>
          <div className="w-full px-4 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-400 flex items-center justify-between">
            <span>••••••••</span>
            <Lock className="w-3.5 h-3.5 text-zinc-500" />
          </div>
        </div>
      </div>

      {/* Botão Entrar com Foco */}
      <div className="relative">
        <div className="absolute -inset-1 rounded-xl bg-emerald-400/40 blur-sm animate-pulse" />
        <button
          type="button"
          className="relative w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-sm tracking-wider shadow-green-glow ring-2 ring-white flex items-center justify-center gap-2"
        >
          <span>Entrar</span>
          <ChevronRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>

      <p className="mt-2 text-center text-[10px] text-zinc-400">
        🎉 Pronto! Seus canais, filmes e séries carregarão automaticamente.
      </p>
    </div>
  );
}
