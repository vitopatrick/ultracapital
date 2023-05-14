/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "sans-serif"],
        serif: ["Bree Serif", "serif"],
        "sans-min": ["Josefin Sans", "sans-serif"],
      },
      colors: {
        main: "#60a5fa",
        main_light: "#bfdbfe",
        bg: "#1e293b",
        card: "#334155",
      },
    },
  },
  plugins: [],
};
