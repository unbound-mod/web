import type { FlowProps, JSX } from 'solid-js';
import { cn } from '~/utilities';

function NavigationMenuRoot(props: FlowProps) {
	return <nav class='flex gap-4 items-center'>
		{props.children}
	</nav>;
}

function NavigationMenuItem(props: JSX.AnchorHTMLAttributes<HTMLAnchorElement>) {
	return <a
		{...props}
		class={cn('hover:bg-primary/20 cursor-pointer transition-colors duration-300 rounded-lg py-2 px-3 font-semibold flex justify-center items-center', props.class)}
		onClick={props.onClick}
		href={props.href}
	>
		{props.children}
	</a>;
}

export default {
	Root: NavigationMenuRoot,
	Item: NavigationMenuItem
};