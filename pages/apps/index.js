import React from 'react';
import BasicLayout from '~/components/layouts/BasicLayout';
import SvaraOnline from '~/components/svaraOnline/SvaraOnline';
import { DefaultSeo } from 'next-seo';

const SvarOnlineIndex = () => {
	return (
		<BasicLayout colorMenu="#a45437" logo="assets_logo-4.svg" transparant="true" whiteLogo="assets_logo-5.svg">
			<DefaultSeo
				openGraph={{
					type: 'website',
					locale: 'en_IE',
					url: 'https://svara.id/',
					site_name: 'Svara Apps',
					description:
						'SVARA is a broadcasting platform to help Industry Radio in doing Digital Transformation and also for listeners to enjoy a new way of listening to radio, music and podcasts. There are several main features offered, including; Modernization on-air platform, monetize on-line platform.'
				}}
				twitter={{
					handle: '@svara_offcial',
					site: '@svara_official',
					cardType: 'app'
				}}
			/>
			<SvaraOnline />
		</BasicLayout>
	);
};

export default SvarOnlineIndex;
