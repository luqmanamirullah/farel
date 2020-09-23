import Menu from "./menu";

import { createUseStyles } from "react-jss";
import menus from "./menus";
import { useMemo } from "react";

const useStyles = createUseStyles((theme) => ({
  base: {
    display: "block",
    float: "right",
  },
  menuList: {
    padding: 0,
    listStyle: "none",
    margin: 0,
    opacity: 1,
    transition: "height .4s ease, margin .4s ease, opacity .2s .2s ease",
    float: "left",
    paddingRight: 15,
    marginRight: 15,
    touchAction: "pan-y",
  },
}));

const PrimaryMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.base}>
      <ul className={classes.menuList}>
        {useMemo(() => menus.map((menu) => <Menu menu={menu} />, [menus]))}
      </ul>
    </div>
  );
};

export default PrimaryMenu;
