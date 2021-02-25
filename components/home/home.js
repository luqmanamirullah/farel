import React from "react";
import Bg from "./bg";
import BgColor from "./bg-color";
import Products from "./products";
import Partner from "./partner";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({});

const Slider = () => {
  const classes = useStyles();
  return (
    <section>
      <Bg />
      <BgColor />
      <Products />
      <Partner />
    </section>
  );
};

export default Slider;
