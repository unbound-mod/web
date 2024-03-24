export const APIBaseURL = import.meta.env.DEV ? 'http://localhost:8080' : 'https://api.unbound.rip';
export const APIRoutes = {
	Login: APIBaseURL + '/login',
	Revoke: APIBaseURL + '/revoke',
} as const;