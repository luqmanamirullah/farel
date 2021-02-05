import Head from 'next/head';
import React from 'react';
import Blog from '~/components/blog/Blog';
import BasicLayout from '~/components/layouts/BasicLayout';
import { DefaultSeo } from 'next-seo';

const BlogPage = () => {
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
						site_name: 'Svara Blog News',
						description: 'SVARA Blog News Highlight'
					}}
					twitter={{
						handle: '@svara_offcial',
						site: '@svara_official',
						cardType: 'app'
					}}
				/>
				<Blog />
			</BasicLayout>
		</div>
	);
};

export default BlogPage;
