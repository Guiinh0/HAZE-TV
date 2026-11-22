import React from "react";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

interface Props {
  isVertical?: boolean;
}

// Durações em frames (30fps)
// Intro: 60 frames (2.0s)
// Step 1: 289 frames (9.62s)
// Step 2: 249 frames (8.30s)
// Step 3: 165 frames (5.49s)
// Step 4: 170 frames (5.66s)
// Step 5: 148 frames (4.94s)
// Step 6: 390 frames (13.00s)
// Outro: 105 frames (3.5s)
export const SCENE_DURATIONS = {
  intro: 60,
  step1: 289,
  step2: 249,
  step3: 165,
  step4: 170,
  step5: 148,
  step6: 390,
  outro: 105,
};

export const TOTAL_DURATION =
  SCENE_DURATIONS.intro +
  SCENE_DURATIONS.step1 +
  SCENE_DURATIONS.step2 +
  SCENE_DURATIONS.step3 +
  SCENE_DURATIONS.step4 +
  SCENE_DURATIONS.step5 +
  SCENE_DURATIONS.step6 +
  SCENE_DURATIONS.outro;

export const TutorialComposition: React.FC<Props> = ({ isVertical = false }) => {
  let fromFrame = 0;

  const introFrom = fromFrame;
  fromFrame += SCENE_DURATIONS.intro;

  const step1From = fromFrame;
  fromFrame += SCENE_DURATIONS.step1;

  const step2From = fromFrame;
  fromFrame += SCENE_DURATIONS.step2;

  const step3From = fromFrame;
  fromFrame += SCENE_DURATIONS.step3;

  const step4From = fromFrame;
  fromFrame += SCENE_DURATIONS.step4;

  const step5From = fromFrame;
  fromFrame += SCENE_DURATIONS.step5;

  const step6From = fromFrame;
  fromFrame += SCENE_DURATIONS.step6;

  const outroFrom = fromFrame;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#07070B",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        color: "#FFFFFF",
      }}
    >
      {/* Background Glows */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: isVertical ? "120%" : "60%",
          height: isVertical ? "50%" : "70%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, rgba(10, 10, 14, 0) 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: isVertical ? "120%" : "60%",
          height: isVertical ? "50%" : "70%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(10, 10, 14, 0) 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* CENA 0: INTRO */}
      <Sequence from={introFrom} durationInFrames={SCENE_DURATIONS.intro}>
        <IntroScene isVertical={isVertical} />
      </Sequence>

      {/* CENA 1: PASSO 1 */}
      <Sequence from={step1From} durationInFrames={SCENE_DURATIONS.step1}>
        <Audio src={staticFile("audio/tutorial/passo-1.mp3")} />
        <StepScene
          stepNumber="01"
          badge="PASSO 1 • INSTALAÇÃO"
          title="Baixe o Zuxo Player na Loja de Apps"
          subtitle="Primeiro, abra a loja de aplicativos da sua TV, celular ou computador, pesquise por Zuxo Player e toque em Baixar ou Instalar."
          stepIndex={0}
          isVertical={isVertical}
        />
      </Sequence>

      {/* CENA 2: PASSO 2 */}
      <Sequence from={step2From} durationInFrames={SCENE_DURATIONS.step2}>
        <Audio src={staticFile("audio/tutorial/passo-2.mp3")} />
        <StepScene
          stepNumber="02"
          badge="PASSO 2 • TERMOS DE USO"
          title="Confirme os Termos de Uso"
          subtitle="Ao abrir o aplicativo, aparece a tela de boas-vindas. Leia rapidamente e toque em Entendi e concordo."
          stepIndex={1}
          isVertical={isVertical}
        />
      </Sequence>

      {/* CENA 3: PASSO 3 */}
      <Sequence from={step3From} durationInFrames={SCENE_DURATIONS.step3}>
        <Audio src={staticFile("audio/tutorial/passo-3.mp3")} />
        <StepScene
          stepNumber="03"
          badge="PASSO 3 • INICIALIZAÇÃO"
          title="Toque em Começar"
          subtitle="Na próxima mensagem, toque em Começar para entrar no aplicativo."
          stepIndex={2}
          isVertical={isVertical}
        />
      </Sequence>

      {/* CENA 4: PASSO 4 */}
      <Sequence from={step4From} durationInFrames={SCENE_DURATIONS.step4}>
        <Audio src={staticFile("audio/tutorial/passo-4.mp3")} />
        <StepScene
          stepNumber="04"
          badge="PASSO 4 • ADICIONAR"
          title="Toque no Botão + Adicionar"
          subtitle="Na tela inicial, toque no botão Adicionar, no canto superior direito."
          stepIndex={3}
          isVertical={isVertical}
        />
      </Sequence>

      {/* CENA 5: PASSO 5 */}
      <Sequence from={step5From} durationInFrames={SCENE_DURATIONS.step5}>
        <Audio src={staticFile("audio/tutorial/passo-5.mp3")} />
        <StepScene
          stepNumber="05"
          badge="PASSO 5 • TIPO DE LISTA"
          title="Selecione 'Tem uma lista de provedor?'"
          subtitle="Agora escolha a primeira opção: Tem uma lista de provedor?"
          stepIndex={4}
          isVertical={isVertical}
        />
      </Sequence>

      {/* CENA 6: PASSO 6 */}
      <Sequence from={step6From} durationInFrames={SCENE_DURATIONS.step6}>
        <Audio src={staticFile("audio/tutorial/passo-6.mp3")} />
        <StepScene
          stepNumber="06"
          badge="PASSO 6 • LOGIN"
          title="Digite o Código 111, seu Usuário e Senha"
          subtitle="Por último, no campo do servidor digite 111. Depois, informe o usuário e a senha que enviamos pelo WhatsApp e toque em Entrar. Pronto, é só aproveitar a sua sessão!"
          stepIndex={5}
          isVertical={isVertical}
        />
      </Sequence>

      {/* CENA 7: OUTRO */}
      <Sequence from={outroFrom} durationInFrames={SCENE_DURATIONS.outro}>
        <OutroScene isVertical={isVertical} />
      </Sequence>
    </AbsoluteFill>
  );
};

// CENA DE INTRO
const IntroScene: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, from: 0.85, to: 1, config: { damping: 12 } });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isVertical ? "40px" : "60px",
        textAlign: "center",
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            width: isVertical ? 72 : 88,
            height: isVertical ? 72 : 88,
            borderRadius: "24px",
            background: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)",
          }}
        >
          <span style={{ fontSize: isVertical ? 36 : 44 }}>⚡</span>
        </div>
        <div style={{ textAlign: "left" }}>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: isVertical ? 38 : 50,
              fontWeight: 900,
              letterSpacing: "4px",
              lineHeight: 1,
            }}
          >
            HAZE <span style={{ color: "#10B981" }}>TV</span>
          </div>
          <div
            style={{
              fontSize: isVertical ? 14 : 16,
              color: "#94A3B8",
              letterSpacing: "2px",
              marginTop: "6px",
              fontWeight: 600,
            }}
          >
            EXPERIÊNCIA 4K SEM CORTES
          </div>
        </div>
      </div>

      <div
        style={{
          display: "inline-block",
          padding: "8px 24px",
          borderRadius: "999px",
          backgroundColor: "rgba(139, 92, 246, 0.2)",
          border: "1px solid rgba(139, 92, 246, 0.4)",
          fontSize: isVertical ? 16 : 18,
          color: "#A78BFA",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginBottom: "20px",
        }}
      >
        TUTORIAL EM MENOS DE 2 MINUTOS
      </div>

      <h1
        style={{
          fontSize: isVertical ? 42 : 54,
          fontWeight: 900,
          maxWidth: isVertical ? 900 : 1200,
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        Como Instalar e Conectar no{" "}
        <span style={{ color: "#10B981" }}>Zuxo Player</span>
      </h1>
    </AbsoluteFill>
  );
};

// CENA DE CADA PASSO
const StepScene: React.FC<{
  stepNumber: string;
  badge: string;
  title: string;
  subtitle: string;
  stepIndex: number;
  isVertical: boolean;
}> = ({ stepNumber, badge, title, subtitle, stepIndex, isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });
  const cardScale = spring({ frame, fps, from: 0.96, to: 1, config: { damping: 14 } });

  // Posição animada do cursor que guia o clique
  const cursorProgress = interpolate(frame, [15, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const clickScale =
    frame > 50 && frame < 70
      ? interpolate(frame, [50, 58, 70], [1, 0.88, 1])
      : 1;

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: isVertical ? "60px 40px" : "50px 80px",
        boxSizing: "border-box",
      }}
    >
      {/* Top Header */}
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          paddingBottom: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              padding: "6px 16px",
              borderRadius: "999px",
              backgroundColor: "rgba(139, 92, 246, 0.25)",
              border: "1px solid rgba(139, 92, 246, 0.5)",
              color: "#C4B5FD",
              fontSize: isVertical ? 15 : 17,
              fontWeight: 800,
              letterSpacing: "1px",
            }}
          >
            {badge}
          </span>
          <span
            style={{
              color: "#FFFFFF",
              fontSize: isVertical ? 22 : 28,
              fontWeight: 800,
            }}
          >
            {title}
          </span>
        </div>

        <div
          style={{
            fontFamily: "monospace",
            fontSize: isVertical ? 20 : 24,
            fontWeight: 800,
            color: "#10B981",
          }}
        >
          HAZE <span style={{ color: "#FFF" }}>TV</span>
        </div>
      </div>

      {/* Centro: Simulador da Tela Zuxo */}
      <div
        style={{
          width: "100%",
          maxWidth: isVertical ? 980 : 1380,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "24px 0",
          opacity: cardOpacity,
          transform: `scale(${cardScale})`,
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            borderRadius: "24px",
            overflow: "hidden",
            backgroundColor: "#0A0B10",
            border: "2px solid rgba(139, 92, 246, 0.4)",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top Bar da TV */}
          <div
            style={{
              padding: "14px 24px",
              backgroundColor: "#10111A",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: isVertical ? 13 : 15,
              color: "#94A3B8",
              fontFamily: "monospace",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#EF4444",
                }}
              />
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#F59E0B",
                }}
              />
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#10B981",
                }}
              />
              <span
                style={{
                  marginLeft: 10,
                  color: "#FFF",
                  fontWeight: 700,
                  letterSpacing: "1px",
                }}
              >
                TELA DA SUA SMART TV • ZUXO PLAYER
              </span>
            </div>
            <div style={{ color: "#10B981", fontWeight: 800 }}>
              PASSO {stepNumber} DE 06
            </div>
          </div>

          {/* Conteúdo do Passo */}
          <div
            style={{
              padding: isVertical ? "40px 30px" : "45px 60px",
              minHeight: isVertical ? 420 : 440,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {stepIndex === 0 && (
              <Step1Visual clickScale={clickScale} isVertical={isVertical} />
            )}
            {stepIndex === 1 && (
              <Step2Visual clickScale={clickScale} isVertical={isVertical} />
            )}
            {stepIndex === 2 && (
              <Step3Visual clickScale={clickScale} isVertical={isVertical} />
            )}
            {stepIndex === 3 && (
              <Step4Visual clickScale={clickScale} isVertical={isVertical} />
            )}
            {stepIndex === 4 && (
              <Step5Visual clickScale={clickScale} isVertical={isVertical} />
            )}
            {stepIndex === 5 && (
              <Step6Visual clickScale={clickScale} isVertical={isVertical} />
            )}
          </div>
        </div>
      </div>

      {/* Legenda Sincronizada com a Fala */}
      <div
        style={{
          width: "100%",
          maxWidth: isVertical ? 980 : 1380,
          padding: isVertical ? "20px 24px" : "18px 36px",
          borderRadius: "18px",
          backgroundColor: "rgba(10, 10, 16, 0.95)",
          border: "1px solid rgba(16, 185, 129, 0.4)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: "10px",
            backgroundColor: "rgba(16, 185, 129, 0.2)",
            color: "#10B981",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: 900,
            flexShrink: 0,
          }}
        >
          CC
        </div>
        <div
          style={{
            fontSize: isVertical ? 20 : 23,
            lineHeight: 1.35,
            color: "#F8FAFC",
            fontWeight: 600,
          }}
        >
          {subtitle}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// CENA FINAL (OUTRO)
const OutroScene: React.FC<{ isVertical: boolean }> = ({ isVertical }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, from: 0.9, to: 1, config: { damping: 12 } });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isVertical ? "40px" : "60px",
        textAlign: "center",
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          width: 90,
          height: 90,
          borderRadius: "30px",
          backgroundColor: "#10B981",
          color: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 48,
          marginBottom: 24,
          boxShadow: "0 0 50px rgba(16, 185, 129, 0.7)",
        }}
      >
        ✓
      </div>

      <h2
        style={{
          fontSize: isVertical ? 44 : 56,
          fontWeight: 900,
          marginBottom: 12,
        }}
      >
        Pronto! Agora é Só Aproveitar
      </h2>

      <p
        style={{
          fontSize: isVertical ? 22 : 26,
          color: "#94A3B8",
          maxWidth: isVertical ? 800 : 1000,
          lineHeight: 1.4,
          marginBottom: 36,
        }}
      >
        Mais de 1.700 canais ao vivo, filmes de cinema e séries completas em 4K UHD.
      </p>

      {/* Caixa de Suporte WhatsApp */}
      <div
        style={{
          padding: "24px 44px",
          borderRadius: "24px",
          backgroundColor: "#13131A",
          border: "2px solid rgba(16, 185, 129, 0.5)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div style={{ color: "#94A3B8", fontSize: 16, fontWeight: 700 }}>
          PRECISA DE AJUDA COM A INSTALAÇÃO?
        </div>
        <div
          style={{
            fontSize: isVertical ? 28 : 34,
            fontWeight: 900,
            color: "#10B981",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span>💬 Suporte no WhatsApp: (13) 97408-6517</span>
        </div>
        <div style={{ color: "#64748B", fontSize: 14 }}>
          Ativação imediata e suporte todos os dias
        </div>
      </div>
    </AbsoluteFill>
  );
};

// VISUAIS DETALHADOS DE CADA TELA:
const Step1Visual: React.FC<{ clickScale: number; isVertical: boolean }> = ({
  clickScale,
  isVertical,
}) => (
  <div
    style={{
      width: "100%",
      maxWidth: 900,
      backgroundColor: "#121420",
      borderRadius: "20px",
      padding: "36px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        marginBottom: "24px",
      }}
    >
      <div
        style={{
          width: 90,
          height: 90,
          borderRadius: "22px",
          backgroundColor: "#000",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
        }}
      >
        <span style={{ fontSize: 22, fontWeight: 900, color: "#FFF" }}>
          Zux<span style={{ color: "#10B981" }}>o</span>
        </span>
        <span style={{ fontSize: 10, color: "#94A3B8", letterSpacing: 1 }}>
          PLAYER
        </span>
      </div>

      <div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 900,
            color: "#FFF",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span>Zuxo Player</span>
          <span
            style={{
              fontSize: 12,
              padding: "4px 10px",
              borderRadius: "6px",
              backgroundColor: "rgba(16, 185, 129, 0.2)",
              color: "#10B981",
              fontWeight: 800,
            }}
          >
            OFICIAL
          </span>
        </div>
        <div style={{ fontSize: 16, color: "#94A3B8", marginTop: 4 }}>
          Michael Cunningham • Classificação Livre
        </div>
        <div style={{ color: "#FBBF24", fontSize: 16, marginTop: 4 }}>
          ★★★★★ <span style={{ color: "#FFF", fontWeight: 700 }}>4.4</span> • Gratuito
        </div>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div
        style={{
          transform: `scale(${clickScale})`,
          padding: "16px 36px",
          borderRadius: "16px",
          backgroundColor: "#0284C7",
          color: "#FFF",
          fontSize: 20,
          fontWeight: 900,
          boxShadow: "0 0 35px rgba(2, 132, 199, 0.6)",
          border: "3px solid #10B981",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span>⬇ Baixar / Instalar</span>
      </div>
      <div
        style={{
          fontSize: 15,
          color: "#10B981",
          fontWeight: 700,
          backgroundColor: "rgba(16, 185, 129, 0.1)",
          padding: "12px 20px",
          borderRadius: "12px",
          border: "1px solid rgba(16, 185, 129, 0.3)",
        }}
      >
        👈 Toque aqui para instalar na TV
      </div>
    </div>
  </div>
);

const Step2Visual: React.FC<{ clickScale: number; isVertical: boolean }> = ({
  clickScale,
}) => (
  <div
    style={{
      width: "100%",
      maxWidth: 820,
      backgroundColor: "#0E0F16",
      borderRadius: "20px",
      padding: "36px",
      border: "2px solid rgba(16, 185, 129, 0.5)",
      textAlign: "center",
    }}
  >
    <div style={{ fontSize: 18, fontWeight: 900, color: "#94A3B8", marginBottom: 12 }}>
      TERMOS DE USO DO REPRODUTOR
    </div>
    <div style={{ fontSize: 30, fontWeight: 900, color: "#FFF", marginBottom: 16 }}>
      Bem-vindo ao Zuxo Player
    </div>
    <div
      style={{
        padding: "20px",
        borderRadius: "14px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        fontSize: 16,
        color: "#CBD5E1",
        lineHeight: 1.5,
        textAlign: "left",
        marginBottom: 24,
      }}
    >
      <p style={{ margin: "0 0 10px 0" }}>
        • O <strong>Zuxo Player</strong> é um reprodutor de mídia homologado para carregar sua lista de transmissão.
      </p>
      <p style={{ margin: 0 }}>
        • Conexão oficial de alto desempenho configurada para a <strong>Haze TV</strong>.
      </p>
    </div>

    <div
      style={{
        transform: `scale(${clickScale})`,
        display: "inline-block",
        padding: "18px 48px",
        borderRadius: "16px",
        backgroundColor: "#10B981",
        color: "#000",
        fontSize: 22,
        fontWeight: 900,
        boxShadow: "0 0 40px rgba(16, 185, 129, 0.8)",
        border: "3px solid #FFF",
      }}
    >
      ✓ Entendi e concordo
    </div>
  </div>
);

const Step3Visual: React.FC<{ clickScale: number; isVertical: boolean }> = ({
  clickScale,
}) => (
  <div
    style={{
      width: "100%",
      maxWidth: 820,
      backgroundColor: "#0E0F16",
      borderRadius: "20px",
      padding: "40px",
      border: "2px solid rgba(16, 185, 129, 0.5)",
      textAlign: "center",
    }}
  >
    <div style={{ fontSize: 44, marginBottom: 12 }}>📋</div>
    <div style={{ fontSize: 32, fontWeight: 900, color: "#FFF", marginBottom: 14 }}>
      Bem-vindo às Minhas Listas
    </div>
    <p
      style={{
        fontSize: 18,
        color: "#CBD5E1",
        lineHeight: 1.5,
        marginBottom: 28,
      }}
    >
      Aqui as listas são suas: conecte suas credenciais da <strong>Haze TV</strong> para
      carregar canais ao vivo, filmes e séries instantaneamente.
    </p>

    <div
      style={{
        transform: `scale(${clickScale})`,
        display: "inline-block",
        padding: "18px 56px",
        borderRadius: "16px",
        backgroundColor: "#10B981",
        color: "#000",
        fontSize: 22,
        fontWeight: 900,
        boxShadow: "0 0 40px rgba(16, 185, 129, 0.8)",
        border: "3px solid #FFF",
      }}
    >
      Começar ➔
    </div>
  </div>
);

const Step4Visual: React.FC<{ clickScale: number; isVertical: boolean }> = ({
  clickScale,
}) => (
  <div
    style={{
      width: "100%",
      maxWidth: 920,
      backgroundColor: "#0A0B10",
      borderRadius: "20px",
      padding: "30px",
      border: "1px solid rgba(255, 255, 255, 0.15)",
    }}
  >
    {/* Barra com o botão Adicionar */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        paddingBottom: "20px",
        marginBottom: "24px",
      }}
    >
      <div style={{ fontSize: 24, fontWeight: 900, color: "#FFF" }}>
        Zux<span style={{ color: "#10B981" }}>o</span> Player
      </div>

      <div
        style={{
          transform: `scale(${clickScale})`,
          padding: "14px 32px",
          borderRadius: "14px",
          backgroundColor: "#10B981",
          color: "#000",
          fontSize: 20,
          fontWeight: 900,
          boxShadow: "0 0 35px rgba(16, 185, 129, 0.8)",
          border: "3px solid #FFF",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ fontSize: 26, lineHeight: 1 }}>+</span>
        <span>Adicionar</span>
      </div>
    </div>

    {/* Cards da Tela */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
      <div
        style={{
          padding: "24px",
          borderRadius: "16px",
          backgroundColor: "#151622",
          border: "1px solid rgba(16, 185, 129, 0.4)",
        }}
      >
        <div style={{ fontSize: 32, marginBottom: 8 }}>📺</div>
        <div style={{ fontSize: 18, fontWeight: 800 }}>Minhas Listas</div>
        <div style={{ fontSize: 13, color: "#94A3B8" }}>Conectar provedor</div>
      </div>
      <div
        style={{
          padding: "24px",
          borderRadius: "16px",
          backgroundColor: "#10111A",
          opacity: 0.6,
        }}
      >
        <div style={{ fontSize: 32, marginBottom: 8 }}>🎬</div>
        <div style={{ fontSize: 18, fontWeight: 800 }}>Todos os Vídeos</div>
        <div style={{ fontSize: 13, color: "#64748B" }}>Filmes & Séries</div>
      </div>
      <div
        style={{
          padding: "24px",
          borderRadius: "16px",
          backgroundColor: "#10111A",
          opacity: 0.6,
        }}
      >
        <div style={{ fontSize: 32, marginBottom: 8 }}>🎵</div>
        <div style={{ fontSize: 18, fontWeight: 800 }}>Todas as Músicas</div>
        <div style={{ fontSize: 13, color: "#64748B" }}>Áudios & Rádios</div>
      </div>
    </div>
  </div>
);

const Step5Visual: React.FC<{ clickScale: number; isVertical: boolean }> = ({
  clickScale,
}) => (
  <div
    style={{
      width: "100%",
      maxWidth: 900,
      backgroundColor: "#0A0B10",
      borderRadius: "20px",
      padding: "30px",
      border: "1px solid rgba(255, 255, 255, 0.15)",
    }}
  >
    <div style={{ fontSize: 18, color: "#94A3B8", marginBottom: 6 }}>
      ADICIONAR NOVA LISTA
    </div>
    <div style={{ fontSize: 26, fontWeight: 900, color: "#FFF", marginBottom: 24 }}>
      Como você quer adicionar a sua lista?
    </div>

    {/* Opção 1: Em Foco Total */}
    <div
      style={{
        transform: `scale(${clickScale})`,
        padding: "22px 28px",
        borderRadius: "18px",
        backgroundColor: "rgba(16, 185, 129, 0.15)",
        border: "3px solid #10B981",
        boxShadow: "0 0 45px rgba(16, 185, 129, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: "14px",
            backgroundColor: "#10B981",
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 26,
            fontWeight: 900,
          }}
        >
          📡
        </div>
        <div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 900,
              color: "#FFF",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span>Tem uma lista de provedor?</span>
            <span
              style={{
                fontSize: 12,
                padding: "3px 10px",
                borderRadius: "6px",
                backgroundColor: "#10B981",
                color: "#000",
                fontWeight: 900,
              }}
            >
              ESCOLHA ESTE
            </span>
          </div>
          <div style={{ fontSize: 15, color: "#CBD5E1", marginTop: 4 }}>
            Conecte com o Provider <strong>111</strong>, Usuário e Senha da Haze TV
          </div>
        </div>
      </div>
      <div style={{ fontSize: 26, color: "#10B981", fontWeight: 900 }}>➔</div>
    </div>

    {/* Outras opções desbotadas */}
    <div
      style={{
        padding: "16px 24px",
        borderRadius: "14px",
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        color: "#64748B",
        fontSize: 16,
      }}
    >
      🔗 Lista via URL M3U / Link Web
    </div>
  </div>
);

const Step6Visual: React.FC<{ clickScale: number; isVertical: boolean }> = ({
  clickScale,
}) => (
  <div
    style={{
      width: "100%",
      maxWidth: 820,
      backgroundColor: "#0C0D14",
      borderRadius: "20px",
      padding: "32px",
      border: "2px solid rgba(16, 185, 129, 0.5)",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        paddingBottom: "14px",
        marginBottom: "20px",
      }}
    >
      <div style={{ fontSize: 20, fontWeight: 900, color: "#FFF" }}>
        CONECTAR LISTA DO PROVEDOR
      </div>
      <div
        style={{
          padding: "4px 12px",
          borderRadius: "6px",
          backgroundColor: "rgba(16, 185, 129, 0.2)",
          color: "#10B981",
          fontFamily: "monospace",
          fontSize: 13,
          fontWeight: 800,
        }}
      >
        SERVIDOR 4K
      </div>
    </div>

    {/* Campo Provider 111 em Super Destaque */}
    <div style={{ marginBottom: 16 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 14,
          fontWeight: 800,
          color: "#CBD5E1",
          marginBottom: 6,
        }}
      >
        <span>URL OU CÓDIGO DO SERVIDOR:</span>
        <span style={{ color: "#10B981" }}>★ CÓDIGO DA HAZE TV</span>
      </div>
      <div
        style={{
          padding: "14px 20px",
          borderRadius: "14px",
          backgroundColor: "#000",
          border: "3px solid #10B981",
          fontFamily: "monospace",
          fontSize: 28,
          fontWeight: 900,
          color: "#10B981",
          letterSpacing: "4px",
          boxShadow: "0 0 25px rgba(16, 185, 129, 0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span>111</span>
        <span
          style={{
            fontSize: 13,
            backgroundColor: "rgba(16, 185, 129, 0.2)",
            padding: "4px 10px",
            borderRadius: "6px",
          }}
        >
          PROVIDER
        </span>
      </div>
    </div>

    {/* Usuário e Senha */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        marginBottom: 20,
      }}
    >
      <div>
        <div style={{ fontSize: 13, color: "#94A3B8", marginBottom: 6 }}>
          USUÁRIO:
        </div>
        <div
          style={{
            padding: "12px 16px",
            borderRadius: "10px",
            backgroundColor: "#181924",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            fontFamily: "monospace",
            fontSize: 15,
            color: "#FFF",
          }}
        >
          seu_usuario
        </div>
      </div>
      <div>
        <div style={{ fontSize: 13, color: "#94A3B8", marginBottom: 6 }}>SENHA:</div>
        <div
          style={{
            padding: "12px 16px",
            borderRadius: "10px",
            backgroundColor: "#181924",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            fontFamily: "monospace",
            fontSize: 15,
            color: "#FFF",
          }}
        >
          ••••••••
        </div>
      </div>
    </div>

    {/* Botão Entrar */}
    <div
      style={{
        transform: `scale(${clickScale})`,
        padding: "16px",
        borderRadius: "14px",
        backgroundColor: "#10B981",
        color: "#000",
        fontSize: 22,
        fontWeight: 900,
        textAlign: "center",
        boxShadow: "0 0 40px rgba(16, 185, 129, 0.8)",
        border: "3px solid #FFF",
      }}
    >
      Entrar ➔
    </div>
  </div>
);

