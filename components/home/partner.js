import React from 'react';
import Products from './carouselCard';
import { Row, Col } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	body: {
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
		paddingBottom: '90px',
		fontWeight: 'bold'
	},
	imgLogo: {
		width: 200,
		height: 150
	}
});

const Slider = () => {
	// console.log(ImgSliders);
	const classes = useStyles();
	return (
		<section className={classes.body}>
			<div className={classes.title}>Partners</div>
			<Row style={{ margin: 0, paddingLeft: 120, paddingRight: 120 }}>
				<Col>
					<img className={classes.imgLogo} src="partner/1.jpg" />
				</Col>
				<Col>
					<img className={classes.imgLogo} src="partner/2.jpg" />
				</Col>
				<Col>
					<img className={classes.imgLogo} src="partner/3.jpg" />
				</Col>
				<Col>
					<img className={classes.imgLogo} src="partner/4.jpg" />
				</Col>
			</Row>
			<Row style={{ margin: 0, paddingLeft: 120, paddingRight: 120 }}>
				<Col>
					<img className={classes.imgLogo} src="partner/5.jpg" />
				</Col>
				<Col>
					<img className={classes.imgLogo} src="partner/6.jpg" />
				</Col>
				<Col>
					<img className={classes.imgLogo} src="partner/7.jpg" />
				</Col>
				<Col>
					<img className={classes.imgLogo} src="partner/8.jpg" />
				</Col>
			</Row>
			<Row style={{ margin: 0, paddingLeft: 120, paddingRight: 120 }}>
				<Col>
					<img className={classes.imgLogo} src="partner/9.jpg" />
				</Col>
				<Col>
					<img className={classes.imgLogo} src="partner/10.jpg" />
				</Col>
				<Col>
					<img className={classes.imgLogo} src="partner/11.jpg" />
				</Col>
			</Row>
		</section>
	);
};

export default Slider;
