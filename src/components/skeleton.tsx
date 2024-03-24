import type { JSX } from 'solid-js';
import { cn } from '~/utilities';

function Skeleton(props: JSX.HTMLAttributes<HTMLDivElement>) {
	return <div
		class={cn('animate-pulse rounded-md bg-muted', props.class)}
		{...props}
	/>;
}

export default Skeleton;