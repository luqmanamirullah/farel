import React from 'react';
import { createUseStyles } from 'react-jss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import listFitur from '../../contents/aircast.json';
const useStyles = createUseStyles({
	root: {
		flexGrow: 1,
		width: '100%',
		padding: 30
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
			<h2 className={classes.fontTitle}>MODUL-MODUL SVARA AIRCAST</h2>
			<Row style={{ margin: 0 }}>
				{listFitur.listFitur.map((fitur) => {
					return (
						<Col xs={12} md={4}>
							<Row style={{ marginLeft: 15, marginRight: 15 }}>
								<Row className="align-items-center">
									<Col style={{ padding: 0, marginLeft: 30, width: 50 }}>
										<i className={fitur.icon} style={{ fontSize: '2em', color: '#437096' }} />
									</Col>
									<Col style={{ paddingLeft: 0 }}>
										<h2 className={classes.fontTitleFitur}>{fitur.title}</h2>
									</Col>
								</Row>
								<div>
									<p className={classes.fontDesc}>{fitur.desc}</p>
								</div>
							</Row>
						</Col>
					);
				})}
			</Row>
		</div>
	);
}
