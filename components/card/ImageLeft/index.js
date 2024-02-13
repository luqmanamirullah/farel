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
    margin: "30px 0",
    padding: "30px 0",
    overflow: "hidden",
    maxWidth: "100%",
    "@media (max-width: 768px)": {
      textAlign: "center",
    },
  },
  imageWrapper: {
    boxSizing: "border-box",
    marginTop: "30px !important",
    gap: "20px",
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
    marginTop: 20,
    marginBottom: 20,
    fontSize: 18,
    lineHeight: "30px",
    textAlign: "left",
    fontFamily: "Poppins",
    fontWeight: 500,
    marginLeft: 40,
    "@media (max-width: 640px)": {
      textAlign: "center",
      marginLeft: "auto",
      marginright: "auto",
    },
  },
  svaraLogo: {
    textAlign: "center !important",
    boxSizing: "border-box",
    verticalAlign: "middle",
    borderStyle: "none",
    maxWidth: "100%",
  },
  contentWrapper: {
    textAlign: "left",
    width: "100%",
    marginLeft: 40,
    "@media (max-width: 640px)": {
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  border: {
    marginBottom: 18,
    fontSize: 40,
    fontWeight: 700,
    lineHeight: 1,
    textAlign: "left",
    "@media (max-width: 640px)": {
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "42px",
    },
  },
  imageWrapper: {
    marginBottom: 0,
    marginTop: 0,
  },
  image: {
    width: "464px",
    height: "310px",
    objectFit: "cover",
  },
  titleContainer: {
    marginTop: "30px",
    marginLeft: 40,
  },
});

export default function CenteredGrid(props) {
  const classes = useStyles();

  return (
    <Container fluid className={classes.wrapper} style={{ backgroundImage: props.background ? props.background : "" }}>
      <ClearFix style={{ backgroundColor: "transparent" }}>
        <Row>
          <Col lg={6} sm={12} md={12} xs={12}>
            <div className={classes.imageWrapper} style={{ display: "flex", flexDirection: "column" }}>
              <div className={classes.titleContainer}>
                <h2
                  className={classes.border}
                  style={{
                    fontFamily: "Poppins",
                    color: props.colorFont ? props.colorFont : "#000",
                  }}
                >
                  {props.headline}
                </h2>
                <span id="subtitle" style={{ textAlign: "left" }}>
                  {props.subheadline}
                </span>
              </div>
              <div className={classes.contentWrapper}>
                {props.additionalImages && props.additionalImages.length > 0 && props.additionalImages.map((additionalImage, index) => <img key={index} src={additionalImage.image} alt={`Image ${index}`} />)}
              </div>
              <p className={classes.paragraph} style={{ color: props.colorFont ? props.colorFont : "#eee" }}>
                {props.description}
              </p>
              {props.button && (
                <a href="https://docs.google.com/spreadsheets/d/1W3wCxPHMtfLDYe6A9loaf2KJ8ecaZ-3p/edit?usp=sharing&ouid=105830318049801332349&rtpof=true&sd=true" target="_blank" style={{ float: "left" }}>
                  <Button style={{ backgroundColor: props.colorFont }}>Show More Info</Button>
                </a>
              )}
            </div>
          </Col>
          <Col lg={6} xs={12}>
            <div className={classes.imageWrapper}>{props.img && <img src={props.img} alt="Image" className={classes.image} />}</div>
          </Col>
        </Row>
      </ClearFix>
    </Container>
  );
}