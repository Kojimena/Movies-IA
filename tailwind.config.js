 /** @type {import('tailwindcss').Config} */
 module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '320px',
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['inter', 'sans-serif'],
        montserrat: ['montserrat', 'sans-serif'],
        anton : ['anton', 'sans-serif'],
      },
      colors: {
        "yellow": "#e2f40a",
        "lightgray": "#F2F2F2",
        "lightergray": "#EBEBEB",
      },
    },
  },
  plugins: [require("daisyui")],
}