import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/alturion-landing/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }
          if (id.includes('node_modules/d3')) {
            return 'vendor-d3';
          }
          if (id.includes('node_modules/shaders')) {
            return 'vendor-shaders';
          }
        },
      },
    },
  },
  oxc: {
    transform: {
      target: 'esnext',
    },
  },
})
