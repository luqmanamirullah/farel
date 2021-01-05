import React from 'react';
import { Carousel, CarouselItem, Container } from 'react-bootstrap';
// import ImgSliders from '../..1.jpg';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	body: {
		backgroundImage: "url('bg.png')",
		height: 900
	},
	divTitle: {
		paddingTop: '280px',
		paddingLeft: '152px'
	},
	title: {
		// display: 'absolute'
		color: '#ffff',
		fontSize: '48px',
		fontFamily: 'Nunito'
	},
	tagline: {
		color: '#fff',
		fontSize: '36px',
		fontFamily: 'Nunito'
	},
	desc: {
		paddingTop: '30px',
		color: '#fff',
		fontSize: '24px',
		fontFamily: 'Montserrat'
	}
});

const Slider = () => {
	const classes = useStyles();
	return (
		<section className={classes.body}>
			{/* <img /> */}
			<div className={classes.divTitle}>
				<div className={classes.title}>SVARA</div>
				<div className={classes.tagline}>Media & Broadcasting Platform</div>
				<div className={classes.desc}>
					“Become World Leading Media &<br />
					Broadcasting Platform and Unicorn Startup in
					<br />
					2025”
				</div>
			</div>
		</section>
	);
};

export default Slider;
