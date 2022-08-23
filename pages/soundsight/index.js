import Head from "next/head";
import Contact from "~/components/contact/Contact";
import ClearFix from "~/components/container/ClearFix";
import BasicLayout from "~/components/layouts/BasicLayout";
// import Audioland from '../product/audioland/index';
import Audioland from "~/components/audioland/audioland";
import { DefaultSeo } from "next-seo";
const AudiolandPage = () => {
  return (
    <div>
      <Head>
        <title>Svara Soundsight | Gudangnya Konten Indonesia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href="https://svara.id/logo/logo-gram%20only/soundsight.png"
        />
      </Head>
      <BasicLayout colorMenu="#225B76" logo="assets_soundsight.png">
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "https://svara.id/",
            site_name: "Svara Soundsight",
            description:
              "The fast, easy and affordable way from SVARA created to make your brand and business closer to customers through music and content. Can be applied to places such as bars, gyms, cafes, hotels, offices, restaurants, retail stores, hospitals, waiting rooms, etc.",
          }}
          twitter={{
            handle: "@svara_offcial",
            site: "@svara_official",
            cardType: "app",
          }}
        />
        <Audioland />
      </BasicLayout>
    </div>
  );
};

export default AudiolandPage;
