/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        'brand-primary': '#1a365d', // Dark Blue
        'brand-secondary': '#ed8936', // Orange
        'brand-dark': '#2d3748',
        'brand-light': '#f7fafc',
      },
    },
  },
  plugins: [],
}
