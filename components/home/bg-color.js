import React from "react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { Grid, Row, Col, Container } from "react-bootstrap";
import content from "../../contents/home.json"; // import ImgSliders from '../..1.jpg';
import { createUseStyles } from "react-jss";
import { down } from "theme/breakpoints";
import ClearFix from "../container/ClearFix";

const useStyles = createUseStyles({
  body: {
    backgroundColor: "#014177",
    width: "100%",
    height: 750,
  },
  divHeader: {
    paddingTop: "24px",
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "32px",
    color: "#FFFFFF",
    textAlign: "center",
  },
  // divTitle: {
  //   marginTop: "24px",
  //   paddingTop: 10,
  //   backgroundColor: "rgb(25, 82, 131)",
  //   width: "100%",
  //   maxWidth: "1174px",
  //   height: "auto",
  //   margin: "0 auto", // Menengahkan elemen secara horizontal
  // },
  title: {
    // display: 'absolute'
    color: "#FFFFFF",
    fontSize: "14px",
    fontFamily: "Poppins",
    fontWeight: "normal",
    marginTop: "24px",
    paddingTop: "3px",
    backgroundColor: "rgb(25, 82, 131)",
    width: "100%",
    maxWidth: "1174px",
    height: "27px",
    margin: "0 auto",
    textAlign: "center",
  },
  tagline: {
    color: "#FFFFFF", 
    fontSize: "12px",
    fontFamily: "Poppins",
    paddingTop: "18px",
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: "rgb(14, 74, 126)",
    width: "100%",
    maxWidth: "1174px",
    height: "104px",
    margin: "0 auto",
    textAlign: "justify",
  },

  desc: {
    color: "#000",
    fontSize: "24px",
    fontFamily: "Poppins",
  },
  productHighlight: {
    paddingTop: 100,
  },
  // [down("MD")]: {
  //   body: {
  //     height: "100%",
  //     padding: "64px 0px",
  //   },
  //   divTitle: {
  //     padding: 0,
  //   },
  //   tagline: {
  //     width: "100%",
  //   },
  //   productHighlight: {
  //     padding: 40,
  //   },
  // },
});

const Slider = () => {
  const classes = useStyles();
  return (
    <section className={classes.body}>
      <ClearFix noBg>
        <div style={{ position: "relative", }}>
          <div className={classes.divHeader}> {content.title}</div>
          <div>
            <div className={classes.title}>
              <img />
              {content.headline}</div>
            <div className={classes.tagline}>{content.deskripsi}</div>
          </div>
          {/* <div className={classes.divTitle}>
          </div> */}
        </div>
      </ClearFix>
    </section>
  );
};

export default Slider;
