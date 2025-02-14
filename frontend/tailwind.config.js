/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      screens: {
        sm: "550px",
        xxl:"1850px"
     }, 
     colors: {
        blues:"#003893"
     },
     fontFamily: {
       title: ["Saira Condensed", "serif"],
       gov: ["Saira Condensed", "serif"],
       poppin: ["Poppins", "serif"],
       dev: ["Noto Sans Devanagari", "sans-serif"],
       
     }
     
    },
  },
  plugins: [],
}

