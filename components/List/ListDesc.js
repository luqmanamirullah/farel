import React from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClearFix from '../container/ClearFix';
import ContentWrap from '../wrapper/ContentWrap';
import list from './ListDescription';

const useStyles = createUseStyles({
	headingBlock: {
		fontWeight: 400,
		fontSize: '0.875rem',
		lineHeight: 1.5,
		color: '#555',
		fontFamily: "'Lato',sans-serif",
		boxSizing: 'border-box',
		borderBottom: 'none ',
		textAlign: 'center ',
		marginBottom: 0,

		'& h1': {
			fontSize: 32
		},

		'& h1,h2,h3': {
			marginBottom: 0,
			fontWeight: 700,
			textTransform: 'uppercase',
			letterSpacing: 1,
			color: '#333'
		},

		'& span': {
			lineHeight: 1.5,
			fontFamily: "'Lato', sans-serif",
			boxSizing: 'border-box',
			fontSize: 22,
			display: 'block',
			marginTop: 10,
			fontWeight: 300,
			color: '#777'
		},
		'&#withBorder span:after': {
			content: "''",
			display: 'block',
			marginTop: 10,
			width: 340,
			borderTop: '2px solid #444',
			boxSizing: 'border-box'
		}
	},
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
		fontFamily: 'Montserrat',
		color: 'black',
		width: 340
	},
	svaraLogo: {
		textAlign: 'center !important',
		boxSizing: 'border-box',
		verticalAlign: 'middle',
		borderStyle: 'none',
		maxWidth: '100%'
	}
});

export default function CenteredGrid(props, color) {
	const classes = useStyles();
	const HeadingBlock = ({ children, className, style, withBorder }) => {
		const classes = useStyles();
		return (
			<div className={clsx(classes.headingBlock, className)} style={style} id={withBorder && 'withBorder'}>
				{children}
			</div>
		);
	};

	return (
		<div className={classes.wrapper}>
			<ClearFix>
				<Row style={{ marginRight: '-4%' }}>
					{list.map((fitur) => {
						return (
							<Col lg={4} md={4} xs={12}>
								<HeadingBlock style={{ marginBottom: 15 }} withBorder>
									<h4
										style={{
											textAlign: 'left',
											fontFamily: 'Nunito',
											color: 'black',
											margin: 0,
											fontSize: '20px'
										}}
									>
										{fitur.title}{' '}
										<strong style={{ color: color ? color : '#7fa882' }}>{fitur.sub}</strong>.
									</h4>
									<span></span>
								</HeadingBlock>
								<p className={classes.paragraph} style={{ color: color ? color : '#889b8a' }}>
									{fitur.desc}
								</p>
							</Col>
						);
					})}
				</Row>
			</ClearFix>
		</div>
	);
}
