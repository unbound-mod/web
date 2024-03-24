import type { FlowProps } from 'solid-js';
import Header from '~/components/header';

function Page(props: FlowProps) {
	return <>
		<Header />
		{props.children}
	</>;
}

export default Page;