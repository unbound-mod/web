import { Separator as BaseSeparator } from "@kobalte/core";
import { cn } from '~/utilities';

function Separator(props: BaseSeparator.SeparatorRootProps) {
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