import path from 'node:path'
import { defineConfig } from 'vitepress'

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        'vitepress-theme-mur': path.join(__dirname, '../../src'),
      },
    },
  },
})
