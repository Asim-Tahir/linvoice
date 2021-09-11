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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
