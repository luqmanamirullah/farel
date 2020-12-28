import React from 'react';
import { createUseStyles } from 'react-jss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Description from '../audioland/desc';
import CardTitle from '../Card/ImageRight';
import CardTitleLeft from '../Card/ImageLeft';
import ListFitur from '../List/ListDesc';
import ClearFix from '../container/ClearFix';

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
				img="assets_undraw_conference_call_b0w6.svg"
				title="CASTLINE"
				desc="For Community (Non-AM/FM Radio, Online Radio & TV)"
				colorFont="#ecac55"
				height="460px"
				marginTop="95px"
			/>
			<CardTitleLeft
				headline="SVARA CASTLINE"
				description="SVARA Platform implementation in various communities, including but not limited to Citizen Online Radio, Campus Radio, Government Radio"
				colorFont="#fff"
				background="url('assets_SVARA Pitchdeck V.1a - Id (2).jpg')"
				headingblock="true"
			/>
			<Description
				desc="Dengan kemudahan dalam penerapan di seluruh Total Partnership SVARA Castline: 10 Online Radios (Radio UNISBA, Radio BKKBN, Radio PAUD, Radio Batak Diaro, Radio Sekolah Al- Mumtaz, Radio Sekolah Al-Mustarih, School Radio Nur Hikmah, Radio IBIMA, Radio IOI, Radio BKTI) The average SVARA Platform license fee is 50 million - 200 million / year"
				colorFont="#ecac55"
			/>
			<ListFitur color="#ecac55" />
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
