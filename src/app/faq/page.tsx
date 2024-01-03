'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '$components/accordion';
import i18n from 'i18n';

function Page() {
	return <main>
		<h2 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
			{i18n.Messages.FAQ_USAGE}
		</h2>
		<Accordion type='single' collapsible className='w-full'>
			<AccordionItem value='halal'>
				<AccordionTrigger className='font-bold'>
					{i18n.Messages.FAQ_USAGE_INSTALL_TITLE}
				</AccordionTrigger>
				<AccordionContent>
					{i18n.Messages.FAQ_USAGE_INSTALL_DESC}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
		<h2 className='mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
			{i18n.Messages.FAQ_LEGAL}
		</h2>
		<Accordion type='single' collapsible className='w-full'>
			<AccordionItem value='halal'>
				<AccordionTrigger className='font-bold'>
					{i18n.Messages.FAQ_LEGAL_BAN_TITLE}
				</AccordionTrigger>
				<AccordionContent>
					{i18n.Messages.FAQ_LEGAL_BAN_DESC}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	</main>;
}

export default Page;