'use client';

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '$components/dropdown-menu';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '$components/dialog';
import { LogIn, LogOut, Settings, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '$components/avatar';
import { useAuth } from '$components/hooks';
import { useRouter } from 'next/navigation';
import Skeleton from '$components/skeleton';
import Button from '$components/button';
import Label from '$components/label';
import Input from '$components/input';
import { useState } from 'react';

function Account() {
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);
	const router = useRouter();
	const auth = useAuth();

	if (auth.loading) {
		return <Button
			className='flex basis-auto shrink-0 bg-transparent overflow-hidden pointer-events-none'
			variant='outline'
			size='icon'
		>
			<Skeleton className='h-full w-full rounded-none' />
		</Button>;
	}

	if (!auth.loading && !auth.isLoggedIn) {
		return <Button
			className='bg-transparent'
			variant='outline'
			onClick={() => router.push('/api/v1/login')}
		>
			<div className='flex items-center gap-2'>
				<LogIn size={16} />
				Login
			</div>
		</Button>;
	}


	if (auth.isLoggedIn) {
		const { user } = auth.account!;

		return <>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Avatar className='rounded-md select-none border'>
						<AvatarImage src={`https://cdn.discordapp.com/avatars/${user!.id}/${user!.avatar}.${user!.avatar!.startsWith('a_') ? 'gif' : 'png'}?size=2048`} />
						<AvatarFallback>{user.username.at(0)}</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='w-36' align='end'>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<User className='mr-2 h-4 w-4' />
							<span>Profile</span>
						</DropdownMenuItem>
						<DropdownMenuItem onSelect={() => router.push('/settings/account')}>
							<Settings className='mr-2 h-4 w-4' />
							<span>Settings</span>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem onSelect={auth.logOut}>
						<LogOut className='mr-2 h-4 w-4' />
						<span>Log out</span>
					</DropdownMenuItem>
					{/* <DropdownMenuLabel>
						Account
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={() => setIsSettingsOpen(true)}>
						Settings
					</DropdownMenuItem>
					<DropdownMenuItem onClick={auth.logOut}>
						Log Out
					</DropdownMenuItem> */}
				</DropdownMenuContent>
			</DropdownMenu>
			<Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
				<DialogContent className='w-full h-full max-w-none border-none rounded-none flex flex-col grow'>
					<DialogHeader>
						<DialogTitle>Settings</DialogTitle>
						<DialogDescription>
							Configure functionality.
						</DialogDescription>
					</DialogHeader>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='name' className='text-right'>
							Name
						</Label>
						<Input
							id='name'
							defaultValue='Pedro Duarte'
							className='col-span-3'
						/>
					</div>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='username' className='text-right'>
							Username
						</Label>
						<Input
							id='username'
							defaultValue='@peduarte'
							className='col-span-3'
						/>
					</div>
				</DialogContent>
			</Dialog>
		</>;
	}
}

export default Account;
// export default dynamic(() => Promise.resolve(Account), { ssr: false });