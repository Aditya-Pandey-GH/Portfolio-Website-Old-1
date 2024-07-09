import { motion, AnimatePresence } from "framer-motion";

import Data from "../Data";
import Navbar from "./Navbar";
import IntroComponent from "./IntroComponent";

const Projects = () => {
	window.localStorage.setItem("page", 3);

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
								<div className="homeComponentHeading">PERSONAL PROJECTS</div>
								<div className="homeXP">
									{
										Data.projectsPage.personal.map((elem) => {
											return (
												<div key={elem.id} className='homeXPContent'>
													<img
														src={elem.logo}
														alt="Not Found"
														className="homeXPimg" />
													<div>
														<div className='homeAcadHeading'>{elem.name}</div>
														<div className='homeAcadSubContent' style={{ marginTop: "1rem" }}>{elem.desc}</div>
														{
															elem.lang ?
																<div className='homeAcadSubContent' style={{ marginTop: "1rem" }}>Languages: {elem.lang}</div> :
																<></>
														}
														{/* {
															elem.tech ?
																<div className='homeAcadSubContent'>Tech Stack: {elem.tech}</div> :
																<></>
														} */}
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
								<div className="homeComponentHeading">PROFESSIONAL PROJECTS</div>
								<div className="homeXP">
									{
										Data.projectsPage.professional.map((elem) => {
											return (
												<div key={elem.id} className='homeXPContent'>
													<img
														src={elem.logo}
														alt="Not Found"
														className="homeXPimg" />
													<div>
														<div className='homeAcadHeading'>{elem.name}</div>
														<div className='homeAcadSubContent'>{elem.desc}</div>
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
					</div>

				</motion.div>
			</AnimatePresence>
		</>
	)
}

export default Projects;