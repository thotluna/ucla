// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://ucla-xi.vercel.app/',
  integrations: [tailwind(), sitemap()],
  // output: "server",
  adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
  vite:{
    build: {
			cssMinify: "lightningcss",
		},
    ssr:{
      external:["path-to-regexp"]
    }
  }

});