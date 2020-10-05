import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    color: "#555",
    fontFamily: "Lato",
    boxSizing: "border-box",
    position: "relative",
    padding: "80px 0",
  },
});
const ContentWrapper = ({ children, style, className }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.wrapper, className)} style={style}>
      {children}
    </div>
  );
};

export default ContentWrapper;
