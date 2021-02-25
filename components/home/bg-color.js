import React from "react";
import { Grid, Row, Col, Container } from "react-bootstrap";
import content from "../../contents/home.json"; // import ImgSliders from '../..1.jpg';
import { createUseStyles } from "react-jss";
import { down } from "theme/breakpoints";
import ClearFix from "../container/ClearFix";

const useStyles = createUseStyles({
  body: {
    backgroundColor: "#C5C9D4",
    width: "100%",
    height: 550,
  },
  divTitle: {
    paddingTop: "120px",
    paddingLeft: "112px",
  },
  title: {
    // display: 'absolute'
    color: "#ffff",
    fontSize: "34px",
    fontFamily: "Nunito",
  },
  tagline: {
    color: "#fff",
    fontSize: "18px",
    fontFamily: "Nunito",
    paddingTop: "52px",
    width: 450,
    textAlign: "justify",
  },
  desc: {
    color: "#fff",
    fontSize: "24px",
    fontFamily: "Montserrat",
  },
  productHighlight: {
    paddingTop: 100,
  },
  [down("MD")]: {
    body: {
      height: "100%",
      padding: "64px 0px",
    },
    divTitle: {
      padding: 0,
    },
    tagline: {
      width: "100%",
    },
    productHighlight: {
      padding: 40,
    },
  },
});

const Slider = () => {
  const classes = useStyles();
  return (
    <section className={classes.body}>
      <ClearFix noBg>
        <Container fluid>
          <Row style={{ marginLeft: -9, marginRight: -9 }}>
            <Col xs={12} md={6}>
              <div className={classes.divTitle}>
                <div className={classes.title}>{content.titleCompany}</div>
                <div className={classes.tagline}>{content.deskripsi}</div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={content.productHighlight}
                className={classes.productHighlight}
              />
            </Col>
          </Row>
        </Container>
      </ClearFix>
    </section>
  );
};

export default Slider;
