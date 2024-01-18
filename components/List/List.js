import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import listFitur from "../../contents/aircast.json";
import ClearFix from "../container/ClearFix";
import { useState } from "react";

const useStyles = createUseStyles({
  root: {
    width: "100%",
    padding: 30,
    marginLeft: 25,
  },
  paper: {
    padding: 30,
    textAlign: "center",
    // color: theme.palette.text.secondary
  },
  fontTitle: {
    marginBottom: 50,
    fontSize: 50,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#377998",
    textAlign: "center",
    fontFamily: "Poppins",
  },
  Card: {
    border: 0,
  },
  fontTitleFitur: {
    margin: 0,
    padding: 0,
    fontSize: "21px",
    fontWeight: 600,
    letterSpacing: "1px",
    fontFamily: "Poppins",
    color: "#377998",
    lineHeight: "38px",
  },
  fontDesc: {
    lineHeight: 1.8,
    fontSize: "0.875rem",
    fontFamily: "Poppins",
    color: "#437096",
    width: "100%",
    maxWidth: "380px",
    textAlign: "justify",
  },
  iconTitleWrapper: {
    display: "flex",
    flexDirection: "row",
    columnGap: 15,
  },
});

export default function FiturList() {
  const classes = useStyles();

  const [isVisible, setIsVisible] = useState(false)

  const [selectedDiv, setSelectedDiv] = useState(null)

  const handleToggleClick = (divId) => {
    // Jika elemen yang diklik sudah terpilih, lepas pemilihan
    if (selectedDiv === divId) {
      setSelectedDiv(null);
    } else {
      // Jika elemen yang diklik belum terpilih, atur sebagai elemen terpilih
      setSelectedDiv(divId);
    }
  };

  return (
    <ClearFix>
      <div className={classes.root}>
        <h2 className={classes.fontTitle}>MODUL-MODUL SVARA AIRCAST</h2>
        <Row
        style={{
          columnGap: 60,
          rowGap: 40,
        }}>
          {listFitur.listFitur.map((fitur) => {
            return (
              <Col xs={12} sm={6} md={4}
              key={fitur.id}
              onClick={() => handleToggleClick(fitur.id)}
              style={{
                padding: 0,
                borderRadius: 10,
                border: "2px solid #377998",
                maxWidth: "29%",
                height: fitur.id === selectedDiv ? 'auto' : '67px',
                cursor: "pointer"
              }}>
                <div 
                className={classes.iconTitleWrapper}
                onClick={() => setIsVisible(!isVisible)}
                style={{
                  padding: "12px 20px",
                }}
                >
                  <img
                    src={fitur.image}
                    style={{ width: 35, height: 35, padding: 0 }}
                  />
                  <h2 className={classes.fontTitleFitur}>{fitur.title}</h2>
                </div>
                {fitur.id === selectedDiv && <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "23px",
                  letterSpacing: "0em",
                  textAlign: "justified",
                  padding: "12px 20px",
                  marginBottom: "0px",
                }}
                className={classes.fontDesc}>{fitur.desc}</p>}
              </Col>
            );
          })}
        </Row>
      </div>
    </ClearFix>
  );
}
