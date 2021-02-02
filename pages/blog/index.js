import React from 'react';
import Blog from '~/components/blog/Blog';
import BasicLayout from '~/components/layouts/BasicLayout';
import { DefaultSeo } from 'next-seo';

const BlogPage = () => {
	return (
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
	);
};

export default BlogPage;
