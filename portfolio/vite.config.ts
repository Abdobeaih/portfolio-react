import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/*.sw?', '**/*~', '**/4913', '**/*.bak', '**/*.tmp'],
    },
  },
})
