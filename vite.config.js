import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/audiophile_ecommerce_website/',
  plugins: [react()],
})
