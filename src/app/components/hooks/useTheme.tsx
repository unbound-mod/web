import { useTheme as useNextTheme } from 'next-themes';

function useTheme(...args: Parameters<typeof useNextTheme>) {
	const data = useNextTheme(...args);

	return {
		...data,
		setTheme: (...args: Parameters<typeof data.setTheme>) => {
			// @ts-ignore
			if (document.startViewTransition) {
				// @ts-ignore
				document.startViewTransition(() => data.setTheme(...args));
			} else {
				data.setTheme(...args);
			}
		}
	};
}

export default useTheme;