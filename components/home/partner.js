import React from "react";
import content from "../../contents/home.json";
import { Row, Col } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { down } from "theme/breakpoints";
import ClearFix from "../container/ClearFix";

const useStyles = createUseStyles({
  body: {
    width: "100%",
    minHeight: 450,
  },
  divTitle: {
    paddingTop: "120px",
    paddingLeft: "112px",
  },
  title: {
    // display: 'absolute'
    color: "#6D7893",
    fontSize: "34px",
    fontFamily: "Nunito",
    textAlign: "center",
    paddingBottom: "60px",
    fontWeight: "bold",
  },
  imgLogo: {
    width: "100%",
    // height: 150
  },
  imageRow: {
    margin: 0,
    paddingLeft: 120,
    paddingRight: 120,
  },
  [down("MD")]: {
    imageRow: {
      paddingLeft: 40,
      paddingRight: 40,
    },
    imgLogo: {
      marginBottom: 32,
    },
    title: {
      marginTop: 40,
    },
  },
});

const Slider = () => {
  const classes = useStyles();
  return (
    <section className={classes.body}>
      <ClearFix noBg>
        <div className={classes.title}>Partners</div>
        <Row className={`justify-content-md-left ${classes.imageRow}`}>
          {content.partner.map((data) => {
            return (
              <Col sm={6} md={2} xs={12}>
                <img className={classes.imgLogo} src={data.image} />
              </Col>
            );
          })}
        </Row>
      </ClearFix>
    </section>
  );
};

export default Slider;
