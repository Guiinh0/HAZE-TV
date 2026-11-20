export const SITE_CONFIG = {
  name: "Haze TV",
  slogan: "Sua sessão sem cortes.",
  secondarySlogan: "Acenda a tela. O resto é com a gente.",
  description:
    "Plataforma de entretenimento digital de alta performance. Mais de 1.700 canais ao vivo, 31.000 filmes e 9.000 séries com transmissão contínua em até 4K.",
  url: "https://hazetv.com.br",
  
  // Métricas reais extraídas do painel
  catalog: {
    channels: "1.700+",
    movies: "31.000+",
    series: "9.000+",
  },

  // Insira o número do chip da Claro quando chegar (ex: 5511999999999)
  whatsapp: {
    number: "", // Aguardando chip da Claro
    defaultMessage: "Olá! Quero solicitar o teste grátis de 4 horas da Haze TV.",
  },
  
  // Insira os valores quando finalizar os cálculos
  pricing: {
    monthly: "Sob Consulta",
    quarterly: "Sob Consulta",
    annual: "Sob Consulta",
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
  
  // Se o número ainda não estiver configurado, direciona com aviso ou placeholder seguro
  if (!SITE_CONFIG.whatsapp.number) {
    return `#contato-whatsapp`;
  }
  
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encoded}`;
}


