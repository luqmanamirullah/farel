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
				<link
					rel="shortcut icon"
					type="image/png"
					sizes="32x32"
					href="https://svara.id/logo/logo-gram%20only/logo.png"
				/>
			</Head>
			<BasicLayout>
				<DefaultSeo
					openGraph={{
						type: 'website',
						locale: 'en_IE',
						url: 'https://svara.id/',
						site_name: 'SVARA',
						images: [
							{
								url: 'https://svara.id/Group%201.png',
								width: 599,
								height: 392,
								alt: 'Svara Product'
							},
							{
								url: 'https://svara.id/logo/logo.png',
								width: 142,
								height: 142,
								alt: 'Svara Innovation Svara Apps'
							},
							{
								url: 'https://svara.id/logo/SVARA%20B2B%20LOGO-COLORED-03.png',
								width: 142,
								height: 142,
								alt: 'Svara Innovation Svara Aircast'
							},
							{
								url: 'https://svara.id/logo/SVARA%20B2B%20LOGO-COLORED-02.png',
								width: 142,
								height: 142,
								alt: 'Svara Innovation Svara Soundsight'
							},
							{
								url: 'https://svara.id/logo/SVARA%20B2B%20LOGO-COLORED-01.png',
								width: 142,
								height: 142,
								alt: 'Svara Innovation Svara Castline'
							},
							{
								url: 'https://svara.id/logo/SVARA%20B2B%20LOGO-COLORED-04.png',
								width: 142,
								height: 142,
								alt: 'Svara Innovation Svara Ads'
							},
							{
								url: 'https://svara.id/partner/1.jpg',
								width: 400,
								height: 300,
								alt: 'UMG Idea Lab Partner SVARA'
							},
							{
								url: 'https://svara.id/partner/2.jpg',
								width: 400,
								height: 300,
								alt: 'Widya Wicara Partner SVARA'
							},
							{
								url: 'https://svara.id/partner/3.jpg',
								width: 400,
								height: 300,
								alt: 'WAMI (Wahana Musik Indonesia) Partner SVARA'
							},
							{
								url: 'https://svara.id/partner/4.jpg',
								width: 400,
								height: 300,
								alt: 'IDX Incubator Partner SVARA'
							},
							{
								url: 'https://svara.id/partner/5.jpg',
								width: 400,
								height: 300,
								alt: 'bahasa kita Partner SVARA'
							},
							{
								url: 'https://svara.id/partner/6.jpg',
								width: 400,
								height: 300,
								alt: 'triton Partner SVARA'
							},
							{
								url: 'https://svara.id/partner/7.jpg',
								width: 400,
								height: 300,
								alt: 'telkomsel Partner SVARA'
							},
							{
								url: 'https://svara.id/partner/8.jpg',
								width: 400,
								height: 300,
								alt: 'LPiK ITB Partner SVARA'
							},
							{
								url: 'https://svara.id/partner/9.jpg',
								width: 400,
								height: 300,
								alt: 'Ristekdikti Partner SVARA'
							},
							{
								url: 'https://svara.id/partner/10.jpg',
								width: 400,
								height: 300,
								alt: 'Institu Teknologi Bandung (ITB) Partner SVARA'
							},
							{
								url: 'https://svara.id/partner/11.jpg',
								width: 400,
								height: 300,
								alt: 'Solusi 247 Partner SVARA'
							}
						],
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
