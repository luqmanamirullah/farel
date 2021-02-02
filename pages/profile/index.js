import React from 'react';
import BasicLayout from '~/components/layouts/BasicLayout';
import Profile from '~/components/profile/Profile';
import { DefaultSeo } from 'next-seo';

const AboutPage = () => {
	return (
		<BasicLayout>
			<DefaultSeo
				openGraph={{
					type: 'website',
					locale: 'en_IE',
					url: 'https://svara.id/',
					site_name: 'Svara Profile About',
					description:
						'Start-Up yang bergerak di bidang media, broadcasting, & community Platform. Media mencakup informasi, edukasi, dan entertainment. Broadcasting mencakup Radio & TV. Community mencakup radio kampus, government, desa, retail store, dll.'
				}}
				twitter={{
					handle: '@svara_offcial',
					site: '@svara_official',
					cardType: 'app'
				}}
			/>
			<Profile />
		</BasicLayout>
	);
};

export default AboutPage;
