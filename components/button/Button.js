import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    overflow: "visible",
    margin: "0 !important",
    display: "inline-block",
    position: "relative",
    outline: "none",
    whiteSpace: "nowrap",
    padding: "0 22px",
    fontSize: 14,
    height: 40,
    lineHeight: "40px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1,
    border: "none",
    cursor: "pointer",
    color: "#fff",
    textShadow: "1px 1px 1px rgba(0, 0, 0, 0.2)",
    borderRadius: 3,
    borderBottom: "3px solid rgba(0, 0, 0, 0.15)",
    transition: "all .2s ease-in-out",
    backgroundColor: "#1abc9c",
  },
});
const Button = ({ onClick, text, style }) => {
  const classes = useStyles();
  return (
    <button onClick={onClick} className={classes.button} style={style}>
      {text}
    </button>
  );
};

export default Button;
