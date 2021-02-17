import React from 'react';
import Products from './carouselCard';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	body: {
		paddingTop: 100,
		width: '100%',
		height: 700
	},
	divTitle: {
		paddingTop: '120px',
		paddingLeft: '112px'
	},
	title: {
		// display: 'absolute'
		color: '#6D7893',
		fontSize: '34px',
		fontFamily: 'Nunito',
		textAlign: 'center',
		paddingBottom: '70px',
		fontWeight: 'bold'
	}
});

const Slider = () => {
	const classes = useStyles();
	return (
		<section className={classes.body}>
			<div className={classes.title}>Innovation SVARA Platform</div>
			<Products />
		</section>
	);
};

export default Slider;
