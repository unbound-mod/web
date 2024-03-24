import { FiCheck, FiSun, FiMoon, FiMonitor, FiMenu, FiHome, FiList, FiBookmark } from 'solid-icons/fi';
import NavigationMenu from '~/components/navigation-menu';
import { type JSX, Show, Switch, Match, createSignal } from 'solid-js';
import DropdownMenu from '~/components/dropdown-menu';
import { useTheme } from '~/components/context/theme';
import Separator from '~/components/separator';
import { useNavigate } from '@solidjs/router';
import { createSpring } from 'solid-spring';
import Account from '~/components/account';
import { Logo } from '~/components/icons';
import Button from '~/components/button';
import { As } from '@kobalte/core';
import { cn } from '~/utilities';

function Header(props: JSX.HTMLAttributes<HTMLDivElement>) {
	const [navOpen, setNavOpen] = createSignal();
	const [themes, { setTheme }] = useTheme();
	const navigate = useNavigate();

	createSpring;

	return <>
		<div class={cn('sticky h-18 flex px-5 py-3 items-center border-b', props.class, !navOpen() && 'shadow-sm')}>
			<div class='container flex h-14 items-center gap-4 p-0'>
				<Logo class='size-16 cursor-pointer transition-opacity duration-300 hover:opacity-75' onClick={() => window.location.assign('/')} />
				<Separator orientation='vertical' class='h-5 hidden sm:flex' />
				<NavigationMenu.Root class='hidden md:flex'>
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
					<Button onClick={() => setNavOpen(!navOpen())} variant='outline' size='icon' class='flex md:hidden'>
						<FiMenu size={18} />
					</Button>
				</div>
			</div>
		</div>
		<Show when={navOpen()}>
			<div class='px-5 py-3 container flex flex-col w-full justify-center gap-4 borber border-b shadow-sm'>
				<NavigationMenu.Item class='flex items-center justify-start gap-4 text-base' href='/' onClick={e => (e.preventDefault(), navigate('/'))}>
					<FiHome size={20} /> Home
				</NavigationMenu.Item>
				<NavigationMenu.Item class='flex items-center justify-start gap-4 text-base' href='/plugins' onClick={e => (e.preventDefault(), navigate('/plugins'))}>
					<FiList size={20} /> Plugins
				</NavigationMenu.Item>
				<NavigationMenu.Item class='flex items-center justify-start gap-4 text-base' href='/themes' onClick={e => (e.preventDefault(), navigate('/themes'))}>
					<FiList size={20} /> Themes
				</NavigationMenu.Item>
				<NavigationMenu.Item class='flex items-center justify-start gap-4 text-base' href='/developers' onClick={e => (e.preventDefault(), navigate('/developers'))}>
					<FiList size={20} /> Developers
				</NavigationMenu.Item>
				<NavigationMenu.Item class='flex items-center justify-start gap-4 text-base' href='/faq' onClick={e => (e.preventDefault(), navigate('/faq'))}>
					<FiBookmark size={20} /> FAQ
				</NavigationMenu.Item>
			</div>
		</Show>
	</>;
}

export default Header;