import Head from 'next/head';
import BasicLayout from '~/components/layouts/BasicLayout';
import styles from '../styles/Home.module.css';
import Slider from '~/components/Slider/slide';
import Home from '~/components/home/home';

export default function HomePage() {
	return (
		<BasicLayout>
			<Home />
		</BasicLayout>
	);
}
