/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        astro: {
          orange: "#E8850C",
          "orange-dark": "#C9660A",
          "orange-light": "#FDB94E",
          cream: "#FFF8EA",
          yellow: "#FDE68A",
          maroon: "#7A2E12",
          ink: "#3A2415",
          border: "#F0E4C8",
        },
      },
      boxShadow: {
        card: "0 2px 14px rgba(122, 46, 18, 0.08)",
      },
    },
  },
  plugins: [],
};
