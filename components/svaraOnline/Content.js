import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import ClearFix from "~/components/container/ClearFix";
import ContentWrap from "~/components/wrapper/ContentWrap";
import HeadingBlock from "~/components/wrapper/HeadingBlock";
import detail from "../../contents/apps.json";

const useStyles = createUseStyles((theme) => ({
  content: {
    marginTop: 65,
  },
  lead: {
    textAlign: "justify",
    color: "#377998",
    fontFamily: "Poppins",
    boxSizing: "border-box",
    marginTop: 0,
    marginBottom: 30,
    fontWeight: 300,
    fontSize: 20,
  },
  contentImage: {
    overflow: "hidden !important",
    position: "relative",
    height: 426,
  },
  deviceWrapper: {
    paddingRight: "4%",
    position: "relative",
    textAlign: "center !important",
  },
  deviceImage: {
    verticalAlign: "middle",
    borderStyle: "none",
    maxWidth: "100%",
    marginBottom: "30px !important",
    animationName: "pulse",
    animationDuration: "1s",
    animationFillMode: "both",
  },
  "@media (max-width : 992px)": {
    content: {
      marginTop: 40,
    },
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <section id="content" className={classes.content}>
      <WhatIsSvaraOnline />
      <InsideSvara />
      <AnotherDevice />
    </section>
  );
};

const WhatIsSvaraOnline = () => {
  const classes = useStyles();
  const imageRef = useRef();
  return (
    <div style={{}}>
      <ClearFix>
        <Row>
          <Col xl={8}>
            <div style={{ marginLeft: 40, marginRight: 30, marginTop: 20 }}>
              <HeadingBlock withBorder style={{ marginBottom: "0 !important" }}>
                <h1
                  style={{
                    textAlign: "left",
                    color: "#377998",
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "40px",
                  }}
                >
                  {detail.title}
                </h1>
                <span></span>
              </HeadingBlock>
              <p className={classes.lead}>{detail.deskripsi}</p>
            </div>
          </Col>
          <Col xl={4}>
            <div
              style={{
                height: 280,
                position: "relative",
                width: 425,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <img
                src={detail.images.group}
                style={{
                  maxHeight: "100%",
                }}
                data-animate="fadeInUp"
                data-delay="100"
                alt="Chrome"
                className="fadeInUp animated"
              />
              <div
                style={{
                  display: "flex",
                  width: "175px",
                  columnGap: "15px",
                  marginTop: "-40px",
                  marginLeft: "40px",
                }}
                data-animate="fadeInRight"
                className="fadeInRight animated"
              >
                <a href={detail.linkDownload.android}>
                  <img src="apps/download1.png" style={{ marginRight: 10 }} />
                </a>
                <a href={detail.linkDownload.ios}>
                  <img src="apps/download2.png" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </ClearFix>
    </div>
  );
};

const InsideSvara = () => {
  const classes = useStyles();
  const [height, setHeight] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [divWeb, setDivWeb] = useState();
  const [divMobile, setDivMobile] = useState();

  return (
    <div style={{ marginBottom: divWeb ? 40 : divMobile ? 120 : 0 }}>
      <ClearFix>
        <ClearFix
          style={{
            position: "relative !important",
            float: "none !important",
            marginLeft: "auto !important",
            marginRight: "auto !important",
          }}
        >
          <div style={{}}>
            <h2
              style={{
                color: "#377998",
                fontFamily: "Poppins",
                fontSize: 40,
                fontWeight: 700,
                marginBottom: "0 !important",
                marginLeft: 30,
              }}
            >
              {detail.fiturTitle}
            </h2>
          </div>
        </ClearFix>
      </ClearFix>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: 480,
          padding: "0 !important",
        }}
      >
        {!divMobile && (
          <div
            onClick={() => {
              setDivWeb(true);
              setDivMobile(false);
            }}
            style={{
              background: "#377998",
              width: divWeb ? (divMobile ? "0%" : "100%") : "50%",
              height: divWeb ? "600px" : "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "Poppins",
                fontSize: "100px",
                fontStyle: "italic",
                fontWeight: 700,
                lineHeight: "150px",
                letterSpacing: "0.05em",
                marginBottom: 0,
              }}
            >
              Web App
            </h1>

            {divWeb && (
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "11px",
                  fontWeight: 300,
                  marginBottom: "0px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "20%",
                    textAlign: "justify",
                    top: 375,
                    left: -120,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "0px",
                      textAlign: "right",
                    }}
                  >
                    {detail.titleWeb}
                  </p>
                  {detail.deskripsiWeb}
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "23%",
                    textAlign: "justify",
                    top: 105,
                    left: 985,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "0px",
                    }}
                  >
                    {detail.titleWeb}
                  </p>
                  {detail.deskripsiWeb}
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "20%",
                    textAlign: "justify",
                    top: 195,
                    left: 1020,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "0px",
                    }}
                  >
                    {detail.titleWeb}
                  </p>
                  {detail.deskripsiWeb}
                </div>
              </div>
            )}
            <img
              src={divWeb ? detail.images.web1 : detail.images.web}
              style={{
                marginTop: divWeb ? "" : "-50px",
                width: divWeb ? "60%" : "85%",
              }}
            ></img>
          </div>
        )}

        {!divWeb && (
          <div
            onClick={() => {
              setDivMobile(true);
              setDivWeb(false);
            }}
            style={{
              background: "#57CAFF",
              width: divMobile ? (divWeb ? "0%" : "100%") : "50%",
              height: divMobile ? "675px" : "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "Poppins",
                fontSize: "100px",
                fontStyle: "italic",
                fontWeight: 700,
                lineHeight: "150px",
                letterSpacing: "0.05em",
                marginBottom: 0,
              }}
            >
              Mobile App
            </h1>

            {divMobile && (
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "11px",
                  fontWeight: 300,
                  marginBottom: "0px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "30%",
                    textAlign: "right",
                    top: 250,
                    left: -15,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "0px",
                    }}
                  >
                    {detail.titleWeb}
                  </p>
                  {detail.deskripsiWeb}
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "30%",
                    textAlign: "left",
                    top: 320,
                    left: 740,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "0px",
                    }}
                  >
                    {detail.titleWeb}
                  </p>
                  {detail.deskripsiWeb}
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "30%",
                    textAlign: "right",
                    top: 370,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "0px",
                    }}
                  >
                    {detail.titleWeb}
                  </p>
                  {detail.deskripsiWeb}
                </div>
              </div>
            )}

            <img
              src={divMobile ? detail.images.mobile1 : detail.images.mobile}
              style={{
                width: divMobile ? "60%" : "70%",
              }}
            ></img>
          </div>
        )}
      </div>
    </div>
  );
};

const AnotherDevice = () => {
  const classes = useStyles();

  return (
    <ContentWrap>
      <div style={{ marginLeft: 65, marginRight: 30, marginTop: 20 }}>
        <h2
          style={{
            textAlign: "left",
            color: "#377998",
            fontFamily: "Poppins",
            fontWeight: 700,
            fontSize: "40px",
          }}
        >
          Mau denger SVARA di perangkat lain?
        </h2>
      </div>
      <ClearFix>
        <Row
          style={{
            margin: "0 50px",
          }}
        >
          {detail.anotherDevice.map((device) => (
            <Col lg={4} sm={6} xs={12} key={device.name}>
              <SvaraDevice
                image={device.image}
                name={device.name}
                description={device.description}
              />
            </Col>
          ))}
        </Row>
      </ClearFix>
    </ContentWrap>
  );
};

const SvaraDevice = ({ image, name, description }) => {
  const classes = useStyles();
  return (
    <div className={classes.imageWrapper}>
      <img
        data-animate="pulse"
        src={image}
        alt="Image"
        data-delay="100"
        className={clsx(classes.deviceImage, `pulse animated`)}
      />
      <h4
        style={{
          fontFamily: "Poppins",
          fontSize: "20px",
          fontWeight: "bolder",
          marginBottom: 30,
          textAlign: "center",
          color: "#377998",
        }}
      >
        {name}
      </h4>
      <p
        style={{
          fontFamily: "Poppins",
          fontSize: "12px",
          fontWeight: "bold",
          lineHeight: 1.8,
          textAlign: "center",
          color: "#377998",
        }}
      >
        {description}
      </p>
    </div>
  );
};
export default Content;
