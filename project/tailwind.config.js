/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        green: {
          50: '#f0f9f0',
          100: '#dcf0dc',
          200: '#bce1bd',
          300: '#92ca94',
          400: '#66ae69',
          500: '#4a9a4e',
          600: '#3b7d3f',
          700: '#2e6231',
          800: '#264e28',
          900: '#214123',
        },
      },
    },
  },
  plugins: [],
};