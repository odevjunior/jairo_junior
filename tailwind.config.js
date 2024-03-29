const colors = require('tailwindcss/colors')


module.exports = {
  purge: [
    'animate.css',
    'swiper/css',
    'styles/globals.css'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      white: colors.white,
      indigo: colors.red,
      gray: colors.gray
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ]
}
