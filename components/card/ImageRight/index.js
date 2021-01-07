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
		fontFamily: 'Montserrat',
		lineHeight: 1.8,
		marginBottom: '30px',
		display: 'block',
		// marginBlockStart: '1em',
		marginBlockEnd: '1em',
		marginInlineStart: '0px',
		marginInlineEnd: '0px',
		boxSizing: 'border-box',
		textAlign: 'center'
	},
	fontTitle: {
		marginBottom: 10,
		fontWeight: 700,
		fontSize: '64px',
		letterSpacing: '-2px',
		fontFamily: 'Nunito',
		textAlign: 'center'
	},
	images: {
		marginRight: 70,
		marginLeft: 20
	},
	imageSize: {
		width: 500
	},
	'@media (max-width : 980.98px)': {
		root: {
			flexGrow: 1,
			marginLeft: 0,
			marginBottom: 20
		},
		images: {
			marginRight: 0,
			marginLeft: 0
		},
		imageSize: {
			display: 'block',
			marginLeft: 'auto',
			marginRight: 'auto',
			width: '50%'
		},
		fontCaption: {
			fontSize: '25pt',
			fontWeight: 200,
			fontFamily: 'Montserrat',
			lineHeight: 1.8,
			boxSizing: 'border-box',
			textAlign: 'center'
		},
		fontTitle: {
			marginBottom: 10,
			fontWeight: 600,
			fontSize: '45px',
			letterSpacing: '-2px',
			fontFamily: 'Nunito',
			textAlign: 'center'
		}
	}
});

export default function CenteredGrid(props) {
	const classes = useStyles();

	return (
		<Container className={classes.root} style={{ height: props.height ? props.height : null }}>
			<Row container style={{ margin: 0, marginTop: props.marginTop ? props.marginTop : null }}>
				<Col item xs={12} sm={12} lg={5} md={12} className={classes.images}>
					<img
						src={props.img}
						className={classes.imageSize}
						data-animate="fadeInUp"
						data-delay="100"
						alt="Chrome"
					/>
				</Col>
				<Col item xs={12} sm={12} lg={6} md={12}>
					<h2 className={classes.fontTitle} style={{ color: props.colorFont ? props.colorFont : '#eee' }}>
						{props.title}
					</h2>
					<p className={classes.fontCaption} style={{ color: props.colorFont ? props.colorFont : '#eee' }}>
						{props.desc}
					</p>
				</Col>
			</Row>
		</Container>
	);
}
