/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "very-dark-navy": "#404258",
        "dark-navy": "#474E68",
        "light-navy": "#50577A",
        "very-light-navy": "#6B728E",
      },
      spacing: {
        'page': '100px',
        'sm-page': '20px',
      },
    },
  },
  plugins: [],
}

