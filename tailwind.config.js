/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Amulya", "Jost", "sans-serif"],
        serif: ["Bree Serif", "serif"],
        "sans-min": ["Josefin Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        bgColor: "#030712",
        cardColor: "#111827",
        primary: {
          blue: "#0ea5e9",
          "blue-dark": "#0284c7",
          green: "#10b981",
          "green-dark": "#059669",
        },
        accent: {
          cyan: "#06b6d4",
          emerald: "#34d399",
          teal: "#14b8a6",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)",
        "gradient-primary-hover": "linear-gradient(135deg, #0284c7 0%, #059669 100%)",
        "gradient-accent": "linear-gradient(135deg, #06b6d4 0%, #34d399 100%)",
        "gradient-mesh": "radial-gradient(at 0% 0%, rgba(14, 165, 233, 0.3) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(16, 185, 129, 0.3) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(6, 182, 212, 0.2) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(52, 211, 153, 0.2) 0px, transparent 50%)",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        slideUp: "slideUp 0.8s ease-out forwards",
        pulseGlow: "pulseGlow 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        gradientShift: "gradientShift 8s ease infinite",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(14, 165, 233, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(14, 165, 233, 0.6), 0 0 60px rgba(16, 185, 129, 0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

