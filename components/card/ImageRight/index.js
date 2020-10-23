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
		marginTop: 50,
		marginLeft: 60,
		marginRight: 0,
		marginBottom: 50
	},
	fontCaption: {
		fontSize: '35pt',
		fontWeight: 400,
		fontFamily: 'Raleway',
		lineHeight: 1.8,
		marginBottom: '30px',
		display: 'block',
		// marginBlockStart: '1em',
		marginBlockEnd: '1em',
		marginInlineStart: '0px',
		marginInlineEnd: '0px',
		boxSizing: 'border-box'
	},
	fontTitle: {
		marginBottom: 10,
		fontWeight: 700,
		fontSize: '64px',
		letterSpacing: '-2px'
	}
});

export default function CenteredGrid(props) {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Row container style={{ margin: 0 }}>
				<Col item xs={5} style={{ marginRight: 60 }}>
					<img src={props.img} style={{ width: 500 }} data-animate="fadeInUp" data-delay="100" alt="Chrome" />
				</Col>
				<Col item xs={12} sm={6}>
					<h2 className={classes.fontTitle}>{props.title}</h2>
					<p className={classes.fontCaption}>{props.desc}</p>
				</Col>
			</Row>
		</Container>
	);
}
