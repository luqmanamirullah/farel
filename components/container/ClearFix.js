import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 1366,
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#fff",
    marginBottom: 0,
  },
  "@media (max-width: 576px)": {
    container: {
      maxWidth: 540,
      paddingLeft: "40px !important",
      paddingRight: "40px !important",
    },

    "@media (min-width: 576px)": {
      container: {
        maxWidth: 750,
      },
    },

    "@media (min-width: 992px)": {
      container: {
        maxWidth: 970,
      },
    },

    "@media (min-width: 1200px)": {
      container: {
        maxWidth: 1170,
      },
    },
  },
});
const ClearFix = ({ children, style, className, noBg }) => {
  const classes = useStyles();
  return (
    <div
      className={clsx(classes.container, className)}
      style={{
        background: noBg ? "transparent" : null,
        paddingRight: noBg ? 0 : null,
        paddingLeft: noBg ? 0 : null,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default ClearFix;
