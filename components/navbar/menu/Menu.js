import clsx from "clsx";
import Link from "next/link";
import { createUseStyles } from "react-jss";

const menuStyles = createUseStyles({
  menu: {
    listStyle: "none",
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    position: "relative",
    float: "left",
    marginLeft: 0,
    "&:hover #dropdown ": {
      display: "block",
    },
  },
  link: {
    textDecoration: "none",
    display: "block",
    padding: "25px 25px",
    transition: "margin .4s ease, padding .4s ease",
    color: "#000",
  },
  stickyLink: {
    paddingTop: 19,
    paddingBottom: 19,
  },
  textMenu: {
    color: "#000",
    listStyle: "none",
    lineHeight: "22px",
    fontSize: 16,
    letterSpacing: 1,
    textTransform: "uppercase",
    fontFamily: "Poppins",
    boxSizing: "border-box",
    "&:hover": {
      fontFamily: "'arial black'",
      fontWeight: "bold",
      textDecoration: "none" /* Remove default underline on hover */,
      transition: "margin .4s ease, padding .4s ease",
      paddingBottom: "10px",
      borderBottom: "3px solid #000" /* Add a 2px solid underline on hover */,
    },
  },
  dropdownBox: {
    boxSizing: "border-box",
    padding: 0,
    display: "none",
    listStyle: "none",
    transition: "top .4s ease",
    position: "absolute",
    width: 175,
    background: "linear-gradient(135deg, #57caff, #377998)",
    boxShadow: "0px 13px 42px 11px rgba(0, 0, 0, 0.05)",
    border: "1px solid #eee",
    height: "auto",
    zIndex: 199,
    top: "100%",
    left: 0,
    margin: 0,
    textAlign: "center",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  childLink: {
    backgroundColor: "transparent",
    textDecoration: "none !important",
    display: "block",
    lineHeight: 20,
    padding: 0,
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: 700,
    color: "#666",
    paddingTop: 10,
    paddingBottom: 10,
    border: 0,
    letterSpacing: 0,
    fontFamily: "'Lato',sans-serif",
    transition: "all .2s ease-in-out",
    "&:hover": {
      backgroundColor: "transparent",
      paddingLeft: 18,
    },
    "&:hover div": {
      color: "#f9f9f9 !important",
    },
  },
  childDiv: {
    listStyle: "none",
    lineHeight: "20px",
    textTransform: "uppercase",
    fontSize: 15,
    fontWeight: 700,
    color: "#f9f9f9",
    fontFamily: "'Lato',sans-serif",
    boxSizing: "border-box",
  },
});

export const Menu = ({ menu, isSticky = false, colorMenu, transparant }) => {
  const classes = menuStyles();
  return (
    <li className={classes.menu} key={menu.name}>
      {!menu.isOpen ? (
        <Link href={menu.slug} as={menu.as} passHref>
          <a
            className={clsx(
              classes.link,
              isSticky ? classes.stickyLink : null
            )}>
            <div
              className={classes.textMenu}
              style={
                transparant && !isSticky
                  ? { color: "#fff" }
                  : { color: "#515151" }
              }>
              {menu.name}
            </div>
          </a>
        </Link>
      ) : (
        <Link href="https://app.svara.id">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              classes.link,
              isSticky ? classes.stickyLink : null
            )}>
            <div
              className={classes.textMenu}
              style={
                transparant && !isSticky
                  ? { color: "#fff" }
                  : { color: "#515151" }
              }>
              {menu.name}
            </div>
          </a>
        </Link>
      )}
      {menu.childrens && (
        <DropdownMenu childrens={menu.childrens} colorMenu={colorMenu} />
      )}
    </li>
  );
};

export const DropdownMenu = React.memo(
  ({ childrens, colorMenu }) => {
    const classes = menuStyles();

    return (
      <>
        <ul className={classes.dropdownBox} id="dropdown">
          {childrens.map((child) => (
            <Link href={child.slug} passHref>
              <a>
                <li key={child.name} className={classes.childLink}>
                  <div
                    className={classes.childDiv}
                    style={{ color: "#f9f9f9" }}>
                    {child.name}
                  </div>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </>
    );
  },
  (prevProps, nextProps) => prevProps !== nextProps
);
