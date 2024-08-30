import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

import Navbar from "./Navbar";
import IntroComponent from "./IntroComponent";

const Achievements = () => {
	window.localStorage.setItem("page", 2);

	const url = "https://pandey-ji-portfolio-bkapi.onrender.com";

	const [Welfares, setWelfares] = useState({});
	const [Certs, setCerts] = useState({});
	const [Achs, setAchs] = useState({});

	const fetchWelfare = async () => {
		let welfareData = await axios.get(url + "/api/welfares");
		setWelfares(welfareData.data);
	}; // Fetch the details of the social welfare works done by the user (here, Aditya Pandey)

	const fetchCert = async () => {
		let certData = await axios.get(url + "/api/certs");
		setCerts(certData.data);
	}; // Fetch the details of the certificates recieved by the user (here, Aditya Pandey)

	const fetchAch = async () => {
		let achData = await axios.get(url + "/api/achs");
		setAchs(achData.data);
	}; // Fetch the details of the achievements of the user (here, Aditya Pandey)

	useEffect(() => {
		fetchWelfare();
		fetchCert();
		fetchAch();
	}, []);

	return (
		<>
			<Navbar navElem="achieveNav" />
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
								<div className="homeComponentHeading">SOCIAL WELFARE</div>
								{
									Object.values(Welfares).map((elem) => {
										return (
											<div key={elem.id} className="homeWelfareContent">
												<div className='timeline'>
													<svg xmlns="http://www.w3.org/2000/svg" fill="#ffc700" viewBox="0 0 32 32">
														<circle cx="16" cy="16" r="10" stroke="#646464" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
													</svg>
												</div>
												<div className='homeWelfareSubContent'>
													{elem.title}<br />
													<span style={{ float: "right" }}>~ {elem.year}</span>
												</div>
											</div>
										)
									})
								}
							</div>

							<div className="homeComponent scrollableDiv">
								<div className="homeComponentHeading">CERTIFICATES</div>
								<div className="scrollableContent">
									{
										Object.values(Certs).map((elem) => {
											return (
												<div key={elem.id} className="homeWelfareContent" style={{ padding: '0 0.5rem 1rem 0.5rem' }}>
													<Link to={elem.preview} target="_blank">
														<img
															src={elem.logo}
															alt='MERN Training Certificate Missing'
															className='scrollableImg' />
													</Link>
												</div>
											)
										})
									}
								</div>
							</div>
						</div>



						<div className="col-2">
							<div className="homeComponent">
								<div className="homeComponentHeading">ACHIEVEMENTS</div>
								<div className="homeXP">
									{
										Object.values(Achs).map((elem) => {
											return (
												<div key={elem.id} className='homeXPContent'>
													<img
														src={elem.logo}
														alt="Not Found"
														// style={{ width: "7rem" }}
														className="homeXPimg" />
													<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
														<div className='homeAcadHeading'>{elem.name}</div>
														<div className='homeAcadSubContent'>{elem.desc}</div>
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

export default Achievements;