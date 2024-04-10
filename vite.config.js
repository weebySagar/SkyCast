import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@images': '/src/assets/images',
      '@styles': '/src/assets/styles',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks'
    }
  },
  optimizeDeps: {
    exclude: ['react-intersection-observer.js']
  }
})
