/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trustBlue: '#0B1A30',
        trustBlueLight: '#1E3A8A',
        constructionOrange: '#F97316',
        amberWarning: '#FDBA74',
        archGray: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
