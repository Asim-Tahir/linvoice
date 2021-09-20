/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "@jest/types";
import { pathsToModuleNameMapper } from "ts-jest/utils";

import { compilerOptions } from "./tsconfig.json";

export default {
  preset: "@linvoice/jest-config/preset/ts-jest",
  setupFilesAfterEnv: ["@linvoice/jest-config/setup"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
} as Config.InitialOptions;
