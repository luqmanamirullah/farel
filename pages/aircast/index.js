import Head from 'next/head';
import Contact from '~/components/contact/Contact';
import ClearFix from '~/components/container/ClearFix';
import BasicLayout from '~/components/layouts/BasicLayout';
import Onair from '~/components/onair/onair';
import List from '~/components/List/List';
import { DefaultSeo } from 'next-seo';

const AudiolandPage = () => {
	return (
		<div>
			<Head>
				<title>Svara Aircast | The Sound of You</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					rel="shortcut icon"
					type="image/png"
					sizes="32x32"
					href="https://svara.id/logo/logo-gram%20only/aircast.png"
				/>
			</Head>
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
		</div>
	);
};

export default AudiolandPage;
