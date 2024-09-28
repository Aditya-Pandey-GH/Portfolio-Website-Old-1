import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./Navbar";
import IntroComponent from "./IntroComponent";

const Home = () => {
	window.localStorage.setItem("page", 0);

	const Welcome = JSON.parse(window.localStorage.getItem("welcomeData "));
	const Acads = JSON.parse(window.localStorage.getItem("acadData "));

	return (
		<>
			<Navbar navElem="homeNav" />
			<AnimatePresence>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }} className="spacing">
					<div className="homeContainer">
						<div className="col-1">
							<IntroComponent />

							<div className="homeComponent">
								<div className="homeComponentHeading">WELCOME 👋</div>
								<div className="homeWelfareContent">
									<ul className="homeWelfareSubContent" style={{ flexDirection: "column", marginLeft: "1rem" }}>
										{Welcome.map((elem, index) => {
											return <li key={index}>{elem}</li>;
										})}
									</ul>
								</div>
							</div>
						</div>

						<div className="col-2">
							<div className="homeComponent">
								<div className="homeComponentHeading">EDUCATION</div>
								<div className="xpScroll">
									{Object.values(Acads).map((elem) => {
										return (
											<div key={elem.id} className="homeAcadContent">
												<div className="homeAcadHeading"> {elem.name} </div>
												<div className="homeAcadSubContent">
													{elem.start} - {elem.end}
												</div>
												<div className="homeAcadSubContent">{elem.school}</div>
												<div className="homeAcadSubContent">{elem.location}</div>
												<div className="homeAcadSubContent">{elem.board}</div>
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

export default Home;
