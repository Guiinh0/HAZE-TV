"use client";

import { useState } from "react";
import Link from "next/link";
import { Tv, Shield, FileText, RefreshCw, X } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";

export function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <footer className="border-t border-haze-line bg-[#09090B] py-14 md:py-16 text-sm text-haze-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-haze-line/60">
          {/* Coluna 1: Marca & Descrição */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-haze-card border border-haze-line flex items-center justify-center text-haze-primary">
                <Tv className="w-4 h-4 text-haze-primary" />
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-haze-text">
                HAZE<span className="text-haze-primary">TV</span>
              </span>
            </Link>
            <p className="text-xs text-haze-muted leading-relaxed max-w-sm mb-4">
              {SITE_CONFIG.slogan} — Entretenimento digital com alta estabilidade, baixa latência e transmissão contínua.
            </p>
            <div className="text-[11px] text-haze-muted/80 space-y-1">
              <div>Operação: <span className="text-haze-text font-medium">{SITE_CONFIG.company.legalName}</span></div>
              <div>Atendimento e Suporte: <span className="text-haze-text font-medium">Via WhatsApp</span></div>
              {SITE_CONFIG.company.cnpj && (
                <div>CNPJ: <span className="text-haze-text font-mono">{SITE_CONFIG.company.cnpj}</span></div>
              )}
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4 className="font-display font-semibold text-xs text-haze-text uppercase tracking-wider mb-3">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#diferenciais" className="hover:text-haze-text transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#conteudo" className="hover:text-haze-text transition-colors">
                  Categorias de Conteúdo
                </a>
              </li>
              <li>
                <a href="#dispositivos" className="hover:text-haze-text transition-colors">
                  Dispositivos Suportados
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-haze-text transition-colors">
                  Tabela de Planos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-haze-text transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Políticas & Legal */}
          <div>
            <h4 className="font-display font-semibold text-xs text-haze-text uppercase tracking-wider mb-3">
              Políticas & Termos
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal("termos")}
                  className="hover:text-haze-text transition-colors text-left flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-haze-primary" />
                  Termos de Uso
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal("privacidade")}
                  className="hover:text-haze-text transition-colors text-left flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-haze-primary" />
                  Política de Privacidade (LGPD)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal("cancelamento")}
                  className="hover:text-haze-text transition-colors text-left flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-haze-primary" />
                  Cancelamento & Reembolso
                </button>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl("Olá! Gostaria de falar com o atendimento ao cliente da Haze TV.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-haze-primary hover:underline transition-colors block pt-1"
                >
                  Canal de Contato Oficial (WhatsApp)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior com aviso de direitos e compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-haze-muted/70">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os direitos reservados.
          </div>
          <div className="text-[11px] text-center sm:text-right max-w-md">
            As transmissões em até 4K/Full HD dependem da disponibilidade do conteúdo e da qualidade da conexão de internet do usuário.
          </div>
        </div>
      </div>

      {/* Modal Simples de Políticas */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-haze-card border border-haze-line rounded-2xl max-w-lg w-full p-6 text-haze-text shadow-purple-glow-lg max-h-[85vh] overflow-y-auto relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1 rounded-lg text-haze-muted hover:text-white bg-haze-base border border-haze-line"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === "termos" && (
              <div>
                <h3 className="font-display font-bold text-xl mb-3 text-haze-text">Termos de Uso</h3>
                <div className="text-xs text-haze-muted space-y-3 leading-relaxed">
                  <p>Estes Termos de Uso regulam o acesso aos serviços fornecidos pela <strong>{SITE_CONFIG.company.legalName}</strong> (CNPJ: {SITE_CONFIG.company.cnpj}).</p>
                  <p>1. <strong>Finalidade:</strong> A Haze TV oferece planos de assinatura e testes de acesso temporário a conteúdos digitais para fins estritamente pessoais e não comerciais.</p>
                  <p>2. <strong>Compatibilidade:</strong> O assinante é responsável por possuir dispositivo compatível e conexão com a internet que atenda aos requisitos mínimos recomendados.</p>
                  <p>3. <strong>Uso de Contas:</strong> O acesso é intransferível e limitado ao número de conexões simultâneas estipulado no plano contratado.</p>
                </div>
              </div>
            )}

            {activeModal === "privacidade" && (
              <div>
                <h3 className="font-display font-bold text-xl mb-3 text-haze-text">Política de Privacidade (LGPD)</h3>
                <div className="text-xs text-haze-muted space-y-3 leading-relaxed">
                  <p>A <strong>{SITE_CONFIG.company.legalName}</strong> está comprometida com a proteção e a privacidade dos dados de seus usuários em conformidade com a LGPD (Lei nº 13.709/2018).</p>
                  <p>1. <strong>Coleta de Dados:</strong> Coletamos apenas os dados essenciais para o fornecimento e suporte do serviço, tais como identificador de contato para atendimento via WhatsApp.</p>
                  <p>2. <strong>Compartilhamento:</strong> Não vendemos nem compartilhamos seus dados pessoais com terceiros para fins de marketing sem autorização.</p>
                  <p>3. <strong>Seus Direitos:</strong> Você pode solicitar a qualquer momento a confirmação, correção ou exclusão de seus dados através do nosso suporte oficial.</p>
                </div>
              </div>
            )}

            {activeModal === "cancelamento" && (
              <div>
                <h3 className="font-display font-bold text-xl mb-3 text-haze-text">Política de Cancelamento e Reembolso</h3>
                <div className="text-xs text-haze-muted space-y-3 leading-relaxed">
                  <p>1. <strong>Sem Fidelidade:</strong> Todos os planos da Haze TV são pré-pagos e não possuem contrato de fidelidade. O usuário pode optar pela não renovação a qualquer momento sem incidência de multas.</p>
                  <p>2. <strong>Teste Prévio:</strong> Oferecemos o teste gratuito de 4 horas para que você experimente a qualidade antes de qualquer contratação financeira.</p>
                  <p>3. <strong>Reembolso:</strong> Caso haja duplicidade de cobrança ou indisponibilidade técnica incontornável devidamente constatada pelo suporte dentro dos prazos legais, o estorno será realizado no mesmo método de pagamento.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}

