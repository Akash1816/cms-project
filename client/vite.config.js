import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    root: './',
    server: {
        allowedHosts: ["5173-akash1816-cms-project-ynf3kf8r7p.app.codeanywhere.com"]
    },
    plugins: [
        react(), tailwindcss()
    ],
    build: {
        rollupOptions: {
            external: ['sweetalert2'],
            input: './index.html'
        }
    }
})
