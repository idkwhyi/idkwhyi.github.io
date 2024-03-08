/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {

      // header color
      'firstHeader': '#E78895',
      'secondHeader': '#BED1CF',
      'thirdHeader': '#DCBFFF',

      'white': '#f4f4f4',
      'black': '#464646',
      'gray': '#333333',
      'custom-black': '#2e2e2e',
      'red': '#ab5b5b',
      'green': '#5bab64',

      'lightBlue': '#D0D9D4',
      'coldBlue': '#AEBFBE',
      'paleWhite': '#F2EFDF',
      'blackBrown': '#59554C',

      'blue': '#346e91',
      'sample': '#cfcfcf'
    },
    extend: {},
  },
  plugins: [],
}

