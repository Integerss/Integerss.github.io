
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.stone[50],
        secondary: colors.stone[950],
        link: {
          txt: colors.stone[950],
          hover_txt: colors.red[500],
        },
        emphasis: {
          one: colors.amber[200],
          two: colors.amber[400],
        },
      },
      fontSize: {
        xxs: ['0.6rem', '1rem'],
      },
      height: {
        '75': '75vh',
      }
    },
  },
  plugins: [],
}