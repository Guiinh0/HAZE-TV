"use client";

import { useRef } from "react";
import { MessageSquare, Download, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Item 6: Linha vertical conectando os 3 passos com scaleY ligado ao scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 60%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Chame no WhatsApp",
      description: "Envie uma mensagem solicitando o seu teste grátis de 4 horas. Nossa equipe te responde com rapidez.",
    },
    {
      step: "02",
      icon: Download,
      title: "Receba o acesso e instale",
      description: "Você recebe as instruções passo a passo para instalar o aplicativo no seu dispositivo preferido.",
    },
    {
      step: "03",
      icon: CheckCircle2,
      title: "Assista e decida",
      description: "Aproveite 4 horas de transmissão livre. Se aprovar a qualidade e estabilidade, basta escolher o plano ideal.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-haze-card/20 border-t border-haze-line/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-haze-card border border-haze-line text-xs font-semibold text-haze-primary uppercase tracking-wider mb-3">
              Passo a Passo
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-haze-text mb-4">
              Como funciona o teste grátis
            </h2>
            <p className="text-base text-haze-muted">
              Sem burocracia, sem cadastro de cartão de crédito e sem complicação.
            </p>
          </div>
        </Reveal>

        {/* Linha vertical conectora no desktop/tablet e grid */}
        <div className="relative">
          {/* Linha vertical de conexão contínua animada (scaleY via scroll) */}
          <div className="hidden md:block absolute top-1/2 left-4 right-4 h-[2px] -translate-y-1/2 -z-0">
            <div className="w-full h-full bg-haze-line" />
            <motion.div
              style={
                shouldReduceMotion
                  ? { scaleX: 1 }
                  : { scaleX: scaleY, transformOrigin: "left" }
              }
              className="absolute inset-0 h-full bg-haze-primary shadow-[0_0_12px_#8B5CF6]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={index} delay={index * 0.1}>
                  <motion.div
                    whileInView={
                      shouldReduceMotion
                        ? {}
                        : {
                            borderColor: "rgba(139, 92, 246, 0.7)",
                            boxShadow: "0 0 25px -5px rgba(139, 92, 246, 0.35)",
                          }
                    }
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className="p-8 rounded-2xl bg-haze-card border border-haze-line transition-all duration-300 relative group h-full"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        whileInView={
                          shouldReduceMotion
                            ? {}
                            : {
                                borderColor: "#8B5CF6",
                                color: "#8B5CF6",
                                boxShadow: "0 0 15px rgba(139, 92, 246, 0.4)",
                              }
                        }
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-xl bg-haze-base border border-haze-line flex items-center justify-center text-haze-primary"
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <span className="font-display font-bold text-3xl text-haze-primary/40 group-hover:text-haze-primary transition-colors">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-haze-text mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-haze-muted leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
