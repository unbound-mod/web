import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
	],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		screens: {
			'sm': '725px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				background: 'hsl(var(--bg))',
				foreground: 'hsl(var(--fg))',
				border: 'hsl(var(--border))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					fg: 'hsl(var(--primary-fg))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					fg: 'hsl(var(--secondary-fg))',
				},
				danger: {
					DEFAULT: 'hsl(var(--danger))',
					fg: 'hsl(var(--danger-fg))',
				},
			}
		},
	},
	plugins: [animate],
};

export default config;