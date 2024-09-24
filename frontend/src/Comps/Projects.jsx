import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import IntroComponent from "./IntroComponent";
import Site from "./svgs/site.svg";

const Projects = () => {
	window.localStorage.setItem("page", 3);

	const [Personals, setPersonals] = useState({});
	const [Profs, setProfs] = useState({});

	const fetchPersonal = async () => {
		setPersonals(JSON.parse(window.localStorage.getItem("personalData ")));
	}; // Fetch the details of the personal projects made by the user (here, Aditya Pandey)

	const fetchProf = async () => {
		setProfs(JSON.parse(window.localStorage.getItem("profData ")));
	}; // Fetch the details of the professional projects made by the user (here, Aditya Pandey)

	// const fetchPersonal = async () => {
	// 	let personalData = await axios.get("/api/personals");
	// 	setPersonals(personalData.data);
	// }; // Fetch the details of the personal projects made by the user (here, Aditya Pandey)
	// const fetchProf = async () => {
	// 	let profData = await axios.get("/api/profs");
	// 	setProfs(profData.data);
	// }; // Fetch the details of the professional projects made by the user (here, Aditya Pandey)

	useEffect(() => {
		fetchPersonal();
		fetchProf();
	}, []);

	// PAGINATION PROF STARTS
	const [curProfPage, setCurProfPage] = useState(1);
	const ProfsPerPage = 2;
	const lastProfIndex = curProfPage * ProfsPerPage;
	const firstProfIndex = lastProfIndex - ProfsPerPage;
	const currentProfs = Object.values(Profs).slice(firstProfIndex, lastProfIndex);
	const totalProfPages = Math.ceil(Object.values(Profs).length / ProfsPerPage);
	const handleProfPageChange = (pageNumber) => {
		setCurProfPage(pageNumber);
	};
	// PAGINATION PROF ENDS
	// PAGINATION PERSONAL STARTS
	const [curPersonalPage, setCurPersonalPage] = useState(1);
	const PersonalsPerPage = 5;
	const lastPersonalIndex = curPersonalPage * PersonalsPerPage;
	const firstPersonalIndex = lastPersonalIndex - PersonalsPerPage;
	const currentPersonals = Object.values(Personals).slice(firstPersonalIndex, lastPersonalIndex);
	const totalPersonalPages = Math.ceil(Object.values(Personals).length / PersonalsPerPage);
	const handlePersonalPageChange = (pageNumber) => {
		setCurPersonalPage(pageNumber);
	};
	// PAGINATION PERSONAL ENDS

	return (
		<>
			<Navbar navElem="projNav" />
			<AnimatePresence>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }} className="spacing">
					<div className="homeContainer">
						<div className="col-1">
							<IntroComponent />

							<div className="homeComponent">
								<div className="homeComponentHeading">APPS AND WEBSITES</div>
								<div className="homeXP">
									{currentProfs.map((elem) => {
										return (
											<div key={elem.id} className="homeXPContent">
												<img src={elem.logo} alt="Not Found" className="homeXPimg" />
												<div>
													<div className="homeAcadHeading">{elem.name}</div>
													<div
														className="homeAcadSubContent"
														style={{
															marginTop: "1rem",
														}}
													>
														{elem.desc}
													</div>
													<div
														className="homeAcadSubContent"
														style={{
															marginTop: "1rem",
														}}
													>
														Languages:{" "}
														<ul
															style={{
																marginLeft: "1.5rem",
															}}
														>
															{Object.values(elem.lang).map((lang) => {
																return <li key={lang}>{lang}</li>;
															})}
														</ul>
													</div>
													{elem.link !== "" ? (
														<div
															className="homeAcadSubContent"
															style={{
																marginTop: "1rem",
															}}
														>
															<img
																src={Site}
																alt=""
																style={{
																	width: "1.5rem",
																}}
															/>
															<Link to={elem.link} target="_blank" className="websites">
																{" "}
																{elem.link}
															</Link>
														</div>
													) : (
														<></>
													)}
												</div>
											</div>
										);
									})}
									<div className="pagination">
										{totalProfPages > 1 ? (
											<>
												<button className="paginationButton active" disabled={curProfPage <= 1} onClick={() => handleProfPageChange(curProfPage - 1)}>
													{"<"}
												</button>
												<button className="paginationButton">{`Page ${curProfPage}/${totalProfPages}`}</button>
												<button className="paginationButton active" disabled={curProfPage >= totalProfPages} onClick={() => handleProfPageChange(curProfPage + 1)}>
													{">"}
												</button>
											</>
										) : (
											<></>
										)}
									</div>
								</div>
							</div>
						</div>

						<div className="col-2">
							<div className="homeComponent">
								<div className="homeComponentHeading">GAMES</div>
								<div className="homeXP">
									{currentPersonals.map((elem) => {
										return (
											<div key={elem.id} className="homeXPContent">
												<img src={elem.logo} alt="Not Found" className="homeXPimg" />
												<div>
													<div className="homeAcadHeading">{elem.name}</div>
													<div
														className="homeAcadSubContent"
														style={{
															marginTop: "1rem",
														}}
													>
														{elem.desc}
													</div>
													<div
														className="homeAcadSubContent"
														style={{
															marginTop: "1rem",
														}}
													>
														Languages:{" "}
														<ul
															style={{
																marginLeft: "1.5rem",
															}}
														>
															{Object.values(elem.lang).map((lang) => {
																return <li key={lang}>{lang}</li>;
															})}
														</ul>
													</div>
													{elem.link !== "" ? (
														<div
															className="homeAcadSubContent"
															style={{
																marginTop: "1rem",
															}}
														>
															<img
																src={Site}
																alt=""
																style={{
																	width: "1.5rem",
																}}
															/>
															<Link to={elem.link} target="_blank" className="websites">
																{" "}
																{elem.link}
															</Link>
														</div>
													) : (
														<></>
													)}
												</div>
											</div>
										);
									})}
									<div className="pagination">
										{totalPersonalPages > 1 ? (
											<>
												<button className="paginationButton active" disabled={curPersonalPage <= 1} onClick={() => handlePersonalPageChange(curPersonalPage - 1)}>
													{"<"}
												</button>
												<button className="paginationButton">{`Page ${curPersonalPage}/${totalPersonalPages}`}</button>
												<button className="paginationButton active" disabled={curPersonalPage >= totalPersonalPages} onClick={() => handlePersonalPageChange(curPersonalPage + 1)}>
													{">"}
												</button>
											</>
										) : (
											<></>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default Projects;
