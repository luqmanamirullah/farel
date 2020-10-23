import React from 'react';
import { createUseStyles } from 'react-jss';
import CardTitle from '../Card/ImageLeft';
import List from '../List/List';

const useStyles = createUseStyles({});

export default function CenteredGrid() {
	const classes = useStyles();

	// const

	return (
		<div>
			<CardTitle
				img="opening.png"
				headline="SVARA ONAIR"
				description="Sebuah platform berupa Radio Automation atau Software as a Service (SaaS) untuk membantu industri radio dalam menjalankan proses bisnis radionya secara end-to-end agar lebih efektif dan efisien. Svara On-Air ini dapat digunakan mulai dari perencanaan, pelaksanaan, hingga pelaporan siaran. Platform ini tidak hanya dapat digunakan untuk Industri Radio am fm swasta namun juga untuk Radio komunitas berbasis internet dan juga seperti Fashion & Food Store dalam mengelola audio system di seluruh cabangnya."
			/>
			<List />
		</div>
	);
}
