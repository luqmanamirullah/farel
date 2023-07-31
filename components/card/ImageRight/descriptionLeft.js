import React from 'react';
import { createUseStyles } from 'react-jss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const useStyles = createUseStyles({
	root: {
		width: '100%',
		flexGrow: 1,
		paddingTop: 50,
		paddingLeft: 60,
		paddingRight: 0,
		paddingBottom: 50,
		backgroundColor: '#f9f9f9',
		backgroundImage: "url('assets_Mask Group-dark.png')"
	},
	fontCaption: {
		fontSize: '30px',
		fontWeight: 600,
		fontFamily: 'Raleway',
		lineHeight: 1.5
		// margin: '0 0 30px 0'
		// display: 'block',
		// marginBlockStart: '1em',
		// marginBlockEnd: '1em',
		// marginInlineStart: '0px',
		// marginInlineEnd: '0px',
		// boxSizing: 'border-box'
	},
	fontTitle: {
		fontWeight: 'bolder',
		fontSize: '33px',
		lineHeight: 1.5,
		fontFamily: 'Raleway',
		paddingLeft: 15
	}
});

export default function CenteredGrid(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<h1 className={classes.fontTitle}>SVARA FOR RETAIL</h1>
			<Row style={{ margin: 0 }}>
				<Col item xs={12} sm={7}>
					<p className={classes.fontCaption}>
						Cara cepat, mudah dan terjangkau dari SVARA yang dibuat untuk membuat brand dan bisnis anda
						menjadi lebih dekat dengan pelanggan melalui musik dan konten. Dapat diaplikasikan pada tempat
						seperti Bar, Gym, Kafe, Hotel, Kantor, Restoran, Toko retail, Rumah sakit, Ruang tunggu, dll.
					</p>
				</Col>
				{/* <Col item xs={5}>
					<img
						src="undraw_online_ad_mg4t.svg"
						style={{ width: 500 }}
						data-animate="fadeInUp"
						data-delay="100"
						alt="Chrome"
					/>
				</Col> */}
			</Row>
		</div>
	);
}
