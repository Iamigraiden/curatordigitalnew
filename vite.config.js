import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base:'https://hyundai.blyskjewels.com'
  base:'/curatordigitalnew'
})
