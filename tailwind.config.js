/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        neutral: "#FFF7E8",
        primary: "#1C4931",
        secondary: "#D85841",
        yellow: "#F3B848",
      }
    },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"]
    }
  },
  plugins: [],
}

