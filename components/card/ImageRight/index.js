import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const useStyles = createUseStyles({
  root: {
    marginTop: (props) => props.marginTop || 50, // If marginTop is not provided, default to 50px
    marginBottom: 30,
    position: "relative",
  },
  background: {
    position: "absolute",
    top: "-100px",
    left: 0,
    width: "630px",
    height: "160px",
    zIndex: -1,
  },
  backgroundBottom: {
    position: "absolute",
    bottom: "-30px",
    right: 0,
    width: "640px",
    height: "157px",
    zIndex: -1,
  },
  fontCaption: {
    fontSize: "40px",
    fontWeight: 400,
    fontFamily: "Poppins",
    lineHeight: 1.2,
    marginBottom: "110px",
    display: "block",
    boxSizing: "border-box",
  },
  fontTitle: {
    marginBottom: 10,
    fontWeight: 700,
    fontSize: "clamp(2.5rem, 8vw, 4rem)",
    letterSpacing: "-2px",
    fontFamily: "Poppins",
  },
  imageSize: {
    maxWidth: "100%",
    marginBottom: 50,
  },
  imageLogo: {
    width: 290,
  },
  "@media (max-width: 768px)": {
    fontCaption: {
      textAlign: "center",
      paddingBottom: "10px",
    },
    imageSize: {
      paddingTop: "70px",
    },
    imageLogo: {
      display: "flex",
      alignItems: "center",
      margin: "0 auto",
      width: 250,
    },
  },
});

const logoImage = ""
export default function CardTitle(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {props.background && <div className={classes.background} style={{ background: props.background }}></div>}
      {props.backgroundBottom && <div className={classes.backgroundBottom} style={{ background: props.backgroundBottom }}></div>}
      <Container>
        <Row
          style={{
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* Image Container */}
          <Col>
            <div>
              <img src={props.img} className={classes.imageSize} data-animate="fadeInUp" data-delay="100" alt="Image" />
            </div>
          </Col>

          {/* Text Container */}
          <Col lg={6}>
            <div>
              <img src={"assets_soundsight.png"} className={classes.imageLogo} data-animate="fadeInUp" data-delay="100" alt="Logo" />

              <span className={classes.fontCaption} style={{ color: props.colorFont ? props.colorFont : "#eee" }}>
                {props.desc}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}