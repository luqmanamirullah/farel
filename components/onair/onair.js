import React from 'react';
import { createUseStyles } from 'react-jss';
import CardTitle from '../Card/ImageLeft';
import List from '../List/List';
import Radio from '../List/ListRadio';
import detail from '../../contents/aircast.json';
const useStyles = createUseStyles({});

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div>
			<CardTitle
				img={detail.image}
				headline={detail.headline}
				description={detail.description}
				colorFont={detail.colorFont}
			/>
			<List />
			<Radio />
		</div>
	);
}
