/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./images/bg-header-desktop.png')",
        'hero-pattern-mobile': "url('./images/bg-header-mobile.png')"
      },
      colors:{
        strongCyan:"hsl(171, 66%, 44%)",
        lightBlue:"hsl(233, 100%, 69%)",
        darkGrayishBlue:"hsl(210, 10%, 33%)",
        grayishBlue:"hsl(201, 11%, 66%)",
        white:"#ffffff"
      }
    },
    fontFamily: {
      sans: ['Bai Jamjuree', 'sans-serif']
    }
  },
  plugins: [],
}
