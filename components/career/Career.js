import clsx from 'clsx';
import React, { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import ClearFix from '../container/ClearFix';
import ContentWrap from '../wrapper/ContentWrap';
import HeadingBlock from '../wrapper/HeadingBlock';
const useStyles = createUseStyles({
	featuredBox: {
		marginTop: '50px',
		flex: '1 1',
		display: 'block',
		position: 'relative',
		marginRight: '4%',
		marginBottom: 50,
		float: 'left',

		'& h3': {
			fontSize: 16,
			fontWeight: 700,
			textTransform: 'uppercase',
			letterSpacing: 1,
			marginBottom: 0,
			color: '#333'
		},
		'& h3:after': {
			content: "''",
			display: 'block',
			margin: '20px auto',
			width: 30,
			borderTop: '2px solid #555',
			WebkitTransition: 'width .3s ease',
			OTransition: 'width .3s ease',
			transition: 'width .3s ease'
		},
		'& h3:hover:after': {
			width: 50
		},

		'& p': {
			lineHeight: 1.8,
			fontSize: 14,
			marginTop: 15,
			margin: '8px 0 0 0',
			color: '#999'
		}
	},
	boxContainer: {
		position: 'relative',
		marginTop: 0,
		padding: 0,
		textAlign: 'center'
	},
	boxIcon: {
		position: 'relative',
		marginTop: 0,
		padding: 0,
		textAlign: 'center',
		margin: '0 auto 30px',

		'& a': {
			backgroundColor: 'transparent',
			textDecoration: 'none !important',
			display: 'block',
			position: 'relative',
			width: '100%',
			height: '100%',
			color: '#fff'
		}
	},
	icon: {
		fontSize: 84,
		lineHeight: 1
	},
	'@media (max-width : 767.98px)': {
		featuredBox: {
			width: '100%',
			marginRight: 0,
			float: 'none',
			marginBottom: '50px !important'
		}
	}
});
const Career = () => {
	const classes = useStyles();
	const contents = [
		{
			title: "want to know if there's an open recruitment?",
			subtitle: (
				<span>
					Please check again when there is a notification on our social media at{' '}
					<a href="instagram.com/svara_official">svara_official</a>
				</span>
			),
			icon: <BigIcon iconClass="icon-time" />
		},
		{
			title: 'any question?',
			subtitle: (
				<span>
					You may simply send us an Email at <a href="mailto:info@svara.fm">info@svara.fm</a> or on our social
					media at <a href="instagram.com/svara_official">svara_official</a> if you need urgent support.
				</span>
			),
			icon: <BigIcon iconClass="icon-email3" />
		}
	];
	return (
		<section>
			<ClearFix style={{ marginBottom: 0 }}>
				<ContentWrap>
					<ClearFix>
						<HeadingBlock>
							<h1 style={{ fontFamily: 'Nunito' }}>currently there is no new employee recruitment</h1>
							<span style={{ fontFamily: 'Montserrat' }}>Please check back in sometime.</span>
						</HeadingBlock>
						<div style={{ display: 'flex', marginRight: '-4%' }}>
							{useMemo(() =>
								contents.map(
									({ title, subtitle, icon }) => (
										<FeaturedBox title={title} subtitle={subtitle} icon={icon} />
									),
									contents
								)
							)}
						</div>
					</ClearFix>
				</ContentWrap>
			</ClearFix>
		</section>
	);
};

const BigIcon = ({ iconClass }) => {
	const classes = useStyles();
	return <i className={clsx(iconClass, classes.icon)} style={{ color: '#A7A884' }} />;
};

const FeaturedBox = ({ title, subtitle, icon }) => {
	const classes = useStyles();
	return (
		<div className={classes.featuredBox}>
			<div className={classes.boxContainer}>
				<div className={classes.boxIcon}>
					<a href=" #">{icon}</a>
				</div>
				<h3 style={{ fontFamily: 'Nunito' }}>{title}</h3>
				<p style={{ fontFamily: 'Montserrat' }}>{subtitle}</p>
			</div>
		</div>
	);
};

export default Career;
