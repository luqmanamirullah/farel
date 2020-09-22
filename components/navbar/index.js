import { createUseStyles } from "react-jss";
import Logo from "./Logo";
import PrimaryMenu from "./PrimaryMenu";
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
    menuTrigger: {
      opacity: 1,
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.base}>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.menuTrigger}>
            <i className={"icon-reorder"} />
          </div>
          <Logo />
          <PrimaryMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
