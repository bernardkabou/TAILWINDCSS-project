module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#E78C15',
          dark: '#7D4700',
        },
        dark: '#0C0E0D',
      },
      fontFamily: {
        title: ['"Antic Didone"', 'serif'],
        base: ['Lato', 'sans-serif'],
        alt: ['Raleway', 'sans-serif'],
      },
      screens: {
        'phone': { 'max': '600px' },
      },
    },
  },
  plugins: [],
}
