import { createContext, useContext, createEffect, type FlowProps } from 'solid-js';
import { createStore } from 'solid-js/store';

type ThemeProviderState = {
	theme: 'light' | 'dark' | 'system';
	systemTheme: 'light' | 'dark';
};

type ThemeProviderActions = {
	setTheme: (theme: ThemeProviderState['theme']) => void;
};

type ThemeProviderValue = [
	state: ThemeProviderState,
	actions: ThemeProviderActions
];

const defaultState: ThemeProviderState = {
	theme: 'system',
	systemTheme: 'dark'
};

const ThemeContext = createContext<ThemeProviderValue>([defaultState, {
	setTheme: () => void 0
}]);

interface ThemeProviderProps extends FlowProps {
	storageKey?: string;
	transitionDelay?: number;
}

export function ThemeProvider(props: ThemeProviderProps) {
	const storage = localStorage.getItem(props.storageKey ?? 'app-theme') as ThemeProviderState['theme'];
	const system = window.matchMedia('(prefers-color-scheme: dark)');

	const [state, setState] = createStore<ThemeProviderState>({
		...defaultState,
		theme: storage ?? defaultState.theme,
		systemTheme: system.matches ? 'dark' : 'light'
	});

	const actions = {
		setTheme(theme: ThemeProviderState['theme']) {
			function set() {
				localStorage.setItem(props.storageKey ?? 'app-theme', theme);
				setState({ theme });
			}

			if (document.startViewTransition) {
				if (props.transitionDelay && props.transitionDelay != 0) {
					setTimeout(() => document.startViewTransition(set), props.transitionDelay);
				} else {
					document.startViewTransition(set);
				}

				return;
			}

			setState({ theme });
		},
	};

	system.onchange = (event) => setState({ systemTheme: event.matches ? 'dark' : 'light' });

	createEffect(() => {
		const root = window.document.documentElement;

		if (state.theme === 'system') {
			root.setAttribute('data-theme', state.systemTheme);
		} else {
			root.setAttribute('data-theme', state.theme);
		}
	});

	return (
		<ThemeContext.Provider value={[state, actions]}>
			{props.children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}

export default ThemeProvider;