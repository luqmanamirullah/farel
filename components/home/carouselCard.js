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
	cardDeck: {
		paddingLeft: 127,
		paddingRight: 138
	},
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
	// console.log(ImgSliders);
	const classes = useStyles();
	return (
		<Carousel controls="false" indicators="false">
			<Carousel.Item>
				<CardDeck className={classes.cardDeck}>
					<Card className={classes.card}>
						<Card.Img className={classes.cardImage} variant="top" src="logo/logo.png" />
						<Card.Body className={classes.cardBody}>
							<Card.Text className={classes.cardText} style={{ color: '#A55437' }}>
								Broadcasting platform for listeners to enjoy a new way of listening to radio, music and
								podcasts. There are several main features offered, including; Modernization on-air
								platform, monetize on-line platform.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className={classes.card}>
						<Card.Img
							className={classes.cardImage}
							variant="top"
							src="logo/SVARA B2B LOGO-COLORED-03.png"
						/>
						<Card.Body className={classes.cardBody}>
							<Card.Text className={classes.cardText} style={{ color: '#437096' }}>
								Broadcaster automation platform for broadcast professionals, both AM / FM radio and TV,
								integrating all end-to-end broadcast activities comprehensively.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className={classes.card}>
						<Card.Img
							className={classes.cardImage}
							variant="top"
							src="logo/SVARA B2B LOGO-COLORED-02.png"
						/>
						<Card.Body className={classes.cardBody}>
							<Card.Text className={classes.cardText} style={{ color: '#7FA882' }}>
								Audio background or visual services can be in the form of music, information, and
								promotional ads. Can be implemented in various business locations such as bars, gyms,
								cafes, hotels etc.
							</Card.Text>
						</Card.Body>
					</Card>
				</CardDeck>
			</Carousel.Item>
			<Carousel.Item>
				<CardDeck className={classes.cardDeck}>
					<Card className={classes.card}>
						<Card.Img
							className={classes.cardImage}
							variant="top"
							src="logo/SVARA B2B LOGO-COLORED-01.png"
						/>
						<Card.Body className={classes.cardBody}>
							<Card.Text className={classes.cardText} style={{ color: '#ECAC55' }}>
								A platform as well as a community-based communication media, which supports remote /
								online activities. Intended to support creativity and a means of self-expression.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className={classes.card}>
						<Card.Img
							className={classes.cardImage}
							variant="top"
							src="logo/SVARA B2B LOGO-COLORED-04.png"
						/>
						<Card.Body className={classes.cardBody}>
							<Card.Text className={classes.cardText} style={{ color: '#92B4C3' }}>
								Service to provide advertising spots on analog and digital media. Facilitate access to
								target audiences through promotional activities by utilizing media networks that have
								collaborated with Svara in Indonesia.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className={classes.card} style={{ border: 0 }}></Card>
				</CardDeck>
			</Carousel.Item>
		</Carousel>
	);
};

export default Slider;
