import React from 'react';
import { createUseStyles } from 'react-jss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import list from './ListFitur';
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
		textAlign: 'center'
	},
	Card: {
		border: 0
	},
	fontTitleFitus: {
		margin: 0,
		fontSize: '15px',
		fontWeight: 700,
		width: 300,
		letterSpacing: '1px'
	},
	fontDesc: {
		lineHeight: 1.8,
		color: '#999',
		fontSize: '0.875rem',
		fontFamily: 'Lato'
	}
});

export default function FiturList() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<h2 className={classes.fontTitle}>MODUL-MODUL SVARA ON-AIR</h2>
			<Row style={{ margin: 0 }}>
				{list.map((fitur) => {
					return (
						<Col xs={12} md={4}>
							<Row padding={1} margin={1}>
								<Row>
									<Col style={{ padding: 0, marginLeft: 30, width: 50 }}>
										<i className={fitur.icon} />
									</Col>
									<Col style={{ paddingLeft: 0 }}>
										<h2 className={classes.fontTitleFitus}>{fitur.title}</h2>
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
