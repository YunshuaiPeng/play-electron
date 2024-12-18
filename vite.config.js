import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic',
    fastRefresh: true
  })],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: '.',
    emptyOutDir: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}) 