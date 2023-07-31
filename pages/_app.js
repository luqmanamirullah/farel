import { useEffect } from "react";
import { ThemeProvider } from "react-jss";
import { WindowSizeProvider } from "~/components/context/WindowSizeContext";
import Theme from "theme/Theme";
import "~/styles/globals.scss";
import "~/styles/font-icons.css";
import Head from "next/head";
import PageTransition from "~/components/wrapper/PageTransition";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps, router }) {
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
        <meta
          name="google-site-verification"
          content="eXeXWmY6U8aBM3ChOK335iH5yzB-r3UgQCKCAoXnvBQ"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Theme>
        <WindowSizeProvider>
          <PageTransition>
            <DefaultSeo
              openGraph={{
                type: "website",
                locale: "en_IE",
                url: "https://svara.id/",
                site_name: "SVARA",
                description: "radio music podcast",
              }}
              twitter={{
                handle: "@svara_offcial",
                site: "@svara_official",
                cardType: "app",
              }}
            />
            <Component {...pageProps} key={router.route} />
          </PageTransition>
        </WindowSizeProvider>
      </Theme>

      {/* </div> */}
    </>
  );
}

export default MyApp;
