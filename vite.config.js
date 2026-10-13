import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

const src = (path) => fileURLToPath(new URL(`./src/${path}`, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: /^@\//, replacement: src('') },
      { find: '@app', replacement: src('app') },
      { find: '@components', replacement: src('shared') },
      { find: '@ui', replacement: src('shared') },
      { find: '@pages', replacement: src('pages') },
      { find: '@hooks', replacement: src('hooks') },
      { find: '@api', replacement: src('shared/api') },
      { find: '@utils', replacement: src('utils') },
      { find: '@entities', replacement: src('entities') },
      { find: '@shared', replacement: src('shared') },
      { find: '@providers', replacement: src('providers') },
      { find: '@constants', replacement: src('constants') },
    ],
  },
})
