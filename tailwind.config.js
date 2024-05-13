/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'hero-col': 'rgba(222, 243, 243, 1)', // Define your custom color
        'tab-text-col' : 'rgba(49, 177, 118, 1)',
        'button-col' : 'rgba(8, 131, 151, 1)',
        'footer-col' : 'rgba(246, 250, 250, 1)',
        'gradient-start' : 'rgba(27, 188, 215, 1)',
        'gradient-end' : 'rgba(8, 131, 151, 1)',
        // 'search-bg' : 'rgba(222, 290, 1)',
      },
      fontFamily: {
        poppins : ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}