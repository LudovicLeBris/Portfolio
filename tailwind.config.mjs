/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary-light': '#509046',
				'primary-dark': '#1C5812',
				'bg-dark': '#0B2107',
			}
		},
	},
	plugins: [],
}
