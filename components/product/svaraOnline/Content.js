import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import ClearFix from '~/components/container/ClearFix';
import ContentWrap from '~/components/wrapper/ContentWrap';
import HeadingBlock from '~/components/wrapper/HeadingBlock';

const useStyles = createUseStyles((theme) => ({
	content: {},
	lead: {
		textAlign: 'left',
		color: '#a45437',
		fontFamily: "'Lato', sans-serif",
		boxSizing: 'border-box',
		marginTop: 0,
		marginBottom: 30,
		fontWeight: 300,
		lineHeight: 1.8,
		fontSize: 17
	},
	contentImage: {
		overflow: 'hidden !important',
		position: 'relative',
		height: 426
	},
	deviceWrapper: {
		paddingRight: '4%',
		position: 'relative',
		textAlign: 'center !important'
	},
	deviceImage: {
		verticalAlign: 'middle',
		borderStyle: 'none',
		maxWidth: '100%',
		marginBottom: '30px !important',
		animationName: 'pulse',
		animationDuration: '1s',
		animationFillMode: 'both'
	},
	'@media (max-width : 992px)': {
		content: {
			marginTop: 40
		}
	}
}));

const Content = () => {
	const classes = useStyles();
	return (
		<section id="content" className={classes.content}>
			<WhatIsSvaraOnline />
			<InsideSvara />
			<AnotherDevice />
		</section>
	);
};

const WhatIsSvaraOnline = () => {
	const classes = useStyles();
	return (
		<div style={{ marginBottom: 40 }}>
			<ClearFix>
				<Row>
					<Col xl={5}>
						<HeadingBlock withBorder>
							<h1 style={{ textAlign: 'left', color: '#a45437' }}>SVARA ONLINE</h1>
							<span></span>
						</HeadingBlock>
						<p className={classes.lead}>
							Sebuah platform berupa Mobile Apps (Android, IoS), Website, dan IoT (Smart Speaker,
							Connected Car, Smart TV, etc) untuk user dalam menikmati berbagai jenis layanan konten radio
							live streaming, podcast, &amp; music and Video. beberapa fitur utama yaitu audio and video
							live streaming, live chat, social, user generate content, take offline, dan berbagai layanan
							membership.
						</p>
					</Col>
					<Col xl={7}>
						<div
							style={{
								height: 426,
								position: 'relative'
							}}
							className="ohidden"
							data-height-xl="426"
							data-height-lg="567"
							data-height-md="470"
							data-height-xs="183"
						>
							<img
								src="assets_mac.png"
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									width: '100%',
									height: '100%'
								}}
								data-animate="fadeInUp"
								data-delay="100"
								alt="Chrome"
								className="fadeInUp animated"
							/>
							<img
								src="assets_tab.png"
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									width: '100%',
									height: '100%'
								}}
								data-animate="fadeInUp"
								data-delay="400"
								alt="iPad"
								className="fadeInUp animated"
							/>
							<img
								src="assets_mobile.png"
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									width: '100%',
									height: '100%'
								}}
								data-animate="fadeInUp"
								data-delay="800"
								alt="iPad"
								className="fadeInUp animated"
							/>
						</div>
					</Col>
				</Row>
				<div
					style={{
						float: 'right',
						marginTop: 30
					}}
					data-animate="fadeInRight"
					className="fadeInRight animated"
				>
					<a href="https://play.google.com/store/apps/details?id=com.zamrud.radio.mobile.app.svara">
						<img src="apps/download1.png" style={{ marginRight: 10 }} />
					</a>
					<a href="https://apps.apple.com/us/app/svara/id1136129425">
						<img src="apps/download2.png" />
					</a>
				</div>
			</ClearFix>
		</div>
	);
};

const InsideSvara = () => {
	const classes = useStyles();
	const imageRef = useRef(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		setHeight(imageRef.current.clientHeight);
	}, [imageRef.current]);

	return (
		<div style={{ marginTop: 70 }}>
			<ClearFix>
				<ClearFix
					style={{
						position: 'relative !important',
						float: 'none !important',
						marginLeft: 'auto !important',
						marginRight: 'auto !important'
					}}
				>
					<div style={{ textAlign: 'center' }}>
						<h2 style={{ color: '#a45437' }}>Fitur-fitur unggulan SVARA</h2>
					</div>
					<div
						style={{
							position: 'relative',
							height: height,
							paddingBottom: 40
						}}
						data-height-xl="624"
						data-height-lg="518"
						data-height-md="397"
						data-height-sm="242"
						data-height-xs="154"
					>
						<img
							src="assets_fbrowser.png"
							style={{ position: 'absolute', top: 0, left: 0 }}
							data-animate="fadeInUp"
							data-delay="100"
							alt="Chrome"
							className="fadeInUp animated"
							ref={imageRef}
						/>
						<img
							src="assets_fmobile.png"
							style={{ position: 'absolute', top: 0, left: 0 }}
							data-animate="fadeInUp"
							data-delay="400"
							alt="iPad"
							className="fadeInUp animated"
						/>
						<img
							src="Group 13.png"
							style={{ position: 'absolute', top: 0, left: 0 }}
							data-animate="fadeIn"
							data-delay="1200"
							alt="iPad"
							className="fadeIn animated"
						/>
					</div>
				</ClearFix>
			</ClearFix>
		</div>
	);
};

const AnotherDevice = () => {
	const anotherDevices = [
		{
			image: 'apps/connectedCar.JPG',
			name: 'Connected Car',
			description: `Dashboard mobil di masa depan diprediksi akan berbasis internet, bukan lagi AM/FM. Saat ini Svara telah selesai mengembangkan platform untuk dapat menghadirkan layanan SVARA di Connected Car.`
		},
		{
			image: 'apps/smartSpeaker.JPG',
			name: ' Smart Speaker',
			description: `Svara memiliki kerjasama Eksklusif dengan Widya Smart Speaker, Speaker pintar berbasis Artificial Intellegence yang merupakan Speaker pertama di Indonesia yang dapat diperintah dengan Bahasa Indonesia.`
		},
		{
			image: 'apps/smartTV.JPG',
			name: 'Smart TV',
			description: `Svara juga bekerjasama dengan Metranet anak perusahaan Telkom, untuk menghadirkan layanan SVARA di Smart TV IndiBox`
		}
	];
	const classes = useStyles();

	return (
		<ContentWrap>
			<div style={{ textAlign: 'center' }}>
				<h2 style={{ color: '#a45437' }}>Mau denger SVARA di perangkat lain?</h2>
			</div>
			<ClearFix>
				<Row>
					{anotherDevices.map((device) => (
						<Col lg={4} sm={6} xs={12} key={device.name}>
							<SvaraDevice image={device.image} name={device.name} description={device.description} />
						</Col>
					))}
				</Row>
			</ClearFix>
		</ContentWrap>
	);
};

const SvaraDevice = ({ image, name, description }) => {
	const classes = useStyles();
	return (
		<div className={classes.imageWrapper}>
			<img
				data-animate="pulse"
				src={image}
				alt="Image"
				data-delay="100"
				className={clsx(classes.deviceImage, `pulse animated`)}
			/>
			<h4 style={{ marginBottom: 30, textAlign: 'center', color: '#a45437' }}>{name}</h4>
			<p style={{ lineHeight: 1.8, textAlign: 'center', color: '#a45437' }}>{description}</p>
		</div>
	);
};
export default Content;
