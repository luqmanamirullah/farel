import Head from "next/head";
import BasicLayout from "~/components/layouts/BasicLayout";
import Castline from "~/components/castline";
import { DefaultSeo } from "next-seo";

const AudiolandPage = () => {
  return (
    <div>
      <Head>
        <title>Svara Castline | Gudangnya Konten Indonesia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href="https://svara.id/logo/logo-gram%20only/castline.png"
        />
      </Head>
      <BasicLayout colorMenu="#225B76" logo="assets_castline.png">
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "https://svara.id/",
            site_name: "Svara Castline",
            description:
              "SVARA Castline as a communication media and campus publication that supports distance learning, a medium for creativity, and a means of expressing themselves for students.",
          }}
          twitter={{
            handle: "@svara_offcial",
            site: "@svara_official",
            cardType: "app",
          }}
        />
        <Castline />
      </BasicLayout>
    </div>
  );
};

export default AudiolandPage;
