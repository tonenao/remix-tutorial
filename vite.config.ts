import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*.css"],
    }),
    tsconfigPaths(),
  ],
  server: {
    host: "0.0.0.0",  // コンテナ外からもアクセス可能に
    watch: {
      usePolling: true,  // ファイル変更をポーリングで監視
    },
  },
});