// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
// User site (xxx.github.io) — base is "/", custom domain not used.
export default defineConfig({
  site: 'https://shinelightyiyi.github.io',
  base: '/',
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
  build: {
    assets: 'assets',
  },
  vite: {
    optimizeDeps: {
      exclude: ['pdfjs-dist', 'tesseract.js'],
    },
    ssr: {
      noExternal: ['marked'],
    },
    build: {
      // Avoid out-of-memory on smaller CI runners
      chunkSizeWarningLimit: 1500,
    },
  },
});
