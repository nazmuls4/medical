/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      worksens : "'Work Sans', sans-serif"
    },
    
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1230px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1230px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        lightBlue:'#006DFF',
        lightYellow:'#FDC526',
        lightRed:'#FF765A',
        darkBlue:'#00A9DC',
        lightGray:'#A5A5A5',
      }
    },
    
  },
  plugins: [],
}
