import React from 'react';
import { createUseStyles } from 'react-jss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardTitle from '../Card/ImageRight';
import CardTitleLeft from '../Card/ImageLeft';
import Description from './desc';
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
				img="assets_undraw_best_place_r685.svg"
				title="SOUNDSIGHT"
				desc="Bangun suasana musik di tempat Anda"
				colorFont="#7fa882"
				height="460px"
				marginTop="95px"
			/>
			<CardTitleLeft
				headline="SVARA FOR RETAIL"
				description="Cara cepat, mudah dan terjangkau dari SVARA yang dibuat untuk membuat brand dan bisnis anda menjadi lebih dekat dengan pelanggan melalui musik dan konten. Dapat diaplikasikan pada tempat seperti Bar, Gym, Kafe, Hotel, Kantor, Restoran, Toko retail, Rumah sakit, Ruang tunggu, dll."
				colorFont="#fff"
				background="url('assets_Mask Group-dark.png')"
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
				title="TINGKATKAN PENJUALAN BRAND DAN BISNIS ANDA"
				desc="Dengan kemudahan dalam penerapan di seluruh cabang, didukung juga dengan pengaturan atmosfer musik dan konten sesuai dengan demografi dan kebiasaan target market merupakan salah satu cara terbaik meningkatkan penghasilan brand dan bisnis anda"
				colorFont="#7fa882"
			/>
			<ListFitur />
			<h2 style={{ color: '#7fa882', textAlign: 'center', marginBottom: 0, marginTop: 30 }}>
				CLIENT OF SVARA SOUNDSIGHT
			</h2>
			<ClearFix>
				<Row style={{ margin: 0 }}>
					<Col lg={6} md={6} xs={12}>
						<img className={classes.img} src="assets_partner_kfc.jpg" />
					</Col>
					<Col lg={6} md={6} xs={12}>
						<img className={classes.img} src="assets_partner_maxstore.jpg" />
					</Col>
				</Row>
			</ClearFix>
		</div>
	);
}
