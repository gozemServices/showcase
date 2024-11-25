/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#AF4E64',      
        lightPink: '#F4C9D7',    
        darkShade: '#7A2C39',    
        white: '#FFFFFF',         
        lightGray: '#F7F7F7',     
        mediumGray: '#B0B0B0',   
      },
    },
  },
  plugins: [],
}

