import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import listFitur from "../../contents/aircast.json";
const useStyles = createUseStyles({
  root: {
    flexGrow: 1,
    width: "100%",
    padding: 30,
    paddingBottom: 100,
  },
  paper: {
    padding: 30,
    textAlign: "center",
  },
  fontTitle: {
    marginBottom: 50,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#333",
    textAlign: "center",
    fontFamily: "Nunito",
    color: "#437096",
  },
  Card: {
    border: 0,
  },
  fontTitleFitur: {
    margin: 0,
    fontSize: "15px",
    fontWeight: 700,
    width: 300,
    letterSpacing: "1px",
    fontFamily: "Nunito",
    color: "#437096",
  },
  fontDesc: {
    lineHeight: 1.8,
    color: "#999",
    fontSize: "0.875rem",
    fontFamily: "Montserrat",
    color: "#437096",
  },
  iconFiturContainer: {
    background: "#fff",
    border: "1px solid #91b3c2",
    borderRadius: "50%",
    height: "62px",
    width: "62px",
    textAlign: "center",
  },
  descFitur: {
    fontSize: 18,
    color: "#91b3c2",
  },
});

export default function FiturList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Row style={{ margin: 0 }} className="justify-content-md-center">
        {props.data.map((data) => {
          return (
            <Col lg={4} md={6} xs={12} style={{ marginTop: 40 }}>
              <Row xs={12} style={{ rowGap: 15 }}>
                <Col lg={2} md={2}>
                  <div className={classes.iconFiturContainer}>
                    <i
                      class={data.icon}
                      style={{
                        paddingTop: 10,
                        fontSize: "2em",
                        color: "#91b3c2",
                      }}
                    />
                  </div>
                </Col>
                <Col lg={10} md={10} xs={12}>
                  <div className={classes.descFitur}>{data.deskripsi}</div>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
