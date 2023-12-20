import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ClearFix from "../../container/ClearFix";
import ContentWrap from "../../wrapper/ContentWrap";
import HeadingBlock from "../../wrapper/HeadingBlock";

const useStyles = createUseStyles({
  section: {
    fontWeight: 400,
    textAlign: "left",
    fontSize: "0.875rem",
    lineHeight: 1.5,
    color: "#555",
    fontFamily: "'Lato', sans-serif",
    boxSizing: "border-box",
    display: "block",
    position: "relative",
    overflow: "hidden",
    marginBottom: 0,
  },
  wrapper: {
    boxSizing: "border-box",
    marginTop: "0",
    marginBottom: "0",
    position: "relative",
    textAlign: "center",
    margin: "60px 0",
    padding: "60px 0",
    overflow: "hidden",
  },
  imageWrapper: {
    boxSizing: "border-box",
    marginTop: "30px !important",
  },
  image: {
    color: "#555",
    fontFamily: "'Lato', sans-serif",
    boxSizing: "border-box",
    verticalAlign: "middle",
    borderStyle: "none",
    maxWidth: "100%",
  },
  paragraph: {
    marginTop: 0,
    marginBottom: 30,
    fontSize: 15,
    lineHeight: 1.8,
    textAlign: "left",
    fontFamily: "Poppins",
  },
  svaraLogo: {
    textAlign: "center !important",
    boxSizing: "border-box",
    verticalAlign: "middle",
    borderStyle: "none",
    maxWidth: "100%",
  },
});

export default function CenteredGrid(props) {
  const classes = useStyles();
  return (
    <div
      className={classes.wrapper}
      style={{
        backgroundImage: props.background ? props.background : "",
      }}
    >
      <ClearFix
        style={{ backgroundColor: "rgb(255,255,255,0.7)", borderRadius: 10 }}
      >
        <Row>
          <Col lg={6} sm={12} md={12} xs={12}>
            <div className={classes.imageWrapper}>
              <div>
                <h2
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: props.colorFont ? props.colorFont : "#000",
                  }}
                >
                  {props.headline}
                </h2>
                <span
                  id="subtitle"
                  style={{
                    textAlign: "left",
                  }}
                >
                  {props.subheadline}
                </span>
              </div>
              <p
                className={classes.paragraph}
                style={{ color: props.colorFont ? props.colorFont : "#eee" }}
              >
                {props.description}
              </p>
              {props.button && (
                <a
                  href="https://docs.google.com/spreadsheets/d/1W3wCxPHMtfLDYe6A9loaf2KJ8ecaZ-3p/edit?usp=sharing&ouid=105830318049801332349&rtpof=true&sd=true"
                  target="_blank"
                  style={{ float: "left" }}
                >
                  <Button style={{ backgroundColor: props.colorFont }}>
                    Show More Info
                  </Button>
                </a>
              )}
            </div>
          </Col>
          <Col lg={6} xs={12}>
            <div className={classes.imageWrapper}>
              {props.img && <img src={props.img} alt="Image" />}
            </div>
          </Col>
        </Row>
      </ClearFix>
    </div>
  );
}
