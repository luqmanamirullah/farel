import Contact from '~/components/contact/Contact';
import ClearFix from '~/components/container/ClearFix';
import BasicLayout from '~/components/layouts/BasicLayout';
// import Audioland from '../product/audioland/index';
import Airtime from '~/components/airtime/airtime';

const AirtimePage = () => {
	return (
		<BasicLayout colorMenu="#91b3c2" logo="assets_ads.png">
			<Airtime />
		</BasicLayout>
	);
};

export default AirtimePage;
