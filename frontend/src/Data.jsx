const dmy = new Date();
const Month = (month) => {
	if (month < 5) {
		return "Present Date"
	} else {
		return "June 2024"
	}
}

const Color = (skill) => {
	if (skill >= 80) {
		return '#279e1c';
	} else if (skill >= 50) {
		return '#bf7432';
	} else {
		return '#bf3232';
	}
}

// const parser = new DOMParser();

const Data = {
	"name": {
		"regular": "Aditya Pandey",
		"caps": "ADITYA PANDEY"
	},

	"profession": "Software Developer & Designer",

	"pfp": "https://i.postimg.cc/50HSkVK6/pfp.jpg",

	"resumeLink": "https://drive.google.com/uc?export=download&id=1v3zG588mPUrprvYFbgwABzt6rA3sJG4O",

	"pages": [
		// ["Home", "https://i.postimg.cc/8PvnzhHj/Adi-Pro-Folio-Logo.png", "homeNav", "/"],
		// ["Skills", "https://i.postimg.cc/x10yVHFr/skills.png", "skillsNav", "/skills"],
		// ["Success", "https://cdn4.iconfinder.com/data/icons/educations-5/512/1226.png", "achieveNav", "/achievements"],
		// ["Projects", "https://i.postimg.cc/SQMG6mzP/projects.png", "projNav", "/projects"],
		// ["Gallery", "https://cdn3d.iconscout.com/3d/premium/thumb/gallery-5560962-4644628.png", "galleryNav", "/gallery"],
		// ["Connect", "https://i.postimg.cc/WpBXCdvj/connect.png", "connectNav", "/connect"],

		{
			"name": "Home",
			"logo": "https://static.vecteezy.com/system/resources/previews/018/742/016/original/home-house-front-flat-view-user-interface-design-theme-3d-icon-render-illustration-isolated-in-transparent-background-png.png",
			"pageName": "homeNav",
			"path": "/"
		},
		{
			"name": "Skills",
			"logo": "https://i.postimg.cc/x10yVHFr/skills.png",
			"pageName": "skillsNav",
			"path": "/skills"
		},
		{
			"name": "Success",
			"logo": "https://cdn4.iconfinder.com/data/icons/educations-5/512/1226.png",
			"pageName": "achieveNav",
			"path": "/achievements"
		},
		{
			"name": "Projects",
			"logo": "https://i.postimg.cc/SQMG6mzP/projects.png",
			"pageName": "projNav",
			"path": "/projects"
		},
		// {
		// 	"name": "Gallery",
		// 	"logo": "https://cdn3d.iconscout.com/3d/premium/thumb/gallery-5560962-4644628.png",
		// 	"pageName": "galleryNav",
		// 	"path": "/gallery"
		// },
		{
			"name": "Connect",
			"logo": "https://i.postimg.cc/WpBXCdvj/connect.png",
			"pageName": "connectNav",
			"path": "/connect"
		},
	],

	"homePage": {
		"academics": {
			"grad": {
				"id": "grad",
				"name": "BACHELORS IN COMPUTER APPLICATIONS",
				"start": "Dec 2021",
				"end": Month(parseInt(dmy.getMonth())),
				"school": "JIMS, Rohini (Sector-5)",
				"location": "New Delhi",
				"board": "GGSIPU",
				// "logo": <img src={BCA} alt='' className='verticalTimelineCircleAcad' />,
			},
			"inter": {
				"id": "inter",
				"name": "INTERMEDIATE (12th)",
				"start": "2020",
				"end": "2021",
				"school": "Hansraj Smarak Sr. Sec. School",
				"location": "New Delhi",
				"board": "CBSE",
				// "logo": <img src={XII} alt='' className='verticalTimelineCircleAcad' />,
			},
			"matric": {
				"id": "matric",
				"name": "MATRICULATION (10th)",
				"start": "2018",
				"end": "2019",
				"school": "Everest Public School",
				"location": "Ghaziabad, UP",
				"board": "CBSE",
				// "logo": <img src={X} alt='' className='verticalTimelineCircleAcad' />,
			},
		},
		"experience": [
			{
				"id": "itDesign",
				"name": "IT Kaliedoscope",
				"xp": "Designer",
				"logo": "https://i.postimg.cc/d1dtf8s4/jims.png",
				"from": "December 2021",
				"to": "December 2023"
			},
			{
				"id": "itContent",
				"name": "IT Kaliedoscope",
				"xp": "Content Writer",
				"logo": "https://i.postimg.cc/d1dtf8s4/jims.png",
				"from": "December 2021",
				"to": "December 2023"
			},
			{
				"id": "techqbe",
				"name": "TekQbe",
				"xp": "Student Coordinator",
				"logo": "https://i.postimg.cc/bNqN6DK9/tekqbe.png",
				"from": "July 2022",
				"to": ""
			},
			{
				"id": "technowhiz",
				"name": "Technowhiz",
				"xp": "Core Coordinator",
				"logo": "https://i.postimg.cc/VvWsfmbt/technowhiz.png",
				"from": "April 2023",
				"to": ""
			},
			{
				"id": "codeKshetra",
				"name": "Code Kshetra",
				"xp": "Organizer",
				"logo": "https://i.postimg.cc/FHBrsP1T/codekshetra.png",
				"from": "5 February 2024",
				"to": "6 February 2024"
			},
		],
	},

	"skillsPage": {
		"techs": [
			{
				id: 'node',
				title: 'NodeJS',
				tech: 'MERN',
				sect: 'Web Development',
				lang: 'JavaScript',
				// logo: 'https://i.postimg.cc/tg45WPhd/Node-Logo.png',
				logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png',
			},
			{
				id: 'express',
				title: 'ExpressJS',
				tech: 'MERN',
				sect: 'Web Development',
				lang: 'JavaScript',
				logo: 'https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png',
			},
			{
				id: 'react',
				title: 'ReactJS',
				tech: 'MERN',
				sect: 'Web Development',
				lang: 'JavaScript',
				logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
			},
			{
				id: 'android',
				title: 'Android Studio {Learning}',
				tech: '',
				sect: 'Android Application Development',
				lang: 'Java',
				// logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/2048px-Android_Studio_icon_%282023%29.svg.png',
				logo: 'https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Android_Studio_Logo_%25282023%2529.svg/640px-Android_Studio_Logo_%25282023%2529.svg.png&w=640&q=50',
			},
			{
				id: 'flutter',
				title: 'Flutter {Learning}',
				tech: 'Flutter',
				sect: 'Application Development',
				lang: 'Dart',
				logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flutter-icon.png',
			},
			{
				id: 'unity',
				title: 'Unity {Learning}',
				tech: '',
				sect: 'Game Development',
				lang: 'C#',
				logo: 'https://seeklogo.com/images/U/unity-logo-988A22E703-seeklogo.com.png',
			},
		],
		"langs": [
			{
				id: 'js',
				title: 'JavaScript (MERN)',
				skill: '90%',
				logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
				color: Color(90),
			},
			{
				id: 'python',
				title: 'Python (Basics)',
				skill: '90%',
				logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/archive/c/c3/20220730085403%21Python-logo-notext.svg/120px-Python-logo-notext.svg.png',
				color: Color(90),
			},
			{
				id: 'java',
				title: 'Java (Core)',
				skill: '65%',
				logo: 'https://i.postimg.cc/Zndj0S61/Java-Logo.png',
				color: Color(65),
			},
			{
				id: 'csharp',
				title: 'C# {Learning}',
				skill: '50%',
				logo: 'https://i.postimg.cc/pXXxJD2F/C-Logo.png',
				color: Color(50),
			},
			{
				id: 'c',
				title: 'C (Basics)',
				skill: '40%',
				logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png',
				color: Color(40),
			},
			{
				id: 'cpp',
				title: 'C++ (Basics)',
				skill: '40%',
				logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png',
				color: Color(40),
			},
			{
				id: 'dart',
				title: 'Dart (Basic) {Learning}',
				skill: '10%',
				logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png',
				color: Color(10),
			},
		],
		"dbs": [
			{
				id: 'mongo',
				title: 'MongoDB',
				skill: '65%',
				// logo: 'https://i.postimg.cc/ZYBwwrXV/Mongo-Logo.png',
				logo: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png',
				color: Color(65),
			},
			{
				id: 'mysql',
				title: 'MySQL',
				skill: '40%',
				logo: 'https://i.postimg.cc/JzqxsKB4/My-SQL-Logo.png',
				color: Color(40),
			},
			{
				id: 'oraclesql',
				title: 'OracleSQL',
				skill: '30%',
				logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Oracle_SQL_Developer_logo.svg/800px-Oracle_SQL_Developer_logo.svg.png',
				color: Color(30),
			},
		],

	},

	"successPage": {
		"achievements": [
			{
				id: "codeIt",
				name: "Code It",
				desc: "Secured 3rd position in a coding competition named Code-It, where I competed against seniors from 2nd and 3rd year, and also the seniors from MCA.",
				logo: "https://i.postimg.cc/9Q4QDYDc/codeit.png",
			},
			{
				id: "ecoArt",
				name: "Eco Art",
				desc: "Organized a massive event in JIMS, Sector-5, Rohini to spread awareness about milk packet/ plastic recycling. The students were to create posters or hand paintings to promote environment friendliness, and hazards of plastic waste. Me, along with co-orgnaizers, also performed an act to support this.",
				logo: "https://i.postimg.cc/SRysTXmR/ofa.png",
			},
			{
				id: "techJitters",
				name: "Tech Jitters",
				desc: "Served as a co-ordinator in Tech Jitters, an inter-college tech fest. The event was organized by TekQbe, the IT Club of JIMS.",
				logo: "https://i.postimg.cc/05BpFc1s/techjitters.png",
			},
			{
				id: "sih22",
				name: "Smart India Hackathon 2022",
				desc: "Secured 4th position in SIH'22 for our problem statement. I got to know and learn a lot about Hackathon environment and coding cultures.",
				logo: "https://i.postimg.cc/DywZTTFJ/sih.png",
			},
			// {
			// 	id: "puzzlers",
			// 	name: "Puzzlers",
			// 	desc: "Served as a co-ordinator in Puzzlers. The event was organized by TekQbe, the IT Club of JIMS.",
			// 	logo: "https://i.postimg.cc/NjWfm2Xm/puzzlers.png",
			// },
			{
				id: "JIH23",
				name: "JIMS Internal Hackathon 2023",
				desc: "Secured 1st position in JIMS Internal Hackathon 2023. JIMS Internal Hackathon is the internal hackathon, that was conducted as an elimination round for Smart India Hackathon 2023.",
				logo: "https://i.postimg.cc/DywZTTFJ/sih.png",
			},
			{
				id: "codekshetra",
				name: "Code Kshetra",
				desc: "Served as an organizer in a national level hackathon, Code Kshetra. This was organized in collaboration with Geek Room society. Sponsors included Coding Ninja, Devfolio, Polygon, Rise In, etc.",
				logo: "https://i.postimg.cc/fbgyzrHM/Geek-Room-Logo-Official-Black.png",
			},
		],
		"welfare": [
			{
				id: "natak18",
				title: "Performed a street play on the topic of Air Pollution, Water Pollution, and Noise Pollution (2018)."
			},
			{
				id: "natak19",
				title: "Performed a street play on the topic of Land Pollution (2019)."
			},
			{
				id: "ofa",
				title: "Got involved in plastic recycling and motivated other students to do the same under our initiative 'One for All' (2022)."
			},
			{
				id: "natak22",
				title: "Performed a street play on the topic of Air Pollution (2022)."
			},
		],
		"certifications": [
			{
				id: "mernTraining",
				logo: "https://i.postimg.cc/brXrpWMF/Certification.jpg",
				preview: "https://postimg.cc/njkp1Rnv",
			},
			{
				id: "ofa-bajajCert",
				logo: "https://i.postimg.cc/Pq6cZF2P/Milk-Packets-Collection-Bajaj.png",
				preview: "https://postimg.cc/gwZNb49W",
			},
			{
				id: "ipr-event",
				logo: "https://i.postimg.cc/MpW43j3k/IPR-EVENT.png",
				preview: "https://postimg.cc/PPR2PNkK",
			},
			{
				id: "networkBulls",
				logo: "https://i.postimg.cc/pTg4sG4k/Network-Bulls-Certificate.png",
				preview: "https://postimg.cc/8JmZ5H1r",
			},
		],
	},

	"projectsPage": {
		"personal": [
			{
				id: "g12",
				name: "G-12",
				desc: "G-12 is a command line based Python project. This project contains a set games for different purposes, such as fun games and mind games.",
				lang: < ul style={{ marginLeft: "1.5rem" }} >
					<li>Python</li>
					<li>MySQL</li>
				</ul >,
				logo: "https://i.postimg.cc/zG5pD4vc/G12Logo.png",
			},
			{
				id: "g12_plus",
				name: "G-12 Plus",
				desc: "G-12 is a Graphical User Interface based Python project. Using libraries like tkinter and customtkinter, this project aims to improve the original G-12 project, by adding an interactable GUI.",
				lang: <ul style={{ marginLeft: "1.5rem" }}>
					<li>Python</li>
					<li>SQLite</li>
				</ul>,
				logo: "https://i.postimg.cc/c4fXSdx3/G12-Plus-Logo.png",
			},
			{
				id: "flappy_clone",
				name: "Flappy Bird (Clone)",
				desc: "Flappy Bird is one of the very well popular games. But it was abandoned by its developer. This project is a clone of the original Flappy Bird game, but a bit more difficult.",
				lang: < ul style={{ marginLeft: "1.5rem" }} >
					<li>Unity</li>
					<li>C#</li>
				</ul >,
				logo: "https://i.postimg.cc/zfzd741g/Flappy-Bird-Logo.png",
			},
			{
				id: "healthElevator",
				name: "Health Elevator",
				desc: "Health Elevator is a website that helps the users to search for the nearby medical stores, and set the reminders for medicines. All the reminders will be sent to your WhatsApp number that you want to recieve your reminders on, since most of the people are active on WhatsApp.",
				lang: <ul style={{ marginLeft: "1.5rem" }}>
					<li>Node.js</li>
					<li>Express.js</li>
					<li>MongoDB</li>
					<li>React</li>
					<li>Casacading Style Sheets (CSS)</li>
				</ul>,
				logo: "https://i.postimg.cc/FKTTBG9n/Health-Elevator-Logo.png",
			},
			// {
			// 	id: "sehatBuddy",
			// 	name: "Sehat Buddy {In Progress}",
			// 	desc: "Sehat Buddy is a mental health application that analyzes your mental health condition by asking you some basic questions about your daily routines and habits. Apart from this, the website also features a set of fun games, that will distract your mind from your mental health problems and will indluge you in the world of that game. (Currently under progress)",
			// 	lang: <ul style={{ marginLeft: "1.5rem" }}>
			// 		<li>Flutter</li>
			// 		<li>Dart</li>
			// 	</ul>,
			// 	logo: "https://i.postimg.cc/GhPJfzKJ/Sehat-Buddy-Logo.png",
			// },
		],
		"professional": [
			{
				id: "adiPortfolio",
				name: "Adi's Pro-Folio",
				desc: "Adi's Pro-Folio is the portfolio website for Aditya Pandey. This website shows the entire programming journey of Aditya Pandey. What you are seeing right now is also a part of this project. This portfolio will be updated from time to time to keep it up-to-date.",
				lang: < ul style={{ marginLeft: "1.5rem" }} >
					<li>Node.js</li>
					<li>Express.js</li>
					<li>MongoDB</li>
					<li>React</li>
					<li>Cascading Style Sheets (CSS)</li>
				</ul >,
				logo: "https://i.postimg.cc/FsmFFC9x/Adi-Logo-Circle.png",
			},
			{
				id: "jimsCanteen",
				name: "JIMS Canteen {In Progress}",
				desc: "JIMS Canteen is a project that would allow the students at Jagan Institute of Management Studies, Rohini, Sector-5 to order food from in-college canteen through a mobile application. (Currently under progress)",
				lang: <ul style={{ marginLeft: "1.5rem" }}>
					<li>Flutter</li>
					<li>Dart</li>
				</ul>,
				logo: "https://i.postimg.cc/TPNc9w9z/JIMSCanteen-Logo.png",
			},
			{
				id: "jimsPrePlace",
				name: "JIMS Pre-Placement Portal {In Progress}",
				desc: "JIMS Pre-Placement Portal is a web for all the pre-placement related content for JIMS, making it easy for the students to access it later. Also, with a simple admin portal, the admin can easily add or delete or modify multiple things in the website.",
				lang: <ul style={{ marginLeft: "1.5rem" }}>
					<li>Node.js</li>
					<li>Express.js</li>
					<li>MongoDB</li>
					<li>React</li>
					<li>Casacading Style Sheets (CSS)</li>
				</ul>,
				logo: "https://i.postimg.cc/VLPW42qk/Pre-Placement-Logo.png",
			},
		],
	},

	"connectPage": {
		"socialMedia": [
			{
				id: "github",
				name: "GitHub",
				logo: "https://i.postimg.cc/Fz246FNn/GitHub.png",
				logoM: "https://i.postimg.cc/Hxj6D5nW/Git-Hub-Logo.png",
				link: "https://github.com/PandeyAdi-GZ",
				title: "Check out the projects made by\nAditya Pandey on his GitHub profile",
			},
			{
				id: "linkedin",
				name: "LinkedIn",
				logo: "https://i.postimg.cc/XqZWxBSC/LinkedIn.png",
				logoM: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png",
				link: "https://www.linkedin.com/in/adipandey160903/",
				title: "Check out the achievements of\nAditya Pandey on his LinkedIn account",
			},
			{
				id: "yt",
				name: "YouTube",
				logo: "https://i.postimg.cc/KcVxjfBr/YouTube.png",
				logoM: "https://cdn.pixabay.com/photo/2021/05/22/11/38/yt-6273367_1280.png",
				link: "https://www.youtube.com/@GameZonedYT",
				title: "Check out the videos edited by\nand thumbnails designed by\nAditya Pandey on his YouTube channel",
			},
		],
	},
}

Data.homePage.experience = Data.homePage.experience.reverse();
Data.successPage.achievements = Data.successPage.achievements.reverse();
Data.projectsPage.personal = Data.projectsPage.personal.reverse();
Data.projectsPage.professional = Data.projectsPage.professional.reverse();

export default Data;