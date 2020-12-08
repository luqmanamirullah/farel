import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';

import { createUseStyles } from 'react-jss';
import ClearFix from '~/components/container/ClearFix';
import { useWindowSize } from '~/components/context/WindowSizeContext';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'utils/hooks/useMedia';
const useStyles = createUseStyles({
	wrapper: {
		display: 'block',
		width: '100%',
		overflow: 'hidden',
		position: 'relative',
		visibility: 'visible',
		top: '-100px',
		marginBottom: '-100px',
		height: 671,
		zIndex: -1,
		transition: 'transform .3s linear'
	},
	innerWrapper: {
		boxSizing: 'border-box',
		position: 'relative',
		width: '100%',
		willChange: 'transform',
		transition: 'transform .3s linear',
		left: 0,
		top: 0,
		height: 'inherit',
		transform: 'translateY(0px)'
	},
	background: {
		visibility: 'visible',
		boxSizing: 'border-box',
		background: 'url("assets_bg-apps.png") 0% 0% / cover',
		height: 'inherit'
	},
	appMockupImage: {
		fontFamily: "'Lato', sans-serif",
		visibility: 'visible',
		boxSizing: 'border-box',
		verticalAlign: 'middle',
		borderStyle: 'none',
		maxWidth: '100%',
		display: 'block !important',
		position: 'absolute',
		left: 0,
		bottom: 0
	},
	textWrapper: {
		visibility: 'visible',
		boxSizing: 'border-box',
		height: 'auto !important',
		left: 0,
		maxWidth: 'none !important',
		zIndex: 2,
		background: 'transparent',
		position: 'absolute',
		top: '50%',
		width: '100%',
		paddingTop: 0,
		paddingBottom: 0,
		marginTop: '-146px'
	},
	emphasisTitle: {
		visibility: 'visible',
		color: '#eee',
		boxSizing: 'border-box',
		margin: '0 0 50px',
		'& h1': {
			textAlign: 'left',
			visibility: 'visible',
			boxSizing: 'border-box',
			lineHeight: 1.5,
			margin: '0 0 30px 0',
			fontFamily: "'Raleway', sans-serif",
			marginBottom: 0,
			fontWeight: 400,
			textTransform: 'none',
			letterSpacing: '-2px',
			color: '#fff',
			fontSize: 52
		}
	},
	right: {
		boxSizing: 'border-box',
		float: 'right !important',
		marginBottom: '0 !important',
		width: '48%',
		display: 'block',
		position: 'relative',
		marginRight: '4%',
		color: '#eee',
		animationName: 'fadeIn',
		animationDuration: '1s',
		animationFillMode: 'both'
	},
	'@media (max-width : 992px)': {
		wrapper: {
			height: 'auto',
			top: 0,
			marginBottom: 0,
			zIndex: 0
		},
		textWrapper: {
			position: 'unset',
			marginTop: 40
		},
		emphasisTitle: {
			paddingBottom: 100
		}
	}
});

const Slider = () => {
	const classes = useStyles();
	const [isSticky, setIsSticky] = useState(false);
	const handleScroll = () => {
		if (window.scrollY < 1) setIsSticky(false);
		else setIsSticky(true);
	};

	const isHidden = useMediaQuery('(max-width : 992px)');

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<section id="slider" className={classes.wrapper}>
			<div
				className={classes.innerWrapper}
				style={{
					transform: isSticky && !isHidden ? 'translateY(-76px)' : null
				}}
			>
				<div className={classes.background}>
					<ClearFix style={{ height: '100%', backgroundColor: 'transparent' }}>
						{/* {isHidden ? null : (
							<img src="iphone.png" alt="mockup image" className={classes.appMockupImage}></img>
						)} */}

						<div className={classes.textWrapper} style={{ left: isHidden ? 'unset' : 0 }}>
							<div
								className={classes.right}
								{...(isHidden ? { style: { width: '100%', marginRight: 0 } } : {})}
							>
								<div className={classes.emphasisTitle}>
									<h1 {...(isHidden ? { style: { fontSize: 40 } } : {})}>
										The new way to listen to your favorite radio, music and podcast. Try using{' '}
										<strong>SVARA</strong> Apps.
									</h1>
								</div>
							</div>
						</div>
					</ClearFix>
				</div>
			</div>
		</section>
	);
};

export default Slider;
