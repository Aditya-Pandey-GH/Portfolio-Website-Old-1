import { Link } from "react-router-dom";
import axios from "axios";
import { Typewriter } from "react-simple-typewriter";

import Download from './svgs/download.svg';
import { useEffect, useState } from "react";

const IntroComponent = () => {
	const [Data, setData] = useState("");

	const url = "https://pandey-ji-portfolio-bkapi.onrender.com";

	const fetchUser = async () => {
		let userData = await axios.get(url + "/api/users");
		setData(userData.data);
	};

	useEffect(() => {
		fetchUser();
	}, []);

	return (
		<div className="homeComponent">
			<img
				src={Data.pfp}
				alt='Profile Pic'
				className='homePFP' />
			<div className='homeDetailsName'>
				{Data.capsName}
			</div>
			<div className='homeDetailsProf'>
				<span style={{ fontFamily: "sans-serif" }}>(</span> {Data.dob} <span style={{ fontFamily: "sans-serif" }}>)</span>
			</div>
			<div className='homeDetailsProf' style={{ zoom: "125%" }}>
				I am a
				<Typewriter
					words={[
						" Software Developer.",
						" UI/UX Designer.",
						" Photo Editor.",
						" Video Editor."
					]}
					loop={0}
					typeSpeed={40}
					deleteSpeed={40}
					cursor />
			</div>
			<div className='homeDetailsCV'>
				<Link to={Data.resumeLink} target="_blank">
					<img src={Download} alt="" />
					CLICK TO DOWNLOAD RESUME
					<img src={Download} alt="" />
				</Link>
			</div>
		</div>
	)
}

export default IntroComponent;