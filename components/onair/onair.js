import React from "react";
import { createUseStyles } from "react-jss";
import CardTitle from "../card/ImageLeft";
import List from "../List/List";
import Radio from "../List/ListRadio";
import detail from "../../contents/aircast.json";
const useStyles = createUseStyles({});

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div>
      <CardTitle
        img={detail.image}
        logo={detail.logo}
        description={detail.description}
        colorFont={detail.colorFont}
        button={detail.link}
        backGround={detail.backGround}
        bblr={detail.bblr}
        bs={detail.bs}
        p={detail.p}
        pb={detail.pb}
      />
      <List />
      <Radio />
    </div>
  );
}
