// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import Compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
site: 'https://www.varmiguemunoz.com/',
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
  integrations: [
    Compress(),
    sitemap(),
    tailwind(),
    robotsTxt(),
  ],
});
