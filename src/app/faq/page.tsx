'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '$components/accordion';

function Page() {
	return <main className='py-10'>
		<h2 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
			Usage
		</h2>
		<Accordion type='single' collapsible className='w-full'>
			<AccordionItem value='halal'>
				<AccordionTrigger className='font-bold'>
					How do I install Unbound?
				</AccordionTrigger>
				<AccordionContent>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					Good question.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
		<h2 className='mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
			Legal
		</h2>
		<Accordion type='single' collapsible className='w-full'>
			<AccordionItem value='halal'>
				<AccordionTrigger className='font-bold'>
					Can Unbound get me banned?
				</AccordionTrigger>
				<AccordionContent>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					Discord does not hand out bans for simply using Unbound. If you abuse or violate discord's policies while using Unbound, you risk account suspension.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	</main>;
}

export default Page;