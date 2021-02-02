import Head from 'next/head';
import BasicLayout from '~/components/layouts/BasicLayout';
import styles from '../styles/Home.module.css';
import Slider from '~/components/Slider/slide';
import Home from '~/components/home/home';
import { DefaultSeo } from 'next-seo';
import SEO from './next-seo.config';

export default function HomePage() {
	return (
		<BasicLayout>
			<DefaultSeo {...SEO} />
			<Home />
		</BasicLayout>
	);
}
