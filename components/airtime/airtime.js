import React from 'react';
import { createUseStyles } from 'react-jss';
import CardTitle from '../Card/ImageRight';
import CardTitleLeft from '../Card/ImageLeft';
import Description from '../Card/ImageRight/descriptionLeft';

const useStyles = createUseStyles({});

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div style={{ fontFamily: 'Nunito' }}>
			<CardTitle
				img="assets_undraw_ideas_flow_cy7b.svg"
				title="AIRTIME ADS"
				desc="Cara mudah beriklan pada airtime radio melalui SVARA"
				colorFont="#91b3c2"
				height="460px"
				marginTop="95px"
			/>
			<CardTitleLeft
				headline="PROMOSIKAN BRAND ANDA LEBIH LUAS"
				description="Sampaikan pesan brand anda lebih luas dengan beriklan di radio. Tingkatkan frekuensi pesan yang dikomunikasikan sehingga terciptanya brand awareness terhadap produk dan iklan yang sedang di promosikan."
				colorFont="#fff"
				backgroundColor="#91b3c2"
				img="assets_undraw_online_ad_mg4t.svg"
			/>
			KEUNTUNGAN BERIKLAN MELALUI SVARA
			{/* list */}
			<div
				style={{
					backgroundColor: '#91b3c2',
					padding: 25,
					fontWeight: 550,
					color: 'white',
					fontSize: 25,
					textAlign: 'center'
				}}
			>
				SVARA telah bekerjasama dengan lebih dari 110 radio di Seluruh Indonesia dan memiliki lebih dari 25.000
				airtime/bulan (1 airtime berarti 1 menit beriklan di radio secara on-air)
			</div>
			KLIEN KAMI
		</div>
	);
}
