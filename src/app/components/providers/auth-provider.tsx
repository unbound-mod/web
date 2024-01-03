'use client';

import { createContext, useEffect, useState } from 'react';
import { fetchAndUpdateUser, logOut } from '~/stores/user';
import type { UserSchema } from '#structures/user';
import { getCookie } from 'cookies-next';

type AuthProviderProps = {
	children: React.ReactNode;
};

type AuthProviderState = {
	isLoggedIn: boolean;
	loading: boolean;
	account: UserSchema | null;
	logOut: () => Promise<void>;
	tokens: {
		authorization: string | null;
		refresh: string | null;
	};
};

const initial = {
	loading: true,
	isLoggedIn: false,
	account: null,
	logOut,
	tokens: {
		authorization: null,
		refresh: null
	}
};

export const AuthProviderContext = createContext<AuthProviderState>(initial);

function AuthProvider({ children, ...props }: AuthProviderProps) {
	const authorization = getCookie('authorization') as string | null;
	const refresh = getCookie('refresh') as string | null;

	const [account, setAccount] = useState<UserSchema | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (!authorization || !refresh) {
			return setLoading(false);
		};

		fetchAndUpdateUser(authorization, refresh).then((account) => {
			setAccount(account);
			setLoading(false);
		});
	}, [authorization, refresh]);


	const ctx = {
		account,
		isLoggedIn: account ? true : false,
		loading,
		logOut: () => logOut().then(() => setAccount(null)),
		tokens: {
			authorization,
			refresh
		}
	};

	return (
		<AuthProviderContext.Provider key={authorization ?? 'logged-out'} {...props} value={ctx}>
			{children}
		</AuthProviderContext.Provider>
	);
}

export default AuthProvider;