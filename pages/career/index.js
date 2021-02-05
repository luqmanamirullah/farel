import Head from 'next/head';
import React from 'react';
import Career from '~/components/career/Career';
import BasicLayout from '~/components/layouts/BasicLayout';
import { DefaultSeo } from 'next-seo';

const CareerPage = () => {
	return (
		<div>
			<Head>
				<title>Svara Career | The Sound of You</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<BasicLayout noFooter="true">
				<DefaultSeo
					openGraph={{
						type: 'website',
						locale: 'en_IE',
						url: 'https://svara.id/',
						site_name: 'Svara Career ',
						description:
							'Kunjungi situs Karir Svara Indonesia dan temukan potensi Anda untuk bergabung bersama kami'
					}}
					twitter={{
						handle: '@svara_offcial',
						site: '@svara_official',
						cardType: 'app'
					}}
				/>
				<Career />
			</BasicLayout>
		</div>
	);
};

export default CareerPage;
