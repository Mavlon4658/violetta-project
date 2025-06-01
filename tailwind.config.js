module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      'screens': {
        // 'md': '787px',
        'xl': '1200px',
        'lg': '950px',
      },
      colors: {
        // 'black': '#080808',
        // 'dark-grey': '#4A4A4A',
        // 'grey-4': '#B9B7B7',
        // 'grey-3': '#8B8B8B',
        // 'grey-2': '#E0E0E0',
        // 'grey-1': '#EDEDED',
        // 'lightgrey': '#FBFBFB',
        // 'yellow': '#FFC900',
        'violet': {
          100: '#E0B1CB',
          200: '#BE95C4',
          300: '#9F96C0',
          400: '#5E548E',
          500: '#231942',
        }
      },
      fontFamily: {
        // 'sergue-ui': ['Segoe UI', 'sans-serif'],
        // 'oswald': ['Oswald', 'serif'],
        // 'rubik': ['Rubik', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
