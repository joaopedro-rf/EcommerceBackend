/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      mobile: "320px",
      tablet: "560px",
      middle:"760px",
      desktop: "1010px",
      widder: "1200px"
    },
    extend: {
      colors: {
        'light': '#ece0d1',
        'lightbrown': '#dbc1ac', 
        'mid': '#967259', 
        'brown': '#634832',
        'dark': '#38220f',        
      },
    },
  },
  plugins: [],
}