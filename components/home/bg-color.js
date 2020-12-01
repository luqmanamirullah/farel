import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// import ImgSliders from '../..1.jpg';
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
	// console.log(ImgSliders);
	const classes = useStyles();
	return (
		<section className={classes.body}>
			{/* <img /> */}
			<Row style={{ margin: 0 }}>
				<Col>
					<div className={classes.divTitle}>
						<div className={classes.title}>PT. SVARA INOVASI INDONESIA</div>
						<div className={classes.tagline}>
							SVARA merupakan sebuah Startup yang bergerak dibidang media, broadcasting, & community
							Platform. Platform SVARA terbagi menjadi 2 macam, yaitu SVARA On-Air (Broadcasting
							Automation, SaaS) untuk Broadcaster memudahkan content management dan SVARA Online (Mobile
							Apps, Web Apps, dan IoT seperti Smart Speaker, Connected Car, dan SmartTV) untuk user
							memiliki experience baru menikmati berbagai konten seperti Streaming Radio, Playlist Music,
							Podcast, dan Video.
						</div>
					</div>
				</Col>
				<Col style={{ padding: 0 }}>
					<img src="Group 1.png" style={{ paddingTop: '100px' }} />
				</Col>
			</Row>
		</section>
	);
};

export default Slider;
