import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import listFitur from "../../contents/aircast.json";
import ClearFix from "../container/ClearFix";
const useStyles = createUseStyles({
  root: {
    width: "100%",
    padding: 30,
  },
  paper: {
    padding: 30,
    textAlign: "center",
    // color: theme.palette.text.secondary
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
    padding: 0,
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
    width: "100%",
    maxWidth: "380px",
  },
  iconTitleWrapper: {
    display: "flex",
    flexDirection: "row",
    columnGap: 15,
  },
});

export default function FiturList() {
  const classes = useStyles();

  return (
    <ClearFix>
      <div className={classes.root}>
        <h2 className={classes.fontTitle}>MODUL-MODUL SVARA AIRCAST</h2>
        <Row>
          {listFitur.listFitur.map((fitur) => {
            return (
              <Col xs={12} sm={6} md={4} style={{ padding: 0 }}>
                <div className={classes.iconTitleWrapper}>
                  <i
                    className={fitur.icon}
                    style={{ fontSize: "2em", color: "#437096", padding: 0 }}
                  />
                  <h2 className={classes.fontTitleFitur}>{fitur.title}</h2>
                </div>
                <p className={classes.fontDesc}>{fitur.desc}</p>
              </Col>
            );
          })}
        </Row>
      </div>
    </ClearFix>
  );
}
