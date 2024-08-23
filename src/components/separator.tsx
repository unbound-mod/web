import { Separator as BaseSeparator } from '@kobalte/core';
import type { ComponentProps } from 'solid-js';
import { cn } from '~/utilities';

function Separator(props: ComponentProps<typeof BaseSeparator.Root>) {
	return <BaseSeparator.Root
		{...props}
		class={cn(
			'shrink-0 bg-border',
			props.orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
			props.class
		)}
	/>;
};

export default Separator;