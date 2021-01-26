import React from 'react';
import Products from './carouselCard';
import content from '../../contents/home.json';
import { Row, Col } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	body: {
		width: '100%',
		height: 700,
		marginBottom: 80
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
		width: '100%'
		// height: 150
	}
});

const Slider = () => {
	const classes = useStyles();
	return (
		<section className={classes.body}>
			<div className={classes.title}>Partners</div>
			<Row style={{ margin: 0, paddingLeft: 120, paddingRight: 120 }} className="justify-content-md-center">
				{content.partner.map((data) => {
					return (
						<Col sm={6} md={3} xs={12}>
							<img className={classes.imgLogo} src={data.image} />
						</Col>
					);
				})}
			</Row>
		</section>
	);
};

export default Slider;
