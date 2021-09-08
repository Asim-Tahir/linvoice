import { defineConfig, loadEnv } from "vite";
import ViteReact from "@vitejs/plugin-react-refresh";
import ViteReactJSX from "vite-react-jsx";
import AutoImport from "unplugin-auto-import/vite";
import SVGIcons from "vite-plugin-svg-icons";
// https://iconify.design/
import Icons from "unplugin-icons/vite";

import { resolve } from "path";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, resolve(__dirname)) };

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [
      ViteReact(),
      ViteReactJSX(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        ],
        dts: "types/generated/auto-imports.d.ts",
        imports: ["react"],
      }),
      Icons({ compiler: "jsx" }),
      SVGIcons({
        iconDirs: [resolve(process.cwd(), "src/assets/svg")],
        symbolId: "icon-[dir]-[name]",
      }),
    ],
    server: {
      port: parseInt(process.env.VITE_PORT) || 3000,
      cors: true,
      strictPort: false,
      hmr: true,
      fs: {
        strict: false,
        // Allow serving files from one level up to the project root
        // allow: ["./src/graphql/**/*.graphql"],
      },
      // proxy: {
      //   "/api": {
      //     target: process.env.VITE_API_KEY,
      //     changeOrigin: true,
      //     autoRewrite: true,
      //   },
      // },
      watch: {
        usePolling: true,
        useFsEvents: true,
      },
    },
    resolve: {
      alias: {
        "#": resolve(__dirname, "public"),
        "@": resolve(__dirname, "src"),
      },
    },
    define: { "process.env": process.env },
  });
};
