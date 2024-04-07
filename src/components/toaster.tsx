import { Toaster as SonnerToaster } from 'solid-sonner';
import { useTheme } from '~/components/context/theme';

function Toaster() {
	const [{ theme }] = useTheme();

	return <SonnerToaster
		theme={theme}
		richColors
		class='toaster group'
		toastOptions={{
			classes: {
				toast: 'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
				description: 'group-[.toast]:text-secondary-fg',
				actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-fg',
				cancelButton: 'group-[.toast]:bg-secondary group-[.toast]:text-secondary-fg'
			}
		}}
	/>;
}

export default Toaster;