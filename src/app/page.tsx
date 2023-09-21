'use client';

import { useTheme } from '~/app/components/providers/theme-provider';

export default function Home() {
	const { setTheme, theme } = useTheme();

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			{theme}
		</main>
	);
}
