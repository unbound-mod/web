'use client';

import { useAuth } from '$components/hooks';

function Page() {
	const auth = useAuth();

	return (
		<main className='py-10'>
			<p suppressHydrationWarning className='whitespace-pre'>
				{JSON.stringify(auth, null, 2)}
			</p>
		</main>
	);
}

export default Page;