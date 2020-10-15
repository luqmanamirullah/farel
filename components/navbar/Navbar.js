import clsx from "clsx";
import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useWindowSize } from "../context/WindowSizeContext";
import Logo from "./Logo";
import PrimaryMenu from "./PrimaryMenu";
import SecondaryMenu from "./SecondaryMenu";

const useStyles = createUseStyles((theme) => ({
  base: {
    lineHeight: 1.5,
    boxSizing: "border-box",
    display: "block",
    position: "relative",
    backgroundColor: "transparent",
    height: 100,
    transition: "height .4s ease, opacity .3s ease",
  },
  stickyHeader: {
    display: "block",
    position: "relative",
    backgroundColor: "#fff",
    transition: "height .4s ease, opacity .3s ease",
    height: 60,
  },
  wrapper: {
    transition: "height .4s ease, opacity .3s ease",
    position: "relative",
    height: 100,
    zIndex: 199,
  },
  stickyWrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    height: 60,
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
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
    left: 0,
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
      height: "auto !important",
      position: "unset  !important",
      backgroundColor: "#fff",
    },
    menuTrigger: {
      fontSize: 14,
      position: "absolute",
      width: "auto",
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
      height: "100%",
      padding: "0 15px",
      margin: "0 auto",
      width: 750,
    },
    wrapper: {
      height: "auto !important",
      position: "unset !important",
      boxShadow: "0 0 0 !important",
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

  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const onClick = () => setIsOpen((isOpen) => !isOpen);
  const { width } = useWindowSize();

  const handleScroll = () => {
    if (window.scrollY < 1) setIsSticky(false);
    else setIsSticky(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    width <= 991.98 ? setIsSmall(true) : setIsSmall(false);
  }, [width]);

  return (
    <header
      className={clsx(classes.base, isSticky ? classes.stickyHeader : null)}
    >
      <div
        className={clsx(
          classes.wrapper,
          isSticky ? classes.stickyWrapper : null
        )}
      >
        <div className={classes.container}>
          <MiniMenu onClick={onClick} />
          <Logo isSticky={isSticky} />

          {!isSmall ? (
            <PrimaryMenu isSticky={isSticky} />
          ) : (
            <SecondaryMenu isOpen={isOpen} />
          )}
        </div>
      </div>
    </header>
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
