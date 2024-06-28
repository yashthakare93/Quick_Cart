/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: {
          500: '#FFD700', 
        },
      },
    },
  },
  plugins: [],
}
