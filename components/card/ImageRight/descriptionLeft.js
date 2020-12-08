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
		backgroundImage: ''
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
			<h1 className={classes.fontTitle}>PROMOSIKAN BRAND ANDA LEBIH LUAS</h1>
			<Row style={{ margin: 0 }}>
				<Col item xs={12} sm={7}>
					<p className={classes.fontCaption}>
						Sampaikan pesan brand anda lebih luas dengan beriklan di radio. Tingkatkan frekuensi pesan yang
						dikomunikasikan sehingga terciptanya brand awareness terhadap produk dan iklan yang sedang di
						promosikan.
					</p>
				</Col>
				<Col item xs={5}>
					<img
						src="undraw_online_ad_mg4t.svg"
						style={{ width: 500 }}
						data-animate="fadeInUp"
						data-delay="100"
						alt="Chrome"
					/>
				</Col>
			</Row>
		</div>
	);
}
