/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/*.js", "./src/*.vue"],

  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      secondary: '#350a16',
      primary: '#8ec3fa',
      customwhite: '#E5E1DA',
      subtext: '#686D76'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
