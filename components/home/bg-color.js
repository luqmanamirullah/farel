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
    backgroundColor: "#fff",
    width: "100%",
    height: 550,
  },
  divTitle: {
    paddingTop: "120px",
    paddingLeft: "112px",
  },
  title: {
    // display: 'absolute'
    color: "#000",
    fontSize: "34px",
    fontFamily: "Poppins",
  },
  tagline: {
    color: "#000",
    fontSize: "18px",
    fontFamily: "Poppins",
    paddingTop: "52px",
    width: 450,
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
  [down("MD")]: {
    body: {
      height: "100%",
      padding: "64px 0px",
    },
    divTitle: {
      padding: 0,
    },
    tagline: {
      width: "100%",
    },
    productHighlight: {
      padding: 40,
    },
  },
});

const Slider = () => {
  const classes = useStyles();
  return (
    <section className={classes.body}>
      <Head>
        <title>Svara | Rumahnya Konten Indonesia</title>
      </Head>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://svara.id/",
          site_name: "SVARA",
          title: "Svara | Rumahnya Konten Indonesia",
        }}
        twitter={{
          handle: "@svara_offcial",
          site: "@svara_official",
          cardType: "app",
        }}
      />
      <ClearFix noBg>
        <Container fluid>
          <Row style={{ marginLeft: -9, marginRight: -9 }}>
            <Col xs={12} md={6}>
              <div className={classes.divTitle}>
                <div className={classes.title}>{content.titleCompany}</div>
                <div className={classes.tagline}>{content.deskripsi}</div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={content.productHighlight}
                className={classes.productHighlight}
              />
            </Col>
          </Row>
        </Container>
      </ClearFix>
    </section>
  );
};

export default Slider;
