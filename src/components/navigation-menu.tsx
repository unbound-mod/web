import type { FlowProps, JSX } from 'solid-js';
import { cn } from '~/utilities';

function NavigationMenuRoot(props: JSX.HTMLAttributes<HTMLElement> & FlowProps) {
	return <nav {...props} class={cn('flex gap-2 items-center', props.class)}>
		{props.children}
	</nav>;
}

function NavigationMenuItem(props: JSX.AnchorHTMLAttributes<HTMLAnchorElement>) {
	return <a
		{...props}
		class={cn('cursor-pointer transition-colors duration-200 rounded-lg px-4 py-3 font-semibold flex justify-center items-center', props.class)}
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