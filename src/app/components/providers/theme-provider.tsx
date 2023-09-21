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
	_theme: 'system',
	systemTheme: 'dark',
	theme: 'dark',
	setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initial);

export default function ThemeProvider({ children, defaultTheme = 'system', storageKey = 'theme', ...props }: ThemeProviderProps) {
	const system = window.matchMedia('(prefers-color-scheme: dark)');

	const [theme, setTheme] = useState(() => localStorage.getItem(storageKey) || defaultTheme);
	const [systemTheme, setSystemTheme] = useState(() => system.matches ? 'dark' : 'light');

	system.onchange = (event) => setSystemTheme(event.matches ? 'dark' : 'light');

	useEffect(() => {
		const root = window.document.documentElement;

		console.log('hi');

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
