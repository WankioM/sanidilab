/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        morgath: ["Morgath", "sans-serif"],
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        flame: "#EC5022",
        dun: "#E2D2B8",
        spacecadet: "#21253A",

        //Don't use unless its a special object
        darkcyan : "#4B8F8C",
        ebony : "#606D5D",
      },
    },
  },
  plugins: [],
}