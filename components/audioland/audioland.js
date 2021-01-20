import React from 'react';
import { createUseStyles } from 'react-jss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardTitle from '../Card/ImageRight';
import CardTitleLeft from '../Card/ImageLeft';
import Description from './desc';
import ListFitur from '../List/ListDesc';
import ClearFix from '../container/ClearFix';
import detail from '../../contents/soundsight.json';

const useStyles = createUseStyles({
	img: {
		marginLeft: 67,
		marginRight: 67
	}
});

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div>
			<CardTitle
				img={detail.section1.image}
				title={detail.section1.title}
				desc={detail.section1.desc}
				colorFont={detail.section1.colorFont}
				height="460px"
				marginTop="95px"
			/>
			<CardTitleLeft
				headline={detail.section2.headline}
				description={detail.section2.description}
				colorFont={detail.section2.colorFont}
				background={detail.section2.background}
				headingblock="true"
			/>
			{/* <Row style={{ margin: 0 }}>
				<Col>
					<div style={{ color: '#7fa882' }}>
						<span
							data-from="100"
							data-to="353"
							data-refresh-interval="50"
							data-speed="2000"
							style={{ color: '#7fa882' }}
						></span>
						K+
					</div>
					<h5 style={{ color: '#7fa882' }}>Lagu</h5>
				</Col>
			</Row> */}
			<Description
				title={detail.section3.title}
				desc={detail.section3.desc}
				colorFont={detail.section3.colorFont}
			/>
			<ListFitur data={detail.section4} color="#7fa882" />
			<h2 style={{ color: '#7fa882', textAlign: 'center', marginBottom: 0, marginTop: 30 }}>
				CLIENT OF SVARA SOUNDSIGHT
			</h2>
			<ClearFix>
				<Row style={{ margin: 0 }}>
					{detail.section5.map((partner) => {
						return (
							<Col lg={6} md={6} xs={12}>
								<img className={classes.img} src={partner.image} />
							</Col>
						);
					})}
				</Row>
			</ClearFix>
		</div>
	);
}
