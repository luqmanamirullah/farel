export default [
	{
		name: 'Home',
		slug: '/'
	},
	{
		name: 'Product',
		slug: '#',
		childrens: [
			{
				name: 'SVARA for radio am fm',
				slug: '/svaraonair',
				as: '/svaraonair'
			},
			{
				name: 'SVARA for user',
				slug: '/product/svaraonline',
				as: '/product/svaraonline'
			},
			{
				name: 'SVARA for retail store',
				slug: '/audioland',
				as: '/audioland'
			},
			{
				name: 'SVARA for comunity',
				slug: '/maintenance',
				as: '/maintenance'
			},
			{
				name: 'Radio Airtime',
				slug: '/svaraairtime',
				as: '/svaraairtime'
			}
		]
	},
	{
		name: 'Blog',
		slug: '/blog'
	},
	{
		name: 'About',
		slug: '/profile'
	},
	{
		name: 'Join Us',
		slug: '/career'
	},
	{
		name: 'Contact Us',
		slug: '/contact'
	}
];
