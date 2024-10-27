import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/CV-site-DD/',
  plugins: [react()],
  resolve: {
  },
  build: {
    outDir: 'dist',  // Ensure this matches the directory in the deploy script
  },
});