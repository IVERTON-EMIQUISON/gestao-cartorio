/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E1B29',
          800: '#152638',
          700: '#1E3549',
          600: '#2B465E',
        },
        brass: {
          DEFAULT: '#B08347',
          light: '#D8B77E',
          dark: '#8A6533',
        },
        sand: '#F2EBDF',
        paper: '#FBF8F2',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(14,27,41,.06), 0 18px 40px -24px rgba(14,27,41,.35)',
      },
    },
  },
  plugins: [],
}
