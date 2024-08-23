import { Toaster as SonnerToaster } from 'solid-sonner';

function Toaster() {
	return <SonnerToaster
		theme='dark'
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