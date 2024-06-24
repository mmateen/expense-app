// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({

  content: ["./src/**/*.{js,jsx,ts,tsx,css}", './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'xs': '0px 1px 4px rgba(0, 0, 0, 0.16)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    'tailwindcss',
    'autoprefixer',
  ],
});
