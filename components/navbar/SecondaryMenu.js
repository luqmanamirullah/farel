import Link from "next/link";
import React from "react";
import { createUseStyles } from "react-jss";
import menus from "./menus";
import Menu from "./menuSecond";

const useStyles = createUseStyles({
  base: {
    cursor: "pointer",
    fontWeight: 400,
    textAlign: "left",
    fontSize: "0.875rem",
    lineHeight: 1.5,
    color: "#555",
    fontFamily: "Lato",
    boxSizing: "border-box",
    display: "block",
    float: "none",
  },
  container: {
    display: "block !important",
    listStyle: "none",
    float: "none",
    border: 0,
    padding: 0,
    margin: 0,
    opacity: 1,
    transition: "height .4s ease, margin .4s ease, opacity .2s .2s ease",
  },
});
const SecondaryMenu = () => {
  const classes = useStyles();

  const renderMenu = () => {
    return menus.map((menu) => <Menu menu={menu} />);
  };
  return (
    <nav className={classes.base}>
      <ul className={classes.container}>{renderMenu()}</ul>
    </nav>
  );
};

export default SecondaryMenu;
