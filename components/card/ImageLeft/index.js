import React from 'react';
import { createUseStyles } from 'react-jss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClearFix from '../../container/ClearFix';
import ContentWrap from '../../wrapper/ContentWrap';
import HeadingBlock from '../../wrapper/HeadingBlock';

const useStyles = createUseStyles({
	section: {
		fontWeight: 400,
		textAlign: 'left',
		fontSize: '0.875rem',
		lineHeight: 1.5,
		color: '#555',
		fontFamily: "'Lato', sans-serif",
		boxSizing: 'border-box',
		display: 'block',
		position: 'relative',
		overflow: 'hidden',
		marginBottom: 0
	},
	wrapper: {
		boxSizing: 'border-box',
		marginTop: '0',
		marginBottom: '0',
		position: 'relative',
		textAlign: 'center',
		margin: '60px 0',
		padding: '60px 0',
		overflow: 'hidden'
	},
	imageWrapper: {
		boxSizing: 'border-box',
		marginTop: '80px !important',
		marginBottom: '0 !important',
		display: 'block',
		position: 'relative',
		paddingRight: '4%'
	},
	image: {
		color: '#555',
		fontFamily: "'Lato', sans-serif",
		boxSizing: 'border-box',
		verticalAlign: 'middle',
		borderStyle: 'none',
		maxWidth: '100%'
	},
	paragraph: {
		marginTop: 0,
		marginBottom: 30,
		fontSize: 15,
		lineHeight: 1.8,
		textAlign: 'left',
		fontFamily: 'Montserrat'
	},
	svaraLogo: {
		textAlign: 'center !important',
		boxSizing: 'border-box',
		verticalAlign: 'middle',
		borderStyle: 'none',
		maxWidth: '100%'
	}
});

export default function CenteredGrid(props) {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<ClearFix>
				<Row style={{ marginRight: '-4%' }}>
					<Col lg={6} sm={6} xs={12}>
						<div className={classes.imageWrapper}>
							<HeadingBlock style={{ marginBottom: 15 }} withBorder>
								<h2
									style={{
										textAlign: 'left',
										fontFamily: 'Nunito',
										color: props.colorFont ? props.colorFont : '#eee'
									}}
								>
									{props.headline}
								</h2>
								<span
									id="subtitle"
									style={{
										textAlign: 'left'
									}}
								>
									{props.subheadline}
								</span>
							</HeadingBlock>
							<p
								className={classes.paragraph}
								style={{ color: props.colorFont ? props.colorFont : '#eee' }}
							>
								{props.description}
							</p>
						</div>
					</Col>
					<Col lg={6} sm={6} xs={12}>
						<div className={classes.imageWrapper}>
							<img src={props.img} alt="Image" />
						</div>
					</Col>
				</Row>
			</ClearFix>
		</div>
	);
}
