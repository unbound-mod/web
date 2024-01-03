'use client';

import { Card, CardContent, CardHeader, CardTitle } from '$components/card';
import { Avatar, AvatarFallback, AvatarImage } from '$components/avatar';
import { Computer, LogIn, Moon, Settings2, Sun } from 'lucide-react';
import { SettingsPage } from '$settings/components';
import useTheme from '$components/hooks/useTheme';
import type { MouseEventHandler } from 'react';
import Separator from '$components/separator';
import { useAuth } from '$components/hooks';
import { Logo } from '$components/icons';
import Button from '$components/button';
import { cn } from '~/utilities';

function Page() {
	const { theme, setTheme, systemTheme } = useTheme();

	return <SettingsPage title='Appearance'>
		<div className='flex min-w-fit gap-5'>
			<ThemeCard
				className='w-full'
				onClick={() => theme !== 'dark' && setTheme('dark')}
				selected={theme === 'dark'}
				name='Dark'
				id='dark'
				description='test'
			/>
			<ThemeCard
				className='w-full'
				onClick={() => theme !== 'light' && setTheme('light')}
				selected={theme === 'light'}
				name='Light'
				id='light'
				description='test'
			/>
			<ThemeCard
				className='w-full'
				onClick={() => theme !== 'system' && setTheme('system')}
				selected={theme === 'system'}
				name='System'
				id={systemTheme ?? 'dark'}
				description='test'
			/>
		</div>
		<Separator className='my-6' />
	</SettingsPage>;
}

interface ThemeCardProps extends React.ComponentProps<typeof Card> {
	name: string;
	id: string;
	description: string;
	children?: JSX.Element;
	selected: boolean;
	onClick?: MouseEventHandler;
}

function ThemeCard({ name, id, description, children, selected, ...props }: ThemeCardProps) {
	const auth = useAuth();

	const icon = (() => {
		switch (name) {
			case 'Dark':
				return <Moon size={64} />;
			case 'Light':
				return <Sun size={64} />;
			case 'System':
				return <Computer size={64} />;
		}
	})();

	return <Card  {...props} className={cn(props.onClick && 'cursor-pointer', selected && 'border-brand', props.className)}>
		<CardHeader>
			<CardTitle>
				{name}
			</CardTitle>
		</CardHeader>
		<CardContent className={cn(id, 'text-foreground select-none')}>
			<div className='border rounded-md h-56 min-h-full w-full bg-background overflow-hidden'>
				<div className='flex flex-col w-full h-full'>
					<span className='items-center flex'>
						<span className='flex container items-center bg-background border-b w-full h-10 rounded-none gap-3' >
							<Logo />
							<Separator className='shrink-0 bg-border w-[1px] h-2 hidden sm:flex' orientation='vertical' />
							<p className='font-semibold text-xxxs'>Home</p>
							<p className='font-semibold text-xxxs'>Plugins</p>
							<p className='font-semibold text-xxxs'>Themes</p>
							<p className='font-semibold text-xxxs'>FAQ</p>
							<div className='ml-auto items-center flex gap-2'>
								<Button variant='outline' size='icon' className='size-5'>
									<Settings2 size={8} />
								</Button>
								{auth.isLoggedIn && <Avatar className='size-5 rounded-md'>
									<AvatarImage src={`https://cdn.discordapp.com/avatars/${auth.account?.user?.id}/${auth.account?.user?.avatar}.${auth.account?.user?.avatar!.startsWith('a_') ? 'gif' : 'png'}?size=2048`} />
									<AvatarFallback className='text-xxs'>
										{auth.account?.user?.username.at(0) ?? 'E'}
									</AvatarFallback>
								</Avatar>}
								{!auth.loading && !auth.isLoggedIn && <Button
									className='bg-transparent size-5 text-xxxs px-5'
									variant='outline'
								// onClick={() => router.push('/api/v1/login')}
								>
									<div className='flex items-center gap-1'>
										<LogIn size={8} />
										Login
									</div>
								</Button>}
							</div>
						</span>
					</span>
					<div className={cn(id, 'justify-center items items-center flex flex-1')}>
						{icon}
					</div>
				</div>
			</div>
		</CardContent>
	</Card>;
}

export default Page;