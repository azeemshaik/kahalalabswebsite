import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,  // no .map files → DevTools Sources shows only minified bundle
    minify: 'oxc',     // Vite 8 default — full JS + CSS minification via oxc
    cssMinify: true,
    rollupOptions: {
      output: {
        // content-hashed filenames — no readable module names in DevTools
        entryFileNames: 'assets/[hash].js',
        chunkFileNames: 'assets/[hash].js',
        assetFileNames: 'assets/[hash].[ext]',
      },
    },
  },
})
