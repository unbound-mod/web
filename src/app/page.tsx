'use client';;
import { useTranslation } from 'react-i18next';
import { useAuth } from '$components/hooks';

function Page() {
	const { t, i18n } = useTranslation();
	const auth = useAuth();

	console.log(i18n);

	return (
		<main className='py-10'>
			<p suppressHydrationWarning className='whitespace-pre'>
				{JSON.stringify(auth, null, 2)}
				{/* {t('test', { lng: 'en' })} */}
			</p>
			{/* <Spinner /> */}
		</main>
	);
}

export default Page;