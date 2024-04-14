import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://mr-ijij.github.io',
  integrations: [react(), sitemap()],
  trailingSlash: "never"
});