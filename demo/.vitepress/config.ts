import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'

const dirname = (() => {
  return typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))
})()

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        'vitepress-theme-mur': path.join(dirname, '../../src'),
      },
    },
  },
})
