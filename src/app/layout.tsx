import Toaster from '$components/toaster';
import Footer from '$components/footer';
import Header from '$components/header';
import Providers from '$providers';

import type { Metadata } from 'next';
import './styles.css';

export const metadata: Metadata = {
	title: 'Unbound',
	description: 'Discord mobile client aimed at providing the user control, stability and customizability.',
	icons: [
		{
			rel: 'icon',
			type: 'image/svg+xml',
			url: '/img/favicon.svg',
			media: '(prefers-color-scheme: light)',
		},
		{
			rel: 'icon',
			type: 'image/svg+xml',
			url: '/img/favicon-dark.svg',
			media: '(prefers-color-scheme: dark)',
		},
	]
};

function RootLayout({ children }: { children: React.ReactNode; }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</head>
			<body>
				<Providers>
					<Header />
					{/* Account for header height */}
					<div className='container flex flex-col min-h-[calc(100vh-77px)] p-0 overflow-auto'>
						{children}
					</div>
					<Footer />
					<Toaster />
				</Providers>
			</body>
		</html>
	);
}

export default RootLayout;