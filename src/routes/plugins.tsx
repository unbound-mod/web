import { Match, Switch, createResource } from 'solid-js';
import Page from '~/components/layout/page';
import { APIRoutes } from '~/constants';
import { fetch } from '~/utilities';

function Plugins() {
	const [data, { refetch, mutate }] = createResource(fetchPlugins, { initialValue: [] });

	return <Page>
		<Switch fallback={<Addons data={data()} />}>
			<Match when={data.loading}>
				<div>Loading</div>
			</Match>
			<Match when={data.error}>
				<div>Error fetching plugins: {data.error}</div>
			</Match>
		</Switch>
	</Page>;
}

interface AddonsProps {
	data: any[];
}

function Addons(props: AddonsProps) {
	return <div>
		{JSON.stringify(props.data, null, 2)}
	</div>;
}

async function fetchPlugins() {
	const addons = await fetch(APIRoutes.Plugins);

	return addons ?? [];
}

export default Plugins;