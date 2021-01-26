module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './styles/**/*.{css}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primaryColor: '#007bff',
        secondaryColor: '#1b9cfc',
        fondColor: '#f6f6f6',
        blue: {
          light: '#E3F7F9',
        }
      },
      minHeight: {
        500: "500px",
        650: '650px'
      }
    },
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active'],
      opacity: ['hover', 'focus', 'active'],
      display: ['hover', 'focus'],
      borderColor: ['hover', 'active'],
      borderStyle: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
}
