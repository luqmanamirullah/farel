import React from "react";
import {
  Carousel,
  CarouselItem,
  Container,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player";
import content from "../../contents/home.json";
import { createUseStyles } from "react-jss";
import { down } from "theme/breakpoints";
import ClearFix from "../container/ClearFix";

const useStyles = createUseStyles({
  body: {
    backgroundImage: "url('bg.png')",
    backgroundRepeat: "center",
    backgroundSize: "cover",
    height: 700,
  },
  divTitle: {
    marginTop: "90px",
    paddingTop: 60,
    paddingBottom: 46,
    paddingLeft: 60,
    backgroundColor: "rgb(255,255,255,.6)",
    borderRadius: 30,
  },
  title: {
    // display: 'absolute'
    color: "#000000",
    fontSize: "48px",
    fontFamily: "Poppins",
    fontWeight: 600,
  },
  tagline: {
    color: "#000",
    fontSize: "36px",
    fontFamily: "Poppins",
    fontWeight: 600,
  },
  desc: {
    paddingTop: "30px",
    color: "#000",
    fontSize: "24px",
    fontFamily: "Poppins",
    fontWeight: 600,
    paddingBottom: 16,
  },
  [down("MD")]: {
    divTitle: {
      padding: 24,
    },
    body: {
      height: "100%",
      padding: "64px 0px",
    },
  },
});

const Slider = () => {
  const classes = useStyles();
  return (
    <section className={classes.body}>
      <ClearFix noBg>
        {/* <img /> */}
        <div className={classes.divTitle}>
          <Row className="justify-content-md-center">
            <Col xs={12} md={8}>
              <div className={classes.title}>{content.title}</div>
              <div className={classes.tagline}>{content.headline}</div>
              <div className={classes.desc}>"{content.subheadline1}"</div>
              <Button
                style={{
                  backgroundColor: "#000",
                  borderColor: "#000",
                  justifyContent: "center",
                }}
              >
                Explore Web App{" "}
                <i
                  class="icon-long-arrow-alt-right"
                  style={{ paddingLeft: 10 }}
                />
              </Button>
              {/* <div style={{ marginTop: 73 }}>
                <figure>
                  <figcaption>Listen to the T-Rex:</figcaption>
                  <audio
                    controls
                    src="https://svara-stream.radioddns.net:8443/rmi_studio"
                  >
                    <a href="/media/cc0-audio/t-rex-roar.mp3">Download audio</a>
                  </audio>
                </figure>
              </div> */}
            </Col>
            <Col xs={12} md={4}>
              {" "}
              <img src="/asset-home.png" style={{ height: 375, width: 357 }} />
            </Col>
          </Row>
        </div>
      </ClearFix>
    </section>
  );
};

export default Slider;
