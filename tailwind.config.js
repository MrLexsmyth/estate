/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        circular: ['Circular', 'Arial', 'sans-serif'],
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
      },
      fontSize: {
        basePlus: ['16px', { lineHeight: '26px' }],
      },
      colors: {
        white: 'rgb(236, 238, 245)',
        blue: '#004274',
        cream:'#ffffff',
        darkblue: '#004274',
      },
    },
  },

  plugins: [],
};
