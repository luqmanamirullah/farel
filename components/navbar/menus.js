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
				name: 'SVARA APPS',
				slug: '/product/svaraonline',
				as: '/product/svaraonline'
			},
			{
				name: 'SVARA AIRCAST',
				slug: '/svaraonair',
				as: '/svaraonair'
			},
			{
				name: 'SVARA SOUNDSIGHT',
				slug: '/audioland',
				as: '/audioland'
			},
			{
				name: 'SVARA CASTLINE',
				slug: '/maintenance',
				as: '/maintenance'
			},
			{
				name: 'Radio ADS',
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
