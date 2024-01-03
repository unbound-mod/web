'use client';

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '~/utilities';
import React from 'react';

type AvatarRef = React.ElementRef<typeof AvatarPrimitive.Root>;
type AvatarProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;

type AvatarImageRef = React.ElementRef<typeof AvatarPrimitive.Image>;
type AvatarImageProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;

type AvatarFallbackRef = React.ElementRef<typeof AvatarPrimitive.Fallback>;
type AvatarFallbackProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;

const Avatar = React.forwardRef<AvatarRef, AvatarProps>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Root
		ref={ref}
		className={cn(
			'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
			className
		)}
		{...props}
	/>
));

Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<AvatarImageRef, AvatarImageProps>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Image
		ref={ref}
		className={cn('aspect-square h-full w-full', className)}
		{...props}
	/>
));

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<AvatarFallbackRef, AvatarFallbackProps>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Fallback
		ref={ref}
		className={cn(
			'flex h-full w-full items-center justify-center rounded-full bg-muted',
			className
		)}
		{...props}
	/>
));

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
