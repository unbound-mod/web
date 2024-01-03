'use client';

import { cn } from '~/utilities';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div
		className={cn('animate-pulse rounded-md bg-muted', className)}
		{...props}
	/>;
}

export default Skeleton;