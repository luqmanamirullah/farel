import Head from 'next/head';
import React from 'react';
import BasicLayout from '~/components/layouts/BasicLayout';
import SvaraOnline from '~/components/svaraOnline/SvaraOnline';
import { DefaultSeo } from 'next-seo';

const SvarOnlineIndex = () => {
	return (
		<div>
			<Head>
				<title>Svara | The Sound of You</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					rel="shortcut icon"
					type="image/png"
					sizes="32x32"
					href="https://svara.id/logo/logo-gram%20only/apps.png"
				/>
			</Head>
			<BasicLayout
				colorMenu="#235C76"
				logo="logo-new-svara-apps.svg"
				transparant="true"
				whiteLogo="assets_logo-5.svg"
			>
				<DefaultSeo
					openGraph={{
						type: 'website',
						locale: 'en_IE',
						url: 'https://svara.id/',
						site_name: 'Svara Apps',
						images: [
							{
								url: 'https://svara.id/assets_bg-apps.png',
								width: 1185,
								height: 667,
								alt: 'Svara Apps'
							},
							{
								url: 'https://svara.id/assets_mobile.png',
								width: 652,
								height: 426,
								alt: 'Svara Innovation Svara Apps Mobile'
							},
							{
								url: 'https://svara.id/assets_tab.png',
								width: 142,
								height: 142,
								alt: 'Svara Innovation Svara Apps Tab'
							},
							{
								url: 'https://svara.id/assets_mac.png',
								width: 142,
								height: 142,
								alt: 'Svara Innovation Svara Apps Webplay'
							},
							{
								url: 'https://svara.id/fitur.png',
								width: 142,
								height: 142,
								alt: 'Svara Apps, Webplay Fitur'
							},
							{
								url: 'https://svara.id/apps/connectedCar.JPG',
								width: 360,
								height: 210,
								alt: 'Svara Apps Connected Car'
							},
							{
								url: 'https://svara.id/apps/smartSpeaker.JPG',
								width: 360,
								height: 210,
								alt: 'Svara Apps Smart Speaker'
							},
							{
								url: 'https://svara.id/apps/smartTV.JPG',
								width: 360,
								height: 210,
								alt: 'Svara Apps Smart TV'
							}
						],
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
		</div>
	);
};

export default SvarOnlineIndex;
