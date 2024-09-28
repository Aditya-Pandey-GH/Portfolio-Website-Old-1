import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./Navbar";
import IntroComponent from "./IntroComponent";

const Skills = () => {
	window.localStorage.setItem("page", 1);

	const Techs = JSON.parse(window.localStorage.getItem("techData "));
	const Langs = JSON.parse(window.localStorage.getItem("langData "));
	const DBs = JSON.parse(window.localStorage.getItem("dbData "));

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
														<motion.div
															initial={{ width: 0 }}
															animate={{ width: elem.skill + "%" }}
															transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
															className="skillProgress"
															style={{ backgroundColor: Color(elem.skill) }}
														>
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
												<div style={{ width: "100%", margin: "auto" }}>
													<div className="homeAcadHeading">{elem.title}</div>
													<div className="homeAcadSubContent skillProgressBar">
														<motion.div
															initial={{ width: 0 }}
															animate={{ width: elem.skill + "%" }}
															transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
															className="skillProgress"
															style={{ backgroundColor: Color(elem.skill) }}
														>
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
