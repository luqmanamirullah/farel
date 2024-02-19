import React from "react";
import { createUseStyles } from "react-jss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardTitle from "../card/ImageRight";
import CardTitleLeft from "../card/ImageLeft";
import Description from "./desc";
import ListFitur from "../List/ListDesc";
import ClearFix from "../container/ClearFix";
import detail from "../../contents/soundsight.json";

const useStyles = createUseStyles({
  title: {
    color: "#377998",
    textAlign: "center",
    marginBottom: 0,
    marginTop: 30,
    fontSize: 40,
    fontWeight: 700,
    fontFamily: "Poppins",
  },
});

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div>
      <CardTitle
        {...detail.section1}
        backgroundBottom="linear-gradient(181.73deg, rgba(247, 156, 255, 0) -4.82%, #AC72F2 83.57%)"
      />
      <CardTitleLeft
        {...detail.section2}
        headingblock="true"
        additionalImages={detail.section2.additionalImages}
      />
      <Description
        title={detail.section3.title}
        desc={detail.section3.desc}
        colorFont={detail.section3.colorFont}
      />
      <ListFitur data={detail.section4} color="#377998" />
      <h2 className={classes.title}>CLIENT OF SVARA SOUNDSIGHT</h2>
      <ClearFix>
        <Row
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {detail.section5.map((partner, i) => {
            return (
              <Col
                xs={12}
                md={6}
                style={{ margin: "auto", maxWidth: "fit-content" }}
              >
                <img className={classes.img} src={partner.image} />
              </Col>
            );
          })}
        </Row>
      </ClearFix>
    </div>
  );
}
