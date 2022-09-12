/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/base/**/*.{js,jsx,ts,tsx}', './src/features/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        mainBlue: '#5D61EF',
        mainGray: 'gray',
      },
    },
  },
  plugins: [],
};
