import { DropdownMenu as BaseDropdown } from '@kobalte/core';
import { cn } from '~/utilities';

function DropdownMenuCheckboxItem(props: BaseDropdown.DropdownMenuCheckboxItemProps) {
	return <BaseDropdown.CheckboxItem
		class={cn('', props.class)}
		{...props}
	>
		{props.children}
	</BaseDropdown.CheckboxItem>;
}

function DropdownMenuItem(props: BaseDropdown.DropdownMenuItemProps) {
	return <BaseDropdown.Item
		{...props}
		class={cn('px-2 py-1 rounded-md hover:bg-primary/10 dark:hover:bg-primary/20 cursor-pointer transition-colors duration-250 overflow-hidden', props.class)}
	>
		{props.children}
	</BaseDropdown.Item>;
}

function DropdownMenuContent(props: BaseDropdown.DropdownMenuContentProps) {
	return <BaseDropdown.Content
		{...props}
		class={cn('border bg-background rounded-md p-1 min-w-24 data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 slide-in-from-top-10', props.class)}
	>
		{props.children}
	</BaseDropdown.Content>;
}

function DropdownMenuPortal(props: BaseDropdown.DropdownMenuPortalProps) {
	return <BaseDropdown.Portal {...props}>
		{props.children}
	</BaseDropdown.Portal>;
}

function DropdownMenuArrow(props: BaseDropdown.DropdownMenuArrowProps) {
	return <BaseDropdown.Arrow size={16} {...props} />;
}

export default {
	Root: BaseDropdown.Root,
	Trigger: BaseDropdown.Trigger,
	Item: DropdownMenuItem,
	Portal: DropdownMenuPortal,
	Content: DropdownMenuContent,
	CheckboxItem: DropdownMenuCheckboxItem,
	Arrow: DropdownMenuArrow,
	Icon: BaseDropdown.Icon
};