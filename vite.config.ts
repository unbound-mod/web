import paths from 'vite-tsconfig-paths';
import solid from 'vite-plugin-solid';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [paths(), solid()],
	server: {
		port: 3000,
		open: true
	},
	build: {
		target: 'esnext',
	},
});