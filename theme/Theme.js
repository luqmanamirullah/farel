import { ThemeProvider } from "react-jss";
const SPACING_SCALE = 8;
const theme = [
  {
    name: "light",
    palette: {
      primary: {
        main: "#2FB4F5",
        blue: "#2FB4F5",
        green: "#1abc9c",
        darkBlue: "#25a0ca",
      },
      text: {
        primary: "rgb(85,85,85)",
        blue: "#2FB4F5",
      },
      background: {
        main: "#ffffff",
        section: "#f9f9f9",
      },
    },
  },
];

const createTheme = (theme) => {
  return {
    ...theme,
    spacing: function (number) {
      return number * SPACING_SCALE;
    },
  };
};

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={createTheme(theme[0])}>{children}</ThemeProvider>
  );
};

export default Theme;
