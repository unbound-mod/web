import DropdownMenu from '~/components/dropdown-menu';
import { useAuth } from '~/components/context/auth';
import { FiLogIn, FiLogOut } from 'solid-icons/fi';
import Skeleton from '~/components/skeleton';
import Button, { type ButtonProps } from '~/components/button';
import { APIRoutes } from '~/constants';
import { Show, type JSX } from 'solid-js';

function Account() {
	const [auth, { logOut }] = useAuth();

	return <>
		<Show when={auth.loading}>
			<Button
				class='flex rounded-xl basis-auto shrink-0 bg-transparent overflow-hidden pointer-events-none'
				variant='outline'
				size='icon'
			>
				<Skeleton class='h-full w-full rounded-none' />
			</Button>
		</Show>
		<Show when={!auth.loading && !auth.isLoggedIn}>
			<Button
				variant='opposite'
				class='flex gap-2 text-sm rounded-xl'
				onClick={() => window.location.assign(APIRoutes.Login)}
			>
				<FiLogIn size={16} />
				Login
			</Button>
		</Show>
		<Show when={auth.account}>
			<DropdownMenu.Root flip placement='bottom-end'>
				<DropdownMenu.Trigger
					as={(props: JSX.IntrinsicAttributes & ButtonProps) => <Button
						{...props}
						class='flex h-10 w-10 shrink-0 overflow-hidden rounded-xl'
						variant='outline'
						size='icon'
					>
						<img
							loading='lazy'
							class='select-none w-full h-full object-contain'
							src={`https://cdn.discordapp.com/avatars/${auth.account!.id}/${auth.account!.avatar}.${auth.account!.avatar!.startsWith('a_') ? 'gif' : 'png'}?size=2048`}
						/>
					</Button>}
				/>
				<DropdownMenu.Portal>
					<DropdownMenu.Content>
						<DropdownMenu.Item class='flex shrink-0 items-center min-w-28 text-danger hover:bg-danger/10 dark:hover:bg-danger/20' onSelect={logOut}>
							Log Out
							<FiLogOut class='ml-auto' size={16} />
						</DropdownMenu.Item>
						<DropdownMenu.Arrow />
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</Show>
	</>;
}

export default Account;