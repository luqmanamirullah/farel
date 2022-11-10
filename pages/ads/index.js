import Head from "next/head";
import Contact from "~/components/contact/Contact";
import ClearFix from "~/components/container/ClearFix";
import BasicLayout from "~/components/layouts/BasicLayout";
// import Audioland from '../product/audioland/index';
import Airtime from "~/components/airtime/airtime";
import { DefaultSeo } from "next-seo";

const AirtimePage = () => {
  return (
    <div>
      <Head>
        <title>Svara Ads | Rumahnya Konten Indonesia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href="https://svara.id/logo/logo-gram%20only/ads.png"
        />
      </Head>
      <BasicLayout colorMenu="#225B76" logo="assets_ads.png">
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "https://svara.id/",
            site_name: "Svara Airtime Ads",
            description:
              "Cara mudah beriklan pada airtime radio melalui SVARA. Easy way to advertise on radio airtime via SVARA",
          }}
          twitter={{
            handle: "@svara_offcial",
            site: "@svara_official",
            cardType: "app",
          }}
        />
        <Airtime />
      </BasicLayout>
    </div>
  );
};

export default AirtimePage;
