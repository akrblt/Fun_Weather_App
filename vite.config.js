import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    // c'est neccessire que jsdom pour vitest  
    environment: 'jsdom',
    globals: true, // fonction describe,it etc etre global 
  }
})
