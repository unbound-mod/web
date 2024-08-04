import Accordion from '~/components/accordion';

export const showInHeader = true;
export const headerOrder = 5;
export const title = 'FAQ';
export const path = '/faq';

export function Page() {
	return <div class='container mt-32'>
		<Accordion.Root multiple={false} collapsible class='w-full'>
			<Accordion.Item value='item-1'>
				<Accordion.Trigger>Is Unbound against Discord's ToS?</Accordion.Trigger>
				<Accordion.Content>Yes. However, Discord have never taken action against users using client modifications.</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value='item-2'>
				<Accordion.Trigger>Placeholder</Accordion.Trigger>
				<Accordion.Content>
					Placeholder
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value='item-3'>
				<Accordion.Trigger>Placeholder</Accordion.Trigger>
				<Accordion.Content>
					Placeholder
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</div>;
}