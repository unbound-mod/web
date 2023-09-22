'use client';

import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '~/app/components/dropdown-menu';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '~/app/components/navigation-menu';
import { useTheme } from '~/app/components/providers/theme-provider';
import Separator from '~/app/components/separator';
import Logo from '~/app/components/icons/logo';
import Button from '~/app/components/button';
import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Header() {
	const { theme, setTheme } = useTheme();

	return <nav key='header' className='sticky top-0 h-18 flex px-[20px] p-[10px] items-center gap-[10px] border-b text-card-foreground shadow-sm backdrop-blur z-10'>
		<div className='container flex h-14 items-center gap-[10px] p-0 md:h-14'>
			<a className='flex items-center gap-[10px] mr-[10px] cursor-pointer hover:opacity-75 transition-opacity' href='/'>
				<Logo width={64} height={64} />
			</a>
			<Separator orientation='vertical' className='h-5 hidden sm:flex' />
			<NavigationMenu className='w-full hidden sm:flex md:items-center md:w-auto'>
				<NavigationMenuList>
					<NavigationMenuItem className='cursor-pointer select-none'>
						<NavigationMenuLink onClick={(e) => e.preventDefault()} className='uppercase font-semibold bg-transparent'>
							<Link href='/'>
								Home
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem className='cursor-pointer select-none'>
						<NavigationMenuLink onClick={(e) => e.preventDefault()} className='uppercase font-semibold bg-transparent'>
							<Link href='/plugins'>
								Plugins
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem className='cursor-pointer select-none'>
						<NavigationMenuLink onClick={(e) => e.preventDefault()} className='uppercase font-semibold bg-transparent'>
							<Link href='/themes'>
								Themes
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem className='cursor-pointer select-none'>
						<NavigationMenuLink onClick={(e) => e.preventDefault()} className='uppercase font-semibold bg-transparent'>
							<Link href='/faq'>
								FAQ
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<div className='ml-auto flex flex-row gap-3 items-center flex-shrink-0 flex-grow-0'>
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Button className='flex basis-auto shrink-0 bg-transparent' variant='outline' size='icon'>
							<Sun width={18} className='rotate-0 scale-100 transition-transform delay-100 dark:-rotate-90 dark:scale-0' />
							<Moon height={18} className='absolute rotate-90 scale-0 transition-transform delay-100 dark:rotate-0 dark:scale-100' />
							<span className='sr-only'>Toggle theme</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>
							Appearance
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuCheckboxItem
							checked={theme === 'light'}
							onClick={() => setTheme('light')}
						>
							Light
						</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem
							checked={theme === 'dark'}
							onClick={() => setTheme('dark')}
						>
							Dark
						</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem
							checked={theme === 'system'}
							onClick={() => setTheme('system')}
						>
							System
						</DropdownMenuCheckboxItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	</nav>;
}

export default Header;