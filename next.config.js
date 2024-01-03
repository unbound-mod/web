
/** @type {import('next').NextConfig} */
const config = {
	images: {
		remotePatterns: [{ hostname: 'cdn.discordapp.com' }]
	},
	experimental: {
		turbo: {

		}
	}
};

module.exports = config;
