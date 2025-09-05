/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {

      fontFamily:{
          cursiveFont: ["Alex Brush", "cursive"],
      },

      screens:{
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          xxl: '1536px',
      },
      colors:{
          customGray: "#111111",
          button: "#94dd8e",
          light: "#F5F5F5",
          muted: "#A1A1A1"
      },
      backgroundImage:{
          'bgImage': "url('./assets/Pic1.jpg')",
      },
      boxShadow: {
        'darkShadow': '0 8px 20px rgba(0, 0, 0, 0.9)',
        'wrapperShadow': '1px 1px 20px #94dd8e',
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}

