import { useEffect } from "react";
import { ThemeProvider } from "react-jss";
import Theme from "theme/Theme";
import "~/styles/globals.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const style = document.getElementById("server-side-styles");

    if (style) {
      style.parentNode.removeChild(style);
    }
  });
  return (
    <>
      {/* <div id="wrapper" class="clearfix"> */}
      <Theme>
        <Component {...pageProps} />
      </Theme>

      {/* </div> */}
    </>
  );
}

export default MyApp;
