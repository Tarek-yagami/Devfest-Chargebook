/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Josefin Sans', 'sans-serif'],
        text: ['Nunito', 'sans-serif'],
      },
      colors: {
        primaryButton: '#2A9D8F',
        primaryButtonHover: '#21867D',
        secondaryButton: '#34495E',
        secondaryButtonHover: '#2B3A4E',
        titleColor: '#36353F',
        importantText: '#949FD8',
        bodyText: '#676673',
      },
    },
  },
  plugins: [],
}
