import Contact from '~/components/contact/Contact';
import ClearFix from '~/components/container/ClearFix';
import BasicLayout from '~/components/layouts/BasicLayout';
import Onair from '~/components/onair/onair';
import List from '~/components/List/List';
import { DefaultSeo } from 'next-seo';

const AudiolandPage = () => {
	return (
		<BasicLayout colorMenu="#437096" logo="assets_aircast.png">
			<DefaultSeo
				openGraph={{
					type: 'website',
					locale: 'en_IE',
					url: 'https://svara.id/',
					site_name: 'Svara Aircast',
					description:
						'AM/FM Radio & Tv Automation, full automation with: auto pilot, auto riley, auto shuffle on air & playlist, auto inserts ads and time signal. Multi message integration with sms, FB, Twitter, Whatsapp, Line,. Chart Listener for Polling, Program, Quiz and Profile. Traffic & Billing System'
				}}
				twitter={{
					handle: '@svara_offcial',
					site: '@svara_official',
					cardType: 'app'
				}}
			/>
			<Onair />
			{/* <List /> */}
		</BasicLayout>
	);
};

export default AudiolandPage;
