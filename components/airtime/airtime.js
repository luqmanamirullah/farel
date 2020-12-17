import React from 'react';
import { createUseStyles } from 'react-jss';
import CardTitle from '../Card/ImageRight';
import CardTitleLeft from '../Card/ImageLeft';
import Description from '../Card/ImageRight/descriptionLeft';

const useStyles = createUseStyles({});

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div>
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
			/>
		</div>
	);
}
