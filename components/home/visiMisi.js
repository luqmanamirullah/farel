import React from "react";
import { Carousel, Card, CardDeck, Row, Col } from "react-bootstrap";
import content from "../../contents/home.json";
import { createUseStyles } from "react-jss";
import { down } from "theme/breakpoints";
// import Lamp from "/lamp 1.png";
import ClearFix from "../container/ClearFix";

const useStyles = createUseStyles({
  body: {
    backgroundRepeat: "center",
    backgroundSize: "cover",
    backgroundColor: "#F4F6F7",
    padding: "5rem",
  },
  cardInner: {
    margin: 15,
  },
  card: {
    width: "18rem",
    height: "8rem",
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
        <Row className="justify-content-md-center justify-items-center">
          <Col xl={3} md={4} sm={6} xs={12} className={classes.cardInner}>
            <Card className={classes.card}>
              <Card.Body>
                <Card.Title style={{ color: "#7F7F7F" }}>Purpose</Card.Title>
                <Card.Text>
                  Build a Better Life
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} md={4} sm={6} xs={12} className={classes.cardInner}>
            <Card className={classes.card}>
              <Card.Body>
                <Card.Title style={{ color: "#93D152" }}>Vision</Card.Title>
                <Card.Text>
                  Creating a Smarter World
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} md={4} sm={6} xs={12} className={classes.cardInner}>
            <Card className={classes.card}>
              <Card.Body>
                <Card.Title style={{ color: "#00B0F0" }}>Mission</Card.Title>
                <Card.Text>
                  Bettering the World’s Information, Entertainment, and
                  Education
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ margin: "1rem" }}>
          <Card.Img
            variant="top"
            src="/logo/lamp 1.png"
            style={{ width: "5rem", justifyItem: "center" }}
          />
        </Row>
        <Card.Title style={{ textAlign: "center", margin: "2rem" }}>
          “<span style={{ color: "#00B0F0" }}>SVARA Innovation’s</span> mission
          is <span style={{ color: "#93D152" }}>to</span>{" "}
          <span style={{ color: "#7F7F7F" }}>
            Informing, Entertaining and Educating
          </span>{" "}
          <span style={{ color: "#93D152" }}>the World in a Better Way</span>{" "}
          through{" "}
          <span style={{ color: "#00B0F0" }}>
            Digital Transformation & Innovation
          </span>{" "}
          of the{" "}
          <span style={{ color: "#7F7F7F" }}>
            Media, Entertainment, and Broadcasting
          </span>{" "}
          Industry"
        </Card.Title>
      </ClearFix>
    </section>
  );
};

export default Slider;
