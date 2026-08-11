// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Configuración exacta para GitHub Pages (Mate-Logic / antigravity-for-linux-website)
  site: 'https://mate-logic.github.io',
  base: '/antigravity-for-linux-website/',
  vite: {
    plugins: [tailwindcss()],
  },
});
