'use client';

import { SettingsPage } from '$settings/components';
import { useRouter } from 'next/navigation';
import { useAuth } from '$components/hooks';
import Spinner from '$components/spinner';
import { getCookie } from 'cookies-next';
import { useEffect } from 'react';

function Page() {
	const cookie = getCookie('authorization');
	const router = useRouter();
	const auth = useAuth();

	useEffect(() => {
		if (!cookie || (!auth.loading && !auth.isLoggedIn)) {
			router.replace('/settings/appearance');
		}
	}, [auth, router, cookie]);

	return <SettingsPage className='w-full h-full flex items-center flex-1 justify-center' title='Account'>
		{auth.loading && <Spinner />}
	</SettingsPage>;
}

export default Page;