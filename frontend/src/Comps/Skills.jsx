import { motion, AnimatePresence } from "framer-motion";

import Data from "../Data";
import Navbar from "./Navbar";
import IntroComponent from "./IntroComponent";

import './css/Skills.css';

const Skills = () => {
	window.localStorage.setItem("page", 1);

	return (
		<>
			<Navbar navElem="skillsNav" />
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
								<div className="homeComponentHeading">TECH STACKS</div>
								<div className="homeXP">
									{
										Data.skillsPage.techs.map((elem) => {
											return (
												<div key={elem.id} className='homeXPContent'>
													<img
														src={elem.logo}
														alt="Not Found"
														className="homeXPimg" />
													<div>
														<div className='homeAcadHeading'>{elem.title}</div>
														<div className='homeAcadSubContent'>{elem.sect}</div>
														{
															elem.tech ?
																<div className='homeAcadSubContent'>Tech Stack: {elem.tech}</div> :
																<></>
														}
														{
															elem.lang ?
																<div className='homeAcadSubContent'>Language: {elem.lang}</div> :
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
								<div className="homeComponentHeading">LANGUAGES</div>
								<div className="homeXP">
									{
										Data.skillsPage.langs.map((elem) => {
											return (
												<div key={elem.id} className='homeXPContent'>
													<img
														src={elem.logo}
														alt="Not Found"
														className="homeXPimg" />
													{/* <div className='timeline'>
														<svg xmlns="http://www.w3.org/2000/svg" fill="#ffc700" viewBox="0 0 32 32">
															<circle cx="16" cy="16" r="10" stroke="#646464" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
														</svg>
													</div> */}
													<div style={{ width: '100%', margin: 'auto' }}>
														<div className='homeAcadHeading'>{elem.title}</div>
														<div className='homeAcadSubContent skillProgressBar'>
															<motion.div
																initial={{ width: 0 }}
																animate={{ width: elem.skill }}
																transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
																className="skillProgress"
																style={{ backgroundColor: elem.color }}>
																{elem.skill}
															</motion.div>
														</div>
													</div>
												</div>
											)
										})
									}
								</div>
							</div>
							<div className="homeComponent">
								<div className="homeComponentHeading">DATABASES</div>
								<div className="homeXP">
									{
										Data.skillsPage.dbs.map((elem) => {
											return (
												<div key={elem.id} className='homeXPContent'>
													<img
														src={elem.logo}
														alt="Not Found"
														className="homeXPimg" />
													{/* <div className='timeline'>
														<svg xmlns="http://www.w3.org/2000/svg" fill="#ffc700" viewBox="0 0 32 32">
															<circle cx="16" cy="16" r="10" stroke="#646464" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
														</svg>
													</div> */}
													<div style={{ width: '100%', margin: 'auto' }}>
														<div className='homeAcadHeading'>{elem.title}</div>
														<div className='homeAcadSubContent skillProgressBar'>
															<motion.div
																initial={{ width: 0 }}
																animate={{ width: elem.skill }}
																transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
																className="skillProgress"
																style={{ backgroundColor: elem.color }}>
																{elem.skill}
															</motion.div>
														</div>
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

export default Skills;