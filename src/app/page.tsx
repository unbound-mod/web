'use client';

import { useTheme } from '~/app/components/providers/theme-provider';

export default function Home() {
	const { setTheme, theme } = useTheme();

	return (
		<main className='p-24'>
			{theme}
		</main>
	);
}
