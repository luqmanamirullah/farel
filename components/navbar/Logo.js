import { createUseStyles } from "react-jss";
import Link from "next/link";

const useStyles = createUseStyles((theme) => ({
  link: {
    fontSize: 36,
    lineHeight: "100%",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    textDecoration: "none !important",
    color: "#000",
    display: "block",
    height: "100%",
  },
  logo: {
    boxSizing: "border-box",
    position: "relative",
    float: "left",
    fontSize: 36,
    lineHeight: "100%",
    paddingRight: 30,
    marginRight: 30,
    opacity: 1,
    height: "100%",
    transition: "height .4s ease, margin .4s ease, opacity .2s .2s ease",
  },
  "@media (max-width: 991.98px)": {
    logo: {
      display: "block",
      height: 100,
      float: "none",
      margin: "0 auto 0 !important",
      maxWidth: "none",
      textAlign: "center",
      border: "0 !important",
      padding: "0 !important",
    },
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <Link href="/" passHref>
        <a className={classes.link}>
          <img
            src="logo.PNG"
            alt="Svara Logo"
            style={{ padding: 10, height: "100%" }}
          ></img>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
