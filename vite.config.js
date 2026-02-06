import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// For GitHub Pages: BASE_PATH should be your repo name with leading and trailing slash, e.g. /Civil-rights-app/
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
})

