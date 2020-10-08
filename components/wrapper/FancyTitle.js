import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  fancyTitle: {
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: 1.5,
    color: "#555",
    fontFamily: "'Lato', sans-serif",
    boxSizing: "border-box",
    textAlign: "center !important",
    width: "100%",
    position: "relative",
    marginBottom: 30,
    "&:before": {
      top: "49%",
      borderTop: "1px solid #eee",
      content: "''",
      position: "absolute",
      width: "100%",
      height: 0,
      left: 0,
      right: 0,
    },
    "& h1,h2,h3,h4,h5": {
      boxSizing: "border-box",
      color: "#444",
      fontWeight: 600,
      lineHeight: 1.5,
      margin: "0 0 30px 0",
      fontFamily: "'Raleway', sans-serif",
      fontSize: 24,
      position: "relative",
      display: "inline-block",
      backgroundColor: "#fff",
      paddingRight: 15,
      marginBottom: 0,
    },
  },
});
const FancyTitle = ({ title, className, style }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.fancyTitle, className)}>
      <h3 style={style}>{title}</h3>
    </div>
  );
};

export default FancyTitle;
