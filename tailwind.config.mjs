/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#090446',
				secondary: '#ED7D3A',
				primaryHover: '#091486',
				secondaryHover: '#D9D9D9',
				text: '#333333',
				footerBg: '#090446',
			}
		},
	},
	plugins: [],
}
