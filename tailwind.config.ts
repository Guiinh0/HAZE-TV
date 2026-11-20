import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        haze: {
          base: "#0A0A0C",
          card: "#13131A",
          primary: "#8B5CF6",
          cta: "#10B981",
          text: "#F8FAFC",
          muted: "#94A3B8",
          line: "rgba(139, 92, 246, 0.2)",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        "purple-glow": "0 0 25px -5px rgba(139, 92, 246, 0.3)",
        "purple-glow-lg": "0 0 45px -10px rgba(139, 92, 246, 0.4)",
        "green-glow": "0 0 20px -3px rgba(16, 185, 129, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;

