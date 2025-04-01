/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors:{
            lightHover:'#fcf4ff',
            darkHover:'#2a004a',
            darkTheme:'#11001f'        
        },
        fontFamily:{
            Outfit:['Outfit','sans-serif'],
            Ovo:['Ovo','serif']
        },
        boxShadow:{
          "black":"4px 4px 0 #000",
          "white":"4px 4px #fff"
        },
        gridTemplateColumns:{
          "auto":"repeat(auto-fit, minmax(200px,1fr))"          
        },
        animation: {
          gradient: "gradientBorder 5s linear infinite",
        },
        keyframes: {
          gradientBorder: {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
        },
      },
    },
    darkMode:'class',
    plugins: [],
  };
  