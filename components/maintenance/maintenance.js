import React from 'react';
import { createUseStyles } from 'react-jss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';

const useStyles = createUseStyles({
	root: {
		flexGrow: 1,
		marginTop: 80,
		marginLeft: 60,
		marginRight: 0,
		textAlign: 'center'
	},
	fontCaption: {
		fontSize: '16pt',
		fontWeight: 400,
		fontFamily: 'Raleway',
		lineHeight: 1.8,
		display: 'block',
		boxSizing: 'border-box'
	},
	fontTitle: {
		margin: 0,
		fontWeight: 700,
		fontSize: '35px',
		letterSpacing: '-2px'
	}
});

export default function MaintenanceCard(props) {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<img src="maintenance.svg" style={{ width: 400 }} data-animate="fadeInUp" data-delay="100" alt="Chrome" />
			<h2 className={classes.fontTitle}>PAGE UNDER CONSTRUCTION</h2>
			<p className={classes.fontCaption}>We are preparing our new product, Please wait for us!</p>
		</Container>
	);
}
