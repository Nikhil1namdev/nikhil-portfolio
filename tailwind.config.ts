import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#09090b",
          subtle: "#0e0e11"
        },
        surface: {
          DEFAULT: "#131316",
          elevated: "#18181b",
          hover: "#1f1f23",
          border: "rgba(255, 255, 255, 0.08)",
          "border-strong": "rgba(255, 255, 255, 0.14)"
        },
        accent: {
          DEFAULT: "#38bdf8",
          hover: "#7dd3fc",
          subtle: "rgba(56, 189, 248, 0.1)"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      boxShadow: {
        specular: "inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 20px 40px -15px rgba(0, 0, 0, 0.7)",
        "card-hover": "inset 0 1px 0 rgba(255, 255, 255, 0.14), 0 25px 50px -12px rgba(0, 0, 0, 0.85)"
      }
    }
  },
  plugins: []
};

export default config;
