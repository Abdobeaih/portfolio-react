/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg: "#080b12",
        card: "#0d1117",
        accent: "#6366f1",
        accent2: "#22d3ee",
        accent3: "#a78bfa",
        muted: "#475569",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        float: "float 5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
    },
  },
  plugins: [],
};
