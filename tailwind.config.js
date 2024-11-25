/** @type {import('tailwindcss').Config} */
import primeui from 'tailwindcss-primeui'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        main: '#031D44',
        secondary: '#04395E',
        btnok: '#F18F01',
        back: '#E5EBEA',
      },
      boxShadow: {
        custom: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      },
    },
  },
  darkMode: ['selector', '[class="p-dark"]'],
  plugins: [import('@tailwindcss/typography'), primeui],
}
