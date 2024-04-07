import { toast } from 'solid-sonner';

async function safeFetch(...args: Parameters<typeof fetch>) {
	const res = await fetch(...args).then(r => r.json()).catch(() => null);

	if (res?.error) {
		toast('Action Failed', {
			description: res.error,
			closeButton: true,
			duration: Infinity
		});
	}

	return res;
}

export default safeFetch;