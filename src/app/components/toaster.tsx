'use client';

import useTheme from '$components/hooks/useTheme';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = 'system' } = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps['theme']}
			className='toaster group !-mr-4'
			toastOptions={{
				classNames: {
					toast: 'group toast group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
					description: 'group-[.toast]:text-muted-foreground',
					actionButton: 'group-[.toast]:bg-primary/50 group-[.toast]:backdrop-blur-sm group-[.toast]:text-primary-foreground',
					cancelButton: 'group-[.toast]:bg-muted/50 group-[.toast]:text-muted-foreground',
				},
			}}
			{...props}
		/>
	);
};

export default Toaster;
