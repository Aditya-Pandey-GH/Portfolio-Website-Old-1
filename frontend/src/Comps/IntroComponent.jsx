import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

// import Download from "./svgs/download.svg";
import Download from "../imgs/misc/download.svg";

const IntroComponent = () => {
	const [Data, setData] = useState("");
	const fetchUser = async () => {
		setData(JSON.parse(window.localStorage.getItem("userData ")));
	};
	useEffect(() => {
		fetchUser();
	}, []);

	// const Data = {
	// 	regularName: "Aditya Pandey",
	// 	capsName: "ADITYA PANDEY",
	// 	profession: [" Software Developer.", " UI/UX Designer.", " Photo Editor.", " Video Editor."],
	// 	pfp: "https://i.postimg.cc/4ysN00wx/pfp.jpg",
	// 	resumeLink: "https://drive.google.com/uc?export=download&id=1LevdCSu8KjueKHenjoMMaREGXmjJqo33",
	// 	dob: "16 September 2003",
	// };

	return (
		<div className="homeComponent">
			<img src={Data.pfp} alt="Profile Pic" className="homePFP" />
			<div className="homeDetailsName">{Data.capsName}</div>
			<div className="homeDetailsProf">
				<span style={{ fontFamily: "sans-serif" }}>(</span> {Data.dob} <span style={{ fontFamily: "sans-serif" }}>)</span>
			</div>
			<div className="homeDetailsProf" style={{ zoom: "125%" }}>
				I am a
				<Typewriter
					// words={[
					// 	"HEY PROFESSIONALS 👋",
					// 	"I am " + Data.regularName
					// ]}
					words={Data.profession}
					loop={0}
					typeSpeed={40}
					deleteSpeed={40}
					cursor
				/>
			</div>
			<div className="homeDetailsCV">
				<Link to={Data.resumeLink} target="_blank">
					<img src={Download} alt="" />
					DOWNLOAD RESUME
					{/* <img src={Download} alt="" /> */}
				</Link>
			</div>
		</div>
	);
};

export default IntroComponent;
