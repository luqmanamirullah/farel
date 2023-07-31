import React from 'react';
import { Carousel, CarouselItem, Container } from 'react-bootstrap';
// import ImgSliders from '../..assets_bg-apps.png';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	imgSlider: {
		width: '100%',
		height: '100%'
	}
});

const Slider = () => {
	const classes = useStyles();
	return (
		<section>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="assets_bg-apps.png"
						className={classes.imgSlider}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="assets_bg-apps.png"
						className={classes.imgSlider}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="assets_bg-apps.png"
						className={classes.imgSlider}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</section>
	);
};

export default Slider;
