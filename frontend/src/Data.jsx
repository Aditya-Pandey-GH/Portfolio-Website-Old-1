import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import App from "./App";
import Content from "./Content";

const Data = () => {
	const [loading, setLoading] = useState(true);

	const setContent = async () => {
		window.localStorage.setItem("pageData ", JSON.stringify(Content.misc.pages));
		window.localStorage.setItem("userData ", JSON.stringify(Content.misc.user));
		window.localStorage.setItem("welcomeData ", JSON.stringify(Content.homePage.welcomeNote));
		window.localStorage.setItem("acadData ", JSON.stringify(Content.homePage.acads));
		window.localStorage.setItem("techData ", JSON.stringify(Content.skillsPage.teches));
		window.localStorage.setItem("toolData ", JSON.stringify(Content.skillsPage.tools));
		window.localStorage.setItem("langData ", JSON.stringify(Content.skillsPage.langs));
		window.localStorage.setItem("dbData ", JSON.stringify(Content.skillsPage.dbs));
		window.localStorage.setItem("welfareData ", JSON.stringify(Content.achievePage.welfares));
		window.localStorage.setItem("certData ", JSON.stringify(Content.achievePage.certs));
		window.localStorage.setItem("XPData ", JSON.stringify(Content.achievePage.xps));
		window.localStorage.setItem("achData ", JSON.stringify(Content.achievePage.aches));
		window.localStorage.setItem("personalData ", JSON.stringify(Content.projPage.games));
		window.localStorage.setItem("profData ", JSON.stringify(Content.projPage.appsWebs));
		window.localStorage.setItem("posterData ", JSON.stringify(Content.galleryPage.posters));
		window.localStorage.setItem("newsletterData ", JSON.stringify(Content.galleryPage.newsletters));
		window.localStorage.setItem("thumbData ", JSON.stringify(Content.galleryPage.thumbs.reverse()));
		window.localStorage.setItem("designData ", JSON.stringify(Content.galleryPage.designs));
		window.localStorage.setItem("socialData ", JSON.stringify(Content.connectPage.socials));
	};

	useEffect(() => {
		setTimeout(async () => {
			await setContent();
			setTimeout(() => {
				setLoading(false);
			}, 750); // For Splash Screen, which shows the basic details about the user (here, Aditya Pandey)
		}, 1);
	}, []);

	return (
		<>
			<AnimatePresence>
				{loading ? (
					<motion.div
						key={"splash-screen"}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
						exit={{
							opacity: 0,
							transition: { duration: 0.25, ease: "easeOut" },
						}}
					>
						<div className="splashContainer">
							<div className="waitForIt">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="loadingSpinner">
									<path
										stroke="#AAAAAA"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13.905 3.379A.5.5 0 0114.39 3h3.22a.5.5 0 01.485.379l.689 2.757a.515.515 0 00.341.362c.383.126.755.274 1.115.443a.515.515 0 00.449-.003l2.767-1.383a.5.5 0 01.577.093l2.319 2.319a.5.5 0 01.093.577l-1.383 2.767a.515.515 0 00-.003.449c.127.271.243.549.346.833.053.148.17.265.319.315l2.934.978a.5.5 0 01.342.474v3.28a.5.5 0 01-.342.474l-2.934.978a.515.515 0 00-.32.315 9.937 9.937 0 01-.345.833.515.515 0 00.003.449l1.383 2.767a.5.5 0 01-.093.577l-2.319 2.319a.5.5 0 01-.577.093l-2.767-1.383a.515.515 0 00-.449-.003c-.271.127-.549.243-.833.346a.515.515 0 00-.315.319l-.978 2.934a.5.5 0 01-.474.342h-3.28a.5.5 0 01-.474-.342l-.978-2.934a.515.515 0 00-.315-.32 9.95 9.95 0 01-1.101-.475.515.515 0 00-.498.014l-2.437 1.463a.5.5 0 01-.611-.075l-2.277-2.277a.5.5 0 01-.075-.61l1.463-2.438a.515.515 0 00.014-.498 9.938 9.938 0 01-.573-1.383.515.515 0 00-.362-.341l-2.757-.69A.5.5 0 013 17.61v-3.22a.5.5 0 01.379-.485l2.757-.689a.515.515 0 00.362-.341c.157-.478.35-.94.573-1.383a.515.515 0 00-.014-.498L5.594 8.557a.5.5 0 01.075-.611l2.277-2.277a.5.5 0 01.61-.075l2.438 1.463c.152.091.34.094.498.014a9.938 9.938 0 011.382-.573.515.515 0 00.342-.362l.69-2.757z"
									/>
									<circle cx="16" cy="16" r="5" stroke="#AAAAAA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="reverseSpinner">
									<path
										stroke="#AAAAAA"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13.905 3.379A.5.5 0 0114.39 3h3.22a.5.5 0 01.485.379l.689 2.757a.515.515 0 00.341.362c.383.126.755.274 1.115.443a.515.515 0 00.449-.003l2.767-1.383a.5.5 0 01.577.093l2.319 2.319a.5.5 0 01.093.577l-1.383 2.767a.515.515 0 00-.003.449c.127.271.243.549.346.833.053.148.17.265.319.315l2.934.978a.5.5 0 01.342.474v3.28a.5.5 0 01-.342.474l-2.934.978a.515.515 0 00-.32.315 9.937 9.937 0 01-.345.833.515.515 0 00.003.449l1.383 2.767a.5.5 0 01-.093.577l-2.319 2.319a.5.5 0 01-.577.093l-2.767-1.383a.515.515 0 00-.449-.003c-.271.127-.549.243-.833.346a.515.515 0 00-.315.319l-.978 2.934a.5.5 0 01-.474.342h-3.28a.5.5 0 01-.474-.342l-.978-2.934a.515.515 0 00-.315-.32 9.95 9.95 0 01-1.101-.475.515.515 0 00-.498.014l-2.437 1.463a.5.5 0 01-.611-.075l-2.277-2.277a.5.5 0 01-.075-.61l1.463-2.438a.515.515 0 00.014-.498 9.938 9.938 0 01-.573-1.383.515.515 0 00-.362-.341l-2.757-.69A.5.5 0 013 17.61v-3.22a.5.5 0 01.379-.485l2.757-.689a.515.515 0 00.362-.341c.157-.478.35-.94.573-1.383a.515.515 0 00-.014-.498L5.594 8.557a.5.5 0 01.075-.611l2.277-2.277a.5.5 0 01.61-.075l2.438 1.463c.152.091.34.094.498.014a9.938 9.938 0 011.382-.573.515.515 0 00.342-.362l.69-2.757z"
									/>
									<circle cx="16" cy="16" r="5" stroke="#AAAAAA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
								</svg>
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
