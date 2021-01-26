import React from 'react';
import BasicLayout from '~/components/layouts/BasicLayout';
import SvaraOnline from '~/components/svaraOnline/SvaraOnline';

const SvarOnlineIndex = () => {
	return (
		<BasicLayout colorMenu="#a45437" logo="assets_logo-4.svg" transparant="true" whiteLogo="assets_logo-5.svg">
			<SvaraOnline />
		</BasicLayout>
	);
};

export default SvarOnlineIndex;
