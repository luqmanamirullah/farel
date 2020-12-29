import Navbar from '~/components/navbar';
import Footer from '~/components/footer';
import { AnimatePresence, motion } from 'framer-motion';
const BasicLayout = ({ logo, colorMenu, children }) => {
	return (
		<>
			<motion.div
				exit={{ opacity: 0 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<Navbar colorMenu={colorMenu} logo={logo} />
				{children}
				<Footer colorMenu={colorMenu} />
			</motion.div>
		</>
	);
};

export default BasicLayout;
