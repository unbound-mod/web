'use client';

import { SettingsPage } from '$settings/components';
import { useAuth } from '$components/hooks';
import Spinner from '$components/spinner';

function Page() {
	const auth = useAuth();

	return <SettingsPage className='w-full h-full flex items-center flex-1 justify-center' title='Account'>
		{auth.loading && <Spinner />}
		{!auth.loading && !auth.isLoggedIn && <div>
			gay
		</div>}
	</SettingsPage>;
}

export default Page;