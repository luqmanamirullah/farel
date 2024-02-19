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
    logoSize: {
      width: "35%",
      marginTop: 15,
    },
  },
  "@media (min-width : 564px)": {
    fontCaption: {
      fontSize: 25,
    },
    imageSize: {
      width: "90%",
      height: "90%",
    },
    logoSize: {
      width: "45%",
      marginTop: 15,
    },
  },
  "@media (min-width : 768px)": {
    fontCaption: {
      fontSize: 30,
    },
    imageSize: {
      width: "95%",
      height: "95%",
    },
    logoSize: {
      width: "25%",
    },
  },
  "@media (min-width : 1024px)": {
    fontCaption: {
      fontSize: 30,
    },
    imageSize: {
      width: "100%",
      height: "100%",
    },
    logoSize: {
      width: "25%",
    },
  },
  "@media (min-width : 1200px)": {
    fontCaption: {
      fontSize: 40,
    },
    imageSize: {
      width: "100%",
      height: "100%",
    },
    logoSize: {
      width: "25%",
    },
  },
});

const logoImage = ""
export default function CardTitle(props) {
  const classes = useStyles(props);

  return (
    <Container
      className={classes.root}
      style={{
        maxWidth: "100%",
        height: props.height && props.height,
        background: props.backGround ? props.backGround : null,
        margin: 0,
        padding: 35,
      }}
    >
      <Row
        container
        style={{
          marginTop: props.marginTop && props.marginTop,
          alignItems: "center",
        }}
      >
        <Col item xs={12} sm={6} md={4} lg={4} xl={4}>
          <img
            src={props.image}
            className={classes.imageSize}
            data-animate="fadeInUp"
            data-delay="100"
            alt="Chrome"
          />
        </Col>
        <Col item xs={12} sm={6} md={8} lg={8} xl={8}>
          <img
            src={props.logo}
            className={classes.logoSize}
            alt={props.title}
          />
          <h2
            className={classes.fontTitle}
            style={{ color: props.colorFont ? props.colorFont : "#eee" }}
          >
            {props.title}
          </h2>
          <span
            className={classes.fontCaption}
            style={{ color: props.colorFont ? props.colorFont : "#eee" }}
          >
            {props.desc}
          </span>
        </Col>
      </Row>
    </Container>
  );
}