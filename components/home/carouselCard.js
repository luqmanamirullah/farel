import React from 'react';
import { Carousel, Card, CardDeck, Row, Col } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	cardImage: {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '60%'
	},
	card: {
		width: 240,
		height: 330,
		borderRadius: '5%'
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
	Array.prototype.chunk = function (size) {
		const result = [];
		while (this.length) {
			result.push(this.splice(0, size));
		}
		return result;
	};

	return (
		<Carousel controls="false" indicators="false" nextIcon={nextIcon} prevIcon={prevIcon}>
			{content.innovation.chunk(3).map((chunk, idx) => (
				<Carousel.Item key={idx} className={idx === 0 ? 'active' : ''}>
					<Row style={{ margin: 0, backgroundColor: '#fff' }} className="justify-content-md-center">
						{chunk.map((item, idx2) => (
							<Col md={3} sm={6} xs={12}>
								<Card className={classes.card}>
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
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Slider;
