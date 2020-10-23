import React from 'react';
import { createUseStyles } from 'react-jss';
import CardTitle from '../Card/ImageRight';
import Description from '../Card/ImageRight/descriptionLeft';

const useStyles = createUseStyles({});

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div>
			<CardTitle
				img="undraw_ideas_flow_cy7b.svg"
				title="AIRTIME ADS"
				desc="Cara mudah beriklan pada airtime radio melalui SVARA"
			/>
			<Description />
		</div>
	);
}
