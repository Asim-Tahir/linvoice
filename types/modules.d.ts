declare module "rollup-plugin-string" {
  import type { Plugin } from "rollup";

  declare function string(opts: {
    include: Array<string> | string;
    exclude: Array<string> | string;
  }): Plugin;
}
