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
    fontSize: "clamp(1rem, 6vw, 2.813rem)",
    fontWeight: 400,
    fontFamily: "Montserrat",
    lineHeight: 1.8,
    marginBottom: "30px",
    display: "block",
    boxSizing: "border-box",
    textAlign: "center",
  },
  fontTitle: {
    marginBottom: 10,
    fontWeight: 700,
    fontSize: "clamp(2.5rem, 8vw, 4rem)",
    letterSpacing: "-2px",
    fontFamily: "Nunito",
    textAlign: "center",
  },
  imageSize: {
    width: 500,
  },
});

export default function CenteredGrid(props) {
  const classes = useStyles();

  return (
    <Container
      className={classes.root}
      style={{ height: props.height && props.height }}
    >
      <Row
        container
        style={{
          marginTop: props.marginTop && props.marginTop,
          gap: 50,
          alignItems: "center",
        }}
      >
        <Col item>
          <img
            src={props.img}
            className={classes.imageSize}
            data-animate="fadeInUp"
            data-delay="100"
            alt="Chrome"
          />
        </Col>
        <Col item lg={6}>
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
