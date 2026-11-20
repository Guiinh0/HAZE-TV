import Image from "next/image";

interface HazeLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function HazeLogo({ className = "", size = "md" }: HazeLogoProps) {
  const heights = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Símbolo Oficial: Squircle escuro com Play Roxo e Onda Verde Menta */}
      <div className="relative w-10 h-10 rounded-xl bg-[#0F0E17] border border-[#8B5CF6]/30 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.25)] overflow-hidden shrink-0 group-hover:border-[#8B5CF6] transition-colors">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
        >
          {/* Triângulo Play Roxo Haze */}
          <path
            d="M15 11L28 20L15 29V11Z"
            fill="#8B5CF6"
          />
          {/* Onda de Sinal Verde Menta atravessando */}
          <path
            d="M8 24C12 24 14 21 18 21C22 21 24 23 28 23C31 23 33 21.5 35 20"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Tipografia Oficial da Marca */}
      <div className="flex items-baseline font-display font-black tracking-wider text-xl sm:text-2xl select-none">
        <span className="text-[#F8FAFC] tracking-[0.08em]">HAZE</span>
        <span className="text-[#10B981] ml-1.5 tracking-[0.08em]">TV</span>
      </div>
    </div>
  );
}

