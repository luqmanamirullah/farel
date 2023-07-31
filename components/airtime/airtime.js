import React from "react";
import { createUseStyles } from "react-jss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardTitle from "../card/ImageRight";
import CardTitleLeft from "../card/ImageLeft";
import Description from "../card/ImageRight/descriptionLeft";
import ListFitur from "../List/ListRounded";
import ClearFix from "../container/ClearFix";
import detail from "../../contents/airtime.json";
import { useMediaQuery } from "utils/hooks/useMedia";

const useStyles = createUseStyles({
  title: {
    color: "#91b3c2",
    fontSize: 30,
    fontWeight: 700,
    fontFamily: "Poppins",
    textAlign: "center",
    margin: "50px 0px 30px 0px",
  },
  desc: {
    backgroundColor: "#91b3c2",
    padding: "60px 90px 60px 90px",
    fontWeight: 550,
    color: "white",
    fontSize: "clamp(1.3rem, 2vw, 1.875rem)",
    textAlign: "center",
    lineHeight: 2,
  },
});

export default function CenteredGrid() {
  const classes = useStyles();
  const matches900 = useMediaQuery("(min-width:960px)");

  return (
    <div style={{ fontFamily: "Poppins" }}>
      <CardTitle
        img={detail.section1.image}
        title={detail.section1.title}
        desc={detail.section1.desc}
        colorFont={detail.section1.colorFont}
        marginTop={matches900 && "90px"}
      />
      <CardTitleLeft
        headline={detail.section2.headline}
        description={detail.section2.description}
        colorFont={detail.section2.colorFont}
        backgroundColor={detail.section2.backgroundColor}
        img={detail.section2.image}
      />
      <div>
        <div className={classes.title}>{detail.section3.title}</div>
        <ListFitur data={detail.section3.benefit} />
        <div className={classes.desc}>{detail.section4.desc}</div>
        <div className={classes.title}>KLIEN KAMI</div>
      </div>
      <ClearFix style={{ marginBottom: 100 }}>
        <Row style={{ margin: 0 }} className="justify-content-md-center">
          {detail.section5.map((partner) => {
            return (
              <Col xs={6} md={6} lg={2}>
                <img className={classes.img} src={partner.image} />
              </Col>
            );
          })}
        </Row>
      </ClearFix>
    </div>
  );
}
