import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { down } from "theme/breakpoints";

const useStyles = createUseStyles((theme) => ({
  footer: {
    paddingTop: 80,
    backgroundColor: "#6d7893",
    borderTop: 0,
    position: "relative",
    fontFamily: "Poppins",
  },
  container: {
    margin: "0 90px",
  },
  si_large: {
    margin: "0 10px 10px 0",
    width: "56px",
    height: "56px",
    fontSize: "30px",
    lineHeight: "54px !important",
  },
  social_icon: {
    textAlign: "center !important",
    color: "#fff",
    cursor: "pointer",
    fontStyle: "normal",
    margin: "0 30px 30px 0",
    fontSize: "20px",
    lineHeight: "38px !important",
    // color: #555;
    textShadow: "none",
    // border: 1px solid #aaa;
    // border-radius: 3px;
    overflow: "hidden",
  },
  a: {
    textDecoration: "none !important",
    backgroundColor: "transparent",
  },
  si_rounded: {
    borderRadius: "50%",
  },
  icon: {
    pointerEvents: "none",
    cursor: "pointer",
    fontSize: 14,
    textAlign: "center",
    display: "inline-block",
    fontFamily: "font-icons",
    textTransform: "none",
    lineHeight: "inherit",
    WebkitFontSmoothing: "antialiased",
  },
  "@media (max-width: 991.98px)": {
    base: {
      height: "auto !important",
      position: "unset  !important",
      backgroundColor: "#fff",
    },
    container: {
      height: "100%",
      padding: "0 15px",
      margin: "0 auto",
      width: 750,
    },
  },
  "@media (max-width: 767.98px) and (min-width: 576px)": {
    container: {
      width: 540,
    },
  },
  "@media (max-width : 575.98px)": {
    container: {
      width: "100%",
      paddingLeft: "40px ",
      paddingRight: "40px ",
    },
  },
  [down("MD")]: {
    footer: {
      paddingRight: 24,
      paddingLeft: 24,
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer
      className={classes.footer}
      style={{
        backgroundColor: "#225B76",
        borderTop: 0,
      }}
    >
      {/* <div className={classes.container}></div>
      <div style={{ color: "#fff" }}>
        <a
          href="https://facebook.com/svaraofficial"
          style={{ color: "white", border: 0,20
        >
          <i class="icon-facebook"></i>
        </a>
        <a
          href="https://twitter.com/svara_official"
          style={{ color: "white", border: 0, fontSize: 30, marginLeft: 35 }}
        >
          <i class="icon-twitter"></i>
        </a>
        <a
          href="https://instagram.com/svara_official"
          style={{ color: "white", border: 0, fontSize: 30, marginLeft: 35 }}
        >
          <i class="icon-instagram"></i>
        </a>
      </div>
      <div style={{ color: "#fff", marginTop: 10, fontSize: 24 }}>
        <strong>Address</strong>
      </div>
      <p style={{ color: "#fff", marginTop: 20, fontSize: 15 }}>
        Jl. Bungur No 09 Kel. Cipedes Kec. Sukajadi, Bandung 40162
        <br />
        (022) 82045711
        <br />
        info@svara.fm
      </p>

      <div style={{ paddingBottom: 30 }}>
        <div className={clsx(classes.container, classes.clearfix)}>
          <div
            style={{
              color: "#fff",
              fontFamily: "Poppins",
              paddingTop: 20,
              textAlign: "center",
            }}
          >
            Copyrights &copy; 2017 - 2021 All Rights Reserved by PT SVARA
            INOVASI INDONESIA.
          </div>
        </div>
      </div> */}
      <Row
        style={{ margin: 0, paddingLeft: 43 }}
        className={"justify-content-md-left"}
        spacing={{ xs: 3, md: 2 }}
      >
        <Col>
          <a
            href="https://facebook.com/svaraofficial"
            style={{ color: "white", border: 0, fontSize: 20 }}
          >
            <i class="icon-facebook"></i>
          </a>
          <a
            href="https://twitter.com/svara_official"
            style={{
              color: "white",
              border: 0,
              fontSize: 20,
              marginLeft: 15,
            }}
          >
            <i class="icon-twitter"></i>
          </a>
          <a
            href="https://instagram.com/svara_official"
            style={{
              color: "white",
              border: 0,
              fontSize: 20,
              marginLeft: 15,
            }}
          >
            <i class="icon-instagram"></i>
          </a>
          <div
            style={{
              color: "#fff",
              fontFamily: "Poppins",
            }}
          >
            Copyrights &copy; 2017 - 2023 All Rights Reserved by PT SVARA
            INOVASI INDONESIA.
          </div>
        </Col>
        <Col>
          <p style={{ color: "#fff", fontSize: 15 }}>
            <b>Alamat</b>
            <br />
            Jl. Bungur No 09 Kel. Cipedes Kec. Sukajadi, Bandung 40162
            <br />
            (022) 82045711
            <br />
            info@svarainnovation.co.id
          </p>
        </Col>
        <Col style={{ paddingTop: 20 }}>
          <a
            href="https://legal.svara.id/privacy-policy/en/Svara?welcome=SVARA Platform&company=PT. SVARA Inovasi Indonesia&email=report@svara.fm"
            style={{
              color: "white",
              border: 0,
              fontSize: 15,
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            Privacy Policy
          </a>
          <span style={{ color: "white" }}>&#124;</span>
          <a
            href="https://legal.svara.id/terms-of-services/en/Svara?welcome=SVARA Platform&company=PT. SVARA Inovasi Indonesia&email=report@svara.fm"
            style={{
              color: "white",
              border: 0,
              fontSize: 15,
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            Term of Service
          </a>
          <span style={{ color: "white" }}>&#124;</span>
          <a
            href="https://legal.svara.id/community-guidelines/en/Svara?welcome=SVARA Platform&company=PT. SVARA Inovasi Indonesia&email=report@svara.fm"
            style={{
              color: "white",
              border: 0,
              fontSize: 15,
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            Community Guide
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
