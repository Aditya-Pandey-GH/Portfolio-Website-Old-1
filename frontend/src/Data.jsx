// The App file for the Portfolio website of Aditya Pandey
import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import App from "./App";

const Data = () => {
	const [loading, setLoading] = useState(true);
	const [Data, setData] = useState("");
	const baseURL = import.meta.env.VITE_SERVER_URL;

	// const [Acads, setAcads] = useState({});
	// const [XP, setXP] = useState({});
	// const [Techs, setTechs] = useState({});
	// const [Langs, setLangs] = useState({});
	// const [DBs, setDBs] = useState({});
	// const [Welfares, setWelfares] = useState({});
	// const [Certs, setCerts] = useState({});
	// const [Achs, setAchs] = useState({});
	// const [Personals, setPersonals] = useState({});
	// const [Profs, setProfs] = useState({});
	// const [Socials, setSocials] = useState({});

	const fetchUser = async () => {
		const userData = await axios.get(baseURL + "/api/users");
		setData(userData.data);
		window.localStorage.setItem("userData ", JSON.stringify(userData.data));
	}; // Fetch the details of the user (here, Aditya Pandey)

	const fetchAcad = async () => {
		const acadData = await axios.get(baseURL + "/api/acads");
		// setAcads(acadData.data);
		window.localStorage.setItem("acadData ", JSON.stringify(acadData.data));
	}; // Fetch the academic details of the user (here, Aditya Pandey)

	const fetchXP = async () => {
		const XPData = await axios.get(baseURL + "/api/xps");
		// setXP(XPData.data);
		window.localStorage.setItem("XPData ", JSON.stringify(XPData.data));
	}; // Fetch the experience details of the user (here, Aditya Pandey)

	const fetchTech = async () => {
		const techData = await axios.get(baseURL + "/api/techs");
		// setTechs(techData.data);
		window.localStorage.setItem("techData ", JSON.stringify(techData.data));
	}; // Fetch the details of the tech stacks known to the user (here, Aditya Pandey)

	const fetchLang = async () => {
		const langData = await axios.get(baseURL + "/api/langs");
		// setTechs(langData.data);
		window.localStorage.setItem("langData ", JSON.stringify(langData.data));
	}; // Fetch the details of the programming languages known to the user (here, Aditya Pandey)

	const fetchDB = async () => {
		const dbData = await axios.get(baseURL + "/api/dbs");
		// setDBs(dbData.data);
		window.localStorage.setItem("dbData ", JSON.stringify(dbData.data));
	}; // Fetch the details of the databases known to the user (here, Aditya Pandey)

	const fetchWelfare = async () => {
		const welfareData = await axios.get(baseURL + "/api/welfares");
		// setWelfares(welfareData.data);
		window.localStorage.setItem("welfareData ", JSON.stringify(welfareData.data));
	}; // Fetch the details of the social welfare works done by the user (here, Aditya Pandey)

	const fetchCert = async () => {
		const certData = await axios.get(baseURL + "/api/certs");
		// setCerts(certData.data);
		window.localStorage.setItem("certData ", JSON.stringify(certData.data));
	}; // Fetch the details of the certificates recieved by the user (here, Aditya Pandey)

	const fetchAch = async () => {
		const achData = await axios.get(baseURL + "/api/achs");
		// setAchs(achData.data);
		window.localStorage.setItem("achData ", JSON.stringify(achData.data));
	}; // Fetch the details of the achievements of the user (here, Aditya Pandey)

	const fetchPersonal = async () => {
		const personalData = await axios.get(baseURL + "/api/personals");
		// setPersonals(personalData.data);
		window.localStorage.setItem("personalData ", JSON.stringify(personalData.data));
	}; // Fetch the details of the personal projects made by the user (here, Aditya Pandey)

	const fetchProf = async () => {
		const profData = await axios.get(baseURL + "/api/profs");
		// setProfs(profData.data);
		window.localStorage.setItem("profData ", JSON.stringify(profData.data));
	}; // Fetch the details of the professional projects made by the user (here, Aditya Pandey)

	const fetchSocial = async () => {
		const socialData = await axios.get(baseURL + "/api/socials");
		// setSocials(socialData.data);
		window.localStorage.setItem("socialData ", JSON.stringify(socialData.data));
	}; // Fetch the details of the social media accounts of the user (here, Aditya Pandey)

	useEffect(() => {
		fetchUser();

		document.addEventListener("contextmenu", (e) => {
			e.preventDefault();
		}); // To remove the context menu, when user right-clicks

		document.addEventListener("dragstart", function (e) {
			e.preventDefault();
		}); // To prevent users from dragging an image from the website

		setTimeout(async () => {
			await fetchAcad();
			await fetchXP();
			await fetchTech();
			await fetchLang();
			await fetchDB();
			await fetchWelfare();
			await fetchCert();
			await fetchAch();
			await fetchPersonal();
			await fetchProf();
			await fetchSocial();
			setLoading(false);
		}, 1000); // For Splash Screen, which shows the basic details about the user (here, Aditya Pandey)
	}, []);

	return (
		<>
			<AnimatePresence>
				{/* {(Data = JSON.parse(window.localStorage.getItem("userData ")))} */}
				{loading ? (
					// The following code will display a splash screen to the user, each time, user runs the website.
					<motion.div
						key={"splash-screen"}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
						exit={{ opacity: 0, transition: { duration: 0.25, ease: "easeOut" } }}
					>
						<div className="splashContainer">
							<div className="profile">
								{/* <img
									src={Data.pfp}
									alt="Not Found"
									// title='Go to profile'
									className="pfp"
								/> */}
								<div className="detailsAdi">
									{/* <div className="detailsAdiName">{Data.capsName}</div>
									<div className="homeDetailsProf">
										<span style={{ fontFamily: "sans-serif" }}>(</span> {Data.dob} <span style={{ fontFamily: "sans-serif" }}>)</span>
									</div>
									<div style={{ height: "3rem" }} /> */}
									<div className="waitForIt">
										Loading
										<br />
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="loadingSpinner">
											<path
												stroke="#646464"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M13.905 3.379A.5.5 0 0114.39 3h3.22a.5.5 0 01.485.379l.689 2.757a.515.515 0 00.341.362c.383.126.755.274 1.115.443a.515.515 0 00.449-.003l2.767-1.383a.5.5 0 01.577.093l2.319 2.319a.5.5 0 01.093.577l-1.383 2.767a.515.515 0 00-.003.449c.127.271.243.549.346.833.053.148.17.265.319.315l2.934.978a.5.5 0 01.342.474v3.28a.5.5 0 01-.342.474l-2.934.978a.515.515 0 00-.32.315 9.937 9.937 0 01-.345.833.515.515 0 00.003.449l1.383 2.767a.5.5 0 01-.093.577l-2.319 2.319a.5.5 0 01-.577.093l-2.767-1.383a.515.515 0 00-.449-.003c-.271.127-.549.243-.833.346a.515.515 0 00-.315.319l-.978 2.934a.5.5 0 01-.474.342h-3.28a.5.5 0 01-.474-.342l-.978-2.934a.515.515 0 00-.315-.32 9.95 9.95 0 01-1.101-.475.515.515 0 00-.498.014l-2.437 1.463a.5.5 0 01-.611-.075l-2.277-2.277a.5.5 0 01-.075-.61l1.463-2.438a.515.515 0 00.014-.498 9.938 9.938 0 01-.573-1.383.515.515 0 00-.362-.341l-2.757-.69A.5.5 0 013 17.61v-3.22a.5.5 0 01.379-.485l2.757-.689a.515.515 0 00.362-.341c.157-.478.35-.94.573-1.383a.515.515 0 00-.014-.498L5.594 8.557a.5.5 0 01.075-.611l2.277-2.277a.5.5 0 01.61-.075l2.438 1.463c.152.091.34.094.498.014a9.938 9.938 0 011.382-.573.515.515 0 00.342-.362l.69-2.757z"
											/>
											<circle cx="16" cy="16" r="5" stroke="#646464" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
										</svg>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="reverseSpinner">
											<path
												stroke="#646464"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M13.905 3.379A.5.5 0 0114.39 3h3.22a.5.5 0 01.485.379l.689 2.757a.515.515 0 00.341.362c.383.126.755.274 1.115.443a.515.515 0 00.449-.003l2.767-1.383a.5.5 0 01.577.093l2.319 2.319a.5.5 0 01.093.577l-1.383 2.767a.515.515 0 00-.003.449c.127.271.243.549.346.833.053.148.17.265.319.315l2.934.978a.5.5 0 01.342.474v3.28a.5.5 0 01-.342.474l-2.934.978a.515.515 0 00-.32.315 9.937 9.937 0 01-.345.833.515.515 0 00.003.449l1.383 2.767a.5.5 0 01-.093.577l-2.319 2.319a.5.5 0 01-.577.093l-2.767-1.383a.515.515 0 00-.449-.003c-.271.127-.549.243-.833.346a.515.515 0 00-.315.319l-.978 2.934a.5.5 0 01-.474.342h-3.28a.5.5 0 01-.474-.342l-.978-2.934a.515.515 0 00-.315-.32 9.95 9.95 0 01-1.101-.475.515.515 0 00-.498.014l-2.437 1.463a.5.5 0 01-.611-.075l-2.277-2.277a.5.5 0 01-.075-.61l1.463-2.438a.515.515 0 00.014-.498 9.938 9.938 0 01-.573-1.383.515.515 0 00-.362-.341l-2.757-.69A.5.5 0 013 17.61v-3.22a.5.5 0 01.379-.485l2.757-.689a.515.515 0 00.362-.341c.157-.478.35-.94.573-1.383a.515.515 0 00-.014-.498L5.594 8.557a.5.5 0 01.075-.611l2.277-2.277a.5.5 0 01.61-.075l2.438 1.463c.152.091.34.094.498.014a9.938 9.938 0 011.382-.573.515.515 0 00.342-.362l.69-2.757z"
											/>
											<circle cx="16" cy="16" r="5" stroke="#646464" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
										</svg>
										<br />
										Please Wait...
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				) : (
					<>
						<App />
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default Data;
