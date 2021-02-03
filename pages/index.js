import Head from 'next/head';
import BasicLayout from '~/components/layouts/BasicLayout';
import styles from '../styles/Home.module.css';
import Slider from '~/components/Slider/slide';
import Home from '~/components/home/home';
import { DefaultSeo } from 'next-seo';

export default function HomePage() {
	return (
		<BasicLayout>
			<DefaultSeo
				openGraph={{
					type: 'website',
					locale: 'en_IE',
					url: 'https://svara.id/',
					site_name: 'Svara',
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
	);
}
