'use client';;
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '$components/navigation-menu';
import { CircleUser, HelpCircle, Paintbrush2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Separator from '$components/separator';
import { useAuth } from '$components/hooks';
import { cn } from '~/utilities';
import Link from 'next/link';

function Page() {
	const path = usePathname();
	const auth = useAuth();

	return <div className='sidebar border-r min-h-full pr-4 pl-2'>
		<NavigationMenu className='min-w-48 max-w-none flex flex-col gap-1'>
			<NavigationMenuItem className='text-left cursor-pointer select-none' asChild>
				<Link passHref legacyBehavior href='/settings/account'>
					<NavigationMenuLink
						active={path === '/settings/account'}
						className={cn(path === '/settings/account' && 'before:content-[\'_\'] before:w-1 before:h-6 before:rounded-lg before:absolute before:-ml-6 before:bg-brand', !auth.isLoggedIn && 'pointer-events-none opacity-50', 'gap-4 justify-start w-full font-semibold bg-transparent min-w-56')}
					>
						<CircleUser />
						Account
					</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
			<NavigationMenuItem className='text-left cursor-pointer select-none' asChild>
				<Link passHref legacyBehavior href='/settings/appearance'>
					<NavigationMenuLink
						active={path === '/settings/appearance'}
						className={cn(path === '/settings/appearance' && 'before:content-[\'_\'] before:w-1 before:h-6 before:rounded-lg before:absolute before:-ml-6 before:bg-brand', 'gap-4 justify-start w-full font-semibold bg-transparent min-w-56')}>
						<Paintbrush2 />
						Appearance
					</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
			<Separator className='my-2' />
			<NavigationMenuItem className='text-left cursor-pointer select-none' asChild>
				<Link passHref legacyBehavior href='/settings/Example'>
					<NavigationMenuLink
						active={path === '/settings/Example'}
						className={cn(path === '/settings/Example' && 'before:content-[\'_\'] before:w-1 before:h-6 before:rounded-lg before:absolute before:-ml-6 before:bg-brand', 'gap-4 justify-start w-full font-semibold bg-transparent min-w-56')}>
						<HelpCircle />
						Example
					</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
			<NavigationMenuItem className='text-left cursor-pointer select-none' asChild>
				<Link passHref legacyBehavior href='/settings/Example'>
					<NavigationMenuLink
						active={path === '/settings/Example'}
						className={cn(path === '/settings/Example' && 'before:content-[\'_\'] before:w-1 before:h-6 before:rounded-lg before:absolute before:-ml-6 before:bg-brand', 'gap-4 justify-start w-full font-semibold bg-transparent min-w-56')}>
						<HelpCircle />
						Example
					</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
			<NavigationMenuItem className='text-left cursor-pointer select-none' asChild>
				<Link passHref legacyBehavior href='/settings/Example'>
					<NavigationMenuLink
						active={path === '/settings/Example'}
						className={cn(path === '/settings/Example' && 'before:content-[\'_\'] before:w-1 before:h-6 before:rounded-lg before:absolute before:-ml-6 before:bg-brand', 'gap-4 justify-start w-full font-semibold bg-transparent min-w-56')}>
						<HelpCircle />
						Example
					</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
			<Separator className='my-2' />
			<NavigationMenuItem className='text-left cursor-pointer select-none' asChild>
				<Link passHref legacyBehavior href='/settings/Example'>
					<NavigationMenuLink
						active={path === '/settings/Example'}
						className={cn(path === '/settings/Example' && 'before:content-[\'_\'] before:w-1 before:h-6 before:rounded-lg before:absolute before:-ml-6 before:bg-brand', 'gap-4 justify-start w-full font-semibold bg-transparent min-w-56')}>
						<HelpCircle />
						Example
					</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
			<NavigationMenuItem className='text-left cursor-pointer select-none' asChild>
				<Link passHref legacyBehavior href='/settings/Example'>
					<NavigationMenuLink
						active={path === '/settings/Example'}
						className={cn(path === '/settings/Example' && 'before:content-[\'_\'] before:w-1 before:h-6 before:rounded-lg before:absolute before:-ml-6 before:bg-brand', 'gap-4 justify-start w-full font-semibold bg-transparent min-w-56')}>
						<HelpCircle />
						Example
					</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
			<NavigationMenuItem className='text-left cursor-pointer select-none' asChild>
				<Link passHref legacyBehavior href='/settings/Example'>
					<NavigationMenuLink
						active={path === '/settings/Example'}
						className={cn(path === '/settings/Example' && 'before:content-[\'_\'] before:w-1 before:h-6 before:rounded-lg before:absolute before:-ml-6 before:bg-brand', 'gap-4 justify-start w-full font-semibold bg-transparent min-w-56')}>
						<HelpCircle />
						Example
					</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
			<NavigationMenuItem className='text-left cursor-pointer select-none' asChild>
				<Link passHref legacyBehavior href='/settings/Example'>
					<NavigationMenuLink
						active={path === '/settings/Example'}
						className={cn(path === '/settings/Example' && 'before:content-[\'_\'] before:w-1 before:h-6 before:rounded-lg before:absolute before:-ml-6 before:bg-brand', 'gap-4 justify-start w-full font-semibold bg-transparent min-w-56')}>
						<HelpCircle />
						Example
					</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
			<NavigationMenuItem className='text-left cursor-pointer select-none' asChild>
				<Link passHref legacyBehavior href='/settings/Example'>
					<NavigationMenuLink
						active={path === '/settings/Example'}
						className={cn(path === '/settings/Example' && 'before:content-[\'_\'] before:w-1 before:h-6 before:rounded-lg before:absolute before:-ml-6 before:bg-brand', 'gap-4 justify-start w-full font-semibold bg-transparent min-w-56')}>
						<HelpCircle />
						Example
					</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
			<Separator className='my-2' />
		</NavigationMenu>
	</div>;
}

export default Page;