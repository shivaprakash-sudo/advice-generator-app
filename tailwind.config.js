module.exports = {
  content: [
    "./src/**/*{.js, .jsx}",
    "./public/index.html"
  ],
  theme: {
    colors: {
      lightCyan: "hsl(193, 38%, 86%)",
      neonGreen: "hsl(150, 100%, 66%)",
      neutral: {
        100: "hsl(217, 19%, 38%)",
        200: "hsl(217, 19%, 24%)",
        300: "hsl(218, 23%, 16%)"
      }
    },

    fontFamily: {
      primary: ['Manrope', "sans-serif"]
    },
    extend: {

    },
  },
  plugins: [],
}
