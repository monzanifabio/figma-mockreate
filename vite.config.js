import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { copyFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const projectRoot = dirname(fileURLToPath(import.meta.url));
const buildDir = resolve(projectRoot, "node_modules/.cache/mockreate-vite");

export default defineConfig(({ command }) => ({
  root: resolve(projectRoot, "src"),
  plugins: [
    viteSingleFile(),
    ...(command === "build"
      ? [
          {
            name: "copy-figma-ui",
            closeBundle() {
              copyFileSync(resolve(buildDir, "ui.html"), resolve(projectRoot, "ui.html"));
            },
          },
        ]
      : []),
  ],
  build: {
    outDir: buildDir,
    emptyOutDir: true,
    assetsInlineLimit: Infinity,
    rollupOptions: {
      input: resolve(projectRoot, "src/ui.html"),
    },
  },
}));
