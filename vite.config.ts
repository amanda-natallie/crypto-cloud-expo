import type { InlineConfig } from 'vitest'
import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

type ViteConfig = UserConfig & { test: InlineConfig }
const config: ViteConfig = {
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  build: {
    outDir: 'build',
    assetsDir: 'assets',
    manifest: true,
    minify: true,
  },
  base: './',
}
export default defineConfig(config)
