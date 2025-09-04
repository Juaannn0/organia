import { defineConfig } from "vite";

export default defineConfig({
  root: "src", // busca index.html en src
  publicDir: "../public", // carpeta de archivos estáticos (partials, favicon, etc.)
  build: {
    outDir: "../dist", // salida final
    emptyOutDir: true, // limpia dist antes del build
  },
  server: {
    open: true, // abre navegador automáticamente
  },
});
