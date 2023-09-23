import Header from '@components/header';
import Providers from '@providers';
import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
	title: 'Unbound',
	description: 'Discord mobile client aimed at providing the user control, stability and customizability.',
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
	return (
		<html lang='en'>
			<head>
				<link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
			</head>
			<Providers>
				<body className='bg-brand-fade bg-no-repeat bg-right-top bg-fixed'>
					<Header />
					<div className='container flex flex-col gap-[10px] p-10 min-h-[100vh] mt-5'>
						{children}
					</div>
				</body>
			</Providers>
		</html>
	);
}
