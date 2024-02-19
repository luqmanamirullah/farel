import React, { useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  Container,
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


const useStyles = createUseStyles({
  body: {
    backgroundImage: "url('Group.png')",
    backgroundRepeat: "center",
    backgroundSize: "cover",
    height: "542px",
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
    color: "#377998",
    fontSize: "48px",
    fontFamily: "Poppins",
    fontWeight: 600,
  },
  tagline: {
    color: "#377998",
    fontSize: "36px",
    fontFamily: "Poppins",
    fontWeight: 600,
  },
  desc: {
    paddingTop: "30px",
    color: "#377998",
    fontSize: "20px",
    fontFamily: "Poppins",
    fontWeight: 400,
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
  img: {
    marginBottom: 20,
    width: "100%",
  }
});

const Slider = () => {
  const classes = useStyles();
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
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
  }

  const iconClassName = isPlaying ? "icon-pause" : "icon-play";

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
                  backgroundColor: "transparent",
                  borderColor: "#000",
                  justifyContent: "center",
                  fontWeight: 600,
                  color: "#377998",
                  borderRadius: 20,
                }}
                onClick={() => openInNewTab("https://app.svara.id")}
              >
                  Explore Web App{" "}           
              </Button>
              <i
                  className={iconClassName}
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#000",
                    justifyContent: "center",
                    fontWeight: 600,
                    color: "#377998",
                    borderRadius: 30,
                    marginLeft: 15,
                    padding: 5,
                    border: "1px solid #000",
                    position: "absolute",
                    paddingRight: 10,
                    paddingLeft: 10,
                    cursor: "pointer",
                  }}
                onClick={handlePlayPause}
                />          
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
              <img className={classes.img} src="/mockup 1.png" style={{ height: 375, width: 357 }} />
            </Col>
          </Row>
        </div>
      </ClearFix>
    </section>
  );
};

export default Slider;
