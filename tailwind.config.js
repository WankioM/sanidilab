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
        //colors in order of dominance
        flame: "#EC5022", //most backgrounds or subtle gradients over images
        dun: "#E2D2B8", //most text or accent
        spacecadet: "#21253A", //most borders or accent or hover

        //Don't use unless its a special object e.g we ranout of colors in drag/drop builder
        darkcyan : "#4B8F8C",
        ebony : "#606D5D",

        //Llowest priority even
        drabbrown : "#43340F",
    },
  },
  plugins: [],
}}