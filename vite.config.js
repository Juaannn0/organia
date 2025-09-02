import { defineConfig } from "vite";

export default defineConfig({
  root: "src", // buscar index.html
  build: {
    outDir: "../dist", // salida de build
  },
  server: {
    open: true, // abrir navegador automaticamente
  },
});
