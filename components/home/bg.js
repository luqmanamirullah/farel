import React from 'react';
import { Carousel, CarouselItem, Container } from 'react-bootstrap';
import content from '../../contents/home.json';
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
				<div className={classes.title}>{content.title}</div>
				<div className={classes.tagline}>{content.headline}</div>
				<div className={classes.desc}>
					"{content.subheadline1}
					<br />
					{content.subheadline2}
					<br />
					{content.year}"
				</div>
			</div>
		</section>
	);
};

export default Slider;
