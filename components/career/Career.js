import clsx from "clsx";
import React, { useMemo, useState } from "react";
import { createUseStyles } from "react-jss";
import ClearFix from "../container/ClearFix";
import { Row, Col, Button, Modal } from "react-bootstrap";
import ContentWrap from "../wrapper/ContentWrap";
import content from "../../contents/career.json";
import HeadingBlock from "../wrapper/HeadingBlock";
const useStyles = createUseStyles({
  featuredBox: {
    marginTop: "50px",
    flex: "1 1",
    display: "block",
    position: "relative",
    marginRight: "4%",
    marginBottom: 50,
    float: "left",

    "& h3": {
      fontSize: 16,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 0,
      color: "#333",
    },
    "& h3:after": {
      content: "''",
      display: "block",
      margin: "20px auto",
      width: 30,
      borderTop: "2px solid #555",
      WebkitTransition: "width .3s ease",
      OTransition: "width .3s ease",
      transition: "width .3s ease",
    },
    "& h3:hover:after": {
      width: 50,
    },

    "& p": {
      lineHeight: 1.8,
      fontSize: 14,
      marginTop: 15,
      margin: "8px 0 0 0",
      color: "#999",
    },
  },
  imageRow: {
    margin: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  boxContainer: {
    position: "relative",
    marginTop: 0,
    padding: 0,
    textAlign: "center",
  },
  boxIcon: {
    position: "relative",
    marginTop: 0,
    padding: 0,
    textAlign: "center",
    margin: "0 auto 30px",

    "& a": {
      backgroundColor: "transparent",
      textDecoration: "none !important",
      display: "block",
      position: "relative",
      width: "100%",
      height: "100%",
      color: "#fff",
    },
  },
  icon: {
    fontSize: 84,
    lineHeight: 1,
  },
  "@media (max-width : 767.98px)": {
    featuredBox: {
      width: "100%",
      marginRight: 0,
      float: "none",
      marginBottom: "50px !important",
    },
  },
});
const Career = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const handleClose = () => {};
  const handleShow = () => {};

  const contents = [
    {
      title: "want to know if there's an open recruitment?",
      subtitle: (
        <span>
          Please check again when there is a notification on our social media at{" "}
          <a href="instagram.com/svara_official">svara_official</a>
        </span>
      ),
      icon: <BigIcon iconClass="icon-time" />,
    },
    {
      title: "any question?",
      subtitle: (
        <span>
          You may simply send us an Email at{" "}
          <a href="mailto:info@svara.fm">info@svara.fm</a> or on our social
          media at <a href="instagram.com/svara_official">svara_official</a> if
          you need urgent support.
        </span>
      ),
      icon: <BigIcon iconClass="icon-email3" />,
    },
  ];
  return (
    <section>
      <ClearFix style={{ marginBottom: 0 }}>
        <ContentWrap>
          <ClearFix>
            <HeadingBlock>
              <h1 style={{ fontFamily: "Poppins" }}>Open Recrutiment</h1>
              <span style={{ fontFamily: "Poppins" }}>
                Submit your CV and join with us!
              </span>
            </HeadingBlock>
            <Row
              className={`justify-content-md-center ${classes.imageRow}`}
              style={{ marginBottom: 40 }}
            >
              <Col style={{ marginTop: 20 }} md={4} sm={6} xs={12}>
                <img
                  src={content.listCareer[0].image}
                  style={{ width: "100%" }}
                />
                <Button
                  style={{
                    marginTop: 10,
                    width: "100%",
                    backgroundColor: "#225B76",
                    borderColor: "#225B76",
                  }}
                  onClick={() => handleShow(setShow(true))}
                >
                  Show More Info
                </Button>
                <Modal
                  show={show}
                  onHide={() => handleClose(setShow(false))}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{content.listCareer[0].title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row>
                      <Col>
                        <h1>Requirement</h1>
                        <div>
                          {content.listCareer[0].requirment.map((list) => {
                            return <li>{list.title}</li>;
                          })}
                        </div>
                        <div style={{ marginTop: 5, color: "#ac5f41" }}>
                          <b>Send your CV and Portfolio to info@svara.fm</b>
                        </div>
                      </Col>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => handleClose(setShow(false))}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>
              <Col style={{ marginTop: 20 }} md={4} sm={6} xs={12}>
                <img
                  src={content.listCareer[1].image}
                  style={{ width: "100%" }}
                />
                <Button
                  style={{
                    marginTop: 10,
                    width: "100%",
                    backgroundColor: "#225B76",
                    borderColor: "#225B76",
                  }}
                  onClick={() => handleShow(setShow1(true))}
                >
                  Show More Info
                </Button>
                <Modal
                  show={show1}
                  onHide={() => handleClose(setShow1(false))}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{content.listCareer[1].title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row>
                      <Col>
                        <h1>Requirement</h1>
                        <div>
                          {content.listCareer[1].requirment.map((list) => {
                            return <li>{list.title}</li>;
                          })}
                        </div>
                        <div style={{ marginTop: 5, color: "#ac5f41" }}>
                          <b>Send your CV and Portfolio to info@svara.fm</b>
                        </div>
                      </Col>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => handleClose(setShow1(false))}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            </Row>
            <Row
              className={`justify-content-md-center ${classes.imageRow}`}
              style={{ marginBottom: 40 }}
            >
              <Col style={{ marginTop: 20 }} md={4} sm={6} xs={12}>
                <img
                  src={content.listCareer[2].image}
                  style={{ width: "100%" }}
                />
                <Button
                  style={{
                    marginTop: 10,
                    width: "100%",
                    backgroundColor: "#225B76",
                    borderColor: "#225B76",
                  }}
                  onClick={() => handleShow(setShow2(true))}
                >
                  Show More Info
                </Button>
                <Modal
                  show={show2}
                  onHide={() => handleClose(setShow2(false))}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{content.listCareer[2].title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row>
                      <Col>
                        <h1>Requirement</h1>
                        <div>
                          {content.listCareer[2].requirment.map((list) => {
                            return <li>{list.title}</li>;
                          })}
                        </div>
                        <div style={{ marginTop: 5, color: "#ac5f41" }}>
                          <b>Send your CV and Portfolio to info@svara.fm</b>
                        </div>
                      </Col>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => handleClose(setShow2(false))}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>
              <Col style={{ marginTop: 20 }} md={4} sm={6} xs={12}>
                <img
                  src={content.listCareer[3].image}
                  style={{ width: "100%" }}
                />
                <Button
                  style={{
                    marginTop: 10,
                    width: "100%",
                    backgroundColor: "#225B76",
                    borderColor: "#225B76",
                  }}
                  onClick={() => handleShow(setShow3(true))}
                >
                  Show More Info
                </Button>
                <Modal
                  show={show3}
                  onHide={() => handleClose(setShow3(false))}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{content.listCareer[3].title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row>
                      <Col>
                        <h1>Requirement</h1>
                        <div>
                          {content.listCareer[3].requirment.map((list) => {
                            return <li>{list.title}</li>;
                          })}
                        </div>
                        <div style={{ marginTop: 5, color: "#ac5f41" }}>
                          <b>Send your CV and Portfolio to info@svara.fm</b>
                        </div>
                      </Col>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => handleClose(setShow3(false))}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            </Row>
          </ClearFix>
        </ContentWrap>
      </ClearFix>
    </section>
  );
};

const BigIcon = ({ iconClass }) => {
  const classes = useStyles();
  return (
    <i className={clsx(iconClass, classes.icon)} style={{ color: "#A7A884" }} />
  );
};

const FeaturedBox = ({ title, subtitle, icon }) => {
  const classes = useStyles();
  return (
    <div className={classes.featuredBox}>
      <div className={classes.boxContainer}>
        <div className={classes.boxIcon}>
          <a href=" #">{icon}</a>
        </div>
        <h3 style={{ fontFamily: "Poppins" }}>{title}</h3>
        <p style={{ fontFamily: "Poppins" }}>{subtitle}</p>
      </div>
    </div>
  );
};

export default Career;
