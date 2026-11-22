"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { getWhatsAppUrl } from "@/config/site";

interface TutorialZuxoProps {
  onCopyProvider?: () => void;
  copiedProvider?: boolean;
}

export function TutorialZuxo({ onCopyProvider, copiedProvider }: TutorialZuxoProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [localCopied, setLocalCopied] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const shouldReduceMotion = useReducedMotion();

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
        "Abra a loja de aplicativos da sua Smart TV ou celular e pesquise por Zuxo Player. Em seguida, clique no botão Baixar / Instalar.",
      image: "/images/tutorial/passo-1.png",
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
      image: "/images/tutorial/passo-2.png",
      callout: "O Zuxo é um reprodutor de mídia homologado para carregar sua lista de transmissão.",
    },
    {
      number: "03",
      badge: "Passo 3 • Inicialização",
      title: "Clique em 'Começar'",
      instruction:
        "Na tela 'Bem-vindo às Minhas Listas', clique no botão verde 'Começar' para ir até a tela principal de gerenciamento.",
      image: "/images/tutorial/passo-3.jpg",
      callout: "Configuração rápida de primeiro acesso realizada apenas uma vez.",
    },
    {
      number: "04",
      badge: "Passo 4 • Adicionar",
      title: "Clique no Botão '+ Adicionar'",
      instruction:
        "No canto superior direito da tela inicial do Zuxo Player, clique no botão verde com ícone '+ Adicionar'.",
      image: "/images/tutorial/passo-4.jpg",
      callout: "Aqui você adiciona a sua conexão exclusiva da Haze TV.",
    },
    {
      number: "05",
      badge: "Passo 5 • Tipo de Lista",
      title: "Selecione 'Tem uma lista de provedor?'",
      instruction:
        "Entre as opções apresentadas, escolha a primeira alternativa em destaque: 'Tem uma lista de provedor?'.",
      image: "/images/tutorial/passo-5.jpg",
      callout: "Esta opção conecta diretamente aos servidores de alta performance da Haze TV.",
    },
    {
      number: "06",
      badge: "Passo 6 • Login",
      title: "Insira o Código 111, seu Usuário e Senha",
      instruction:
        "No primeiro campo (URL ou código do servidor), digite 111. Nos campos Usuário e Senha, digite exatamente as credenciais enviadas pela nossa equipe no seu WhatsApp.",
      image: "/images/tutorial/passo-6.png",
      callout: "Após preencher, clique em 'Entrar' e aproveite sua sessão completa em até 4K!",
      hasProviderCopy: true,
    },
  ];

  const totalSteps = steps.length;

  // Autoplay a cada 5 segundos
  useEffect(() => {
    if (!isPlaying || !isInView || shouldReduceMotion) return;

    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % totalSteps);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying, isInView, shouldReduceMotion, totalSteps]);

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
            <span>Passo a Passo Animado</span>
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
                onClick={() => {
                  setCurrentStep(idx);
                  setIsPlaying(false); // Pausa ao interagir manualmente
                }}
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
                    transition={{ duration: 5, ease: "linear" }}
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

              {/* Controles de Navegação (Anterior, Play/Pause, Próximo) */}
              <div className="pt-4 border-t border-haze-line/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentStep((prev) => (prev > 0 ? prev - 1 : totalSteps - 1));
                      setIsPlaying(false);
                    }}
                    className="p-2.5 rounded-xl bg-haze-card border border-haze-line text-haze-muted hover:text-haze-text hover:border-haze-primary/50 transition-all"
                    title="Passo Anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
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
                    onClick={() => {
                      setCurrentStep((prev) => (prev + 1) % totalSteps);
                      setIsPlaying(false);
                    }}
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
            </div>

            {/* Coluna da Direita (Moldura de Visualização do App) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden bg-[#0A0A0E] border-2 border-haze-line/80 shadow-2xl">
                {/* Barra simulada da Smart TV / App */}
                <div className="px-4 py-2.5 bg-[#0F0E17] border-b border-haze-line flex items-center justify-between text-[11px] text-haze-muted font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-1 text-haze-text font-semibold">TELA DA SUA SMART TV / APP</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-haze-card border border-haze-line text-[10px] text-haze-primary">
                    PASSO {activeStep.number}
                  </span>
                </div>

                {/* Imagem do Passo em Transição Suave */}
                <div className="relative aspect-[16/9] w-full bg-[#050507] flex items-center justify-center p-2 sm:p-4 overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="relative w-full h-full flex items-center justify-center"
                    >
                      <Image
                        src={activeStep.image}
                        alt={`Passo ${activeStep.number}: ${activeStep.title}`}
                        fill
                        className="object-contain rounded-lg"
                        sizes="(max-width: 1024px) 100vw, 600px"
                        priority={currentStep === 0}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior de Ação: Ver todos os players abaixo & Chamar Suporte */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <button
            type="button"
            onClick={scrollToFilters}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-haze-card border border-haze-line text-xs font-semibold text-haze-muted hover:text-haze-text hover:border-haze-primary/50 transition-all"
          >
            <ArrowDown className="w-4 h-4 text-haze-primary" />
            <span>Ver todos os players abaixo</span>
          </button>

          <a
            href={getWhatsAppUrl("Olá! Estou no passo a passo do Zuxo Player e gostaria de tirar uma dúvida.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-haze-cta text-haze-base font-bold text-xs hover:brightness-110 shadow-green-glow transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com o Suporte no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

