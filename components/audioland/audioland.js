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
				img="undraw_media_player_ylg8.svg"
				title="AUDIOLAND"
				desc="Bangun suasana musik di tempat anda"
			/>
			<Description />
		</div>
	);
}
