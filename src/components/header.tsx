import { FiCheck, FiSun, FiMoon, FiMonitor } from 'solid-icons/fi';
import NavigationMenu from '~/components/navigation-menu';
import { type JSX, Show, Switch, Match } from 'solid-js';
import DropdownMenu from '~/components/dropdown-menu';
import { useTheme } from '~/components/context/theme';
import Separator from '~/components/separator';
import Account from '~/components/account';
import { Logo } from '~/components/icons';
import Button from '~/components/button';
import { As } from '@kobalte/core';
import { cn } from '~/utilities';
import { useNavigate } from '@solidjs/router';

function Header(props: JSX.HTMLAttributes<HTMLDivElement>) {
	const [themes, { setTheme }] = useTheme();
	const navigate = useNavigate();

	return <div class={cn('sticky h-18 flex px-5 py-3 items-center border-b shadow-sm', props.class)}>
		<div class='container flex h-14 items-center gap-4 p-0'>
			<Logo class='size-16 cursor-pointer transition-opacity duration-300 hover:opacity-75' onClick={() => window.location.assign('/')} />
			<Separator orientation='vertical' class='h-5 hidden sm:flex' />
			<NavigationMenu.Root>
				<NavigationMenu.Item href='/' onClick={e => (e.preventDefault(), navigate('/'))}>
					Home
				</NavigationMenu.Item>
				<NavigationMenu.Item href='/plugins' onClick={e => (e.preventDefault(), navigate('/plugins'))}>
					Plugins
				</NavigationMenu.Item>
				<NavigationMenu.Item href='/themes' onClick={e => (e.preventDefault(), navigate('/themes'))}>
					Themes
				</NavigationMenu.Item>
				<NavigationMenu.Item href='/developers' onClick={e => (e.preventDefault(), navigate('/developers'))}>
					Developers
				</NavigationMenu.Item>
				<NavigationMenu.Item href='/faq' onClick={e => (e.preventDefault(), navigate('/faq'))}>
					FAQ
				</NavigationMenu.Item>
			</NavigationMenu.Root>
			<div class='flex justify-center items-center ml-auto gap-2'>
				<DropdownMenu.Root flip>
					<DropdownMenu.Trigger asChild>
						<As component={(props) => <Button {...props} variant='outline' size='icon'>
							<Switch>
								<Match when={themes.theme === 'light'}>
									<FiSun size={18} />
								</Match>
								<Match when={themes.theme === 'dark'}>
									<FiMoon size={18} />
								</Match>
								<Match when={themes.theme === 'system'}>
									<FiMonitor size={18} />
								</Match>
							</Switch>
						</Button>} />
					</DropdownMenu.Trigger>
					<DropdownMenu.Portal>
						<DropdownMenu.Content>
							<DropdownMenu.Item class='flex shrink-0 items-center min-w-28' onSelect={() => setTheme('light')}>
								Light
								<Show when={themes.theme === 'light'}>
									<FiCheck class='ml-auto' size={16} />
								</Show>
							</DropdownMenu.Item>
							<DropdownMenu.Item class='flex shrink-0 items-center min-w-28' onSelect={() => setTheme('dark')}>
								Dark
								<Show when={themes.theme === 'dark'}>
									<FiCheck class='ml-auto' size={16} />
								</Show>
							</DropdownMenu.Item>
							<DropdownMenu.Item class='flex shrink-0 items-center min-w-28' onSelect={() => setTheme('system')}>
								System
								<Show when={themes.theme === 'system'}>
									<FiCheck class='ml-auto' size={16} />
								</Show>
							</DropdownMenu.Item>
							<DropdownMenu.Arrow />
						</DropdownMenu.Content>
					</DropdownMenu.Portal>
				</DropdownMenu.Root>
				<Account />
			</div>
		</div>
	</div>;
}

export default Header;