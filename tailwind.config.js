/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F2EABC",
        secondary: "#194756",
        tertiary: "#FF3B58"
      }
    },
  },
  plugins: [],
}