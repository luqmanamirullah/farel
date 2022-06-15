import Head from "next/head";
import Contact from "~/components/contact/Contact";
import ClearFix from "~/components/container/ClearFix";
import BasicLayout from "~/components/layouts/BasicLayout";
import Maintenance from "~/components/maintenance/maintenance";

const MaintenancePage = () => {
  return (
    <div>
      <Head>
        <title>Svara | Gudangnya Konten Indonesia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href="https://svara.id/logo/logo-gram%20only/logo.png"
        />
      </Head>
      <BasicLayout noFooter="true">
        <Maintenance />
      </BasicLayout>
    </div>
  );
};

export default MaintenancePage;
