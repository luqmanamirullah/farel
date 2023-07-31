import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    outline: "none",
    position: "relative",
    padding: "80px 0px",
  },
});

const ContentWrap = ({ children, style, className }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.wrapper, className)} style={style}>
      {children}
    </div>
  );
};

export default ContentWrap;
