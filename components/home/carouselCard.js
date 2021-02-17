import React from 'react';
import { useRouter } from 'next/router';
import { Carousel, Card, CardDeck, Row, Col } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import content from '../../contents/home.json';
const useStyles = createUseStyles({
	cardImage: {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '60%'
	},
	card: {
		width: 220,
		height: 330,
		borderRadius: '5%',
		cursor: 'pointer'
	},
	// cardDeck: {
	// 	paddingLeft: 127,
	// 	paddingRight: 138,
	// 	margin: 0,
	// 	backgroundColor: '#fff'
	// },
	cardText: {
		textAlign: 'center',
		fontFamily: 'Montserrat',
		fontSize: 13
	},
	cardBody: {
		paddingTop: 0
	}
});

const Slider = () => {
	const classes = useStyles();
	const router = useRouter();

	return (
		<Row style={{ margin: 0, backgroundColor: '#fff' }} className="justify-content-md-center">
			{content.innovation.map((item, idx) => (
				<Col md={2} sm={6} xs={12} style={{ margin: 15 }}>
					<Card className={classes.card} onClick={() => router.push(`/${item.title}`)}>
						<Card.Img className={classes.cardImage} variant="top" src={item.logo} />
						<Card.Body className={classes.cardBody}>
							<Card.Text className={classes.cardText} style={{ color: item.colorFont }}>
								{item.deskripsi}
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);
};

export default Slider;
