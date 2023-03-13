import React from "react";
import Products from "./carouselCard";
import { createUseStyles } from "react-jss";
import ClearFix from "../container/ClearFix";

const useStyles = createUseStyles({
  body: {
    padding: 24,
    paddingTop: 100,
    width: "100%",
    minHeight: 700,
  },
  divTitle: {
    paddingTop: "120px",
    paddingLeft: "112px",
  },
  title: {
    // display: 'absolute'
    color: "#6D7893",
    fontSize: "34px",
    fontFamily: "Poppins",
    textAlign: "center",
    paddingBottom: "70px",
    fontWeight: "bold",
  },
});

const Slider = () => {
  const classes = useStyles();
  return (
    <ClearFix noBg>
      <section className={classes.body}>
        <div className={classes.title}>
          Product Innovations of SVARA Platform
        </div>
        <Products />
      </section>
    </ClearFix>
  );
};

export default Slider;
