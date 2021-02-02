import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
	footer: {
		paddingTop: 80,
		backgroundColor: '#6d7893',
		borderTop: 0,
		position: 'relative',
		fontFamily: 'Nunito'
	},
	container: {
		margin: '0 90px'
	},
	si_large: {
		margin: '0 10px 10px 0',
		width: '56px',
		height: '56px',
		fontSize: '30px',
		lineHeight: '54px !important'
	},
	social_icon: {
		display: 'block',
		float: 'left',
		textAlign: 'center !important',
		color: '#fff',
		cursor: 'pointer',
		fontStyle: 'normal',
		margin: '0 5px 5px 0',
		width: '40px',
		height: '40px',
		fontSize: '20px',
		lineHeight: '38px !important',
		// color: #555;
		textShadow: 'none',
		// border: 1px solid #aaa;
		// border-radius: 3px;
		overflow: 'hidden'
	},
	a: {
		textDecoration: 'none !important',
		backgroundColor: 'transparent'
	},
	si_rounded: {
		borderRadius: '50%'
	},
	icon: {
		pointerEvents: 'none',
		cursor: 'pointer',
		fontSize: 14,
		textAlign: 'center',
		display: 'inline-block',
		fontFamily: 'font-icons',
		textTransform: 'none',
		lineHeight: 'inherit',
		WebkitFontSmoothing: 'antialiased'
	},
	'@media (max-width: 991.98px)': {
		base: {
			height: 'auto !important',
			position: 'unset  !important',
			backgroundColor: '#fff'
		},
		container: {
			height: '100%',
			padding: '0 15px',
			margin: '0 auto',
			width: 750
		}
	},
	'@media (max-width: 767.98px) and (min-width: 576px)': {
		container: {
			width: 540
		}
	},
	'@media (max-width : 575.98px)': {
		container: {
			width: '100%',
			paddingLeft: '40px ',
			paddingRight: '40px '
		}
	}
}));

const Footer = (props) => {
	const classes = useStyles();

	return (
		<footer
			className={classes.footer}
			style={{ backgroundColor: props.colorMenu ? props.colorMenu : '#6d7893', borderTop: 0 }}
		>
			<div className={classes.container}></div>
			<Row style={{ margin: 0, paddingBottom: 20 }}>
				<Col md={2}>
					<img src="assets_SVARA_LOGO_ID_WHITE.png" style={{ height: 68 }} />
				</Col>
				<Col>
					<div style={{ color: '#fff', marginTop: 10, fontSize: 24 }}>
						<strong>Address</strong>
					</div>
					<p style={{ color: '#fff', width: 462, marginTop: 20, fontSize: 14 }}>
						Jl. Bungur No 09 Kel. Cipedes Kec. Sukajadi Bandung
						<br />
						(022) 82021303
					</p>
					<div style={{ color: '#fff', marginTop: 20, fontSize: 24 }}>
						<strong>Follow Us</strong>
					</div>
					<div style={{ color: '#fff', marginTop: 15, marginLeft: -15 }}>
						<a
							href="https://facebook.com/svaraofficial"
							className={clsx(classes.social_icon, classes.si_large, classes.si_rounded)}
							style={{ color: 'white', border: 0, alignItems: 'center' }}
						>
							<i class="icon-facebook"></i>
						</a>
						<a
							href="https://twitter.com/svara_official"
							className={clsx(classes.social_icon, classes.si_large, classes.si_rounded)}
							style={{ color: 'white', border: 0, alignItems: 'center' }}
						>
							<i class="icon-twitter"></i>
						</a>
						<a
							href="https://instagram.com/svara_official"
							className={clsx(classes.social_icon, classes.si_large, classes.si_rounded)}
							style={{ color: 'white', border: 0, alignItems: 'center' }}
						>
							<i class="icon-instagram"></i>
						</a>
					</div>
				</Col>
			</Row>
			{/* <div style={{ borderTop: '0.5px solid #B0BCDB', paddingBottom: 30 }}>
				<div className={clsx(classes.container, classes.clearfix)}>
					<div style={{ color: '#fff', fontFamily: 'Nunito', paddingTop: 20, textAlign: 'center' }}>
						Copyrights &copy; 2020 All Rights Reserved by PT SVARA INOVASI INDONESIA.
					</div>
				</div>
			</div> */}
		</footer>
	);
};

export default Footer;
