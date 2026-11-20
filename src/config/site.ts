export const SITE_CONFIG = {
  name: "Haze TV",
  slogan: "Sua sessão sem cortes.",
  secondarySlogan: "STREAMING 4K • SERVIDOR DEDICADO • ZERO TRAVAMENTO",
  description:
    "Plataforma de entretenimento digital de alta performance. Mais de 1.700 canais ao vivo, 31.000 filmes e 9.000 séries com transmissão contínua em até 4K.",
  url: "https://hazetv.com.br",
  instagram: "@hazetv.oficial",
  instagramUrl: "https://instagram.com/hazetv.oficial",
  
  // Métricas reais extraídas do painel
  catalog: {
    channels: "1.700+",
    movies: "31.000+",
    series: "9.000+",
  },

  // WhatsApp Oficial Haze TV (Claro)
  whatsapp: {
    number: "5513974086517",
    defaultMessage: "Olá! Quero solicitar o teste grátis de 4 horas da Haze TV.",
  },
  
  // Preços oficiais do Manual de Identidade Visual
  pricing: {
    monthly: "R$ 35",
    quarterly: "R$ 90",
    annual: "Indisponível",
  },
  
  company: {
    legalName: "Haze TV Digital",
    cnpj: "",
    supportEmail: "suporte@hazetv.com.br",
  },
};

export function getWhatsAppUrl(customMessage?: string) {
  const message = customMessage || SITE_CONFIG.whatsapp.defaultMessage;
  const encoded = encodeURIComponent(message);
  
  if (!SITE_CONFIG.whatsapp.number) {
    return `#contato-whatsapp`;
  }
  
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encoded}`;
}
