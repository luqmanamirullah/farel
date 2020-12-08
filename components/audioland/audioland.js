import React from 'react';
import { createUseStyles } from 'react-jss';
import CardTitle from '../Card/ImageRight';
import Description from '../Card/ImageRight/descriptionLeft';

const useStyles = createUseStyles({});

export default function CenteredGrid() {
	const classes = useStyles();

	// const

	return (
		<div>
			<CardTitle
				img="assets_undraw_best_place_r685.svg"
				title="SOUNDSIGHT"
				desc="Bangun suasana musik di tempat Anda"
				colorFont="#7fa882"
			/>
			<Description />
		</div>
	);
}
