import Contact from '~/components/contact/Contact';
import ClearFix from '~/components/container/ClearFix';
import BasicLayout from '~/components/layouts/BasicLayout';
import { DefaultSeo } from 'next-seo';

const ContactPage = () => {
	return (
		<BasicLayout>
			<DefaultSeo
				openGraph={{
					type: 'website',
					locale: 'en_IE',
					url: 'https://svara.id/',
					site_name: 'Svara Contact',
					description: 'contact svara'
				}}
				twitter={{
					handle: '@svara_offcial',
					site: '@svara_official',
					cardType: 'app'
				}}
			/>
			<Contact />
		</BasicLayout>
	);
};

export default ContactPage;
