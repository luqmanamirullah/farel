import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  headingBlock: {
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: 1.5,
    color: "#555",
    fontFamily: "Lato",
    boxSizing: "border-box",
    borderBottom: "none ",
    textAlign: "center ",
    marginBottom: 50,

    "& h1": {
      fontSize: 32,
    },

    "& h1,h2,h3": {
      marginBottom: 0,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 1,
      color: "#333",
    },

    "& span": {
      lineHeight: 1.5,
      fontFamily: "Lato",
      textAlign: "center",
      boxSizing: "border-box",
      fontSize: 24,
      display: "block",
      marginTop: 10,
      fontWeight: 300,
      color: "#777",
      maxWidth: 700,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});
const HeadingBlock = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.headingBlock}>{children}</div>;
};

export default HeadingBlock;
