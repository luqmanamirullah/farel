import Head from "next/head";
import Contact from "~/components/contact/Contact";
import ClearFix from "~/components/container/ClearFix";
import BasicLayout from "~/components/layouts/BasicLayout";
import { DefaultSeo } from "next-seo";

const ContactPage = () => {
  return (
    <div>
      <Head>
        <title>Svara Contact | Rumahnya Konten Indonesia</title>
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
            site_name: "Svara Contact",
            description: "contact svara",
          }}
          twitter={{
            handle: "@svara_offcial",
            site: "@svara_official",
            cardType: "app",
          }}
        />
        <Contact />
      </BasicLayout>
    </div>
  );
};

export default ContactPage;
