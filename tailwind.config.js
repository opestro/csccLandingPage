/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      'ntbrick': ["NTBrick"],
    },
    extend: {

    },
    screens: {
      'xs': {'min': '360px', 'max': '640px'},
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },

  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      
      "dark",
      "cyberpunk",
      {
        mytheme: {
          "primary": "#6419E6",
          "secondary": "#D926A9",
          "accent": "#1FB2A6",
          "neutral": "#ec4899",
          "base-100": "#2A303C",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
}
