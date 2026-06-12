import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FAF7F2",
          50: "#FDFCF9",
          100: "#FAF7F2",
          200: "#F2EBE0",
          300: "#E8DECE",
          400: "#D9CEBC",
        },
        dark: {
          DEFAULT: "#1A1714",
          800: "#2C2825",
          700: "#3D3834",
          600: "#504B46",
          500: "#645E59",
        },
        gold: {
          DEFAULT: "#B8923A",
          light: "#D4AE62",
          dark: "#8A6B27",
        },
        terra: {
          DEFAULT: "#C4724A",
          light: "#D4916E",
          dark: "#9A5337",
        },
        stone: {
          50: "#F5F2EE",
          100: "#EDE8E1",
          200: "#DDD5CB",
          300: "#C8BDB0",
          400: "#B0A296",
          500: "#978880",
          600: "#7D6E67",
          700: "#635750",
          800: "#4A403B",
          900: "#322B27",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["9rem", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        "display-lg": ["7rem", { lineHeight: "0.92", letterSpacing: "-0.025em" }],
        "display-md": ["5rem", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-sm": ["3.5rem", { lineHeight: "1", letterSpacing: "-0.015em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem",
        "46": "11.5rem",
        "50": "12.5rem",
        "54": "13.5rem",
        "58": "14.5rem",
        "62": "15.5rem",
        "66": "16.5rem",
        "70": "17.5rem",
        "74": "18.5rem",
        "78": "19.5rem",
        "82": "20.5rem",
        "86": "21.5rem",
        "90": "22.5rem",
        "94": "23.5rem",
        "98": "24.5rem",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
