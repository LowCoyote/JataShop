/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        main: '#eb423f',
        secondary: '#f7b030',
      },
      backgroundColor: theme => ({
        'primary': theme('colors.main'),
        'secondary': theme('colors.secondary'),
      }),
    },
  },
  plugins: [],
}

