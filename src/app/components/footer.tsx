import { Mail, MapPin, Phone } from 'lucide-react';
import { Discord, GitHub, X } from '$components/icons';
import { Socials } from '~/constants';
import { cn } from '~/utilities';

function Footer(props: React.HTMLProps<HTMLElement>) {
	return <footer {...props} className={cn('mt-auto text-sm w-full h-full p-0 border-t px-8 py-8 flex flex-col gap-5 md:p-10 md:text-base bg-background', props.className)}>
		<div className='container w-fullntaid grid-cols-footer items-start justify-center md:justify-evenly gap-8 md:flex md:flex-row p-0'>
			{/* <div className='flex flex-col gap-5' >
				<div className='flex flex-col gap-2'>
					<Logo width={100} height={100} />
				</div>
				<h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
					Unbound
				</h3>
			</div > */}
			<div className='flex flex-col gap-5'>
				<h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
					Community
				</h3>
				<div className='flex flex-col gap-4'>
					<div className='flex gap-3 items-center'>
						<X />
						<a target='_blank' href={Socials.X} className='hover:underline'>
							Twitter / X
						</a>
					</div>
					<div className='flex gap-3 items-center'>
						<Discord />
						<a target='_blank' href={Socials.Discord} className='hover:underline'>
							Discord
						</a>
					</div>
					<div className='flex gap-3 items-center'>
						<GitHub />
						<a target='_blank' href={Socials.GitHub} className='hover:underline'>
							GitHub
						</a>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-5'>
				<h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
					123
				</h3>
				<div className='flex gap-3 items-center'>
					<MapPin />
					<a target='_blank' href={'https'} className='hover:underline whitespace-pre'>
						123
					</a>
				</div>
				<div className='flex gap-3 items-center'>
					<Phone />
					<a target='_blank' href={`tel:5`} className='hover:underline'>
						123
					</a>
				</div>
				<div className='flex gap-3 items-center'>
					<Mail />
					<a target='_blank' href={`mailto:6`} className='hover:underline'>
						123
					</a>
				</div>
			</div>
		</div>
		{/* <div className='container w-full grid grid-cols-footer text-secondary-foreground items-start justify-center md:justify-evenly gap-8 md:flex md:flex-row p-0'>
			<p>
				© 2024-{new Date().getFullYear()} <Link className='hover:underline' href={Socials.GitHub}>Unbound Team</Link>
			</p>
		</div> */}
	</footer >;
}

export default Footer;