import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';

const useStyles = createUseStyles({
  root: {
    marginTop: 50,
    marginBottom: 30,
  },
  fontCaption: {
    fontSize: "50px",
    fontWeight: 400,
    fontFamily: "Poppins",
    display: "block",
    boxSizing: "border-box",
    textAlign: "left",
  },
  fontTitle: {
    marginBottom: 10,
    fontWeight: 700,
    fontSize: "clamp(2.5rem, 8vw, 4rem)",
    letterSpacing: "-2px",
    fontFamily: "Poppins",
    textAlign: "center",
  },
  imageSize: {
    width: "100%",
    height: "100%",
  },
  logoSize: {
    width: "35%",
  },
  "@media (min-width : 325px)": {
    fontCaption: {
      fontSize: 15,
    },
    imageSize: {
      width: "75%",
      height: "50%",
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

export default function CenteredGrid(props) {
  const classes = useStyles();

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
