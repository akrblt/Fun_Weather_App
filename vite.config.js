import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 
  server: {
    watch: {
      usePolling: true, // 
    },
    hot: true, // 
  },
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    // c'est neccessire que jsdom pour vitest  
    environment: 'jsdom',
    globals: true, // fonction describe,it etc etre global 
  }
})
