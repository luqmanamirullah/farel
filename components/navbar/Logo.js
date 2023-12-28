import { createUseStyles } from 'react-jss';
import Link from 'next/link';
import { down } from 'theme/breakpoints';

const useStyles = createUseStyles((theme) => ({
	link: {
		fontSize: 36,
		lineHeight: '100%',
		boxSizing: 'border-box',
		backgroundColor: 'transparent',
		textDecoration: 'none !important',
		color: '#000',
		display: 'block',
		height: '100%'
	},
	logo: {
		boxSizing: 'border-box',
		position: 'relative',
		float: 'right',
		fontSize: 36,
		lineHeight: '100%',
		paddingRight: 10,
		marginRight: 10,
		opacity: 1,
		marginTop: 20,
		height: '60%',
		transition: 'height .4s ease, margin .4s ease, opacity .2s .2s ease'
	},
	imageLogo: {
		transition: 'height .4s ease, opacity .3s ease'
	},
	'@media (max-width: 991.98px)': {
		logo: {
			display: 'block',
			height: "60%",
			// width: '50px',
			float: 'none',
			margin: '0 auto 0',
			maxWidth: 'none',
			textAlign: 'center',
			border: 0,
			padding: 0
		},
		link: {
			display: 'inline-block'
		},
		imageLogo: {
			height: '70% !important'
		}
	},
	[down('MD')]: {
		imageLogo: {
			height: '60% !important'
		},
		link: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}
	}
}));

const Logo = ({ isSticky, logo, transparant, whiteLogo }) => {
	const classes = useStyles();
	return (
		<div
			className={classes.logo}
			// style={{ margin: isSticky ? 0 : '0 auto 0' }}
		>
			<Link href="/" passHref>
				<a className={classes.link}>
					<img
						// src={isSticky && transparant ? (whiteLogo ? whiteLogo : logo) : 'Asset 1.png'}
						src={transparant && !isSticky ? whiteLogo : logo ? logo : 'Svara_innovation.png'}
						alt="Svara Logo"
						className={classes.imageLogo}
						style={{
							padding: !isSticky ? 8 : '0px 10px 60px 10px',
							height: isSticky ? '100px' : '100%'
						}}
					></img>
				</a>
			</Link>
		</div>
	);
};

export default Logo;
