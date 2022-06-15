import Head from "next/head";
import React from "react";
import Blog from "~/components/blog/Blog";
import BasicLayout from "~/components/layouts/BasicLayout";
import { DefaultSeo } from "next-seo";

const BlogPage = () => {
  return (
    <div>
      <Head>
        <title>Svara Update | Gudangnya Konten Indonesia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href="https://svara.id/logo/logo-gram%20only/logo.png"
        />
      </Head>
      <BasicLayout>
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "https://svara.id/",
            site_name: "Svara Blog News",
            description: "SVARA Blog News Highlight",
          }}
          twitter={{
            handle: "@svara_offcial",
            site: "@svara_official",
            cardType: "app",
          }}
        />
        <Blog />
      </BasicLayout>
    </div>
  );
};

export default BlogPage;
