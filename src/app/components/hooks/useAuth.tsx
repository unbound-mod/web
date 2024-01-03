'use client';

import { AuthProviderContext } from '$components/providers/auth-provider';
import { useContext } from 'react';

function useAuth() {
	const context = useContext(AuthProviderContext);

	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
}

export default useAuth;