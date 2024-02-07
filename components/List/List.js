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
    padding: 15, // Mengurangi padding agar lebih responsif pada layar kecil
    marginLeft: 0, // Menghilangkan marginLeft agar tampilan lebih responsif
  },
  fontTitle: {
    marginBottom: 30, // Mengurangi margin agar lebih responsif pada layar kecil
    fontSize: 36, // Mengurangi ukuran font agar lebih responsif pada layar kecil
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
    fontSize: "18px", // Mengurangi ukuran font agar lebih responsif pada layar kecil
    fontWeight: 600,
    letterSpacing: "1px",
    fontFamily: "Poppins",
    color: "#377998",
    lineHeight: "30px",
  },
  fontDesc: {
    lineHeight: 1.6,
    fontSize: "14px", // Mengurangi ukuran font agar lebih responsif pada layar kecil
    fontFamily: "Poppins",
    color: "#437096",
    width: "100%",
    textAlign: "justify",
  },
  iconTitleWrapper: {
    display: "flex",
    flexDirection: "row",
    columnGap: 10, // Mengurangi columnGap agar lebih responsif pada layar kecil
  },
  '@media (max-width: 945px)': {
    fontTitleFitur: {
      fontSize: "12px"
    },
    fontDesc: {
      fontSize: "10px"
    }
  }
});

export default function FiturList() {
  const classes = useStyles();

  const [isVisible, setIsVisible] = useState(false)
  const [selectedDiv, setSelectedDiv] = useState(null)

  const handleToggleClick = (divId) => {
    if (selectedDiv === divId) {
      setSelectedDiv(null);
    } else {
      setSelectedDiv(divId);
    }
  };

  return (
    <ClearFix>
      <div className={classes.root}>
        <h2 className={classes.fontTitle}>MODUL-MODUL SVARA AIRCAST</h2>
        <Row
          style={{
            marginLeft: 0,
            marginRight: 0,
            rowGap: 25, // Menambahkan rowGap agar tata letak lebih baik pada layar kecil
          }}
        >
          {listFitur.listFitur.map((fitur) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              key={fitur.id}
              onClick={() => handleToggleClick(fitur.id)}
              style={{
                padding: 0,
                borderRadius: 10,
                border: "2px solid #377998",
                marginBottom: 15, // Menambahkan margin agar tata letak lebih baik pada layar kecil
                height: fitur.id === selectedDiv ? 'auto' : '100%',
                cursor: "pointer",
              }}
            >
              <div
                className={classes.iconTitleWrapper}
                onClick={() => setIsVisible(!isVisible)}
                style={{
                  padding: "12px 15px", // Mengurangi padding agar lebih responsif pada layar kecil
                }}
              >
                <img
                  src={fitur.image}
                  style={{ width: 30, height: 30, padding: 0 }}
                />
                <h2 className={classes.fontTitleFitur}>{fitur.title}</h2>
              </div>
              {fitur.id === selectedDiv && (
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "14px", // Mengurangi ukuran font agar lebih responsif pada layar kecil
                    fontWeight: 400,
                    lineHeight: "20px", // Mengurangi lineHeight agar lebih responsif pada layar kecil
                    letterSpacing: "0em",
                    textAlign: "justify",
                    padding: "12px 15px", // Mengurangi padding agar lebih responsif pada layar kecil
                    marginBottom: "0px",
                  }}
                  className={classes.fontDesc}
                >
                  {fitur.desc}
                </p>
              )}
            </Col>
          ))}
        </Row>
      </div>
    </ClearFix>
  );
}