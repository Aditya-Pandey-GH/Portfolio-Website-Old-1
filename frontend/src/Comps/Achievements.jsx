import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import Data from "../Data";
import Navbar from "./Navbar";
import IntroComponent from "./IntroComponent";

const Achievements = () => {
	window.localStorage.setItem("page", 2);

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
									Data.successPage.welfare.map((elem) => {
										return (
											<div key={elem.id} className="homeWelfareContent">
												<div className='timeline'>
													<svg xmlns="http://www.w3.org/2000/svg" fill="#ffc700" viewBox="0 0 32 32">
														<circle cx="16" cy="16" r="10" stroke="#646464" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
													</svg>
												</div>
												<div className='homeWelfareSubContent'>{elem.title}</div>
											</div>
										)
									})
								}
							</div>

							<div className="homeComponent scrollableDiv">
								<div className="homeComponentHeading">CERTIFICATES</div>
								<div className="scrollableContent">
									{
										Data.successPage.certifications.map((elem) => {
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
										Data.successPage.achievements.map((elem) => {
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