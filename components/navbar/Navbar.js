import { useState } from "react";
import { createUseStyles } from "react-jss";
import { useMediaQuery } from "utils/hooks/useMedia";
import Logo from "./Logo";
import PrimaryMenu from "./PrimaryMenu";
import SecondaryMenu from "./SecondaryMenu";
const useStyles = createUseStyles((theme) => ({
  base: {
    lineHeight: 1.5,

    boxSizing: "border-box",
    display: "block",
    position: "relative",
    backgroundColor: "#fff",
    height: 100,
    transition: "height .4s ease, opacity .3s ease",
  },
  wrapper: {
    height: 100,
    transition: "height .4s ease, opacity .3s ease",
    position: "relative",
    height: "100%",
    zIndex: 199,
  },
  container: {
    boxSizing: "border-box",
    marginRight: "auto",
    marginLeft: "auto",
    position: "relative",
    width: "100%",
    height: "100%",
    maxWidth: "none",
    padding: "0 30px",
  },
  menuTrigger: {
    opacity: 0,
    pointerEvents: "none",
    cursor: "pointer",
    fontSize: 14,
    position: "absolute",
    top: "50%",
    marginTop: "-25px",
    width: 50,
    height: 50,
    lineHeight: "50px",
    textAlign: "center",
    transition: "opacity .3s ease",
  },
  icon: {
    pointerEvents: "none",
    cursor: "pointer",
    fontSize: 14,
    textAlign: "center",
    display: "inline-block",
    fontFamily: "font-icons",
    textTransform: "none",
    lineHeight: "inherit",
    WebkitFontSmoothing: "antialiased",
  },
  "@media (max-width: 991.98px)": {
    base: {
      height: "auto",
    },
    menuTrigger: {
      cursor: "pointer",
      fontSize: 14,
      position: "absolute",
      width: 50,
      height: 50,
      lineHeight: "50px",
      textAlign: "center",
      pointerEvents: "auto",
      top: 25,
      marginTop: 0,
      zIndex: 1,
      left: 20,
      opacity: 1,
      transition: "opacity .2s .2s ease, top .4s ease",
    },
    container: {
      padding: "0 15px",
      margin: "0 auto",
      width: 750,
    },
  },
  "@media (max-width: 767.98px) and (min-width: 576px)": {
    container: {
      width: 540,
    },
  },
  "@media (max-width : 575.98px)": {
    container: {
      width: "100%",
      paddingLeft: "40px ",
      paddingRight: "40px ",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState();
  const isSmall = useMediaQuery("(max-width: 991.98px)", true);
  const onClick = () => setIsOpen((isOpen) => !isOpen);

  return (
    <div className={classes.base}>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <MiniMenu onClick={onClick} />
          <Logo />
          {!isSmall ? <PrimaryMenu /> : isOpen && <SecondaryMenu />}
        </div>
      </div>
    </div>
  );
};

const MiniMenu = ({ onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.menuTrigger} onClick={onClick}>
      <i className={"icon-reorder"} />
    </div>
  );
};

export default Navbar;
