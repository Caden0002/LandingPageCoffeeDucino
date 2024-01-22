/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      screens: {
        'sm': '576px',
        'md': '1280px',
        'lg': '1440px',
        'xl': '1900px',
      },

      fontSize: {
        '10xl': '10rem',
        '11xl': '11rem',
      },


      fontFamily: {
        DMS: ['DM Sans', 'sans-serif'],
        AME: ['Amethysta', 'serif'],

},

      colors: {
        // Define your color variables here
        textColorPrimary: '#FFFFFF',
        textColorSecondary: '#ADB0B1',
        backgroundColorPrimary: '#292F32',
        backgroundColorSecondary: '#856746',

      },

    },
  },
  plugins: [],
};