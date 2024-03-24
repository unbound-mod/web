import type { FlowProps, JSX } from 'solid-js';
import Header from '~/components/header';
import { cn } from '~/utilities';

function Page(props: JSX.HTMLAttributes<HTMLDivElement> & FlowProps) {
	return <>
		<Header />
		<div class={cn('sticky h-18 flex px-5 py-3 items-center', props.class)}>
			<div class='container flex h-14 items-center gap-4 p-0'>
				{props.children}
			</div>
		</div>
	</>;
}

export default Page;