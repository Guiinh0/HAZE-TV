---
name: haze-tv-brand
description: Regras de marca, design system, arquitetura de conversão e padrões de qualidade da Haze TV (plataforma de assinatura de entretenimento digital). Use SEMPRE que for criar ou editar a landing page (Next.js/React + Tailwind CSS), posts, carrosséis, anúncios, copys, metadados ou qualquer material de divulgação da Haze TV.
---

# Haze TV — Skill de Marca, Conversão e Qualidade

## 0. Como usar esta Skill
1. Antes de gerar qualquer output (página, post, carrossel, copy, metadado), leia as seções 1 a 6.
2. Gere o material seguindo o design system (seção 2) e a estrutura de funil (seção 3).
3. Antes de entregar, execute o checklist da seção 7. Se algum item falhar, corrija e valide de novo.
4. Nunca invente dados. Valores marcados com `{{PLACEHOLDER}}` devem ser preenchidos pelo usuário ou deixados visíveis como pendência. Não crie preços, CNPJ, número de WhatsApp, quantidade de canais ou depoimentos fictícios.

## 1. Identidade e posicionamento
- **Marca:** Haze TV
- **Segmento:** plataforma de assinatura de entretenimento digital e streaming (filmes, séries, programação ao vivo e eventos esportivos).
- **Slogan principal:** "Sua sessão sem cortes."
- **Slogan secundário:** "Acenda a tela. O resto é com a gente."
- **Direção criativa:** visual noturno, moderno, tech e imersivo. Referência sutil à estética *Purple Haze*: névoa suave, luz neon roxa sobre fundo escuro, clima de cinema em casa e de maratona relaxada.
- **Percepção desejada:** plataforma de streaming premium e confiável. Evitar aparência amadora: sem excesso de elementos, sem clip-art, sem fontes decorativas, sem emojis em títulos da LP.
- **Tom de voz:** direto, confiante, descontraído e sem gíria pesada. Frases curtas. Falar de experiência (estabilidade, qualidade, praticidade) e não de "preço baixo" ou "liberdade total".

## 2. Design system (obrigatório)

### 2.1 Tema
Dark mode profundo em toda a LP e em todos os criativos. Nunca usar fundo branco ou claro.

### 2.2 Paleta
| Token | Hex / valor | Uso |
|---|---|---|
| `bg-base` | `#0A0A0C` | Fundo principal |
| `bg-card` | `#13131A` | Cards, painéis, seções secundárias |
| `border-card` | `rgba(139, 92, 246, 0.2)` | Borda sutil de cards |
| `primary` | `#8B5CF6` | Glow, destaques, ícones, gradientes de névoa |
| `cta` | `#10B981` | Botões de ação, badges de oferta, "Mais Escolhido" |
| `text-primary` | `#F8FAFC` | Títulos e texto principal |
| `text-secondary` | `#94A3B8` | Subtítulos, legendas, texto de apoio |

Regras de uso:
- O verde `#10B981` é **exclusivo de ação** (CTA, badges de oferta). Não usar em decoração.
- O roxo `#8B5CF6` é a cor de atmosfera (glow, névoa, bordas ativas, ícones).
- Névoa: gradientes radiais de `#8B5CF6` com opacidade de 10% a 35% sobre `#0A0A0C`, desfocados (blur alto), posicionados atrás do conteúdo. Nunca competir com o texto.
- Texto sobre fundo escuro: usar `#F8FAFC` ou `#94A3B8`. Nunca texto roxo em corpo de texto (apenas em destaques curtos de título).

### 2.3 Tipografia
- **Títulos:** *Space Grotesk* (preferida) ou *Plus Jakarta Sans*. Pesos 600 a 700.
- **Corpo e interface:** *Inter*. Pesos 400 a 600.
- Carregar via `next/font/google` na LP.
- Escala sugerida (mobile → desktop): H1 `text-4xl → text-6xl`, H2 `text-3xl → text-4xl`, corpo `text-base → text-lg`.

### 2.4 Tokens para Tailwind (referência)
Use estes valores em `tailwind.config` (ou `@theme` no Tailwind v4):
- `colors.haze.base = #0A0A0C`
- `colors.haze.card = #13131A`
- `colors.haze.primary = #8B5CF6`
- `colors.haze.cta = #10B981`
- `colors.haze.text = #F8FAFC`
- `colors.haze.muted = #94A3B8`
- `colors.haze.line = rgba(139,92,246,0.2)`
- `fontFamily.display = Space Grotesk` e `fontFamily.sans = Inter`

### 2.5 Componentes e estilo
- Cards: fundo `bg-card`, borda 1px `border-card`, raio `rounded-2xl`, sombra com glow roxo discreto no hover.
- Botão CTA: fundo `cta`, texto escuro `#0A0A0C` ou branco com contraste mínimo 4.5:1, `rounded-xl`, altura mínima 48px, glow verde suave. Estado hover com leve elevação.
- Botão secundário: contorno roxo, fundo transparente.
- Ícones: estilo linha (outline), traço neon roxo, consistentes em espessura.
- Animações: sutis (fade-in, leve parallax da névoa). Respeitar `prefers-reduced-motion`.
- Imagens: usar apenas mockups de interface originais, ilustrações próprias ou imagens com licença comprovada. Os mockups mostram uma UI genérica da Haze TV, sem logos, capas ou nomes de produções e canais de terceiros.

## 3. Landing Page: arquitetura e funil

### 3.1 Objetivo único
Levar o visitante ao **WhatsApp** para solicitar o **Teste Grátis de 4 Horas**. Não há checkout na página. Todos os botões (hero, planos, FAQ, rodapé, barra fixa mobile) apontam para o mesmo destino.

- Link: `https://wa.me/{{WHATSAPP_NUMERO_COM_DDI}}?text={{MENSAGEM_PRE_PREENCHIDA_URL_ENCODED}}`
- Mensagem pré-preenchida sugerida: "Olá! Quero solicitar o teste grátis de 4 horas da Haze TV."
- Por plano, a mensagem pode mudar: "Olá! Tenho interesse no plano {{PLANO}} da Haze TV."
- Abrir em nova aba com `rel="noopener noreferrer"`. Incluir parâmetros UTM no rastreio quando existirem.

### 3.2 Seções obrigatórias (nesta ordem)
1. **Hero:** headline de impacto, subheadline sobre estabilidade e qualidade de imagem, CTA verde "Solicitar Teste Grátis de 4h", mockup de interface sobre fundo com névoa roxa. Usar o slogan principal.
2. **Barra de diferenciais:** sem fidelidade, ativação rápida, qualidade até 4K/Full HD (conforme disponibilidade do conteúdo e da conexão), suporte dedicado.
3. **Categorias de conteúdo:** esportes ao vivo, cinema, séries, programação 24h. Descrições originais e genéricas, sem marcas ou nomes de terceiros.
4. **Compatibilidade multi-tela:** Smart TV, TV Box, smartphone (iOS/Android), computador, tablet. Só listar o que for realmente suportado.
5. **Tabela de planos:** Mensal, Trimestral (destaque "Mais Escolhido", com borda e glow roxo e badge verde) e Anual. Valores vêm de `{{PRECO_MENSAL}}`, `{{PRECO_TRIMESTRAL}}`, `{{PRECO_ANUAL}}`. Cada plano com botão para o WhatsApp.
6. **Como funciona (3 etapas):** (1) Chame no WhatsApp e peça o teste grátis. (2) Receba o acesso e instale no seu dispositivo. (3) Assista por 4 horas e, se gostar, escolha seu plano.
7. **FAQ:** velocidade de internet recomendada, dispositivos compatíveis, formas de pagamento, como funciona o teste, como cancelar, suporte. Respostas honestas e sem exageros.
8. **Footer minimalista:** logo, links de suporte (WhatsApp), Termos de Uso, Política de Privacidade, Política de Cancelamento/Reembolso e identificação do responsável (seção 5.3).

Extras recomendados: botão fixo de WhatsApp no mobile, `scroll-behavior: smooth`, e um CTA de reforço antes do FAQ.

### 3.3 Requisitos técnicos da LP
- Next.js (App Router) + React + Tailwind CSS, componentes por seção em `components/`.
- Mobile first, sem rolagem horizontal, CTA visível sem rolar no primeiro viewport mobile.
- Performance: imagens com `next/image`, fontes com `next/font`, sem bibliotecas pesadas desnecessárias, meta de LCP abaixo de 2,5s.
- Acessibilidade: contraste mínimo 4.5:1 para texto, foco visível, `alt` descritivo, HTML semântico, hierarquia única de H1.
- SEO e metadados: `title`, `description`, Open Graph e favicon com os termos seguros da seção 4. Sem keywords de terceiros.

## 4. Copy e linguagem

### 4.1 Vocabulário preferido
- "Plataforma de entretenimento digital"
- "Esportes ao vivo, cinema e séries em um só lugar"
- "Transmissão em até 4K/Full HD" (sempre com "até")
- "Estabilidade", "baixa latência", "experiência contínua"
- "Teste grátis de 4 horas", "sem fidelidade", "suporte dedicado"

### 4.2 Evitar
- Termos de conotação ilícita ou informal pejorativa ("pirata", "gatonet", "desbloqueado", "liberado", "sem pagar nada", "tudo de graça"). Eles contradizem o posicionamento de serviço licenciado.
- **Marcas, logos, capas, nomes de canais, ligas, campeonatos, produções e plataformas de terceiros** em copy, imagens, anúncios e metadados, a menos que o usuário forneça autorização explícita para aquele uso específico. Na dúvida, usar descrição genérica.
- Sugerir afiliação, parceria ou "oficial" com terceiros sem comprovação.

### 4.3 Promessas: só o que é verdadeiro e sustentável
- Não garantir "zero travamento", "100% de estabilidade" ou "qualidade 4K em tudo". Usar "projetado para estabilidade", "até 4K conforme conteúdo e conexão".
- Não afirmar números de canais, títulos ou eventos sem o dado fornecido pelo usuário (`{{QTD_CANAIS}}`, `{{QTD_TITULOS}}`).
- Não inventar depoimentos, avaliações, número de clientes ou selos. Só usar se o usuário fornecer dados reais e autorizados.
- O teste grátis precisa descrever o que realmente é: duração (4 horas), como solicitar e que a continuidade exige contratar um plano.

## 5. Compliance e transparência
Esta é a trava crítica da marca. Aplica-se a LP, posts, anúncios e metadados.

### 5.1 Documentação
O usuário informou que o serviço opera com contratos, licenças e autorizações. Esta Skill assume isso. Se um material for gerado com base em direitos específicos (ex.: um evento esportivo determinado), solicitar ao usuário a confirmação de que o uso daquele conteúdo está coberto antes de citá-lo.

### 5.2 Conteúdo de terceiros
Como a Haze TV não gera marcas alheias em seus materiais, todo visual deve ser original da Haze TV. Capturas de tela e artes de produções e transmissões reais só entram com autorização documentada.

### 5.3 Identificação e políticas no site
O footer deve conter, com dados fornecidos pelo usuário:
- Razão social e CNPJ: `{{RAZAO_SOCIAL}}` / `{{CNPJ}}`
- Canal de contato oficial: `{{WHATSAPP}}` e `{{EMAIL_SUPORTE}}`
- Links para Termos de Uso, Política de Privacidade (LGPD) e Política de Cancelamento/Reembolso
- Se o campo ainda não existir, deixar o placeholder visível e avisar o usuário no resumo final. Não ocultar nem inventar.

### 5.4 Anúncios (Meta Ads e similares)
- Criativos e landing page devem ser coerentes: o que o anúncio promete deve existir na página.
- Seguir as políticas vigentes da plataforma de anúncios. Em caso de reprovação, ajustar a copy ou providenciar a documentação solicitada. Não tentar contornar a revisão com redirecionamentos, páginas diferentes para o revisor ou ocultação de informação.

## 6. Posts e carrosséis

### 6.1 Formatos
- Feed: 1080×1350 (4:5) como padrão; 1080×1080 (1:1) quando solicitado.
- Stories/Reels: 1080×1920 (9:16), mantendo a área segura (cerca de 250px livres no topo e na base).
- Carrossel: de 5 a 10 slides. Slide 1 é o gancho; o último é o CTA para o WhatsApp.

### 6.2 Coerência 1:1
O elemento visual de cada post ou slide deve representar exatamente o que a headline daquele card diz. Antes de gerar, defina a imagem em uma frase e verifique se ela ilustra a headline. Exemplos: "Funciona em qualquer tela" mostra múltiplos dispositivos; "Ativação rápida" mostra um relógio ou raio com um fluxo curto; "Esportes ao vivo" mostra uma arena genérica com luz neon, sem times, escudos ou campeonatos reais.

### 6.3 Ritmo visual
- Proibido dois slides seguidos só com texto.
- Alternar entre: (a) impacto visual com cena atmosférica e névoa; (b) mockup de tela ou interface; (c) ícones neon em grid; (d) tipografia grande com uma frase de destaque.
- Hierarquia: uma ideia por slide, headline com no máximo 8 a 10 palavras, texto de apoio curto.
- Todo slide tem o mesmo sistema visual (cores, fontes, margens) e um elemento de marca discreto (logo ou "Haze TV").
- O slide final traz o CTA verde: "Solicitar Teste Grátis de 4h" e a instrução para chamar no WhatsApp.

### 6.4 Legenda e hashtags
Legenda curta, no tom de voz da seção 1, com o CTA para o WhatsApp. Hashtags genéricas de entretenimento, sem marcas de terceiros.

## 7. Checklist pré-entrega (obrigatório)
Antes de finalizar qualquer output, confirme item por item. Se um falhar, corrija e revalide.

**Marca e design**
- [ ] Dark mode, usando apenas os tokens da seção 2.
- [ ] Verde só em ações/ofertas; roxo só em atmosfera/destaque.
- [ ] Fontes corretas (Space Grotesk ou Plus Jakarta Sans nos títulos; Inter no corpo).

**Legibilidade e contraste**
- [ ] Contraste mínimo de 4.5:1 no texto comum e 3:1 em texto grande.
- [ ] Texto legível em tela de celular (corpo ≥ 16px na LP; ≥ 28px nos textos principais dos slides).
- [ ] Nenhum texto sobre névoa ou imagem com baixo contraste.

**Conteúdo e compliance**
- [ ] Nenhuma marca, logo, canal, liga, produção ou plataforma de terceiros em copy, imagem ou metadado sem autorização.
- [ ] Nenhum termo da lista da seção 4.2.
- [ ] Nenhuma promessa absoluta ou dado inventado (preço, números, depoimentos).
- [ ] Footer com identificação e políticas, ou placeholders sinalizados ao usuário.

**Conversão**
- [ ] Todos os CTAs levam ao WhatsApp com mensagem pré-preenchida; não há checkout.
- [ ] O teste grátis de 4 horas está descrito de forma clara e verdadeira.

**Posts e carrosséis**
- [ ] Cada visual ilustra exatamente a headline do seu card.
- [ ] Não há dois slides consecutivos só com texto.
- [ ] Último slide com CTA.

**Técnico (LP)**
- [ ] Responsiva sem rolagem horizontal; CTA visível no primeiro viewport mobile.
- [ ] Metadados (`title`, `description`, Open Graph) preenchidos com linguagem segura.
- [ ] Acessibilidade básica (alt, foco, semântica, um H1).

## 8. Formato da resposta ao usuário
Ao entregar, informe em poucas linhas: o que foi gerado, quais placeholders ainda precisam ser preenchidos (preços, WhatsApp, CNPJ, razão social, políticas) e o resultado do checklist. Não repita o conteúdo inteiro.