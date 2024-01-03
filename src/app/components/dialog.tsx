'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '~/utilities';
import React from 'react';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

type DialogOverlayRef = React.ElementRef<typeof DialogPrimitive.Overlay>;
type DialogOverlayProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;

type DialogContentRef = React.ElementRef<typeof DialogPrimitive.Content>;
type DialogContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;

type DialogTitleRef = React.ElementRef<typeof DialogPrimitive.Title>;
type DialogTitleProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;

type DialogDescriptionRef = React.ElementRef<typeof DialogPrimitive.Description>;
type DialogDescriptionProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;

const DialogOverlay = React.forwardRef<DialogOverlayRef, DialogOverlayProps>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cn(
			'fixed inset-0 z-50 backdrop-filter backdrop-blur-sm bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
			className
		)}
		{...props}
	/>
));

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<DialogContentRef, DialogContentProps>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content
			ref={ref}
			className={cn(
				'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border backdrop-blur-xl p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
				className
			)}
			{...props}
		>
			{children}
			<DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
				<X className='h-4 w-4' />
				<span className='sr-only'>Close</span>
			</DialogPrimitive.Close>
		</DialogPrimitive.Content>
	</DialogPortal>
));

DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			'flex flex-col space-y-1.5 text-center sm:text-left',
			className
		)}
		{...props}
	/>
);

DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
			className
		)}
		{...props}
	/>
);

DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<DialogTitleRef, DialogTitleProps>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cn(
			'text-lg font-semibold leading-none tracking-tight',
			className
		)}
		{...props}
	/>
));

DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<DialogDescriptionRef, DialogDescriptionProps>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={cn('text-sm text-muted-foreground', className)}
		{...props}
	/>
));

DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
	Dialog,
	DialogPortal,
	DialogOverlay,
	DialogClose,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
};
