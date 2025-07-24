/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'gaming-blue': '#2563eb',
        'gaming-red': '#dc2626',
      }
    },
  },
  plugins: [],
} 