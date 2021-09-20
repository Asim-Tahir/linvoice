import type { Config } from "@jest/types";
export default {
  preset: "@linvoice/jest-config/preset/babel-jest",
  setupFilesAfterEnv: ["@linvoice/jest-config/jest.setup.ts"],
} as Config.InitialOptions;
