import { createContext, useContext, createEffect, type FlowProps } from 'solid-js';
import { createStore } from 'solid-js/store';
import { usePrefersDark } from '~/components/hooks/useMediaQuery';

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
	const isSystemDark = usePrefersDark();

	const [state, setState] = createStore<ThemeProviderState>({
		...defaultState,
		theme: storage ?? defaultState.theme,
		systemTheme: isSystemDark() ? 'dark' : 'light'
	});

	const actions = {
		setTheme(theme: ThemeProviderState['theme']) {
			if (theme === state.theme) return;

			function set() {
				localStorage.setItem(props.storageKey ?? 'app-theme', theme);
				setState({ theme });
			}

			const isFromSystem = (theme === 'system' && state.theme === state.systemTheme) || (state.theme === 'system' && theme === state.systemTheme);

			if (document.startViewTransition && !isFromSystem) {
				if (props.transitionDelay && props.transitionDelay != 0) {
					setTimeout(() => document.startViewTransition(set), props.transitionDelay);
				} else {
					document.startViewTransition(set);
				}

				return;
			}

			set();
		},
	};

	createEffect(() => {
		const root = window.document.documentElement;

		if (state.theme === 'system') {
			root.setAttribute('data-theme', state.systemTheme);
		} else {
			root.setAttribute('data-theme', state.theme);
		}

		const systemTheme = isSystemDark() ? 'dark' : 'light';
		if (state.systemTheme !== systemTheme) setState({ systemTheme });
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