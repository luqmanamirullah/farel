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
      <CardTitle {...detail} />
      <List />
      <Radio />
    </div>
  );
}
