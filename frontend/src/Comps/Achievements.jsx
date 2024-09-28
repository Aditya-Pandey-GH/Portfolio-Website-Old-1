import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import IntroComponent from "./IntroComponent";

const Achievements = () => {
	window.localStorage.setItem("page", 2);

	const Welfares = JSON.parse(window.localStorage.getItem("welfareData "));
	const Certs = JSON.parse(window.localStorage.getItem("certData "));
	const XP = JSON.parse(window.localStorage.getItem("XPData "));
	const Achs = JSON.parse(window.localStorage.getItem("achData "));

	// PAGINATION WELFARE STARTS
	const [curWelfarePage, setCurWelfarePage] = useState(1);
	const WelfaresPerPage = 3;
	const lastWelfareIndex = curWelfarePage * WelfaresPerPage;
	const firstWelfareIndex = lastWelfareIndex - WelfaresPerPage;
	const currentWelfares = Object.values(Welfares).slice(firstWelfareIndex, lastWelfareIndex);
	const totalWelfarePages = Math.ceil(Object.values(Welfares).length / WelfaresPerPage);
	const handleWelfarePageChange = (pageNumber) => {
		setCurWelfarePage(pageNumber);
	};
	// PAGINATION WELFARE ENDS
	// PAGINATION CERTS STARTS
	const [curCertPage, setCurCertPage] = useState(1);
	const CertsPerPage = 1;
	const lastCertIndex = curCertPage * CertsPerPage;
	const firstCertIndex = lastCertIndex - CertsPerPage;
	const currentCerts = Object.values(Certs).slice(firstCertIndex, lastCertIndex);
	const totalCertPages = Math.ceil(Object.values(Certs).length / CertsPerPage);
	const handleCertPageChange = (pageNumber) => {
		setCurCertPage(pageNumber);
	};
	// PAGINATION CERTS ENDS
	// PAGINATION XP STARTS
	const [curXPPage, setCurXPPage] = useState(1);
	// const xpsPerPage = 6;
	const xpsPerPage = 5;
	const lastXPIndex = curXPPage * xpsPerPage;
	const firstXPIndex = lastXPIndex - xpsPerPage;
	const currentXPs = Object.values(XP).slice(firstXPIndex, lastXPIndex);
	const totalXPPages = Math.ceil(Object.values(XP).length / xpsPerPage);
	const handleXPPageChange = (pageNumber) => {
		setCurXPPage(pageNumber);
	};
	// PAGINATION XP ENDS
	// PAGINATION ACHS STARTS
	const [curAchPage, setCurAchPage] = useState(1);
	// const AchsPerPage = 9;
	const AchsPerPage = 5;
	const lastAchIndex = curAchPage * AchsPerPage;
	const firstAchIndex = lastAchIndex - AchsPerPage;
	const currentAchs = Object.values(Achs).slice(firstAchIndex, lastAchIndex);
	const totalAchPages = Math.ceil(Object.values(Achs).length / AchsPerPage);
	const handleAchPageChange = (pageNumber) => {
		setCurAchPage(pageNumber);
	};
	// PAGINATION ACHS ENDS

	return (
		<>
			<Navbar navElem="achieveNav" />
			<AnimatePresence>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }} className="spacing">
					<div className="homeContainer">
						<div className="col-1">
							<IntroComponent />

							<div className="homeComponent">
								<div className="homeComponentHeading">SOCIAL WELFARE</div>
								{currentWelfares.map((elem) => {
									return (
										<div key={elem.id} className="homeWelfareContent">
											<div className="timeline">
												<svg xmlns="http://www.w3.org/2000/svg" fill="#ffc700" viewBox="0 0 32 32">
													<circle cx="16" cy="16" r="10" stroke="#646464" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
												</svg>
											</div>
											<div className="homeWelfareSubContent">
												{elem.title}
												<br />
												<span style={{ float: "right" }}>~ {elem.year}</span>
											</div>
										</div>
									);
								})}
								<div className="pagination">
									{totalWelfarePages > 1 ? (
										<>
											<button className="paginationButton active" disabled={curWelfarePage <= 1} onClick={() => handleWelfarePageChange(curWelfarePage - 1)}>
												{"<"}
											</button>
											<button className="paginationButton">{`Page ${curWelfarePage}/${totalWelfarePages}`}</button>
											<button className="paginationButton active" disabled={curWelfarePage >= totalWelfarePages} onClick={() => handleWelfarePageChange(curWelfarePage + 1)}>
												{">"}
											</button>
										</>
									) : (
										<></>
									)}
								</div>
							</div>
							<div className="homeComponent scrollableDiv">
								<div className="homeComponentHeading">CERTIFICATES</div>
								<div className="scrollableContent">
									{currentCerts.map((elem) => {
										return (
											<div key={elem.id} className="homeWelfareContent">
												<Link to={elem.logo} target="_blank" className="homeCertContent">
													<img src={elem.logo} alt="Certificates" title="Click to view in high quality" className="scrollableImg" />
												</Link>
												<div className="scrollableTitle">( {elem.title} )</div>
												<div className="scrollableDesc">{elem.desc}</div>
												<ul className="scrollableByOn">
													<li>By: "{elem.by}"</li>
													<li>On: "{elem.on}"</li>
												</ul>
											</div>
										);
									})}
								</div>
								<div className="pagination">
									{totalCertPages > 1 ? (
										<>
											<button className="paginationButton active" disabled={curCertPage <= 1} onClick={() => handleCertPageChange(curCertPage - 1)}>
												{"<"}
											</button>
											<button className="paginationButton">{`Page ${curCertPage}/${totalCertPages}`}</button>
											<button className="paginationButton active" disabled={curCertPage >= totalCertPages} onClick={() => handleCertPageChange(curCertPage + 1)}>
												{">"}
											</button>
										</>
									) : (
										<></>
									)}
								</div>
							</div>
						</div>

						<div className="col-2">
							<div className="homeComponent">
								<div className="homeComponentHeading">EXPERIENCE</div>
								<div className="homeXP xpScroll">
									{currentXPs.map((elem) => {
										return (
											<div key={elem.id} className="homeXPContent">
												<img src={elem.logo} alt="Not Found" className="homeXPimg" />
												<div>
													<div className="homeAcadHeading">{elem.name}</div>
													<div className="homeAcadSubContent">Role: {elem.xp}</div>
													{elem.to !== "" || elem.to ? (
														<>
															<div className="homeAcadSubContent">From: {elem.from}</div>
															<div className="homeAcadSubContent">To: {elem.to}</div>
														</>
													) : (
														<>
															<div className="homeAcadSubContent">In: {elem.from}</div>
														</>
													)}
												</div>
											</div>
										);
									})}
									<div className="pagination">
										{totalXPPages > 1 ? (
											<>
												<button className="paginationButton active" disabled={curXPPage <= 1} onClick={() => handleXPPageChange(curXPPage - 1)}>
													{"<"}
												</button>
												<button className="paginationButton">{`Page ${curXPPage}/${totalXPPages}`}</button>
												<button className="paginationButton active" disabled={curXPPage >= totalXPPages} onClick={() => handleXPPageChange(curXPPage + 1)}>
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
								<div className="homeComponentHeading">ACHIEVEMENTS</div>
								<div className="homeXP">
									{currentAchs.map((elem) => {
										return (
											<div key={elem.id} className="homeXPContent">
												<img
													src={elem.logo}
													alt="Not Found"
													// style={{ width: "7rem" }}
													className="homeXPimg"
												/>
												<div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
													<div className="homeAcadHeading">{elem.name}</div>
													<div className="homeAcadSubContent">{elem.desc}</div>
												</div>
											</div>
										);
									})}
									<div className="pagination">
										{totalAchPages > 1 ? (
											<>
												<button className="paginationButton active" disabled={curAchPage <= 1} onClick={() => handleAchPageChange(curAchPage - 1)}>
													{"<"}
												</button>
												<button className="paginationButton">{`Page ${curAchPage}/${totalAchPages}`}</button>
												<button className="paginationButton active" disabled={curAchPage >= totalAchPages} onClick={() => handleAchPageChange(curAchPage + 1)}>
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

export default Achievements;
