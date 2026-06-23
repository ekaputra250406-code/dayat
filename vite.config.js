import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // tambahkan ini kalau mau deploy ke GitHub Pages
  base: "/dayat/",
})