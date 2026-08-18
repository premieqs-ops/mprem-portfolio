import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#05070a",
          secondary: "#0a0e14",
          tertiary: "#11161d",
          card: "rgba(15, 20, 28, 0.7)",
        },
        foreground: {
          DEFAULT: "#f0f4f8",
          muted: "#94a3b8",
          subtle: "#64748b",
        },
        accent: {
          DEFAULT: "#3b82f6",
          light: "#60a5fa",
          dark: "#2563eb",
          glow: "#1d4ed8",
          electric: "#00d4ff",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.15)",
          accent: "rgba(59, 130, 246, 0.4)",
        },
        glass: {
          DEFAULT: "rgba(15, 23, 42, 0.6)",
          light: "rgba(30, 41, 59, 0.5)",
          border: "rgba(255, 255, 255, 0.1)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.25), transparent)",
        "card-glow": "linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent)",
        "blue-gradient": "linear-gradient(135deg, #3b82f6 0%, #00d4ff 50%, #8b5cf6 100%)",
        "text-gradient": "linear-gradient(90deg, #60a5fa, #00d4ff, #3b82f6)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(59, 130, 246, 0.3)",
        "glow-lg": "0 0 40px rgba(59, 130, 246, 0.4)",
        "glow-sm": "0 0 10px rgba(59, 130, 246, 0.2)",
        card: "0 8px 32px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 12px 40px rgba(59, 130, 246, 0.15)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
