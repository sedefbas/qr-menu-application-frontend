/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        expand: {
          "0%": {
            height: "0",
            backgroundColor: "transparent",
            opacity: 0, // Başlangıçta görünmezlik
            transformOrigin: "top", // Açılma yönü
            transform: "scaleY(0.5)", // Başlangıç ölçeği (çok küçük)
          },
          "100%": {
            height: "90%",
            backgroundColor: "#ffedd5", // Arkaplan rengi
            opacity: 1, // Tamamen görünür
            transformOrigin: "top", // Açılma yönü
            transform: "scaleY(1)", // Tam boyut
          },
        },
        reverseExpand: {
          "0%": {
            height: "90%",
            backgroundColor: "#ffedd5" /* Arkaplan rengi */,
            opacity: 1 /* Tamamen görünür */,
            transformOrigin: "top" /* Kapatma yönü */,
            transform: "scaleY(1)" /* Tam boyut */,
          },
          "100%": {
            height: "0",
            backgroundColor: "transparent",
            opacity: 0 /* Başlangıçta görünmezlik */,
            transformOrigin: "top" /* Kapatma yönü */,
            transform: "scaleY(0.5)" /* Başlangıç ölçeği (çok küçük) */,
          },
        },
      },
      animation: {
        "spin-slow": "spin 1s linear 1",
        wiggle: "wiggle 1s ease-in-out 2",
        expand: "expand 1s ease-in-out 1",
        reverseExpand: "reverseExpand 1s ease-in-out forwards",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
