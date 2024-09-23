import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./Navbar";
import "./css/NotFound.css";

const NotFound = () => {
	// window.localStorage.setItem("page", 0);

	return (
		<>
			<Navbar navElem="notFoundNav" />
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
					// style={{ height: '100vh' }}
					className="spacing"
				>
					<div className="notFound">
						<div className="notFoundHeading">HOLD UP</div>
						<div className="notFoundContent">Much more coming soon</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default NotFound;
