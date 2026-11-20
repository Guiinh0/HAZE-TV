import { Tv, Monitor, Smartphone, Tablet, Box } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Compatibility() {
  const devices = [
    {
      icon: Tv,
      name: "Smart TVs",
      specs: "Samsung Tizen, LG webOS e Android TV",
    },
    {
      icon: Box,
      name: "TV Boxes & Dongles",
      specs: "Fire TV Stick, Mi Box, Chromecast e outros",
    },
    {
      icon: Smartphone,
      name: "Smartphones",
      specs: "Sistemas iOS e Android",
    },
    {
      icon: Monitor,
      name: "Computadores",
      specs: "Windows, macOS, Linux via Web Player",
    },
    {
      icon: Tablet,
      name: "Tablets",
      specs: "iPads e tablets Android para mobilidade",
    },
  ];

  return (
    <section id="dispositivos" className="py-20 md:py-28 bg-haze-card/30 border-y border-haze-line/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-haze-card border border-haze-line text-xs font-semibold text-haze-primary uppercase tracking-wider mb-3">
              Multi-Dispositivos
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-haze-text mb-4">
              Compatível com a tela que você já usa
            </h2>
            <p className="text-base text-haze-muted">
              Assista em casa na TV principal ou continue sua transmissão no celular ou tablet sem complicações.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {devices.map((device, idx) => {
            const Icon = device.icon;
            return (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="h-full p-6 rounded-2xl bg-haze-card border border-haze-line text-center hover:border-haze-primary/50 transition-all duration-300 hover:shadow-purple-glow group flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-haze-base border border-haze-line flex items-center justify-center text-haze-primary mb-4 group-hover:scale-105 group-hover:border-haze-primary transition-all">
                    <Icon className="w-7 h-7 text-haze-primary" />
                  </div>
                  <div className="font-display font-semibold text-base text-haze-text mb-1">
                    {device.name}
                  </div>
                  <div className="text-xs text-haze-muted leading-tight">
                    {device.specs}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
