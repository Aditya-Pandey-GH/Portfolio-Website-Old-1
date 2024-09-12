// The App file for the Portfolio website of Aditya Pandey

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./Comps/Home";
import Skills from "./Comps/Skills";
import Achievements from "./Comps/Achievements";
import Projects from "./Comps/Projects";
import Connect from "./Comps/Connect";
import Gallery from "./Comps/Gallery";
import NotFound from "./Comps/NotFound";

import "./App.css";
import "./Scrollable.css";

const App = () => {
	// const Data = {
	// 	regularName: "Aditya Pandey",
	// 	capsName: "ADITYA PANDEY",
	// 	profession: [" Software Developer.", " UI/UX Designer.", " Photo Editor.", " Video Editor."],
	// 	pfp: "https://i.postimg.cc/4ysN00wx/pfp.jpg",
	// 	resumeLink: "https://drive.google.com/uc?export=download&id=1LevdCSu8KjueKHenjoMMaREGXmjJqo33",
	// 	dob: "16 September 2003",
	// };
	// const [Data, setData] = useState("");
	// const fetchUser = async () => {
	// 	let userData = await axios.get("/api/users");
	// 	setData(userData.data);
	// }; // Fetch the details of the user (here, Aditya Pandey)

	// useEffect(() => {
	// 	// fetchUser();
	// 	document.addEventListener("contextmenu", (e) => {
	// 		e.preventDefault();
	// 	}); // To remove the context menu, when user right-clicks
	// 	document.addEventListener("dragstart", function (e) {
	// 		e.preventDefault();
	// 	}); // To prevent users from dragging an image from the website
	// 	document.onkeydown = function (e) {
	// 		if (e.key === "F12" || (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C"))) {
	// 			return false;
	// 		}
	// 		// // Prevent F12
	// 		// if (e.key === 'F12') {
	// 		// 	alert("Inspect Menu can't be opened");
	// 		// 	return false;
	// 		// }
	// 		// // Prevent Ctrl+Shift+I
	// 		// if (e.ctrlKey && e.shiftKey && e.key === 'I') {
	// 		// 	alert("Inspect Menu can't be opened");
	// 		// 	return false;
	// 		// }
	// 		// // Prevent Ctrl+Shift+C
	// 		// if (e.ctrlKey && e.shiftKey && e.key === 'C') {
	// 		// 	alert("Inspect Menu can't be opened");
	// 		// 	return false;
	// 		// }
	// 	}; // To prevent the users from accessing the Dev Tools/ Inspect Menu
	// }, []);

	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/notFound" element={<NotFound />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/achievements" element={<Achievements />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/connect" element={<Connect />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="*" element={<Navigate to="/notFound" />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
