'use client';

import { cn } from '~/utilities';
import React from 'react';

function Spinner({ ...props }: React.HTMLProps<HTMLSpanElement>) {
	return <span {...props} className={cn('flex w-2 h-12 min-h-fit min-w-fit gap-1.5', props.className)}>
		<span className={cn('w-[inherit] h-[inherit] bg-current inline-block fill-mode-both rounded-lg animate-[spinner_0.75s_0.1s_infinite]')} />
		<span className={cn('w-[inherit] h-[inherit] bg-current inline-block fill-mode-both rounded-lg animate-[spinner_0.75s_0.2s_infinite]')} />
		<span className={cn('w-[inherit] h-[inherit] bg-current inline-block fill-mode-both rounded-lg animate-[spinner_0.75s_0.3s_infinite]')} />
		<span className={cn('w-[inherit] h-[inherit] bg-current inline-block fill-mode-both rounded-lg animate-[spinner_0.75s_0.4s_infinite]')} />
		<span className={cn('w-[inherit] h-[inherit] bg-current inline-block fill-mode-both rounded-lg animate-[spinner_0.75s_0.5s_infinite]')} />
	</span>;
}

export default Spinner;