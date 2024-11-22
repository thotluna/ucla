import animations from '@midudev/tailwind-animations'
/** @type {import('tailwindcss').Config} */

// conf
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['OpenSans'],
		},
		extend: {
			fontFamily: {
        chomburi: 'Chonburi, ui-serif', // Adds a new `font-display` class
      }
		},
	},
	plugins: [animations],
}
