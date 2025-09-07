import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  base: "./", // rutas relativas para prod
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    assetsDir: "assets", // Directorio para assets 
    rollupOptions: {
      input: {
        main: "src/index.html",
      },
      output: {
        // Mantener los nombres de los chunks CSS sin hash para facilitar la carga
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  server: {
    open: true,
  },
});
