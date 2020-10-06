import { useEffect } from "react";
import { ThemeProvider } from "react-jss";
import { WindowSizeProvider } from "~/components/context/WindowSizeContext";
import Theme from "theme/Theme";
import "~/styles/globals.css";
import "~/styles/font-icons.css";
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
        <WindowSizeProvider>
          <Component {...pageProps} />
        </WindowSizeProvider>
      </Theme>

      {/* </div> */}
    </>
  );
}

export default MyApp;
