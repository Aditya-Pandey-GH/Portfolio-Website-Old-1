import { motion, AnimatePresence } from "framer-motion";

// import Data from "../Data";
import Navbar from "./Navbar";

import './css/Gallery.css';

const Gallery = () => {
	window.localStorage.setItem("page", 5);

	return (
		<>
			<Navbar navElem="galleryNav" />
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
					className="spacing" >
					<div className="galleryContainer">
						<div className="galleryComponent">
							<h1 className="galleryHeadings">RECENT</h1>
							<div className="galleryPics">
								<img
									src="https://i.postimg.cc/zfzd741g/Flappy-Bird-Logo.png"
									alt='Profile Pic' />
								<img
									src="https://i.postimg.cc/Pq6cZF2P/Milk-Packets-Collection-Bajaj.png"
									alt='Profile Pic' />
								<img
									src="https://i.postimg.cc/MpW43j3k/IPR-Event.png"
									alt='Profile Pic' />
								<img
									src="https://i.postimg.cc/zfzd741g/Flappy-Bird-Logo.png"
									alt='Profile Pic' />
								<img
									src="https://i.postimg.cc/zfzd741g/Flappy-Bird-Logo.png"
									alt='Profile Pic' />
								<img
									src="https://i.postimg.cc/Pq6cZF2P/Milk-Packets-Collection-Bajaj.png"
									alt='Profile Pic' />
								<img
									src="https://i.postimg.cc/pTg4sG4k/Network-Bulls-Cert.png"
									alt='Profile Pic' />
								<img
									src="https://i.postimg.cc/MpW43j3k/IPR-Event.png"
									alt='Profile Pic' />
								<img
									src="https://i.postimg.cc/Pq6cZF2P/Milk-Packets-Collection-Bajaj.png"
									alt='Profile Pic' />
								<img
									src="https://i.postimg.cc/pTg4sG4k/Network-Bulls-Cert.png"
									alt='Profile Pic' />
								<img
									src="https://i.postimg.cc/pTg4sG4k/Network-Bulls-Cert.png"
									alt='Profile Pic' />
							</div>
						</div>
					</div>

				</motion.div>
			</AnimatePresence>
		</>
	)
}

export default Gallery;