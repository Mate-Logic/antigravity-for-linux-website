// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Configuración para GitHub Pages
  site: 'https://antigravity-linux.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
