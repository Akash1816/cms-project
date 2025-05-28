import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  server:{
    allowedHosts:["5173-akash1816-cms-project-4mnbr6d2u8.app.codeanywhere.com"]
  },
  plugins: [react(), tailwindcss()],
})
