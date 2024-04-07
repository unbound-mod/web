import ThemeProvider from '~/components/context/theme';
import AuthProvider from '~/components/context/auth';
import { Route, Router } from '@solidjs/router';
import Toaster from '~/components/toaster';
import { lazy } from 'solid-js';

const Developers = lazy(() => import('~/routes/developers'));
const Plugins = lazy(() => import('~/routes/plugins'));
const Themes = lazy(() => import('~/routes/themes'));
const Home = lazy(() => import('~/routes/home'));
const FAQ = lazy(() => import('~/routes/faq'));

function App() {
	return <>
		<AuthProvider>
			<ThemeProvider transitionDelay={175}>
				<Toaster />
				<Router>
					<Route path='/' component={Home} />
					<Route path='/plugins' component={Plugins} />
					<Route path='/themes' component={Themes} />
					<Route path='/developers' component={Developers} />
					<Route path='/faq' component={FAQ} />
				</Router>
			</ThemeProvider>
		</AuthProvider>
	</>;
}

export default App;