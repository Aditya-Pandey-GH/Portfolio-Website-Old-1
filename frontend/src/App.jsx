// The App file for the Portfolio website of Aditya Pandey

import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Comps/Home";
import Skills from "./Comps/Skills";
import Achievements from "./Comps/Achievements";
import Projects from "./Comps/Projects";
import Connect from "./Comps/Connect";
import Gallery from "./Comps/Gallery";
import NotFound from "./Comps/NotFound";

import "./Comps/css/Main.css";
import "./Comps/css/Scrollable.css";
import "./Comps/css/ProgressBar.css";

const App = () => {
	useEffect(() => {
		document.addEventListener("dragstart", function (e) {
			e.preventDefault();
		}); // To prevent users from dragging an image from the website

		// document.addEventListener("contextmenu", (e) => {
		// 	e.preventDefault();
		// }); // To remove the context menu, when user right-clicks
	});
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/moreContentToBeAdded" element={<NotFound />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/achievements" element={<Achievements />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/connect" element={<Connect />} />
					<Route path="/designs" element={<Gallery />} />
					<Route path="*" element={<Navigate to="/moreContentToBeAdded" replace={true} />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
