import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Data from './Data';
import Home from './Comps/Home';
import Skills from './Comps/Skills';
import Achievements from './Comps/Achievements';
import Projects from './Comps/Projects';
import Connect from './Comps/Connect';
import Gallery from './Comps/Gallery';
import NotFound from './Comps/NotFound';

import './App.css';

const App = () => {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		document.addEventListener("contextmenu", (e) => {
			e.preventDefault();
		});	// To remove the context menu, when user right-clicks

		// document.addEventListener("wheel", (e) => {
		// 	if (e.ctrlKey) {
		// 		e.preventDefault();
		// 		let scrollAmount = e.deltaY;
		// 		window.scrollBy(0, scrollAmount * 5);
		// 	}
		// }, { passive: false });	// To remove the ability to resize using "CTRL + SCROLL-WHEEL"

		setTimeout(() => {
			setLoading(false);
		}, 3000); // For Splash Screen
	}, []);

	return (
		<AnimatePresence>
			{loading ?
				// The following code will display a splash screen to the user, each time, user runs the website.
				<motion.div
					key={"splash-screen"}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					exit={{ opacity: 0, transition: { duration: 0.25, ease: "easeOut" } }}>
					<div className='splashContainer'>
						<div className='profile'>
							<img
								src={Data.pfp}
								alt='Not Found'
								// title='Go to profile'
								className='pfp' />
							<div className='detailsAdi'>
								<div className='detailsAdiName'>{Data.name.caps}</div>
								<div className='detailsAdiProf'>[ {Data.profession} ]</div>
								<div style={{ height: "3rem" }} />
								<div className='waitForIt'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className='loadingSpinner'>
										<path stroke="#646464" strokeLinejoin="round" strokeWidth="2" d="M13.905 3.379A.5.5 0 0114.39 3h3.22a.5.5 0 01.485.379l.689 2.757a.515.515 0 00.341.362c.383.126.755.274 1.115.443a.515.515 0 00.449-.003l2.767-1.383a.5.5 0 01.577.093l2.319 2.319a.5.5 0 01.093.577l-1.383 2.767a.515.515 0 00-.003.449c.127.271.243.549.346.833.053.148.17.265.319.315l2.934.978a.5.5 0 01.342.474v3.28a.5.5 0 01-.342.474l-2.934.978a.515.515 0 00-.32.315 9.937 9.937 0 01-.345.833.515.515 0 00.003.449l1.383 2.767a.5.5 0 01-.093.577l-2.319 2.319a.5.5 0 01-.577.093l-2.767-1.383a.515.515 0 00-.449-.003c-.271.127-.549.243-.833.346a.515.515 0 00-.315.319l-.978 2.934a.5.5 0 01-.474.342h-3.28a.5.5 0 01-.474-.342l-.978-2.934a.515.515 0 00-.315-.32 9.95 9.95 0 01-1.101-.475.515.515 0 00-.498.014l-2.437 1.463a.5.5 0 01-.611-.075l-2.277-2.277a.5.5 0 01-.075-.61l1.463-2.438a.515.515 0 00.014-.498 9.938 9.938 0 01-.573-1.383.515.515 0 00-.362-.341l-2.757-.69A.5.5 0 013 17.61v-3.22a.5.5 0 01.379-.485l2.757-.689a.515.515 0 00.362-.341c.157-.478.35-.94.573-1.383a.515.515 0 00-.014-.498L5.594 8.557a.5.5 0 01.075-.611l2.277-2.277a.5.5 0 01.61-.075l2.438 1.463c.152.091.34.094.498.014a9.938 9.938 0 011.382-.573.515.515 0 00.342-.362l.69-2.757z" />
										<circle cx="16" cy="16" r="5" stroke="#646464" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className='reverseSpinner'>
										<path stroke="#646464" strokeLinejoin="round" strokeWidth="2" d="M13.905 3.379A.5.5 0 0114.39 3h3.22a.5.5 0 01.485.379l.689 2.757a.515.515 0 00.341.362c.383.126.755.274 1.115.443a.515.515 0 00.449-.003l2.767-1.383a.5.5 0 01.577.093l2.319 2.319a.5.5 0 01.093.577l-1.383 2.767a.515.515 0 00-.003.449c.127.271.243.549.346.833.053.148.17.265.319.315l2.934.978a.5.5 0 01.342.474v3.28a.5.5 0 01-.342.474l-2.934.978a.515.515 0 00-.32.315 9.937 9.937 0 01-.345.833.515.515 0 00.003.449l1.383 2.767a.5.5 0 01-.093.577l-2.319 2.319a.5.5 0 01-.577.093l-2.767-1.383a.515.515 0 00-.449-.003c-.271.127-.549.243-.833.346a.515.515 0 00-.315.319l-.978 2.934a.5.5 0 01-.474.342h-3.28a.5.5 0 01-.474-.342l-.978-2.934a.515.515 0 00-.315-.32 9.95 9.95 0 01-1.101-.475.515.515 0 00-.498.014l-2.437 1.463a.5.5 0 01-.611-.075l-2.277-2.277a.5.5 0 01-.075-.61l1.463-2.438a.515.515 0 00.014-.498 9.938 9.938 0 01-.573-1.383.515.515 0 00-.362-.341l-2.757-.69A.5.5 0 013 17.61v-3.22a.5.5 0 01.379-.485l2.757-.689a.515.515 0 00.362-.341c.157-.478.35-.94.573-1.383a.515.515 0 00-.014-.498L5.594 8.557a.5.5 0 01.075-.611l2.277-2.277a.5.5 0 01.61-.075l2.438 1.463c.152.091.34.094.498.014a9.938 9.938 0 011.382-.573.515.515 0 00.342-.362l.69-2.757z" />
										<circle cx="16" cy="16" r="5" stroke="#646464" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
									</svg>
									<br />
									Loading<br />Please Wait...
								</div>
							</div>
						</div>
					</div>
				</motion.div> :
				<>
					<Router>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/notFound' element={<NotFound />} />
							<Route path='/skills' element={<Skills />} />
							<Route path='/achievements' element={<Achievements />} />
							<Route path='/projects' element={<Projects />} />
							<Route path='/connect' element={<Connect />} />
							<Route path='/gallery' element={<Gallery />} />
							<Route path="*" element={<Navigate to="/notFound" />} />
						</Routes>
					</Router>
				</>
			}
		</AnimatePresence>
	);
};

export default App;
