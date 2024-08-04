import type { JSX } from 'solid-js';
import Header from '~/components/header';
import { cn } from '~/utilities';

function Page(props: JSX.HTMLAttributes<HTMLDivElement>) {
	return <>
		<Header />
		<div class={cn('h-18 flex items-center', props.class)}>
			<div class='flex flex-col h-14 gap-4 p-0 w-full'>
				{props.children}
			</div>
		</div>
	</>;
}

export default Page;