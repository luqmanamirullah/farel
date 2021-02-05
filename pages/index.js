import Head from 'next/head';
import BasicLayout from '~/components/layouts/BasicLayout';
import styles from '../styles/Home.module.css';
import Slider from '~/components/Slider/slide';
import Home from '~/components/home/home';
import { DefaultSeo } from 'next-seo';

export default function HomePage() {
	return (
		<div>
			<Head>
				<title>Svara | The Sound of You</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<BasicLayout>
				<DefaultSeo
					openGraph={{
						type: 'website',
						locale: 'en_IE',
						url: 'https://svara.id/',
						site_name: 'SVARA',
						description: 'radio music podcast'
					}}
					twitter={{
						handle: '@svara_offcial',
						site: '@svara_official',
						cardType: 'app'
					}}
				/>
				<Home />
			</BasicLayout>
		</div>
	);
}
