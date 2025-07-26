/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/*.js", "./src/*.vue"],

  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      secondary: '#350a16',
      primary: '#8ec3fa',
      customwhite: '#E5E1DA',
      subtext: '#686D76',
      really_white: '#FFFFFF',
      bouw7: '#F3EB5E',
      mobilox: '#F5821A',
      allprint: '#B3B6B7',
      tertiary: '#4663ac',
      tertiarycontrast: '#FFFFFF',
      subtext: '#686D76'
    },
    extend: {
      spacing: {
        '20': '10rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
