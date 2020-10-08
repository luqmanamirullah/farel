import clsx from "clsx";
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
      fontFamily: "'Lato', sans-serif",
      boxSizing: "border-box",
      fontSize: 22,
      display: "block",
      marginTop: 10,
      fontWeight: 300,
      color: "#777",
    },
    "& span:after #withBorder": {
      content: "''",
      display: "block",
      marginTop: 30,
      width: 40,
      borderTop: "2px solid #444",
      boxSizing: "border-box",
    },
  },
});
const HeadingBlock = ({ children, className, style, withBorder }) => {
  const classes = useStyles();
  return (
    <div
      className={clsx(classes.headingBlock, className)}
      style={style}
      id={withBorder && "withBorder"}
    >
      {children}
    </div>
  );
};

export default HeadingBlock;
