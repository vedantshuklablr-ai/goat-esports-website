import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Set VITE_BASE_PATH=/repo-name/ when deploying to GitHub Pages (not user.github.io root)
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || '/',
  }
})
