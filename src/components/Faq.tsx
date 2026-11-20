"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Qual a velocidade de internet recomendada?",
      a: "Para transmissões em alta definição (Full HD), recomendamos uma conexão estável a partir de 15 a 30 Mbps. Para aproveitar conteúdos com transmissão em 4K com máxima estabilidade, o ideal é contar com 50 Mbps ou superior, preferencialmente via cabo de rede ou Wi-Fi 5 GHz.",
    },
    {
      q: "Quais dispositivos são compatíveis com a Haze TV?",
      a: "A plataforma é compatível com Smart TVs (Samsung Tizen, LG webOS e Android TV), TV Boxes, Fire TV Stick, smartphones e tablets (iOS e Android), além de computadores e notebooks através de navegador web.",
    },
    {
      q: "Como funciona o teste grátis de 4 horas?",
      a: "Você entra em contato com a nossa equipe pelo WhatsApp e recebe os dados de acesso temporários para testar durante 4 horas completas. Não pedimos cartão de crédito nem geramos cobrança automática. A continuidade no serviço exige a escolha de um plano após o término do teste.",
    },
    {
      q: "Preciso de fidelidade ou contrato longo?",
      a: "Não. A Haze TV não possui fidelidade. Você escolhe se prefere o plano mensal, trimestral ou anual e pode cancelar ou renovar a qualquer momento sem nenhuma taxa ou multa de rescisão.",
    },
    {
      q: "Quais são as formas de pagamento disponíveis?",
      a: "Aceitamos pagamentos rápidos via PIX e principais cartões de crédito. A liberação e renovação acontecem de forma ágil com a nossa equipe de suporte.",
    },
    {
      q: "Como recebo suporte se precisar de ajuda para configurar?",
      a: "Nosso suporte atende diretamente via WhatsApp. Enviamos o passo a passo de instalação específico para o seu aparelho e auxiliamos em qualquer dúvida técnica que você tiver.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-haze-card border border-haze-line text-xs font-semibold text-haze-primary uppercase tracking-wider mb-3">
              Tire Suas Dúvidas
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-haze-text mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-base text-haze-muted">
              Respostas claras e transparentes para você aproveitar sua experiência sem dúvidas.
            </p>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={index * 0.05}>
                <div className="rounded-xl bg-haze-card border border-haze-line overflow-hidden transition-colors">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-semibold text-base sm:text-lg text-haze-text hover:text-haze-primary transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-haze-primary shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-haze-muted leading-relaxed border-t border-haze-line/40 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
