import { toast } from 'solid-sonner';

interface FetchOptions {
	useToast?: boolean;
}

async function safeFetch(input: URL | RequestInfo, init?: RequestInit | undefined, { useToast = false }: FetchOptions = {}) {
	const res = await fetch(input, init).then(r => r.json()).catch(() => null);

	if (useToast && res?.error) {
		toast('Action Failed', {
			description: res.error,
			closeButton: true,
			duration: Infinity
		});
	}

	return res;
}

export default safeFetch;