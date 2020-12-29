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
		marginBottom: 50,
		textAlign: 'center'
	},
	fontCaption: {
		fontSize: '22px',
		fontWeight: 300,
		fontFamily: 'Montserrat',
		lineHeight: 1.8,
		marginBottom: '30px',
		display: 'block',
		marginTop: 10,
		marginLeft: 200,
		marginRight: 200,
		textAlign: 'center'
	},
	fontTitle: {
		marginBottom: 10,
		fontWeight: 700,
		fontSize: '30px',
		letterSpacing: '-2px',
		fontFamily: 'Nunito',
		textAlign: 'center'
	}
});

export default function Desc(props) {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<h2 className={classes.fontTitle} style={{ color: props.colorFont ? props.colorFont : '#eee' }}>
				{props.title}
			</h2>
			<p className={classes.fontCaption} style={{ color: props.colorFont ? props.colorFont : '#eee' }}>
				{props.desc}
			</p>
		</Container>
	);
}