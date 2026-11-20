import { Zap, Wifi, Headphones, Unlock } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Differentials() {
  const items = [
    {
      icon: Unlock,
      title: "Sem Fidelidade",
      description: "Liberdade total para você. Assine pelo período que desejar, sem multas, contratos longos ou amarras contratuais.",
    },
    {
      icon: Zap,
      title: "Ativação Rápida",
      description: "Liberação ágil do seu acesso em poucos minutos diretamente no WhatsApp para você começar a assistir sem demora.",
    },
    {
      icon: Wifi,
      title: "Até 4K e Full HD",
      description: "Transmissão com alta taxa de quadros e estabilidade, conforme a disponibilidade do conteúdo e da sua conexão de internet.",
    },
    {
      icon: Headphones,
      title: "Suporte Dedicado",
      description: "Equipe preparada para tirar dúvidas, auxiliar na configuração inicial do seu dispositivo e prestar suporte contínuo.",
    },
  ];

  return (
    <section id="diferenciais" className="py-16 md:py-24 border-y border-haze-line/80 bg-haze-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-haze-text mb-4">
              A estabilidade que faz a diferença
            </h2>
            <p className="text-sm sm:text-base text-haze-muted">
              Desenvolvido para oferecer máxima performance, fluidez e simplicidade no seu dia a dia.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={index} delay={index * 0.08}>
                <div className="h-full p-6 md:p-7 rounded-2xl bg-haze-card border border-haze-line hover:border-haze-primary/50 transition-all duration-300 hover:shadow-purple-glow group">
                  <div className="w-12 h-12 rounded-xl bg-haze-base border border-haze-line flex items-center justify-center text-haze-primary mb-5 group-hover:border-haze-primary transition-colors">
                    <Icon className="w-6 h-6 text-haze-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-haze-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-haze-muted leading-relaxed">
                    {item.description}
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
