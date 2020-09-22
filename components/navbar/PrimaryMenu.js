const { default: Link } = require("next/link");
const { createUseStyles } = require("react-jss");
const { default: menus } = require("./menus");

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
  const getMenu = (menu) => {
    if (menu.childrens === undefined) {
      return <Menu menu={menu} />;
    } else {
      return <MenuDropDown menu={menu} />;
    }
  };
  return (
    <div className={classes.base}>
      <ul className={classes.menuList}>{menus.map((menu) => getMenu(menu))}</ul>
    </div>
  );
};

const menuStyles = createUseStyles({
  menu: {
    listStyle: "none",
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    position: "relative",
    float: "left",
    marginLeft: 0,
  },
  link: {
    textDecoration: "none ",
    display: "block",
    lineHeight: 22,
    padding: "39px 15px",
    fontWeight: "bold",
    fontSize: 13,
    letterSpacing: 1,
    textTransform: "uppercase",
    transition: "margin .4s ease, padding .4s ease",
    color: "#1abc9c",
  },
  textMenu: {
    listStyle: "none",
    lineHeight: "22px",
    fontWeight: "bold",
    fontSize: 13,
    letterSpacing: 1,
    textTransform: "uppercase",
    fontFamily: "'Raleway', sans-serif",
    color: "#1abc9c",
    boxSizing: "border-box",
  },
  "@media (max-width: 991.98px)": {
    menu: {
      display: "none",
    },
  },
});

const Menu = ({ menu }) => {
  const classes = menuStyles();
  return (
    <li className={classes.menu}>
      <Link href={menu.slug} as={menu.as} passHref>
        <a className={classes.link}>
          <div className={classes.textMenu}>{menu.name}</div>
        </a>
      </Link>
    </li>
  );
};

const MenuDropDown = ({ menu }) => {
  const classes = menuStyles();

  return (
    <>
      <li className={classes.menu}>
        <Link href={menu.slug} as={menu.as} passHref>
          <a className={classes.link}>
            <div className={classes.textMenu}>{menu.name}</div>
          </a>
        </Link>
      </li>
      <ul style={{ display: "none" }}>
        {menu.childrens.map((child) => (
          <li>
            <Link href={child.slug} passHref>
              <a className={classes.link}>
                <div className={classes.textMenu}>{child.name}</div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PrimaryMenu;
