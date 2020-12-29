import Contact from '~/components/contact/Contact';
import ClearFix from '~/components/container/ClearFix';
import BasicLayout from '~/components/layouts/BasicLayout';
// import Audioland from '../product/audioland/index';
import Audioland from '~/components/audioland/audioland';

const AudiolandPage = () => {
	return (
		<BasicLayout colorMenu="#7FA882" logo="assets_soundsight.png">
			<Audioland />
		</BasicLayout>
	);
};

export default AudiolandPage;