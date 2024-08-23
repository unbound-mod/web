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
			<Toaster />
			<Router root={Page}>
				<For each={routes}>
					{((route) => <Route path={route.path} component={route.Page} />)}
				</For>
			</Router>
		</AuthProvider>
	</>;
}

export default App;