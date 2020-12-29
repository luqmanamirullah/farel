import Contact from '~/components/contact/Contact';
import ClearFix from '~/components/container/ClearFix';
import BasicLayout from '~/components/layouts/BasicLayout';
import Onair from '~/components/onair/onair';
import List from '~/components/List/List';

const AudiolandPage = () => {
	return (
		<BasicLayout colorMenu="#437096" logo="assets_aircast.png">
			<Onair />
			{/* <List /> */}
		</BasicLayout>
	);
};

export default AudiolandPage;
