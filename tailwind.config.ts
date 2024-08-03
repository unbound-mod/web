import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
	],
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
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--kb-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--kb-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			fontFamily: {
				primary: 'Open Runde, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
				secondary: 'Inter, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			boxShadow: {
				topBorder: 'inset 0 1px 1px 0 hsla(var(--primary-fg) /.15)'
			},
			colors: {
				background: 'hsl(var(--bg))',
				foreground: 'hsl(var(--fg))',
				accent: 'hsl(var(--accent))',
				hover: 'hsl(var(--hover))',
				active: 'hsl(var(--active))',
				border: 'hsl(var(--border))',
				brand: 'hsl(var(--brand))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					fg: 'hsl(var(--primary-fg))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					fg: 'hsl(var(--secondary-fg))',
				},
				opposite: {
					DEFAULT: 'hsl(var(--opposite))',
					fg: 'hsl(var(--opposite-fg))',
				},
				danger: {
					DEFAULT: 'hsl(var(--danger))',
					fg: 'hsl(var(--danger-fg))',
				},
				scrollbar: 'hsl(var(--scrollbar))'
			}
		},
	},
	plugins: [animate],
};

export default config;