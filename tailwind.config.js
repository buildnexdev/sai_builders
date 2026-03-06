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
        'brand-primary': '#0A192F', // Deep navy blue
        'brand-secondary': '#239EB0', // Cyan/Teal
        'brand-accent': '#C92A2A', // Red for CTA buttons
        'brand-dark': '#060F1A',
        'brand-light': '#F4F7F6',
      },
    },
  },
  plugins: [],
}
