import AuthProvider from '~/components/context/auth';
import { Route, Router } from '@solidjs/router';
import Page from '~/components/layout/page';
import Toaster from '~/components/toaster';
import * as Routes from '~/routes';
import { For } from 'solid-js';

const routes = Object.values(Routes);

function App() {
	return <>
		<AuthProvider>
			{/* <ThemeProvider transitionDelay={175}> */}
			<Toaster />
			<Router root={Page}>
				<For each={routes}>
					{((route) => <Route path={route.path} component={route.Page} />)}
				</For>
				{/* <Route path='/' component={Home} />
					<Route path='/plugins' component={Plugins} />
					<Route path='/themes' component={Themes} />
					<Route path='/developers' component={Developers} />
					<Route path='/faq' component={FAQ} /> */}
			</Router>
			{/* </ThemeProvider> */}
		</AuthProvider>
	</>;
}

export default App;