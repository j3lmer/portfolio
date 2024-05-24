/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/*.js", "./src/*.vue"],

  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#ffffff',
      secondary: '#ba3519'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
