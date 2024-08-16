/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'champagne': {
        500: '#eedac2',
        600: '#d4c0a8',
        700: '#bba88f'
      },
      'terracota': {
        500: '#e5a88b',
        600: '#cd8b70',
        700: '#b6755d'
      },
      'rose':{
        500: '#cf9683',
        600: '#b07a6a',
        700: '#936554'
      },
      'cinnamon': {
        500: '#cf7956',
        600: '#b36748',
        700: '#8f5136'
      },
      'rust': {
        500: '#d16644',
        600: '#b15837',
        700: '#8c462b'
      },
      'green':{
        500: '#878f84',
        600: '#6d736b',
        700: '#595e57'
      },
      'light': {
        500: '#FFFFF',
        600: '#FFFFF'
      },
      'white': '#FFFFFF',
      'black': '#000000'
    },
    extend: {
      backdropBlur: {
        'md': '10px',
      },
      backgroundColor: {
        'black-90': 'rgba(0, 0, 0, 0.9)',
        'white-90': 'rgba(255, 255, 255, 0.9)',
      },
      textColor: {
        'black': '#000000',
        'white': '#FFFFFF'
      }
    },
  },
  plugins: [],
}