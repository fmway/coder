/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#00DFC0',
      },
      fontFamily: {
        'sans': ['Montserrat', 'Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
