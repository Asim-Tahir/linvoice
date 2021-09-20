// eslint-disable-next-line @typescript-eslint/no-var-requires
const windmill = require("@windmill/react-ui/config");

module.exports = windmill({
  purge: [
    "./index.html",
    "./packages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5fcfa",
          100: "#e1f6ef",
          150: "#cef1e4",
          200: "#baebd9",
          250: "#a6e5ce",
          300: "#92e0c4",
          350: "#7edab9",
          400: "#6bd4ae",
          450: "#57cfa3",
          500: "#43c998",
          550: "#36BC8C",
          600: "#30A87D",
          650: "#2b946e",
          700: "#258160",
          750: "#1f6d51",
          800: "#1a5942",
          850: "#144533",
          900: "#0e3125",
          950: "#091e16",
        },
        ternary: {
          50: "#6927d8",
          100: "#6124c7",
          150: "#5821b6",
          200: "#501da4",
          250: "#471a93",
          300: "#3f1782",
          400: "#371470",
          500: "#2f1158",
          600: "#260e4e",
          700: "#15082b",
          800: "#1b0d3e",
          900: "#0d051a",
          950: "#040209",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
