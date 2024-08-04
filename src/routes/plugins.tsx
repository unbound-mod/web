import { Match, Switch, createResource } from 'solid-js';
import { APIRoutes } from '~/constants';
import { fetch } from '~/utilities';

export const showInHeader = true;
export const headerOrder = 2;
export const title = 'Plugins';
export const path = '/plugins';

export function Page() {
	const [data, { refetch, mutate }] = createResource(fetchPlugins, { initialValue: [] });

	return <div class='container mt-32'>
		<Switch fallback={<Addons data={data()} />}>
			<Match when={data.loading}>
				<div>Loading</div>
			</Match>
			<Match when={data.error}>
				<div>Error fetching plugins: {data.error}</div>
			</Match>
		</Switch>
	</div>;
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