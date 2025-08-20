import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';


import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
  // Local development
  // site: 'http://localhost:4321/',

  // Production
  // site: 'https://00zkript.github.io',
  // base: 'portafolio',
  integrations: [
    tailwind(),
    vue()
  ],

  output: 'server',
  adapter: vercel(),
});