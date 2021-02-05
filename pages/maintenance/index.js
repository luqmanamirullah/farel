import Head from 'next/head';
import Contact from '~/components/contact/Contact';
import ClearFix from '~/components/container/ClearFix';
import BasicLayout from '~/components/layouts/BasicLayout';
import Maintenance from '~/components/maintenance/maintenance';

const MaintenancePage = () => {
	return (
		<div>
			<Head>
				<title>Svara | The Sound of You</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<BasicLayout noFooter="true">
				<Maintenance />
			</BasicLayout>
		</div>
	);
};

export default MaintenancePage;
