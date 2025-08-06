import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@koita/shared']
  },
  build: {
    commonjsOptions: {
      include: [/@koita\/shared/, /node_modules/]
    }
  }
})
