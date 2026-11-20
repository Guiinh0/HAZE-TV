import { Trophy, Film, Clapperboard, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Categories() {
  const categories = [
    {
      icon: Trophy,
      tag: "Ao Vivo",
      title: "Esportes Ao Vivo",
      desc: "Transmissões dos principais torneios nacionais e internacionais de futebol, basquete, lutas e automobilismo com baixa latência e sinal estável.",
    },
    {
      icon: Film,
      tag: "Catálogo",
      title: "Cinema em Casa",
      desc: "Lançamentos e acervo completo de produções clássicas e contemporâneas em alta definição para assistir na hora que você quiser.",
    },
    {
      icon: Clapperboard,
      tag: "Maratona",
      title: "Séries Completas",
      desc: "Temporadas organizadas por episódios e gêneros: suspense, ação, ficção científica, drama e comédia sem interrupções.",
    },
    {
      icon: Clock,
      tag: "Contínuo",
      title: "Programação 24 Horas",
      desc: "Canais de notícias em tempo real, documentários, conteúdo infantil educativo e variedades com atualização constante.",
    },
  ];

  return (
    <section id="conteudo" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
            <div className="inline-block px-3 py-1 rounded-full bg-haze-card border border-haze-line text-xs font-semibold text-haze-primary uppercase tracking-wider mb-3">
              Variedade & Performance
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-haze-text mb-4">
              Tudo o que você assiste em um só lugar
            </h2>
            <p className="text-base text-haze-muted">
              Experiência organizada por categorias inteligentes para você encontrar seu conteúdo rapidamente.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="h-full p-8 rounded-2xl bg-haze-card border border-haze-line hover:border-haze-primary/60 transition-all duration-300 hover:shadow-purple-glow group relative overflow-hidden">
                  {/* Glow decorativo sutil de fundo */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 bg-haze-primary/10 blur-3xl rounded-full group-hover:bg-haze-primary/20 transition-all"
                  />

                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-haze-base border border-haze-line flex items-center justify-center text-haze-primary group-hover:border-haze-primary transition-colors">
                      <Icon className="w-6 h-6 text-haze-primary" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-haze-base border border-haze-line text-haze-muted">
                      {cat.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-haze-text mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-haze-muted leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
