const babelOptions = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: ["babel-plugin-macros"],
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const transformer = require("babel-jest").default;

module.exports = transformer.createTransformer(babelOptions);
