import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

import Navbar from "./Navbar";
import IntroComponent from "./IntroComponent";

const Home = () => {
	window.localStorage.setItem("page", 0);

	const url = "https://pandey-ji-portfolio-bkapi.onrender.com";

	const [Acads, setAcads] = useState({});
	const [XP, setXP] = useState({});

	const fetchAcad = async () => {
		let acadData = await axios.get(url + "/api/acads");
		setAcads(acadData.data);
	}; // Fetch the academic details of the user (here, Aditya Pandey)

	const fetchXP = async () => {
		let XPData = await axios.get(url + "/api/xps");
		setXP(XPData.data);
	}; // Fetch the experience details of the user (here, Aditya Pandey)

	useEffect(() => {
		fetchAcad();
		fetchXP();
	}, []);

	return (
		<>
			<Navbar navElem="homeNav" />
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
					className="spacing" >
					<div className="homeContainer">

						<div className="col-1">
							<IntroComponent />

							<div className="homeComponent">
								<div className="homeComponentHeading">EDUCATION</div>
								{
									Object.values(Acads).map((elem) => {
										return (
											<div key={elem.id} className="homeAcadContent">
												<div className="homeAcadHeading"> {elem.name} </div>
												<div className='homeAcadSubContent'>{elem.start} - {elem.end}</div>
												<div className='homeAcadSubContent'>{elem.school}</div>
												<div className='homeAcadSubContent'>{elem.location}</div>
												<div className='homeAcadSubContent'>{elem.board}</div>
											</div>
										)
									})
								}
							</div>
						</div>



						<div className="col-2">
							<div className="homeComponent xpScroll">
								<div className="homeComponentHeading">EXPERIENCE</div>
								<div className="homeXP">
									{
										Object.values(XP).map((elem) => {
											return (
												<div key={elem.id} className='homeXPContent'>
													<img
														src={elem.logo}
														alt="Not Found"
														className="homeXPimg" />
													<div>
														<div className='homeAcadHeading'>{elem.name}</div>
														<div className='homeAcadSubContent'>Role: {elem.xp}</div>
														{elem.to !== "" || elem.to ?
															<>
																<div className='homeAcadSubContent'>From: {elem.from}</div>
																<div className='homeAcadSubContent'>To: {elem.to}</div>
															</> :
															<>
																<div className='homeAcadSubContent'>In: {elem.from}</div>
															</>
														}
													</div>
												</div>
											)
										})
									}
								</div>
							</div>
						</div>
					</div>

				</motion.div>
			</AnimatePresence>
		</>
	)
}

export default Home;