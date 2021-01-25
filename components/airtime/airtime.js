import React from 'react';
import { createUseStyles } from 'react-jss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardTitle from '../Card/ImageRight';
import CardTitleLeft from '../Card/ImageLeft';
import Description from '../Card/ImageRight/descriptionLeft';
import ListFitur from '../List/ListRounded';
import ClearFix from '../container/ClearFix';
import detail from '../../contents/airtime.json';
const useStyles = createUseStyles({});

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div style={{ fontFamily: 'Nunito' }}>
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
				backgroundColor={detail.section2.backgroundColor}
				img={detail.section2.image}
			/>
			<div
				style={{
					color: '#91b3c2',
					fontSize: 30,
					fontWeight: 700,
					fontFamily: 'Nunito',
					textAlign: 'center',
					margin: '50px 0px 30px 0px'
				}}
			>
				{detail.section3.title}
			</div>
			<ListFitur data={detail.section3.benefit} />
			<div
				style={{
					backgroundColor: '#91b3c2',
					padding: '60px 90px 60px 90px',
					fontWeight: 550,
					color: 'white',
					fontSize: 30,
					textAlign: 'center',
					lineHeight: 2
				}}
			>
				{detail.section4.desc}
			</div>
			<div
				style={{
					color: '#91b3c2',
					fontSize: 30,
					fontWeight: 700,
					fontFamily: 'Nunito',
					textAlign: 'center',
					margin: '50px 0px 50px 0px'
				}}
			>
				KLIEN KAMI
			</div>
			<ClearFix style={{ marginBottom: 100 }}>
				<Row style={{ margin: 0 }} className="justify-content-md-center">
					{detail.section5.map((partner) => {
						return (
							<Col lg={2} md="auto" xs={12}>
								<img className={classes.img} src={partner.image} />
							</Col>
						);
					})}
				</Row>
			</ClearFix>
		</div>
	);
}
