/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily : {
        'head' : ['Questrial', 'sans-serif'],
        'main' : ['Poppins', 'sans-serif']
      },
      height:{
        'head' : ['627px'],
      },
    },
  },
  plugins: [],
}
