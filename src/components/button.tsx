import { splitProps, type JSX } from 'solid-js';
import { cva, type VariantProps } from 'cva';
import { cn } from '~/utilities';

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {
	asChild?: boolean;
}

const ButtonVariants = cva({
	base: 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-bg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	variants: {
		variant: {
			default: 'border border-neutral-800 bg-primary hover:bg-secondary/75 backdrop-blur',
			cta: 'bg-brand text-opposite',
			opposite: 'bg-opposite/90 text-opposite-fg hover:bg-opposite',
			destructive: 'bg-destructive text-destructive-fg hover:bg-destructive/90',
			outline: 'border bg-transparent hover:bg-accent hover:text-accent-fg',
			secondary: 'bg-secondary text-secondary-fg hover:bg-secondary/80',
			ghost: 'hover:bg-accent hover:text-accent-fg',
			link: 'text-primary-fg underline-offset-4 hover:underline'
		},
		size: {
			default: 'h-10 px-4 py-2',
			sm: 'h-9 rounded-md px-3 text-xs',
			lg: 'h-11 rounded-md px-8',
			icon: 'h-10 w-10',
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

function Button(props: ButtonProps) {
	const [, rest] = splitProps(props, ['children']);

	return <button {...rest} class={cn(ButtonVariants(props), props.class)}>
		{props.children}
	</button>;
}

export default Button;