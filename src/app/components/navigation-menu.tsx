import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { ChevronDown } from 'lucide-react';
import { cn } from '~/utilities';
import * as React from 'react';

const NavigationMenuItem = NavigationMenuPrimitive.Item;

type NavigationMenuLinkRef = React.ElementRef<typeof NavigationMenuPrimitive.NavigationMenuLink>;
type NavigationMenuLinkProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.NavigationMenuLink>;

type NavigationMenuRef = React.ElementRef<typeof NavigationMenuPrimitive.Root>;
type NavigationMenuProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>;

type NavigationMenuListRef = React.ElementRef<typeof NavigationMenuPrimitive.List>;
type NavigationMenuListProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>;

type NavigationMenuTriggerRef = React.ElementRef<typeof NavigationMenuPrimitive.Trigger>;
type NavigationMenuTriggerProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>;

type NavigationMenuContentRef = React.ElementRef<typeof NavigationMenuPrimitive.Content>;
type NavigationMenuContentProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>;

type NavigationMenuViewportRef = React.ElementRef<typeof NavigationMenuPrimitive.Viewport>;
type NavigationMenuViewportProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>;

type NavigationMenuIndicatorRef = React.ElementRef<typeof NavigationMenuPrimitive.Indicator>;
type NavigationMenuIndicatorProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>;

const NavigationMenu = React.forwardRef<NavigationMenuRef, NavigationMenuProps>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Root
		ref={ref}
		className={cn(
			'relative z-10 flex max-w-max flex-1 items-center justify-center',
			className
		)}
		{...props}
	>
		{children}
		<NavigationMenuViewport />
	</NavigationMenuPrimitive.Root>
));

NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuLink = React.forwardRef<NavigationMenuLinkRef, NavigationMenuLinkProps>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.NavigationMenuLink
		ref={ref}
		className={cn(
			'group select-none inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
			className
		)}
		{...props}
	>
		{children}
	</NavigationMenuPrimitive.NavigationMenuLink>
));

NavigationMenuLink.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<NavigationMenuListRef, NavigationMenuListProps>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List
		ref={ref}
		className={cn(
			'group flex flex-1 list-none items-center justify-center space-x-1',
			className
		)}
		{...props}
	/>
));

NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;


const NavigationMenuTrigger = React.forwardRef<NavigationMenuTriggerRef, NavigationMenuTriggerProps>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Trigger
		ref={ref}
		className={cn('group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50', className)}
		{...props}
	>
		{children}{' '}
		<ChevronDown
			className='relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180'
			aria-hidden='true'
		/>
	</NavigationMenuPrimitive.Trigger>
));

NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;


const NavigationMenuContent = React.forwardRef<NavigationMenuContentRef, NavigationMenuContentProps>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Content
		ref={ref}
		className={cn(
			'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ',
			className
		)}
		{...props}
	/>
));

NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuViewport = React.forwardRef<NavigationMenuViewportRef, NavigationMenuViewportProps>(({ className, ...props }, ref) => (
	<div className={cn('absolute left-0 top-full flex justify-center')}>
		<NavigationMenuPrimitive.Viewport
			className={cn(
				'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
				className
			)}
			ref={ref}
			{...props}
		/>
	</div>
));

NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<NavigationMenuIndicatorRef, NavigationMenuIndicatorProps>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Indicator
		ref={ref}
		className={cn(
			'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
			className
		)}
		{...props}
	>
		<div className='relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md' />
	</NavigationMenuPrimitive.Indicator>
));

NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
};