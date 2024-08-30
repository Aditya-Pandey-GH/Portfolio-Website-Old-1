import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Navbar from "./Navbar";
import IntroComponent from "./IntroComponent";
import Site from "./svgs/site.svg";

const Projects = () => {
	window.localStorage.setItem("page", 3);

	const url = "https://pandey-ji-portfolio-bkapi.onrender.com";

	const [Personals, setPersonals] = useState({});
	const [Profs, setProfs] = useState({});

	const fetchPersonal = async () => {
		let personalData = await axios.get(url + "/api/personals");
		setPersonals(personalData.data);
	}; // Fetch the details of the personal projects made by the user (here, Aditya Pandey)

	const fetchProf = async () => {
		let profData = await axios.get(url + "/api/profs");
		setProfs(profData.data);
	}; // Fetch the details of the professional projects made by the user (here, Aditya Pandey)

	useEffect(() => {
		fetchPersonal();
		fetchProf();
	}, []);

	return (
		<>
			<Navbar navElem="projNav" />
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
								<div className="homeComponentHeading">PROFESSIONAL PROJECTS</div>
								<div className="homeXP">
									{
										Object.values(Profs).map((elem) => {
											return (
												<div key={elem.id} className='homeXPContent'>
													<img
														src={elem.logo}
														alt="Not Found"
														className="homeXPimg" />
													<div>
														<div className='homeAcadHeading'>{elem.name}</div>
														<div className='homeAcadSubContent' style={{ marginTop: "1rem" }}>{elem.desc}</div>
														<div className='homeAcadSubContent' style={{ marginTop: "1rem" }}>
															Languages: <ul style={{ marginLeft: "1.5rem" }}>
																{
																	Object.values(elem.lang).map((lang) => {
																		return (
																			<li key={lang}>{lang}</li>
																		)
																	})
																}
															</ul>
														</div>
														{
															elem.link !== "" ?
																<div className='homeAcadSubContent' style={{ marginTop: "1rem" }}>
																	<img
																		src={Site}
																		alt=""
																		style={{ width: "1.5rem" }} />
																	<Link to={elem.link} target="_blank" className="websites" > {elem.link}</Link>
																</div> :
																<></>
														}
													</div>
												</div>
											)
										})
									}
								</div>
							</div>
						</div>

						<div className="col-2">
							<div className="homeComponent">
								<div className="homeComponentHeading">PERSONAL PROJECTS</div>
								<div className="homeXP">
									{
										Object.values(Personals).map((elem) => {
											return (
												<div key={elem.id} className='homeXPContent'>
													<img
														src={elem.logo}
														alt="Not Found"
														className="homeXPimg" />
													<div>
														<div className='homeAcadHeading'>{elem.name}</div>
														<div className='homeAcadSubContent' style={{ marginTop: "1rem" }}>{elem.desc}</div>
														<div className='homeAcadSubContent' style={{ marginTop: "1rem" }}>
															Languages: <ul style={{ marginLeft: "1.5rem" }}>
																{
																	Object.values(elem.lang).map((lang) => {
																		return (
																			<li key={lang}>{lang}</li>
																		)
																	})
																}
															</ul>
														</div>
														{
															elem.link !== "" ?
																<div className='homeAcadSubContent' style={{ marginTop: "1rem" }}>
																	<img
																		src={Site}
																		alt=""
																		style={{ width: "1.5rem" }} />
																	<Link to={elem.link} target="_blank" className="websites" > {elem.link}</Link>
																</div> :
																<></>
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

export default Projects;