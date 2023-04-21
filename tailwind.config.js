/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '576px',
      'md': '960px',
      'tablet': { 'max': '976px', 'min': '530px' },
      'lg': '1440px',
    },
  },
  plugins: [],
}

