/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "sans-serif"],
        serif: ["Bree Serif", "serif"],
      },
      colors: {
        main: "#7c6f55",
        main_light: "#ede2d4",
        bg: "#1e1e1e",
        card: "#2f2f2f",
      },
    },
  },
  plugins: [],
};
