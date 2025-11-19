import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "MyToolkit",
      fileName: "my-toolkit"
    },
    rollupOptions: {
      output: {
        format: "esm"
      }
    }
  }
});
