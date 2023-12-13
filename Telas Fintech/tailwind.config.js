/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },

      colors: {
        'texts': 'rgba(32, 29, 29, .87)',
        'separator': 'rgba(50, 44, 44, .87)',
        'separatorP': 'rgba(50, 44, 44, .67)',
        'text-more': 'rgba(32, 29, 29, .8)',
      }
    },
  },
  plugins: [],
}

