/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "640px",
      desktop: "1024px",
    },
    extend: {
      colors: {
        green: {
          100: "#264041",
          200: "#1d3031",
          300: "#132122",
          400: "#0a1112",
          500: "#000102",
        },
      },
      keyframes: {
        appear: {
          "0%": { bottom: 0, opacity: 0 },
          "100%": { bottom: "10%", opacity: 1 },
        },
      },
      animation: {
        appear: "appear 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
