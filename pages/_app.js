import { useEffect } from "react";
import { ThemeProvider } from "react-jss";
import { WindowSizeProvider } from "~/components/context/WindowSizeContext";
import Theme from "theme/Theme";
import "~/styles/globals.scss";
import "~/styles/font-icons.css";
import Head from "next/head";

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
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Raleway:300,400,500,600,700|Crete+Round:400i"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
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
