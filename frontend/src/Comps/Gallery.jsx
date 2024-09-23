import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import IntroComponent from "./IntroComponent";

import Oct122 from "../pdfs/October 2022.pdf";
import Mar123 from "../pdfs/March 2023.pdf";
import May123 from "../pdfs/May 2023.pdf";
import Nov123 from "../pdfs/November 2023 (1).pdf";
import Nov223 from "../pdfs/November 2023 (2).pdf";

import "./css/Gallery.css";

const Gallery = () => {
	window.localStorage.setItem("page", 4);

	const newsLetters = [
		{
			id: "oct22 (1)",
			title: "How 5G will transform India?",
			link: Oct122,
		},
		{
			id: "mar23 (1)",
			title: "The Era of AI Chatbots",
			link: Mar123,
		},
		{
			id: "may23 (1)",
			title: "ChatGPT: Revolutionizing Conversational AI",
			link: May123,
		},
		{
			id: "nov23 (1)",
			title: "Data, Data Everywhere Part 1",
			link: Nov123,
		},
		{
			id: "nov23 (2)",
			title: "Data, Data Everywhere Part 2",
			link: Nov223,
		},
	];

	const [Posters, setPosters] = useState({});
	const [Thumbs, setThumbs] = useState({});
	const [Designs, setDesigns] = useState({});

	const fetchPoster = async () => {
		setPosters(JSON.parse(window.localStorage.getItem("posterData ")));
	}; // Fetch the details of the posters made by the user (here, Aditya Pandey)

	const fetchThumb = async () => {
		setThumbs(JSON.parse(window.localStorage.getItem("thumbData ")));
	}; // Fetch the details of the thumbnails made by the user (here, Aditya Pandey)

	const fetchDesign = async () => {
		setDesigns(JSON.parse(window.localStorage.getItem("designData ")));
	}; // Fetch the details of other designs made by the user (here, Aditya Pandey)

	useEffect(() => {
		fetchPoster();
		fetchThumb();
		fetchDesign();
	}, []);

	// PAGINATION POSTERS STARTS
	const [curPosterPage, setCurPosterPage] = useState(1);
	const PostersPerPage = 1;
	const lastPosterIndex = curPosterPage * PostersPerPage;
	const firstPosterIndex = lastPosterIndex - PostersPerPage;
	const currentPosters = Object.values(Posters).slice(firstPosterIndex, lastPosterIndex);
	const totalPosterPages = Math.ceil(Object.values(Posters).length / PostersPerPage);
	const handlePosterPageChange = (pageNumber) => {
		setCurPosterPage(pageNumber);
	};
	// PAGINATION POSTERS ENDS
	// PAGINATION THUMBS STARTS
	const [curThumbPage, setCurThumbPage] = useState(1);
	const ThumbsPerPage = 1;
	const lastThumbIndex = curThumbPage * ThumbsPerPage;
	const firstThumbIndex = lastThumbIndex - ThumbsPerPage;
	const currentThumbs = Object.values(Thumbs).slice(firstThumbIndex, lastThumbIndex);
	const totalThumbPages = Math.ceil(Object.values(Thumbs).length / ThumbsPerPage);
	const handleThumbPageChange = (pageNumber) => {
		setCurThumbPage(pageNumber);
	};
	// PAGINATION THUMBS ENDS
	// PAGINATION DESIGNS STARTS
	const [curDesignPage, setCurDesignPage] = useState(1);
	const DesignsPerPage = 1;
	const lastDesignIndex = curDesignPage * DesignsPerPage;
	const firstDesignIndex = lastDesignIndex - DesignsPerPage;
	const currentDesigns = Object.values(Designs).slice(firstDesignIndex, lastDesignIndex);
	const totalDesignPages = Math.ceil(Object.values(Designs).length / DesignsPerPage);
	const handleDesignPageChange = (pageNumber) => {
		setCurDesignPage(pageNumber);
	};
	// PAGINATION DESIGNS ENDS

	return (
		<>
			<Navbar navElem="galleryNav" />
			<AnimatePresence>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }} className="spacing">
					<div className="homeContainer">
						<div className="col-1">
							<IntroComponent />

							<div className="homeComponent">
								<div className="homeComponentHeading">POSTERS</div>
								<div className="scrollableContent">
									{currentPosters.map((elem) => {
										return (
											<div key={elem.id} className="homeWelfareContent homeCertContent">
												<Link to={elem.logo} target="_blank">
													<img src={elem.logo} alt="Posters" title="Click to view in high quality" className="scrollableImgGallery scrollableImgPosters" />
												</Link>
												<div className="scrollableTitle">( {elem.title} )</div>
												{/* <div className="scrollableDesc">{elem.desc}</div> */}
											</div>
										);
									})}
								</div>
								<div className="pagination">
									{totalPosterPages > 1 ? (
										<>
											<button className="paginationButton active" disabled={curPosterPage <= 1} onClick={() => handlePosterPageChange(curPosterPage - 1)}>
												{"<"}
											</button>
											<button className="paginationButton">{`Page ${curPosterPage}/${totalPosterPages}`}</button>
											<button className="paginationButton active" disabled={curPosterPage >= totalPosterPages} onClick={() => handlePosterPageChange(curPosterPage + 1)}>
												{">"}
											</button>
										</>
									) : (
										<></>
									)}
								</div>
							</div>

							<div className="homeComponent">
								<div className="homeComponentHeading">NEWSLETTERS</div>
								<ol className="newsLetters">
									{newsLetters.map((elem) => {
										return (
											<li key={elem.id}>
												<div className="homeNewsLettersContent">
													<Link to={elem.link} target="_blank">
														{elem.title}
													</Link>
												</div>
												{/* <div className="scrollableDesc">{elem.desc}</div> */}
											</li>
										);
									})}
								</ol>
							</div>
						</div>
						<div className="col-2">
							<div className="homeComponent">
								<div className="homeComponentHeading">THUMBNAILS</div>
								<div className="scrollableContent">
									{currentThumbs.map((elem) => {
										return (
											<div key={elem.id} className="homeWelfareContent homeCertContent">
												<Link to={elem.link} target="_blank">
													<img src={elem.logo} alt="Thumbnails" title="Click to view in high quality" className="scrollableImgGallery scrollableImgThumbs" />
												</Link>
												<div className="scrollableTitle">( {elem.title} )</div>
												{/* <div className="scrollableDesc">{elem.desc}</div> */}
											</div>
										);
									})}
								</div>
								<div className="pagination">
									{totalThumbPages > 1 ? (
										<>
											<button className="paginationButton active" disabled={curThumbPage <= 1} onClick={() => handleThumbPageChange(curThumbPage - 1)}>
												{"<"}
											</button>
											<button className="paginationButton">{`Page ${curThumbPage}/${totalThumbPages}`}</button>
											<button className="paginationButton active" disabled={curThumbPage >= totalThumbPages} onClick={() => handleThumbPageChange(curThumbPage + 1)}>
												{">"}
											</button>
										</>
									) : (
										<></>
									)}
								</div>
							</div>

							<div className="homeComponent">
								<div className="homeComponentHeading">OTHER DESIGNS</div>
								<div className="scrollableContent">
									{currentDesigns.map((elem) => {
										return (
											<div key={elem.id} className="homeWelfareContent homeCertContent">
												<Link to={elem.logo} target="_blank">
													<img src={elem.logo} alt="Designs" title="Click to view in high quality" className="scrollableImgGallery scrollableImgThumbs" />
												</Link>
												<div className="scrollableTitle">( {elem.type} )</div>
												{/* <div className="scrollableDesc">{elem.desc}</div> */}
											</div>
										);
									})}
								</div>
								<div className="pagination">
									{totalDesignPages > 1 ? (
										<>
											<button className="paginationButton active" disabled={curDesignPage <= 1} onClick={() => handleDesignPageChange(curDesignPage - 1)}>
												{"<"}
											</button>
											<button className="paginationButton">{`Page ${curDesignPage}/${totalDesignPages}`}</button>
											<button className="paginationButton active" disabled={curDesignPage >= totalDesignPages} onClick={() => handleDesignPageChange(curDesignPage + 1)}>
												{">"}
											</button>
										</>
									) : (
										<></>
									)}
								</div>
							</div>
						</div>

						{/* <div className="col-2">
							<div className="homeComponent">
								<div className="homeComponentHeading">EXPERIENCE</div>
								<div className="homeXP xpScroll">
									{currentXPs.map((elem) => {
										// {Object.values(XP).map((elem) => {
										return (
											<div key={elem.id} className="homeXPContent">
												<img src={elem.logo} alt="Not Found" className="homeXPimg" />
												<div>
													<div className="homeAcadHeading">{elem.name}</div>
													<div className="homeAcadSubContent">Role: {elem.xp}</div>
													{elem.to !== "" || elem.to ? (
														<>
															<div className="homeAcadSubContent">From: {elem.from}</div>
															<div className="homeAcadSubContent">To: {elem.to}</div>
														</>
													) : (
														<>
															<div className="homeAcadSubContent">In: {elem.from}</div>
														</>
													)}
												</div>
											</div>
										);
									})}
									<div className="pagination">
										{totalXPPages > 1 ? (
											<>
												<button className="paginationButton active" disabled={curXPPage <= 1} onClick={() => handleXPPageChange(curXPPage - 1)}>
													{"<"}
												</button>
												<button className="paginationButton">{`Page ${curXPPage}/${totalXPPages}`}</button>
												<button className="paginationButton active" disabled={curXPPage >= totalXPPages} onClick={() => handleXPPageChange(curXPPage + 1)}>
													{">"}
												</button>
											</>
										) : (
											<></>
										)}
									</div>
								</div>
							</div>
						</div> */}

						{/* <div className="galleryComponent">
							<h1 className="galleryHeadings">RECENT</h1>
							<div className="galleryPics">
								<img src="https://i.postimg.cc/zfzd741g/Flappy-Bird-Logo.png" alt="Profile Pic" />
								<img src="https://i.postimg.cc/Pq6cZF2P/Milk-Packets-Collection-Bajaj.png" alt="Profile Pic" />
								<img src="https://i.postimg.cc/MpW43j3k/IPR-Event.png" alt="Profile Pic" />
								<img src="https://i.postimg.cc/zfzd741g/Flappy-Bird-Logo.png" alt="Profile Pic" />
								<img src="https://i.postimg.cc/zfzd741g/Flappy-Bird-Logo.png" alt="Profile Pic" />
								<img src="https://i.postimg.cc/Pq6cZF2P/Milk-Packets-Collection-Bajaj.png" alt="Profile Pic" />
								<img src="https://i.postimg.cc/pTg4sG4k/Network-Bulls-Cert.png" alt="Profile Pic" />
								<img src="https://i.postimg.cc/MpW43j3k/IPR-Event.png" alt="Profile Pic" />
								<img src="https://i.postimg.cc/Pq6cZF2P/Milk-Packets-Collection-Bajaj.png" alt="Profile Pic" />
								<img src="https://i.postimg.cc/pTg4sG4k/Network-Bulls-Cert.png" alt="Profile Pic" />
								<img src="https://i.postimg.cc/pTg4sG4k/Network-Bulls-Cert.png" alt="Profile Pic" />
							</div>
						</div> */}
					</div>
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default Gallery;
