import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",//默认是/,因为需要在GitHub上使用CI/CD所以需要相对地址./
  plugins: [vue()]
})
