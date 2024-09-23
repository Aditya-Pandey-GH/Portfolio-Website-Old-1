import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./Navbar";
import IntroComponent from "./IntroComponent";

import "./css/Skills.css";

const Skills = () => {
	window.localStorage.setItem("page", 1);

	const [Techs, setTechs] = useState({});
	const [Langs, setLangs] = useState({});
	const [DBs, setDBs] = useState({});

	const fetchTech = async () => {
		setTechs(JSON.parse(window.localStorage.getItem("techData ")));
	}; // Fetch the details of the tech stacks known to the user (here, Aditya Pandey)

	const fetchLang = async () => {
		setLangs(JSON.parse(window.localStorage.getItem("langData ")));
	}; // Fetch the details of the programming languages known to the user (here, Aditya Pandey)

	const fetchDB = async () => {
		setDBs(JSON.parse(window.localStorage.getItem("dbData ")));
	}; // Fetch the details of the databases known to the user (here, Aditya Pandey)

	// const fetchTech = async () => {
	// 	let techData = await axios.get("/api/techs");
	// 	setTechs(techData.data);
	// }; // Fetch the details of the tech stacks known to the user (here, Aditya Pandey)
	// const fetchLang = async () => {
	// 	let langData = await axios.get("/api/langs");
	// 	setLangs(langData.data);
	// }; // Fetch the details of the programming languages known to the user (here, Aditya Pandey)
	// const fetchDB = async () => {
	// 	let dbData = await axios.get("/api/dbs");
	// 	setDBs(dbData.data);
	// }; // Fetch the details of the databases known to the user (here, Aditya Pandey)

	useEffect(() => {
		fetchTech();
		fetchLang();
		fetchDB();
	}, []);

	const Color = (skill) => {
		if (skill >= 80) {
			return "#279e1c";
		} else if (skill >= 50) {
			return "#bf7432";
		} else {
			return "#bf3232";
		}
	};

	// PAGINATION TECH STARTS
	const [curTechPage, setCurTechPage] = useState(1);
	const TechsPerPage = 5;
	const lastTechIndex = curTechPage * TechsPerPage;
	const firstTechIndex = lastTechIndex - TechsPerPage;
	const currentTechs = Object.values(Techs).slice(firstTechIndex, lastTechIndex);
	const totalTechPages = Math.ceil(Object.values(Techs).length / TechsPerPage);
	const handleTechPageChange = (pageNumber) => {
		setCurTechPage(pageNumber);
	};
	// PAGINATION TECH ENDS
	// PAGINATION LANG STARTS
	const [curLangPage, setCurLangPage] = useState(1);
	const LangsPerPage = 5;
	const lastLangIndex = curLangPage * LangsPerPage;
	const firstLangIndex = lastLangIndex - LangsPerPage;
	const currentLangs = Object.values(Langs).slice(firstLangIndex, lastLangIndex);
	const totalLangPages = Math.ceil(Object.values(Langs).length / LangsPerPage);
	const handleLangPageChange = (pageNumber) => {
		setCurLangPage(pageNumber);
	};
	// PAGINATION LANG ENDS

	return (
		<>
			<Navbar navElem="skillsNav" />
			<AnimatePresence>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }} className="spacing">
					<div className="homeContainer">
						<div className="col-1">
							<IntroComponent />

							<div className="homeComponent">
								<div className="homeComponentHeading">TECH STACKS</div>
								<div className="homeXP">
									{currentTechs.map((elem) => {
										return (
											<div key={elem.id} className="homeXPContent">
												<img src={elem.logo} alt="Not Found" className="homeXPimg" />
												<div>
													<div className="homeAcadHeading">{elem.title}</div>
													<div className="homeAcadSubContent">{elem.sect}</div>
													{elem.tech ? <div className="homeAcadSubContent">Tech Stack: {elem.tech}</div> : <></>}
													{elem.lang ? <div className="homeAcadSubContent">Language: {elem.lang}</div> : <></>}
												</div>
											</div>
										);
									})}
									<div className="pagination">
										{totalTechPages > 1 ? (
											<>
												<button className="paginationButton active" disabled={curTechPage <= 1} onClick={() => handleTechPageChange(curTechPage - 1)}>
													{"<"}
												</button>
												<button className="paginationButton">{`Page ${curTechPage}/${totalTechPages}`}</button>
												<button className="paginationButton active" disabled={curTechPage >= totalTechPages} onClick={() => handleTechPageChange(curTechPage + 1)}>
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
								<div className="homeComponentHeading">LANGUAGES</div>
								<div className="homeXP">
									{currentLangs.map((elem) => {
										return (
											<div key={elem.id} className="homeXPContent">
												<img src={elem.logo} alt="Not Found" className="homeXPimg" />
												<div style={{ width: "100%", margin: "auto" }}>
													<div className="homeAcadHeading">{elem.title}</div>
													<div className="homeAcadSubContent skillProgressBar">
														<motion.div initial={{ width: 0 }} animate={{ width: elem.skill + "%" }} transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }} className="skillProgress" style={{ backgroundColor: Color(elem.skill) }}>
															{elem.skill + "%"}
														</motion.div>
													</div>
												</div>
											</div>
										);
									})}
									<div className="pagination">
										{totalLangPages > 1 ? (
											<>
												<button className="paginationButton active" disabled={curLangPage <= 1} onClick={() => handleLangPageChange(curLangPage - 1)}>
													{"<"}
												</button>
												<button className="paginationButton">{`Page ${curLangPage}/${totalLangPages}`}</button>
												<button className="paginationButton active" disabled={curLangPage >= totalLangPages} onClick={() => handleLangPageChange(curLangPage + 1)}>
													{">"}
												</button>
											</>
										) : (
											<></>
										)}
									</div>
								</div>
							</div>
							<div className="homeComponent">
								<div className="homeComponentHeading">DATABASES</div>
								<div className="homeXP">
									{Object.values(DBs).map((elem) => {
										return (
											<div key={elem.id} className="homeXPContent">
												<img src={elem.logo} alt="Not Found" className="homeXPimg" />
												{/* <div className='timeline'>
														<svg xmlns="http://www.w3.org/2000/svg" fill="#ffc700" viewBox="0 0 32 32">
															<circle cx="16" cy="16" r="10" stroke="#646464" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
														</svg>
													</div> */}
												<div style={{ width: "100%", margin: "auto" }}>
													<div className="homeAcadHeading">{elem.title}</div>
													<div className="homeAcadSubContent skillProgressBar">
														<motion.div initial={{ width: 0 }} animate={{ width: elem.skill + "%" }} transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }} className="skillProgress" style={{ backgroundColor: Color(elem.skill) }}>
															{elem.skill + "%"}
														</motion.div>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default Skills;
