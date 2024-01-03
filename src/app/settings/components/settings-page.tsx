import { Sidebar } from '$settings/components';
import { cn } from '~/utilities';

interface SettingsPageProps extends React.HTMLProps<HTMLDivElement> {
	title: string;
}

function SettingsPage({ title, ...props }: SettingsPageProps) {
	return <div className='flex py-10 min-h-screen gap-10 w-full h-full'>
		<Sidebar />
		<div className='flex flex-col gap-2 w-full min-h-full flex-1'>
			<h2 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
				{title}
			</h2>
			<div {...props} className={cn('flex flex-col gap-2', props.className)}>
				{props.children}
			</div>
		</div>
	</div>;
}

export default SettingsPage;