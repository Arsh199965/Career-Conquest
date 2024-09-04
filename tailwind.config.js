/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#e12b67', // Primary color from your logo
        'custom-black': '#1d1d1d', // Background color
        'custom-gray': '#b8b8b8', // Text and accent color
      },
    },
  },
  plugins: [],
}
