import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#05060a",
          900: "#0a0d16",
          800: "#10131f",
          700: "#171b2b",
        },
        accent: {
          blue: "#4f7bff",
          purple: "#9b5cff",
          cyan: "#4fd6ff",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #4f7bff 0%, #9b5cff 55%, #4fd6ff 100%)",
        "grad-radial": "radial-gradient(circle at 50% 0%, rgba(79,123,255,0.18), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(155, 92, 255, 0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
