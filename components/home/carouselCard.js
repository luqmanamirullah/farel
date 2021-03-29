import React from 'react';
import { useRouter } from 'next/router';
import { Carousel, Card, CardDeck, Row, Col } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import content from '../../contents/home.json';
import { down } from 'theme/breakpoints';
const useStyles = createUseStyles({
	cardImage: {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '60%'
	},
	card: {
		width: '100%',
		height: '100%',
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
		fontSize: '80%',
		height: '100%'
	},
	cardBody: {
		paddingTop: 0
	},
	cardInner: {
		margin: 15,
		minWidth: 0
	},
	[down('MD')]: {
		cardInner: {
			margin: 0,
			marginBottom: 15
		}
	},
	[down('XL')]: {
		cardInner: {
			margin: 0,
			marginBottom: 15
		},
		card: {
			height: 350
		}
	}
});

const Slider = () => {
	const classes = useStyles();
	const router = useRouter();

	return (
		<Row style={{ margin: 0, backgroundColor: '#fff' }} className="justify-content-md-center">
			{content.innovation.map((item, idx) => (
				<Col xl={2} md={6} sm={6} xs={12} className={classes.cardInner}>
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
