import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import detail from '../../contents/apps.json';
import { createUseStyles } from 'react-jss';
import ClearFix from '~/components/container/ClearFix';
import { useWindowSize } from '~/components/context/WindowSizeContext';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'utils/hooks/useMedia';
const useStyles = createUseStyles({
	wrapper: {
		display: 'block',
		width: '100%',
		position: 'relative',
		height: 350,
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
		background: '#57CAFF',
		height: 'inherit'
	},
	appMockupImage: {
		// fontFamily: "'Lato', sans-serif",
		// visibility: 'visible',
		// boxSizing: 'border-box',
		// verticalAlign: 'middle',
		// borderStyle: 'none',
		// maxWidth: '100%',
		// display: 'block !important',
		// position: 'absolute',
		// left: 0,
		// bottom: 0
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
		marginTop: '-146px',
		display: "flex"
	},
	emphasisTitle: {
		visibility: 'visible',
		color: '#eee',
		boxSizing: 'border-box',
		marginTop: 20 ,
		'& h1': {
			textAlign: 'left',
			visibility: 'visible',
			boxSizing: 'border-box',
			lineHeight: "52.5px",
			margin: '0 0 30px 0',
			fontFamily: "Poppins",
			marginBottom: 0,
			fontWeight: 600,
			textTransform: 'none',
			letterSpacing: '0em',
			color: '#fff',
			fontSize: 35,			
		}
	},
	right: {
		boxSizing: 'border-box',
		float: 'right !important',
		marginBottom: '0 !important',
		width: '45%',
		display: 'flex',
		position: 'relative',
		marginRight: '4%',
		color: '#eee',
		animationName: 'fadeIn',
		animationDuration: '1s',
		animationFillMode: 'both',
		overflow: "visible",
    position: "relative"
	},
	left: {
		boxSizing: 'border-box',
		float: 'left !important',
		marginBottom: '0 !important',
		width: '50%',
		display: 'flex',
		position: 'relative',
		marginLeft: '3%',
		marginRight: '50px',
		color: '#eee',
		animationName: 'fadeIn',
		animationDuration: '1s',
		animationFillMode: 'both',
		zIndex: 2
	},
	'@media (max-width : 992px)': {
		wrapper: {
			// height: 'auto',
			// top: 0,
			// marginBottom: 0,
			// zIndex: 0
		},
		textWrapper: {
			// position: 'unset',
			// marginTop: 40
		},
		emphasisTitle: {
			// paddingBottom: 100
		}
	}
});

const Slider = () => {
	const classes = useStyles();
	// const [isSticky, setIsSticky] = useState(false);
	// const handleScroll = () => {
	// 	if (window.scrollY < 1) setIsSticky(false);
	// 	else setIsSticky(true);
	// };

	// const isHidden = useMediaQuery('(max-width : 992px)');

	// useEffect(() => {
	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => window.removeEventListener('scroll', handleScroll);
	// }, []);

	return (
		<section id="slider" className={classes.wrapper}>
			{/* <div
				className={classes.innerWrapper}
				style={{
					// transform: isSticky && !isHidden ? 'translateY(-76px)' : null
				}}
			> */}
				<div className={classes.background}>
					{/* <ClearFix style={{ height: '100%', backgroundColor: 'transparent' }}>
						{isHidden ? null : (
							<img src="iphone.png" alt="mockup image" className={classes.appMockupImage}></img>
						)} */}

						<div className={classes.textWrapper} 
						// style={{ left: isHidden ? 'unset' : 0 }}
						>
							<div
								className={classes.left}
							>
								<img style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
								}} src={detail.background}/>
							</div>
							<div
								className={classes.right}
							>
								<div className={classes.emphasisTitle}>
									<h1>
										{detail.headline} <br/>
									</h1>
									<h1 style={{ fontWeight: "700 !important" }}>{detail.strongText}
									<img style={{ marginLeft: 25, marginTop: 15, width: 350, height: 75, }} src={detail.logo}/>
									</h1>
								</div>
							</div>
						{/* </div>
					</ClearFix> */}
				</div>
			</div>
		</section>
	);
};

export default Slider;
