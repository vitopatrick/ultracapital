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
        bgColor: "#030712",
        cardColor: "#111827",
      },
    },
  },
  plugins: [],
};
