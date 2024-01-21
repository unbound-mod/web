'use client';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '$components/navigation-menu';
import Separator from '$components/separator';
import { useRouter } from 'next/navigation';
import { useAuth } from '$components/hooks';
import Logo from '$components/icons/logo';
import Account from '$components/account';
import { Settings2 } from 'lucide-react';
import Button from '$components/button';
import { cn } from '~/utilities';
import Link from 'next/link';
import { getCookie } from 'cookies-next';

function Header(props: React.HTMLProps<HTMLElement>) {
	const hasCookie = getCookie('authorization');
	const router = useRouter();
	const auth = useAuth();

	return <nav {...props} key='header' className={cn('sticky top-0 flex px-[20px] p-[10px] items-center gap-[10px] border-b text-card-foreground shadow-sm backdrop-blur z-20', props.className)}>
		<div className='container flex h-14 items-center gap-[10px] p-0 md:h-14'>
			<Link className='flex items-center gap-[10px] mr-[10px] cursor-pointer hover:opacity-75 transition-opacity' href='/'>
				<Logo width={64} height={64} />
			</Link>
			<Separator orientation='vertical' className='h-5 hidden sm:flex' />
			<NavigationMenu className='w-full hidden sm:flex md:items-center md:w-auto'>
				<NavigationMenuList>
					<NavigationMenuItem className='cursor-pointer select-none' asChild>
						<Link passHref legacyBehavior href='/'>
							<NavigationMenuLink className='font-semibold bg-transparent'>
								Home
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem className='cursor-pointer select-none' asChild>
						<Link passHref legacyBehavior href='/plugins'>
							<NavigationMenuLink className='font-semibold bg-transparent'>
								Plugins
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem className='cursor-pointer select-none' asChild>
						<Link passHref legacyBehavior href='/themes'>
							<NavigationMenuLink className='font-semibold bg-transparent'>
								Themes
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem className='cursor-pointer select-none' asChild>
						<Link passHref legacyBehavior href='/faq'>
							<NavigationMenuLink className='font-semibold bg-transparent'>
								FAQ
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<div className='ml-auto flex flex-row gap-3 items-center flex-shrink-0 flex-grow-0'>
				<Button
					variant='outline'
					size='icon'
					onClick={() => router.push(hasCookie || (!auth.loading && auth.isLoggedIn) ? '/settings/account' : '/settings/appearance')}
				>
					<Settings2 size={18} />
				</Button>
				<Account />
			</div>
		</div>
	</nav>;
}

export default Header;