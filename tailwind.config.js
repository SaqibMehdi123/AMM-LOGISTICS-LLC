/** @type {import('tailwindcss').Config} */
// "Industrial Luxe" — warm charcoal + brass. Sora display / Inter body / JetBrains Mono labels.
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F6F3",
        card: "#FFFFFF",
        ink: "#16181D",
        muted: "#5C606A",
        hair: "#E4E1DA",
        brass: "#D4922F",
        brassdk: "#9A6A1A",
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontWeight: { 400: "400", 500: "500", 600: "600", 700: "700", 800: "800" },
      boxShadow: {
        soft: "0 1px 2px rgba(22,24,29,.04), 0 8px 24px -12px rgba(22,24,29,.12)",
        lift: "0 2px 4px rgba(22,24,29,.05), 0 18px 40px -16px rgba(22,24,29,.22)",
        glass: "0 1px 1px rgba(255,255,255,.4) inset, 0 8px 30px -8px rgba(22,24,29,.25)",
      },
      maxWidth: { shell: "1200px", prose: "760px" },
    },
  },
  plugins: [],
};
