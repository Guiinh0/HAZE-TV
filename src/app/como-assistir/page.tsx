"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Tv,
  Smartphone,
  Monitor,
  Flame,
  AlertTriangle,
  Copy,
  Check,
  KeyRound,
  ExternalLink,
  MessageCircle,
  ArrowLeft,
  Sparkles,
  Gamepad2,
  Box,
} from "lucide-react";
import { HazeLogo } from "@/components/HazeLogo";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { getWhatsAppUrl } from "@/config/site";

export default function ComoAssistirPage() {
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const copyProvider = () => {
    navigator.clipboard.writeText("111");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const apps = [
    {
      name: "Zuxo Player",
      tag: "Mais Recomendado",
      featured: true,
      provider: "111",
      description: "O player mais completo, compatível com quase todos os sistemas e consoles.",
      devices: [
        "Samsung",
        "LG",
        "Roku",
        "Whales OS",
        "Android / PlayStore",
        "iOS (iPhone/iPad)",
        "Fire TV Stick",
        "macOS",
        "Xbox",
        "PlayStation",
      ],
      categories: ["tv", "mobile", "box", "console", "apple"],
    },
    {
      name: "UTM Play",
      tag: "Smart TVs & Roku",
      featured: false,
      provider: "111",
      description: "Interface leve e intuitiva com alta velocidade de carregamento nas Smart TVs.",
      devices: ["Samsung", "LG", "Roku TV"],
      categories: ["tv"],
    },
    {
      name: "Lotus",
      tag: "Multi-Dispositivos",
      featured: false,
      provider: "111",
      description: "Excelente estabilidade para Smart TVs, computadores e aparelhos Android.",
      devices: ["Samsung", "LG", "Roku", "Webplayer", "macOS", "Fire Stick", "Android"],
      categories: ["tv", "mobile", "box", "apple"],
    },
    {
      name: "Supercine Player",
      tag: "LG & Roku",
      featured: false,
      provider: "111",
      description: "Opção rápida e simplificada disponível nas lojas de aplicativos da LG e Roku.",
      devices: ["LG", "Roku TV"],
      categories: ["tv"],
    },
    {
      name: "IPTV Smarters Pro & XCIPTV",
      tag: "Configuração Direta",
      featured: false,
      provider: "DNS + Usuário + Senha",
      description: "Players universais padrão para TV Box e Android com configuração via DNS.",
      devices: ["Android TV", "TV Box", "Fire Stick", "Smartphones"],
      categories: ["box", "mobile"],
    },
  ];

  const filteredApps =
    selectedCategory === "todos"
      ? apps
      : apps.filter((app) => app.categories.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-haze-base text-haze-text flex flex-col selection:bg-haze-primary/30 selection:text-white">
      {/* Top Header da página */}
      <header className="sticky top-0 z-40 border-b border-haze-line bg-haze-base/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <HazeLogo />
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-haze-muted hover:text-haze-text transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao Início</span>
            </Link>

            <a
              href={getWhatsAppUrl("Olá! Preciso de ajuda para instalar meu aplicativo na TV/celular.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-haze-cta text-haze-base font-bold text-xs hover:brightness-110 shadow-green-glow transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Chamar Suporte</span>
              <span className="sm:hidden">Suporte</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título da Central de Instalação */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-3.5 py-1 rounded-full bg-haze-card border border-haze-line text-xs font-semibold text-haze-primary uppercase tracking-wider mb-3">
              Central de Ativação & Aplicativos
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-haze-text tracking-tight mb-4">
              Como Assistir na sua TV ou Celular
            </h1>
            <p className="text-base text-haze-muted leading-relaxed">
              Siga as instruções abaixo para baixar o player parceiro ideal para o seu aparelho e iniciar sua sessão em minutos.
            </p>
          </div>

          {/* Card Principal: O Código Provider (Destaque Central) */}
          <div className="mb-14 rounded-2xl md:rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#1A1433] via-haze-card to-[#12111E] border-2 border-haze-primary/50 shadow-purple-glow-lg text-center relative overflow-hidden">
            <div className="max-w-xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-haze-primary/20 text-haze-primary text-xs font-bold uppercase tracking-wider mb-4 border border-haze-primary/40">
                <KeyRound className="w-3.5 h-3.5" />
                <span>Dados de Conexão</span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-haze-text mb-2">
                Código do Provider: <span className="text-haze-cta font-mono">111</span>
              </h2>

              <p className="text-sm text-haze-muted mb-6">
                Na maioria dos aplicativos, você só precisa informar o <strong>Provider</strong>, seu <strong>Usuário</strong> e <strong>Senha</strong> enviados pela nossa equipe.
              </p>

              {/* Botão de cópia rápida */}
              <div className="flex items-center justify-center gap-3">
                <div className="px-5 py-3 rounded-xl bg-haze-base border border-haze-line font-mono font-black text-2xl text-haze-text tracking-widest">
                  111
                </div>

                <button
                  type="button"
                  onClick={copyProvider}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-haze-primary text-white font-bold text-sm shadow-purple-glow hover:brightness-110 active:scale-95 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-haze-cta" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Provider</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-haze-muted">
                <span>🔐 Formato padrão: <strong>Provider (111) + Usuário + Senha</strong></span>
              </div>
            </div>
          </div>

          {/* Filtros de Dispositivos */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {[
              { id: "todos", label: "Todos os Players", icon: Sparkles },
              { id: "tv", label: "Smart TV (Samsung/LG/Roku)", icon: Tv },
              { id: "box", label: "TV Box & Fire Stick", icon: Box },
              { id: "mobile", label: "Celulares Android", icon: Smartphone },
              { id: "apple", label: "Apple (iOS/macOS)", icon: Monitor },
              { id: "console", label: "Xbox & PlayStation", icon: Gamepad2 },
            ].map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-haze-primary text-white shadow-purple-glow"
                      : "bg-haze-card border border-haze-line text-haze-muted hover:text-haze-text hover:border-haze-primary/40"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Grid de Aplicativos Parceiros */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {filteredApps.map((app, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-haze-card border transition-all duration-300 flex flex-col justify-between ${
                  app.featured
                    ? "border-haze-primary shadow-purple-glow relative overflow-hidden"
                    : "border-haze-line hover:border-haze-primary/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-bold text-xl text-haze-text">
                      {app.name}
                    </h3>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        app.featured
                          ? "bg-haze-cta text-haze-base font-black shadow-green-glow"
                          : "bg-haze-base border border-haze-line text-haze-primary"
                      }`}
                    >
                      {app.tag}
                    </span>
                  </div>

                  <p className="text-xs text-haze-muted leading-relaxed mb-4">
                    {app.description}
                  </p>

                  <div className="p-3 rounded-xl bg-haze-base/70 border border-haze-line/80 mb-4 text-xs">
                    <div className="text-haze-muted mb-1">Como conectar:</div>
                    <div className="font-mono text-haze-text font-bold">
                      Provider: <span className="text-haze-cta">{app.provider}</span> + Seu Usuário + Senha
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-[11px] font-semibold text-haze-muted uppercase tracking-wider mb-2">
                      Aparelhos suportados:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {app.devices.map((device, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2 py-0.5 rounded bg-haze-base border border-haze-line/60 text-[11px] text-haze-text/90"
                        >
                          {device}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-haze-line/40 text-[11px] text-haze-muted flex items-center justify-between">
                  <span>Pesquise por <strong>{app.name}</strong> na loja de apps da sua TV</span>
                </div>
              </div>
            ))}
          </div>

          {/* Seção Especial: Web Player (Acesso via Computador) */}
          <div className="mb-14 rounded-2xl p-6 sm:p-8 bg-haze-card border border-haze-line relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-haze-base border border-haze-line text-xs font-semibold text-amber-400 mb-3">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  <span>Acesso Direto no Navegador</span>
                </div>

                <h3 className="font-display font-bold text-2xl text-haze-text mb-2">
                  Web Player IPTV
                </h3>

                <p className="text-sm text-haze-muted mb-4 leading-relaxed">
                  Para assistir no computador ou notebook sem precisar instalar nenhum aplicativo, acesse o nosso Web Player oficial:
                </p>

                {/* Link do Webplayer com aviso HTTP */}
                <div className="p-4 rounded-xl bg-haze-base border border-amber-500/30 mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-haze-muted">Link Oficial:</span>
                    <a
                      href="http://webone.live"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm font-bold text-haze-primary hover:underline inline-flex items-center gap-1"
                    >
                      http://webone.live
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-amber-300/90 pt-1 border-t border-haze-line/40">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>
                      <strong>Atenção:</strong> O Webplayer funciona exclusivamente via protocolo <strong>HTTP</strong>. Acesse exatamente pelo link acima, sem alterar para HTTPS.
                    </span>
                  </div>

                  <div className="text-xs text-haze-muted pl-6">
                    🦊 <strong>Recomendação:</strong> Utilize preferencialmente o navegador <strong>Mozilla Firefox</strong> para compatibilidade total.
                  </div>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <a
                  href="http://webone.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-haze-primary text-white font-bold text-sm shadow-purple-glow hover:brightness-110 transition-all"
                >
                  <span>Abrir Web Player</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bloco de Ajuda / WhatsApp */}
          <div className="rounded-2xl p-8 bg-gradient-to-r from-[#141224] to-[#1A1433] border border-haze-line text-center">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-haze-text mb-2">
              Não encontrou o app da sua TV ou precisa de auxílio?
            </h3>
            <p className="text-sm text-haze-muted mb-6 max-w-lg mx-auto">
              Nossa equipe está online no WhatsApp para te guiar passo a passo na instalação e liberar seu teste em instantes.
            </p>

            <a
              href={getWhatsAppUrl("Olá! Gostaria de ajuda para configurar o aplicativo da Haze TV.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-haze-cta text-haze-base font-bold text-sm shadow-green-glow hover:brightness-110 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar com o Suporte no WhatsApp</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
