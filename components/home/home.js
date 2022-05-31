import React from "react";
import Bg from "./bg";
import BgColor from "./bg-color";
import Visi from "./visiMisi";
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
      <Visi />
      <Products />
      <Partner />
    </section>
  );
};

export default Slider;
