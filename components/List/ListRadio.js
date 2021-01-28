import React from 'react';
import { createUseStyles } from 'react-jss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import listRadio from '../../contents/aircast.json';
const useStyles = createUseStyles({
	root: {
		flexGrow: 1,
		width: '100%',
		padding: 30,
		marginBottom: 40
	},
	paper: {
		padding: 30,
		textAlign: 'center'
		// color: theme.palette.text.secondary
	},
	fontTitle: {
		marginBottom: 50,
		fontWeight: 600,
		textTransform: 'uppercase',
		letterSpacing: '1px',
		color: '#333',
		textAlign: 'center',
		fontFamily: 'Nunito',
		color: '#437096'
	},
	Card: {
		border: 0
	},
	fontTitleFitur: {
		margin: 0,
		fontSize: '15px',
		fontWeight: 700,
		width: 300,
		letterSpacing: '1px',
		fontFamily: 'Nunito',
		color: '#437096'
	},
	fontDesc: {
		lineHeight: 1.8,
		color: '#999',
		fontSize: '0.875rem',
		fontFamily: 'Montserrat',
		color: '#437096'
	}
});

export default function FiturList() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<h2 className={classes.fontTitle}>Radio Partners</h2>
			<Row style={{ margin: 0, paddingLeft: 20, paddingRight: 20 }} className="justify-content-md-center">
				{listRadio.listRadio.map((imageRadio) => {
					return (
						<Col xs={3} md={1}>
							<img src={imageRadio.image} />
						</Col>
					);
				})}
			</Row>
		</div>
	);
}
