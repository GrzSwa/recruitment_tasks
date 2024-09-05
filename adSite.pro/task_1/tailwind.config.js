/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      robotoFlex: ["Roboto Flex", "sans-serif"],
      robotoCondensed: ["Roboto Condensed", "sans-serif"],
      bebas: ["Bebas Neue", "sans-serif"],
    },
    colors: {
      "background-primary": "#F7F7F7",
      "background-secondary": "#282828",
      primary: "#0147FF",
      secondary: "#282828",
      third: "#DEDEDE",
      black: "#000000",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
