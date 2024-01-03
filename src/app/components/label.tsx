import { cva, type VariantProps } from 'class-variance-authority';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as React from 'react';
import { cn } from '~/utilities';

type LabelRef = React.ElementRef<typeof LabelPrimitive.Root>;
type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof variants>;

const variants = cva('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70');

const Label = React.forwardRef<LabelRef, LabelProps>(({ className, ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		className={cn(variants(), className)}
		{...props}
	/>
));

Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
