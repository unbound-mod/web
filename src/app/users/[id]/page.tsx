'use client';

import { useAuth } from '$components/hooks';
import { useEffect } from 'react';

function Component({ params }: { params: { id: string; }; }) {
	const auth = useAuth();


	useEffect(() => {
		if (params.id === '@me' && auth.account) {
			console.log(auth.account.id);
			params.id = auth.account.id;
		}
	}, [auth.account]);


	return <div>{auth.loading ? 'hi' : 'nope'}</div>;
}

export default Component;