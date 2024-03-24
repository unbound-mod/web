import { createContext, type FlowProps, useContext, createResource, type Setter } from 'solid-js';
import { createStore, type SetStoreFunction } from 'solid-js/store';
import Cookies from 'js-cookie';
import { APIRoutes } from '~/constants';

export type Account = {
	id: string;
	username: string;
	avatar: string | void;
	discriminator: string;
	public_flags: number;
	premium_type: number;
	flags: number;
	banner: string | void;
	accent_color: number | void;
	global_name: string;
	avatar_decoration_data: string | void;
	banner_color: string;
	mfa_enabled: boolean;
	locale: string;
	email: string;
	verified: boolean;
};

type AuthProviderState = {
	isLoggedIn: boolean;
	loading: boolean;
	account: Account | null;
	tokens: {
		authorization: string | undefined;
		refresh: string | undefined;
	};
};

type AuthProviderActions = {
	logOut: () => void;
	setState: SetStoreFunction<AuthProviderState>;
	mutate: Setter<void | undefined>;
	refetch: (info?: unknown) => void | Promise<void | undefined> | null | undefined;
};

type AuthProviderValue = [
	state: AuthProviderState,
	actions: AuthProviderActions
];

const defaultState = {
	isLoggedIn: false,
	loading: false,
	account: null,
	tokens: {
		authorization: Cookies.get('authorization_token'),
		refresh: Cookies.get('refresh_token')
	}
};

const AuthContext = createContext<AuthProviderValue>([defaultState, {
	logOut: () => void 0,
	setState: () => void 0,
	refetch: () => void 0,
	mutate: () => void 0
}]);

async function fetchAccount([state, setState]: [AuthProviderState, SetStoreFunction<AuthProviderState>]) {
	if (!state.tokens.authorization) return;

	setState({ loading: true });

	const res: Account | void = await fetch('https://discord.com/api/users/@me', {
		headers: {
			'Authorization': 'Bearer ' + state.tokens.authorization
		}
	}).then(r => r.json()).catch(() => null);


	if (!res) {
		setState({ loading: false });
		return;
	}

	setState({ loading: false, isLoggedIn: true, account: res });
}

export function AuthProvider(props: FlowProps) {
	const [state, setState] = createStore<AuthProviderState>(defaultState);
	const [, { refetch, mutate }] = createResource([state, setState], fetchAccount);

	const actions = {
		setState,
		refetch,
		mutate,
		async logOut() {
			Cookies.remove('authorization_token');
			Cookies.remove('refresh_token');

			setState({
				account: null,
				isLoggedIn: false
			});

			if (!state.tokens.authorization) return;

			const url = new URL(APIRoutes.Revoke);
			url.searchParams.set('token', state.tokens.authorization);

			await fetch(url, { method: 'POST' }).catch(() => null);
		},
	};

	return (
		<AuthContext.Provider value={[state, actions]}>
			{props.children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}

export default AuthProvider;