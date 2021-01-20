import React from 'react';
import { createUseStyles } from 'react-jss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Description from '../audioland/desc';
import CardTitle from '../Card/ImageRight';
import CardTitleLeft from '../Card/ImageLeft';
import ListFitur from '../List/ListDesc';
import ClearFix from '../container/ClearFix';
import detail from '../../contents/castline.json';

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
			<Description desc={detail.section3.desc} colorFont={detail.section3.colorFont} />
			<ListFitur color="#ecac55" data={detail.section4} />
			{/* <ClearFix>
				<Row style={{ margin: 0 }}>
					<Col lg={6} md={6} xs={12}>
						<img className={classes.img} src="assets_partner_kfc.jpg" />
					</Col>
					<Col lg={6} md={6} xs={12}>
						<img className={classes.img} src="assets_partner_maxstore.jpg" />
					</Col>
				</Row>
			</ClearFix> */}
		</div>
	);
}
