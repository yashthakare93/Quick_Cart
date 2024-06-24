/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'custom-96': '32rem', 
      },
    },
  },
  plugins: [],
}
