export const APIBaseURL = import.meta.env.DEV ? 'http://localhost:8080' : 'https://api.unbound.rip';
export const APIRoutes = {
	Login: APIBaseURL + '/auth/login',
	Revoke: APIBaseURL + '/auth/revoke',
	Themes: APIBaseURL + '/addons/themes',
	Plugins: APIBaseURL + '/addons/plugins',
} as const;