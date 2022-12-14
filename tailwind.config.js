/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        codestation_bg: '#090909',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      fontWeight: {
        lato100: 100,
        lato300: 300,
        lato400: 400,
        lato700: 700,
        lato900: 900,
      },
    },
  },
  plugins: [],
};
