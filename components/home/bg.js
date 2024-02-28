import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselItem,
  Container,
  Grid,
  Button,
  Row,
  Col,
} from "react-bootstrap";
// import ReactAudioPlayer from "react-audio-player";
import content from "../../contents/home.json";
import { createUseStyles } from "react-jss";
import { down } from "theme/breakpoints";
import ClearFix from "../container/ClearFix";
import { useAudioPlayer } from "react-use-audio-player";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

const useStyles = createUseStyles({
  body: {
    backgroundImage: "url('bg.png')",
    backgroundRepeat: "center",
    backgroundSize: "cover",
    minHeight: 400,
    padding: "20px",
  },
  divTitle: {
    marginTop: "50px",
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 0,
    backgroundColor: "rgb(0,86,117,0.6)",
    width: "100%",
    maxWidth: "362px",
    height: "auto",
  },
  title: {
    color: "#FFFFFF",
    fontSize: "20px",
    fontFamily: "Poppins",
    fontWeight: 600,
    marginBottom: "5px",
  },
  tagline: {
    color: "#FFFFFF",
    fontSize: "16px",
    fontFamily: "Poppins",
    fontWeight: 600,
    lineHeight: "20px",
  },
  desc: {
    paddingTop: "10px",
    color: "#FFFFFF",
    fontSize: "14px",
    fontFamily: "Poppins",
    fontWeight: 300,
    paddingBottom: 16,
  },
  swiper: {
    width: "100%",
    height: "100%",
  },
  "swiper-slide": {
    textAlign: "center",
    width: "100% !important",
    fontSize: "18px",
    background: "#fff",

    /* Center slide text vertically */
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  swiperslide: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  // carouselArrow: {
  //   cursor: "pointer",
  //   fontSize: "20px", // Sesuaikan ukuran font sesuai kebutuhan
  //   marginRight: "5px", // Sesuaikan margin sesuai kebutuhan
  // },

  // Tambahkan gaya CSS untuk carousel di sini
  // "@global": {
  //   ".carousel-no-indicators .carousel-control-prev, .carousel-no-indicators .carousel-control-next":
  //     {
  //       bottom: "-40px",
  //     },
  //   ".carousel-no-indicators .carousel-indicators": {
  //     display: "none",
  //   },
  // },

  // Media query untuk layar berukuran kecil (misalnya: smartphone)
  "@media (max-width: 768px)": {
    body: {
      height: "auto",
    },
    divTitle: {
      width: "100%",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 0,
      padding: "20px",
    },
  },
});

const Slider = () => {
  const classes = useStyles();
  // const carouselRef = useRef(null); // Tambahkan ref untuk Carousel
  const player = useAudioPlayer();
  const [isPlaying, setIsPlaying] = React.useState(false);

  useEffect(() => {
    player.load(
      "https://stream-node0.rri.co.id/streaming/19/9119/rripurwokertopro2.mp3",
      {
        html5: true,
        format: "mp3",
      }
    );
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      player.pause();
      setIsPlaying(false);
    } else {
      player.play();
      setIsPlaying(true);
    }
  };

  // const prevSlide = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.prev();
  //   }
  // };

  // const nextSlide = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.next();
  //   }
  // };

  const iconClassName = isPlaying ? "icon-pause" : "icon-play";

  return (
    <section className={classes.body}>
      <ClearFix noBg>
        {/* <div
          style={{
            position: "absolute",
            opacity: 0.9,
            transform: "scaleX(-1)",
          }}
        >
          <video
            src={require("../../public/Comp_1_2_11.mp4")}
            autoPlay
            muted
            loop
            style={{ width: "100%" }}
          />
        </div> */}
        <div style={{ position: "relative" }}>
          <div style={{ position: "relative", zIndex: 100, height: "600px" }}>
            <div className={classes.divTitle}>
              <Row className="justify-content-md-left">
                <Col xs={14} md={9}>
                  <div className={classes.title}>{content.title}</div>
                  <div className={classes.tagline}>{content.headline}</div>
                  <div className={classes.desc}>{content.subheadline1}</div>
                  <Button
                    style={{
                      backgroundColor: "#FFFFFF",
                      justifyContent: "center",
                      fontWeight: 600,
                      color: "#377998",
                      borderRadius: 10,
                      marginRight: "24px",
                    }}
                    onClick={() => openInNewTab("https://app.svara.id")}
                  >
                    Web App
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#FFFFFF",
                      justifyContent: "center",
                      fontWeight: 600,
                      color: "#377998",
                      borderRadius: 10,
                    }}
                    onClick={() => openInNewTab("https://app.svara.id")}
                  >
                    Mobile App
                  </Button>
                </Col>
              </Row>
            </div>
            <div
              style={{
                backgroundColor: "#00AAEA",
                fontWeight: 600,
                color: "#FFFFFF",
                borderRadius: 30,
                cursor: "pointer",
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0,
                borderBottomRightRadius: 30,
                borderBottomLeftRadius: 30,
                display: "flex",
                alignItems: "center",
                paddingLeft: 40,
                width: "100%",
                height: "60px",
                maxWidth: "362px",
              }}
            >
              <i className={iconClassName} onClick={handlePlayPause} />
              <img
                src="Rectangle 1.svg"
                alt="Rectangle Icon"
                style={{ marginLeft: "16px" }}
              />
              <span style={{ marginLeft: "16px" }}>Stream Radio</span>
            </div>
            <Row className="justify-content-center mt-4">
              <Col>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p
                    className="left"
                    style={{
                      paddingLeft: 40,
                      fontWeight: 600,
                      color: "#377998",
                      fontFamily: "Poppins",
                      fontSize: 16,
                      marginBottom: 0,
                    }}
                  >
                    Contact Us
                  </p>
                  <a href="" style={{ marginLeft: "75px" }}>
                    <img src="assets_whatsapp.svg" alt="whatsapp icon" />
                  </a>
                  <a href="" style={{ marginLeft: "25px" }}>
                    <img src="assets_email.svg" alt="email icon" />
                  </a>
                </div>
              </Col>
            </Row>
          </div>

          <div
            className="swiper-container"
            style={{
              position: "absolute",
              top: 20,
              right: 0,
              width: "70%",
              height: "400px",
            }}
          >
            <Row className="justify-content-end mt-4">
              <Swiper
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="assets_carousel_1.png" alt="First slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets_carousel_2.png" alt="First slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets_carousel_3.png" alt="First slide" />
                </SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
              </Swiper>

              {/* <Carousel
                  ref={carouselRef} // Tambahkan ref yang telah dibuat sebelumnya
                  controls={false}
                  interval={5000}
                  className={`carousel-no-indicators`} // Gunakan kelas carousel-no-indicators
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Carousel.Item>
                    <img
                      src="assets_carousel_1.png"
                      alt="First slide"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="assets_carousel_2.png"
                      alt="Second slide"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="assets_carousel_3.png"
                      alt="Third slide"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Carousel.Item>
                </Carousel> */}
              {/* Tombol navigasi Carousel */}
              {/* <div className="d-flex justify-content-center mt-2">
                <span
                  className={`${classes.carouselArrow} carousel-arrow-left`}
                  onClick={prevSlide}
                >
                  &lt;
                </span>
                <span
                  className={`${classes.carouselArrow} carousel-arrow-right`}
                  onClick={nextSlide}
                >
                  &gt;
                </span>
              </div> */}
            </Row>
          </div>
        </div>
      </ClearFix>
    </section>
  );
};

export default Slider;
