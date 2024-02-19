import React from "react";
import { createUseStyles } from "react-jss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Description from "../audioland/desc";
import CardTitle from "../card/ImageRight";
import CardTitleLeft from "../card/ImageLeft";
import ListFitur from "../List/ListDesc";
import ClearFix from "../container/ClearFix";
import detail from "../../contents/castline.json";

const useStyles = createUseStyles({
  img: {
    marginLeft: 67,
    marginRight: 67,
  },
});

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div>
      <CardTitle {...detail.section1} />
      <CardTitleLeft {...detail.section2} headingblock="true" />
      <Description {...detail.section3} />
      {/* <ListFitur color="#ecac55" data={detail.section4} /> */}
      {/* <ClearFix>
				<Row style={{ margin: 0 }}>
					<Col lg={6} md={6} xs={12}>
						<img className={classes.img} src="assets_partner_kfc.jpg" />
					</Col>
					<Col lg={6} md={6} xs={12}>
						<img className={classes.img} src="assets_partner_maxstore.jpg" />
					</Col>
				</Row>
			</ClearFix> */}
    </div>
  );
}
