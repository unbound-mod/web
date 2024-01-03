'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: string;
	storageKey?: string;
};

type ThemeProviderState = {
	_theme: string;
	theme: string;
	systemTheme: string;
	setTheme: (theme: 'light' | 'dark' | 'system') => void;
};

const initial = {
	_theme: 'dark',
	systemTheme: 'dark',
	theme: 'dark',
	setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initial);

export default function ThemeProvider({ children, defaultTheme = 'dark', storageKey = 'theme', ...props }: ThemeProviderProps) {
	const [theme, setTheme] = useState(defaultTheme);
	const [media, setMedia] = useState<MediaQueryList | null>(null);
	const [systemTheme, setSystemTheme] = useState(() => (media?.matches ?? true) ? 'dark' : 'light');

	useEffect(() => {
		const system = window.matchMedia('(prefers-color-scheme: dark)');
		system.onchange = (event) => setSystemTheme(event.matches ? 'dark' : 'light');

		setMedia(system);

		const storage = localStorage.getItem(storageKey);
		if (storage) setTheme(storage);
	}, [storageKey]);

	useEffect(() => {
		const root = window.document.documentElement;

		if (theme === 'system') {
			root.setAttribute('data-theme', systemTheme);
		} else {
			root.setAttribute('data-theme', theme);
		}
	}, [theme, systemTheme]);


	const ctx = {
		_theme: theme,
		systemTheme,
		get theme() {
			return theme === 'system' ? systemTheme : theme;
		},
		setTheme: (theme: 'light' | 'dark' | 'system') => {
			function set() {
				localStorage.setItem(storageKey, theme);
				setTheme(theme);
			}

			// @ts-ignore
			if (document.startViewTransition) {
				// @ts-ignore
				return document.startViewTransition(set);
			}

			set();
		},
	};

	return (
		<ThemeProviderContext.Provider {...props} value={ctx}>
			<Helmet>
				<link rel='icon' type='image/png' href={`/img/logo-trimmed-${systemTheme}.png`} />
			</Helmet>
			{children}
		</ThemeProviderContext.Provider>
	);
}
export const useTheme = () => {
	const context = useContext(ThemeProviderContext);

	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return context;
};
