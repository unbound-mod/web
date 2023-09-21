'use client';

import Providers from '~/app/providers';
import type { Metadata } from 'next';
import './styles.css';

import Header from '~/app/components/header';

// export const metadata: Metadata = {
// 	title: 'Unbound',
// 	description: 'Discord mobile client aimed at providing the user control, stability and customizability.',
// };

export default function RootLayout({ children }: { children: React.ReactNode; }) {
	return (
		<html lang='en'>
			<head>
				<link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
			</head>
			<Providers>
				<body>
					<Header />
					{children}
				</body>
			</Providers>
		</html>
	);
}
