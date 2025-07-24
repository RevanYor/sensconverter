/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./public/**/*.{html,js}"
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