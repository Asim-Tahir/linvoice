"use strict";

module.exports = {
  preset: "ts-jest/presets/js-with-ts-esm",
  moduleNameMapper: {
    "^@linvoice/(.*)$": "<rootDir>/packages/$1",
  },
};
