/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://images5.alphacoders.com/653/thumb-1920-653422.jpg')",
      },
      lineHeight: {
        'extra-loose': '5rem',
      }
    },
  },
  plugins: [],
}