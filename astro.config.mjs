import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  },
  integrations: [tailwind()],
  output: "server",
  adapter: vercel()
});
