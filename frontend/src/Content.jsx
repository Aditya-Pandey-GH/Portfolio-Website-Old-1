function image(subDir, name) {
	return new URL(`./imgs/${subDir}/${name}.png`, import.meta.url).href;
}
function pdf(name) {
	return new URL(`./pdfs/${name}.pdf`, import.meta.url).href;
}
function svg(subDir, name) {
	return new URL(`./imgs/${subDir}/${name}.svg`, import.meta.url).href;
}

const Content = {
	misc: {
		pages: [
			{
				name: "Home",
				logo: image("pages", "home"),
				pageName: "homeNav",
				path: "/",
			},
			{
				name: "Skills",
				logo: image("pages", "skills"),
				pageName: "skillsNav",
				path: "/skills",
			},
			{
				name: "Achievements",
				logo: image("pages", "achieve"),
				pageName: "achieveNav",
				path: "/achievements",
			},
			{
				name: "Projects",
				logo: image("pages", "projects"),
				pageName: "projNav",
				path: "/projects",
			},
			{
				name: "Designs",
				logo: image("pages", "design"),
				pageName: "galleryNav",
				path: "/designs",
			},
			{
				name: "Connect",
				logo: image("pages", "connect"),
				pageName: "connectNav",
				path: "/connect",
			},
		],
		user: {
			_id: {
				$oid: "6650f0ca1c24e6a08ba74ecb",
			},
			regularName: "Aditya Pandey",
			capsName: "ADITYA PANDEY",
			profession: [" Web Developer.", " Graphic Designer.", " Video Editor."],
			pfp: image("misc", "pfp"),
			resumeLink: "",
			dob: "16 September 2003",
		},
	},
	homePage: {
		welcomeNote: [
			"Hello user. I am Aditya Pandey👋, and I welcome you to my website.",
			"I am a BCA graduate, and have the knowledge of making web applications 🌐, like this website.",
			"Other than that, I also have knowledge of various concepts like graphic designing 🖼️ and video editing 📹.",
			"I am aspiring to be a professional game developer 🎮 in near future, to be able to lead the market and industry with my professionalism.",
			"This website shows my skills, my works, my achievements 🏆, my experience, and many more things about me.",
			"Explore this website to know more about me 😁.",
		],
		acads: [
			{
				_id: {
					$oid: "66d03c925dfe6b308267c8f6",
				},
				id: "grad",
				name: "BACHELORS IN COMPUTER APPLICATIONS",
				start: "Dec 2021",
				end: "June 2024",
				school: "JIMS, Rohini (Sector-5)",
				location: "New Delhi",
				board: "GGSIPU",
			},
			{
				_id: {
					$oid: "66d03ce25dfe6b308267c8f7",
				},
				id: "inter",
				name: "INTERMEDIATE (12th)",
				start: "2020",
				end: "2021",
				school: "Hansraj Smarak Sr. Sec. School",
				location: "New Delhi",
				board: "CBSE",
			},
			{
				_id: {
					$oid: "66d03cee5dfe6b308267c8f8",
				},
				id: "matric",
				name: "MATRICULATION (10th)",
				start: "2018",
				end: "2019",
				school: "Everest Public School",
				location: "Ghaziabad, UP",
				board: "CBSE",
			},
		],
	},
	skillsPage: {
		teches: [
			{
				_id: {
					$oid: "66d0acd85dfe6b308267c90f",
				},
				id: "react",
				title: "ReactJS",
				tech: "MERN",
				sect: "Web Development",
				lang: "JavaScript",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			},
			{
				_id: {
					$oid: "66d0acd85dfe6b308267c911",
				},
				id: "node",
				title: "NodeJS",
				tech: "MERN",
				sect: "Web Development",
				lang: "JavaScript",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
			},
			// {
			// 	_id: {
			// 		$oid: "66d0acd85dfe6b308267c910",
			// 	},
			// 	id: "express",
			// 	title: "ExpressJS",
			// 	tech: "MERN",
			// 	sect: "Web Development",
			// 	lang: "JavaScript",
			// 	logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
			// },
			{
				_id: {
					$oid: "66d0acd85dfe6b308267c912",
				},
				id: "unity",
				title: "Unity {Learning}",
				tech: "",
				sect: "Game Development",
				lang: "C#",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
			},
			{
				_id: {
					$oid: "66d0acd85dfe6b308267c913",
				},
				id: "flutter",
				title: "Flutter {Learning}",
				tech: "Flutter",
				sect: "Application Development",
				lang: "Dart",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
			},
			// {
			// 	_id: {
			// 		$oid: "66d0acd85dfe6b308267c914",
			// 	},
			// 	id: "android",
			// 	title: "Android Studio {Learning}",
			// 	tech: "",
			// 	sect: "Android Application Development",
			// 	lang: "Java",
			// 	logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
			// },
		],
		tools: [
			{
				_id: {
					$oid: "66d0af185dfe6b308267c917",
				},
				id: "figma",
				title: "Figma",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
				type: "Designing",
				since: "2023",
			},
			{
				_id: {
					$oid: "66d0af185dfe6b308267c919",
				},
				id: "ppt",
				title: "Microsoft PowerPoint",
				logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg",
				type: "Designing",
				since: "2016",
			},
			{
				_id: {
					$oid: "66d0af185dfe6b308267c918",
				},
				id: "canva",
				title: "Canva",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
				type: "Designing",
				since: "2022",
			},
			{
				_id: {
					$oid: "66d0af185dfe6b308267c91c",
				},
				id: "vscode",
				title: "Microsoft Visual Studio Code",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
				type: "Programming",
				since: "2022",
			},
			{
				_id: {
					$oid: "66d0af185dfe6b308267c91b",
				},
				id: "vs",
				title: "Microsoft Visual Studio",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg",
				type: "Programming",
				since: "2018",
			},
			{
				_id: {
					$oid: "66d0af185dfe6b308267c91d",
				},
				id: "jetbrains",
				title: "JetBrains",
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg",
				type: "Programming",
				since: "2022",
			},
			// {
			// 	_id: {
			// 		$oid: "66d0af185dfe6b308267c91e",
			// 	},
			// 	id: "vb",
			// 	title: "Microsoft Visual Basic",
			// 	logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualbasic/visualbasic-original.svg",
			// 	type: "Programming",
			// 	since: "2016",
			// },
			{
				_id: {
					$oid: "66d0af185dfe6b308267c91a",
				},
				id: "filmora",
				title: "Wondershare Filmora",
				logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wondershare_filmora_logo.svg",
				type: "Video Editing",
				since: "2020",
			},
		],
		langs: [
			{
				_id: {
					$oid: "66d0af185dfe6b308267c917",
				},
				id: "js",
				title: "JavaScript (MERN)",
				skill: 80,
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
			},
			{
				_id: {
					$oid: "66d0af185dfe6b308267c919",
				},
				id: "java",
				title: "Java (Core)",
				skill: 75,
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
			},
			{
				_id: {
					$oid: "66d0af185dfe6b308267c918",
				},
				id: "python",
				title: "Python (Basics)",
				skill: 75,
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
			},
			{
				_id: {
					$oid: "66d0af185dfe6b308267c91a",
				},
				id: "csharp",
				title: "C# (Unity) {Learning}",
				skill: 50,
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
			},
			// {
			// 	_id: {
			// 		$oid: "66d0af185dfe6b308267c91c",
			// 	},
			// 	id: "cpp",
			// 	title: "C++ (Basics)",
			// 	skill: 40,
			// 	logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
			// },
			// {
			// 	_id: {
			// 		$oid: "66d0af185dfe6b308267c91b",
			// 	},
			// 	id: "c",
			// 	title: "C (Basics)",
			// 	skill: 30,
			// 	logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
			// },
			{
				_id: {
					$oid: "66d0af185dfe6b308267c91d",
				},
				id: "dart",
				title: "Dart (Flutter) {Learning}",
				skill: 25,
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
			},
		],
		dbs: [
			{
				_id: {
					$oid: "66d0b3605dfe6b308267c91f",
				},
				id: "mongo",
				title: "MongoDB",
				skill: 80,
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
			},
			{
				_id: {
					$oid: "66d0b3605dfe6b308267c920",
				},
				id: "mysql",
				title: "MySQL",
				skill: 40,
				logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
			},
			// {
			// 	_id: {
			// 		$oid: "66d0b3605dfe6b308267c921",
			// 	},
			// 	id: "oraclesql",
			// 	title: "OracleSQL",
			// 	skill: 20,
			// 	logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
			// },
		],
	},
	achievePage: {
		welfares: [
			{
				_id: {
					$oid: "66d0bc665dfe6b308267c92a",
				},
				id: "act2017",
				title: "Performed a act on the auspicious day of Republic Day to increase public awareness on the topic of 'Old-Age Homes'.",
				year: "Jan 2017",
			},
			{
				_id: {
					$oid: "66d0bc665dfe6b308267c92b",
				},
				id: "streetPlay2018",
				title: "Performed a street play to spread awareness about Air and Water Pollution and their severe impacts on environment.",
				year: "Apr 2018",
			},
			{
				_id: {
					$oid: "66d0bc665dfe6b308267c92c",
				},
				id: "streetPlay2019",
				title: "Performed a street play to spread awareness about Water and Land Pollution and their severe impacts on environment.",
				year: "May 2019",
			},
			{
				_id: {
					$oid: "66d0bc665dfe6b308267c92d",
				},
				id: "ofa2022",
				title: "Did plastic recycling and spread awareness for the same through an act, which motivated other students to collect recyclable plastic waste under our initiative 'One for All'.",
				year: "May 2022",
			},
			{
				_id: {
					$oid: "66d0bc665dfe6b308267c92e",
				},
				id: "streetPlay2022",
				title: "Performed a street play to spread awareness about Air Pollution and its severe impacts on environment.",
				year: "Dec 2022",
			},
		],
		certs: [
			{
				_id: {
					$oid: "66d0bed15dfe6b308267c930",
				},
				id: "mernTraining",
				title: "MERN Stack Training",
				desc: "This was awarded for the completion of Summer training with MERN stack, at Jagan Institute of Management Studies, Sector-5 (Rohini).",
				logo: image("certs", "mernStack"),
				// preview: "https://postimg.cc/PP8HPmyc",
				by: "Tech Explica",
				on: "Sep 2023",
			},
			{
				_id: {
					$oid: "66d0bed15dfe6b308267c931",
				},
				id: "ofa-bajajCert",
				title: "Plastic Recycling",
				desc: "This was awarded for launching a small-scale initiative (One For All), which consisted of the collection of plastic milk packets, and then sending them to plastic recyclers.",
				logo: image("certs", "oneForAll"),
				// preview: "https://postimg.cc/jDHrhtG4",
				by: "Bajaj & Others",
				on: "Jul 2022",
			},
			{
				_id: {
					$oid: "66d0bed15dfe6b308267c933",
				},
				id: "networkBulls",
				title: "Network Bull (Cisco)",
				desc: "This was awarded for participating in a 1-day industrial visit on network implementation and cyber security.",
				logo: image("certs", "cyberSec"),
				// preview: "https://postimg.cc/3k5Tpdbw",
				by: "Network Bull",
				on: "May 2022",
			},
			{
				_id: {
					$oid: "66d0bed15dfe6b308267c932",
				},
				id: "ipr-event",
				title: "NIPAM",
				desc: "This was awarded for participating in the IP Awareness Training Program under National Intellectual Property Awareness Mission, called Scope for All.",
				logo: image("certs", "scopeForAll"),
				// preview: "https://postimg.cc/3y3QSzh5",
				by: "NIPAM",
				on: "Feb 2022",
			},
		],
		xps: [
			{
				_id: {
					$oid: "66d045b45dfe6b308267c902",
				},
				id: "technowhiz",
				name: "Technowhiz",
				xp: "Core Coordinator",
				logo: image("xp", "technowhiz"),
				from: "February 2023",
				to: "July 2024",
			},
			{
				_id: {
					$oid: "66d0457b5dfe6b308267c900",
				},
				id: "itContent",
				name: "IT Kaliedoscope",
				xp: "Content Writer",
				logo: image("xp", "jims"),
				from: "December 2021",
				to: "July 2024",
			},
			{
				_id: {
					$oid: "66d0455a5dfe6b308267c8ff",
				},
				id: "itDesign",
				name: "IT Kaliedoscope",
				xp: "Designer",
				logo: image("xp", "jims"),
				from: "December 2021",
				to: "July 2024",
			},
			{
				_id: {
					$oid: "66d045c65dfe6b308267c903",
				},
				id: "geekRoom",
				name: "Geek Room",
				xp: "Core Coordinator",
				logo: image("xp", "geekRoom"),
				from: "December 2023",
				to: "February 2024",
			},
			{
				_id: {
					$oid: "66d045a55dfe6b308267c901",
				},
				id: "tekqbe",
				name: "TekQbe",
				xp: "Student Coordinator",
				logo: image("xp", "tekqbe"),
				from: "July 2022",
				to: "July 2024",
			},
		],
		aches: [
			{
				_id: {
					$oid: "66d0c0605dfe6b308267c935",
				},
				id: "codeIt",
				name: "Code It",
				desc: "Secured 3rd position in a coding competition named Code-It, where I competed against seniors from 2nd and 3rd year, and also the seniors from MCA.",
				logo: image("achs", "codeIt"),
			},
			{
				_id: {
					$oid: "66d0c0605dfe6b308267c936",
				},
				id: "ecoArt",
				name: "Eco Art",
				desc: "Organized a massive event in JIMS, Sector-5, Rohini to spread awareness about milk packet/ plastic recycling. The students were to create posters or hand paintings to promote environment friendliness, and hazards of plastic waste. Me, along with co-orgnaizers, also performed an act to support this.",
				logo: image("achs", "ofa"),
			},
			{
				_id: {
					$oid: "66d0c0605dfe6b308267c938",
				},
				id: "sih22",
				name: "Smart India Hackathon 2022",
				desc: "Secured 4th position in SIH'22 for our problem statement and got to know and learn a lot about the environment in a formal hackathon and became well aware about the coding culture.",
				logo: image("achs", "sih"),
			},
			{
				_id: {
					$oid: "66d0c0605dfe6b308267c937",
				},
				id: "techJitters",
				name: "Tech Jitters",
				desc: "Served as a co-ordinator in Tech Jitters, an inter-college tech fest. The event was organized by TekQbe, the IT Club of JIMS.",
				logo: image("achs", "techJitters"),
			},
			{
				_id: {
					$oid: "66d0c0605dfe6b308267c939",
				},
				id: "JIH23",
				name: "JIMS Internal Hackathon 2023",
				desc: "Secured 1st position in JIMS Internal Hackathon 2023. JIMS Internal Hackathon is the internal hackathon, that was conducted as an elimination round for Smart India Hackathon 2023.",
				logo: image("achs", "sih"),
			},
			{
				_id: {
					$oid: "66d0c0605dfe6b308267c93a",
				},
				id: "codekshetra",
				name: "Code Kshetra",
				desc: "Served as an organizer in a national level hackathon, Code Kshetra. This was organized in collaboration with Geek Room society. Sponsors included Coding Ninja, Devfolio, Polygon, Rise In, etc.",
				logo: image("achs", "codeKshetra"),
			},
		],
	},
	projPage: {
		appsWebs: [
			{
				_id: {
					$oid: "66d0c8ff5dfe6b308267c943",
				},
				id: "jimsPrePlace",
				name: "JIMS Pre-Placement Portal {In Progress}",
				desc: "JIMS Pre-Placement Portal is a web for all the pre-placement related content for JIMS, making it easy for the students to access it later. Also, with a simple admin portal, the admin can easily add or delete or modify multiple things in the website.",
				lang: ["Node.js", "Express.js", "MongoDB", "React", "Cascading Style Sheets (CSS)"],
				logo: image("projs", "prePlace"),
				link: "",
			},
			{
				_id: {
					$oid: "66d0c8ff5dfe6b308267c942",
				},
				id: "adiPortfolio",
				name: "Adi's Portfolio",
				desc: "Adi's Portfolio is the portfolio website for Aditya Pandey. This website shows the entire programming journey of Aditya Pandey. What you are seeing right now is also a part of this project. This portfolio will be updated from time to time to keep it up-to-date.",
				// lang: ["Node.js", "Express.js", "MongoDB", "React", "Cascading Style Sheets (CSS)"],
				lang: ["Node.js", "Express.js", "React", "Cascading Style Sheets (CSS)"],
				logo: image("projs", "portfolio"),
				link: "",
			},
			{
				_id: {
					$oid: "66ebe20a9fa4c0a3d31551ab",
				},
				id: "healthElevator",
				name: "Health Elevator",
				desc: "Health Elevator is a website that helps the users to search for the nearby medical stores, and set the reminders for medicines. All the reminders will be sent to your WhatsApp number that you want to recieve your reminders on, since most of the people are active on WhatsApp.",
				lang: ["Node.js", "Express.js", "MongoDB", "React", "Casacading Style Sheets (CSS)"],
				logo: image("projs", "healthElevator"),
				link: "",
			},
		],
		games: [
			{
				_id: {
					$oid: "66d0c7405dfe6b308267c93d",
				},
				id: "g12",
				name: "G-12",
				desc: "G-12 is a command line based Python project. This project contains a set games for different purposes, such as fun games and mind games.",
				lang: ["Python", "MySQL"],
				logo: image("projs", "g12"),
				link: "",
			},
			{
				_id: {
					$oid: "66d0c7405dfe6b308267c93f",
				},
				id: "flappy_clone",
				name: "Flappy Bird (Clone)",
				desc: "Flappy Bird is one of the very well popular games. But it was abandoned by its developer. This project is a clone of the original Flappy Bird game, but a bit more difficult.",
				lang: ["Unity", "C#"],
				logo: image("projs", "flappy"),
				link: "https://github.com/AdiBhaiya/Flappy-Bird-Clone/releases/tag/v2.0",
			},
			{
				_id: {
					$oid: "66d0c7405dfe6b308267c93e",
				},
				id: "g12_plus",
				name: "G-12 Plus",
				desc: "G-12 is a Graphical User Interface based Python project. Using libraries like tkinter and customtkinter, this project aims to improve the original G-12 project, by adding an interactable GUI.",
				lang: ["Python", "SQLite"],
				logo: image("projs", "g12Plus"),
				link: "",
			},
			{
				_id: {
					$oid: "66d0d39f5dfe6b308267c94c",
				},
				id: "evilSimon",
				name: "Evil Simon",
				desc: "Evil Simon is the Hard Mode of Simon Says game. The concept of this game is same as the original Simon Says game, but the Evil Simon has a bit of difficulty to offer, and you have to overcome that difficulty, by making and breaking high scores.",
				lang: ["React.js", "Casacading Style Sheets (CSS)"],
				logo: image("projs", "evilSimon"),
				link: "https://evil-simon.vercel.app/",
			},
		],
	},
	galleryPage: {
		posters: [
			{
				_id: {
					$oid: "66f006da1fee15c609f635da",
				},
				id: "ecoFriendlyDiwaliPosterMakingCompetitionOct2022",
				title: "Eco-Friendly Diwali",
				desc: "This poster was made for a poster-making competition. The theme for that event was Eco-Friendly Diwali. It was conducted on October 28, 2022 by the Eco Club of Jagan Institute of Management Studies, Sector-5, Rohini.",
				logo: image("posters", "DiwaliPoster"),
			},
			{
				_id: {
					$oid: "66f006da1fee15c609f635db",
				},
				id: "bcaOrientationSessionDec2022",
				title: "BCA Orientation (2022-25)",
				desc: "This poster was made for the orientation session that was to be held for the students enrolled in BCA program of batch 2022-25 at Jagan Institute of Management Studies, Sector-5, Rohini. It was organized on December 1, 2022.",
				logo: image("posters", "Orientation"),
			},
			{
				_id: {
					$oid: "66f006da1fee15c609f635dc",
				},
				id: "airNoisePollutionNukkadNatakDec2022",
				title: "Air or Noise Pollution",
				desc: "This poster was made for a Nukkad Natak event which was to be organized to spread awareness about Air and Noise Pollution. It was conducted on December 13, 2022 by the Eco Club of Jagan Institute of Management Studies, Sector-5, Rohini.",
				logo: image("posters", "Pollution"),
			},
			{
				_id: {
					$oid: "66f006da1fee15c609f635dd",
				},
				id: "sankalpAuditionsDec2022",
				title: "Sankalp Auditions (2022-25)",
				desc: "This poster was made for Sankalp, the theatre society of  Jagan Institute of Management Studies, Sector-5, Rohini, to cast students from 2022-25 batch into the society. It was scheduled for December 28, 2022.",
				logo: image("posters", "Sankalp"),
			},
			{
				_id: {
					$oid: "66f006da1fee15c609f635de",
				},
				id: "codeItTekQbeJun2023",
				title: "Code-It",
				desc: 'This poster was made for a coding-based event named "Code-It". It was conducted on June 14, 2023 by the IT Club (TekQbe) at Jagan Institute of Management Studies, Sector-5, Rohini.',
				logo: image("posters", "CodeIt"),
			},
			{
				_id: {
					$oid: "66f006da1fee15c609f635df",
				},
				id: "farewellPartyAug2023",
				title: "Farewell Party (2020-23)",
				desc: "This poster was made for the Farewell Party of the students of MCA, BBA, BCA and BA Eco Hons.. It was conducted on August 12, 2023 by the Cultural Club at Jagan Institute of Management Studies, Sector-5, Rohini.",
				logo: image("posters", "Farewell"),
			},
			{
				_id: {
					$oid: "66f006da1fee15c609f635e0",
				},
				id: "codeHuntTekQbeEvent2023",
				title: "Code Hunt",
				desc: "This poster was made for a 3 round coding-based event named Code Hunt. It was conducted in 2023, by the IT Club (TekQbe) of Jagan Institute of Management Studies, Sector-5, Rohini.",
				logo: image("posters", "CodeHunt"),
			},
			{
				_id: {
					$oid: "66f006da1fee15c609f635e1",
				},
				id: "saiTiffinSep2024",
				title: "Sai Tiffin Service",
				desc: "This poster was made to promote a local tiffin service, called SAI Tiffin Service. This tiffin service was started in September 2024, and aimed at providing the tiffin service to the people of Shalimar Garden, at a lower price than market price.",
				logo: image("posters", "SaiTiffin"),
			},
		],
		newsletters: [
			{
				id: "oct22",
				title: "How 5G will transform India?",
				// link: Oct22,
				link: pdf("October 2022"),
			},
			{
				id: "mar23",
				title: "The Era of AI Chatbots",
				// link: Mar23,
				link: pdf("March 2023"),
			},
			{
				id: "may23",
				title: "ChatGPT: Revolutionizing Conversational AI",
				// link: May23,
				link: pdf("May 2023"),
			},
			{
				id: "oct23",
				title: "Data, Data Everywhere (Part 1)",
				// link: Oct23,
				link: pdf("October 2023"),
			},
			{
				id: "nov23",
				title: "Data, Data Everywhere (Part 2)",
				// link: Nov23,
				link: pdf("November 2023"),
			},
		],
		thumbs: [
			{
				_id: {
					$oid: "66f0199b1fee15c609f635ef",
				},
				id: "aDifficultGameAboutClimbing2Ep2",
				title: "I MADE IT TO THE TOP !!! 😎🥳",
				logo: image("thumbs", "aDifficultGameAboutClimbing2Ep2"),
				link: "https://www.youtube.com/watch?v=hVHoZ2JJUUA",
			},
			{
				_id: {
					$oid: "66f0199b1fee15c609f635ee",
				},
				id: "aDifficultGameAboutClimbing1Ep1",
				title: "I made some progress BUT... 🥲🥲",
				logo: image("thumbs", "aDifficultGameAboutClimbing1Ep1"),
				link: "https://www.youtube.com/watch?v=TnBjIPoa4R0",
			},
			{
				_id: {
					$oid: "66f0199b1fee15c609f635ed",
				},
				id: "grandTheftAutoViceCity4TightendEp6",
				title: "Moye Moye in Vice City 🥲",
				logo: image("thumbs", "grandTheftAutoViceCity4TightendEp6"),
				link: "https://www.youtube.com/watch?v=maFhCbyzG5c",
			},
			{
				_id: {
					$oid: "66f0199b1fee15c609f635ec",
				},
				id: "grandTheftAutoViceCity3TightendEp3",
				title: "Helicopter mission is annoying !!!",
				logo: image("thumbs", "grandTheftAutoViceCity3TightendEp3"),
				link: "https://www.youtube.com/watch?v=irowRLpyCWU",
			},
			{
				_id: {
					$oid: "66f0199b1fee15c609f635eb",
				},
				id: "grandTheftAutoViceCity2TightendEp2",
				title: "This mission SUCKS !!!",
				logo: image("thumbs", "grandTheftAutoViceCity2TightendEp2"),
				link: "https://www.youtube.com/watch?v=R9yA6mmFGkI",
			},
			{
				_id: {
					$oid: "66f0199b1fee15c609f635ea",
				},
				id: "henryStickmin1FullScreenTutorial",
				title: "Henry Stickmin Enable Fullscreen Working 💯",
				logo: image("thumbs", "henryStickmin1FullScreenTutorial"),
				link: "https://www.youtube.com/watch?v=VUyd6ieASus",
			},
			{
				_id: {
					$oid: "66f0199b1fee15c609f635e9",
				},
				id: "grandTheftAutoViceCity1TightendEp1",
				title: "Helicopter Mission but Hard Mode is on 🥲",
				logo: image("thumbs", "grandTheftAutoViceCity1TightendEp1"),
				link: "https://www.youtube.com/watch?v=n26HVo_bazU",
			},
			{
				_id: {
					$oid: "66f0199b1fee15c609f635e8",
				},
				id: "plantsVsZombies1Ep3",
				title: "Everyone is a champion, until... 💪😎",
				logo: image("thumbs", "plantsVsZombies1Ep3"),
				link: "https://www.youtube.com/watch?v=2Y0jFLYFcMY",
			},
			{
				_id: {
					$oid: "66f0199b1fee15c609f635e7",
				},
				id: "silentAge2Ep3",
				title: "I found him BUT... 😥😥",
				logo: image("thumbs", "silentAge2Ep3"),
				link: "https://www.youtube.com/watch?v=_BxOQkpalmQ",
			},
			{
				_id: {
					$oid: "66f0199b1fee15c609f635e6",
				},
				id: "granny1SewerEscape",
				title: "BYE BYE MAKDI AUNTY !!! 👋👋",
				logo: image("thumbs", "granny1SewerEscape"),
				link: "https://www.youtube.com/watch?v=JUWIQRL62V0",
			},
			{
				_id: {
					$oid: "66f0199b1fee15c609f635e5",
				},
				id: "gettingOverIt2Speedrun",
				title: "Can you Get Over It in 5 minutes?",
				logo: image("thumbs", "gettingOverIt2Speedrun"),
				link: "https://www.youtube.com/watch?v=sgpzSnycztg",
			},
			{
				_id: {
					$oid: "66f0199b1fee15c609f635e4",
				},
				id: "gettingOverIt1Trackpad",
				title: "Getting Over It with Trackpad",
				logo: image("thumbs", "gettingOverIt1Trackpad"),
				link: "https://www.youtube.com/watch?v=Pb_Hk2AlZVU",
			},
			{
				_id: {
					$oid: "66f0199b1fee15c609f635e3",
				},
				id: "silentAge1Ep1",
				title: "Gate ke Peeche... 😱😨",
				logo: image("thumbs", "silentAge1Ep1"),
				link: "https://www.youtube.com/watch?v=3oR5ldApMpI",
			},
		],
		designs: [
			{
				_id: {
					$oid: "66f01ffa1fee15c609f635f7",
				},
				id: "certOFAJun2022",
				type: "Certificate",
				desc: "This certificate was made for an initiative named One For All. This initiative involved collection of milk packets without clipping off the small cut-out from it, which is otherwise not easy to be recycled.",
				logo: image("designs", "OFACert"),
			},
			{
				_id: {
					$oid: "66f01ffa1fee15c609f635f8",
				},
				id: "certEcoArtJun2022",
				type: "Certificate",
				desc: "This certificate was made for an event named Eco Art, which was done to support One For All initiative. This event started with a stage play to spread awareness about recycling of plastic waste like milk packets, followed with a art competition where students had to make either drawings or hand paintings.",
				logo: image("designs", "ecoArtCert"),
			},
			{
				_id: {
					$oid: "66f01ffa1fee15c609f635f9",
				},
				id: "certTekQbe2023",
				type: "Certificate",
				desc: "This certificate was made for the events that were organized by TekQbe in 2023, the IT club of Jagan Institute of Management Studies, Sector-5, Rohini. These were later updated, when the college received NAAC A++ ranking.",
				logo: image("designs", "tekqbeCert"),
			},
			{
				_id: {
					$oid: "66f01ffa1fee15c609f635fa",
				},
				id: "certTechJitter2024",
				type: "Certificate",
				desc: "This certificate was made for an inter-college Tech Fest named Tech Jitters 2.0, which was supposed to be organized on May 1, 2024, by TekQbe, the IT Club of Jagan Institute of Management Studies, Sector-5, Rohini, but was later postponed.",
				logo: image("designs", "tj2Cert"),
			},
			{
				_id: {
					$oid: "66f01ffa1fee15c609f635fb",
				},
				id: "othersBackdropFarewell2023",
				type: "Backdrop",
				desc: "This design was made as a backdrop for the farewell party of the MCA, BBA, BCA, and BA Eco Hons. graduates, who were paasing their respective courses in 2023, from Jagan Institute of Management Studies, Sector-5, Rohini. The event was organized by the Cultural Club of Jagan Institute of Management Studies, Sector-5, Rohini.",
				logo: image("designs", "farewellBG"),
			},
			{
				_id: {
					$oid: "66f01ffa1fee15c609f635fc",
				},
				id: "otherUIUXCodeKshetraWebsite2024",
				type: "UI/UX Component",
				desc: "This design was made for a national-level hackathon named Code Kshetra, held in Februrary 2024 on 5 and 6, organized by Geek Room in association with Jagan Institute of Management Studies, Sector-5, Rohini. This design names one of the theme of the hackathon.",
				logo: image("designs", "ckDesign"),
			},
			{
				_id: {
					$oid: "66f01ffa1fee15c609f635fd",
				},
				id: "awardMementoTechJitters2022",
				type: "Memento",
				desc: "This design was made for the mementos, which were given to the Guest speaker, and were to be given to the student coordinators of an event named Tech Jitters, held on July 18, 2022 and organized by TekQbe, the IT club of Jagan Institute of Management Studies, Sector-5, Rohini.",
				logo: image("designs", "tjTrophy"),
			},
			{
				_id: {
					$oid: "66f01ffa1fee15c609f635fe",
				},
				id: "awardTrophyEcoClub2023",
				type: "Trophy",
				desc: "This design was made as a header for the trophies which were given to students who took part in the Presentation Competition event, organized by the Eco Club of Jagan Institute of Management Studies, Sector-5, Rohini.",
				logo: image("designs", "ecoTrophy"),
			},
		],
	},
	connectPage: {
		socials: [
			{
				_id: {
					$oid: "66d0ccb95dfe6b308267c945",
				},
				id: "github",
				name: "GitHub",
				logo: svg("qrs", "GitHub"),
				// logoM: "https://i.postimg.cc/2SsYJJSN/github.png",
				link: "https://github.com/AdiBhaiya",
				msg: "Check out the projects made by\nAditya Pandey on his GitHub profile",
			},
			{
				_id: {
					$oid: "66d0ccb95dfe6b308267c946",
				},
				id: "linkedin",
				name: "LinkedIn",
				logo: svg("qrs", "LinkedIn"),
				// logoM: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png",
				link: "https://www.linkedin.com/in/adibhaiya",
				msg: "Check out the achievements of\nAditya Pandey on his LinkedIn account",
			},
			{
				_id: {
					$oid: "66d0ccb95dfe6b308267c947",
				},
				id: "yt",
				name: "YouTube",
				logo: svg("qrs", "YouTube"),
				// logoM: "https://cdn.pixabay.com/photo/2021/05/22/11/38/yt-6273367_1280.png",
				link: "https://www.youtube.com/@GameZonedYT?sub_confirmation=1",
				msg: "Check out the videos edited by\nand thumbnails designed by\nAditya Pandey on his YouTube channel",
			},
		],
	},
};

export default Content;
