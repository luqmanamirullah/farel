import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import content from '../../contents/home.json'; // import ImgSliders from '../..1.jpg';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	body: {
		backgroundColor: '#C5C9D4',
		width: '100%',
		height: 550
	},
	divTitle: {
		paddingTop: '120px',
		paddingLeft: '112px'
	},
	title: {
		// display: 'absolute'
		color: '#ffff',
		fontSize: '34px',
		fontFamily: 'Nunito'
	},
	tagline: {
		color: '#fff',
		fontSize: '18px',
		fontFamily: 'Nunito',
		paddingTop: '52px',
		width: 450,
		textAlign: 'justify'
	},
	desc: {
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
			<Row style={{ margin: 0 }}>
				<Col>
					<div className={classes.divTitle}>
						<div className={classes.title}>{content.titleCompany}</div>
						<div className={classes.tagline}>{content.deskripsi}</div>
					</div>
				</Col>
				<Col style={{ padding: 0 }}>
					<img src={content.productHighlight} style={{ paddingTop: '100px' }} />
				</Col>
			</Row>
		</section>
	);
};

export default Slider;
