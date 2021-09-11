import { defineConfig, loadEnv } from "vite";
import ViteReact from "@vitejs/plugin-react-refresh";
import ViteReactJSX from "vite-react-jsx";
import SVGIcons from "vite-plugin-svg-icons";
import MacrosPlugin from "vite-plugin-babel-macros";
import AutoImport from "unplugin-auto-import/vite";
// import { imagetools as ImageTools } from "vite-imagetools";
import { string as ViteString } from "rollup-plugin-string";

import { resolve } from "path";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, resolve(__dirname)) };

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [
      ViteReact(),
      ViteReactJSX(),
      SVGIcons({
        iconDirs: [resolve(process.cwd(), "packages/icon/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
      AutoImport({
        imports: ["react"],
        resolvers: [],
        dts: "types/generated/auto-import.d.ts",
      }),
      MacrosPlugin(),
      // ImageTools(),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ViteString({
        include: "packages/utils/email/**/*.html",
        exclude: ["**/index.html"],
      }),
    ],
    server: {
      port: parseInt(process.env.VITE_PORT) || 3000,
      cors: true,
      strictPort: false,
      hmr: true,
      proxy: {
        "/api/mail": {
          target: process.env.VITE_MAIL_API_URL,
          changeOrigin: true,
          autoRewrite: true,
          ws: true,
          rewrite: (path: string) => path.replace("/api/mail", ""),
        },
      },
      fs: {
        strict: false,
        // Allow serving files from one level up to the project root
        // allow: ["src/graphql/**/*.graphql"],
      },
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
    define: {
      "process.env": process.env,
      "process.platform": JSON.stringify("win32"),
    },
  });
};
