import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import axios from 'axios';

import Data from "../Data";
import Navbar from "./Navbar";
import IntroComponent from "./IntroComponent";
import './css/Connect.css';

const Connect = () => {
	window.localStorage.setItem("page", 4);

	const [formData, setFormData] = useState({
		email: '',
		subject: '',
		message: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		axios.post('/api/send-email', formData)
			.then(res => {
				console.log('Email sent successfully');
			})
			.catch(error => {
				console.error('There was an error sending the email!', error);
			});
	};

	return (
		<>
			<Navbar navElem="connectNav" />
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
					className="spacing" >
					<div className="homeContainer">

						<div className="col-1">
							<IntroComponent />

							<div className="homeComponent">
								<div className="homeComponentHeading">CONTACT ME</div>

								<form onSubmit={handleSubmit}>
									<div className="connectBox">
										<div className="connectBoxImg">
											<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 26.7117 4.53967 29.2974 5.51747 31.6554C6.02232 32.8729 6.64396 34.0297 7.36843 35.1119C7.61157 35.4751 7.15543 37.7711 6 42C10.2289 40.8446 12.5249 40.3884 12.8881 40.6316C13.9703 41.356 15.1271 41.9777 16.3446 42.4825C18.7026 43.4603 21.2883 44 24 44Z" fill="white" stroke="#212936" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M16.6042 19.82H33.3835" stroke="#313a4b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M21.8465 15.7378L18.9328 32.2622" stroke="#313a4b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M28.8465 15.7378L25.9328 32.2622" stroke="#313a4b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M14.6042 28H31.3835" stroke="#313a4b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
										<input
											id="subject"
											name="subject"
											type="text"
											placeholder="Name"
											autoComplete="off"
											value={formData.subject}
											onChange={handleChange}
											className="connectBoxIn" />
									</div>
									<div className="connectBox">
										<div className="connectBoxImg">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" fill="#FFF" />
											</svg>
										</div>
										<input
											id="email"
											name="email"
											type="email"
											placeholder="Email ID"
											autoComplete="off"
											value={formData.email}
											onChange={handleChange}
											className="connectBoxIn" />
									</div>
									<div className="connectBox">
										<div className="connectBoxImg">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.862 455.862">
												<path d="M441.088,63.154H14.774C6.615,63.154,0,69.77,0,77.93v300.003c0,8.16,6.615,14.775,14.774,14.775h426.313
											c8.16,0,14.775-6.614,14.775-14.775V77.93C455.862,69.77,449.248,63.154,441.088,63.154z M403.394,316.659
											c6.256,5.43,6.926,14.903,1.497,21.16c-5.43,6.254-14.901,6.928-21.161,1.496c-3.876-3.364-101.683-88.252-105.452-91.523
											l-40.515,35.164c-2.82,2.448-6.326,3.672-9.832,3.672s-7.012-1.224-9.832-3.672l-40.515-35.164
											c-3.77,3.272-101.576,88.159-105.452,91.523c-6.257,5.43-15.731,4.761-21.161-1.496c-5.43-6.257-4.76-15.73,1.497-21.16
											L154.7,227.93L52.468,139.203c-6.256-5.43-6.926-14.903-1.497-21.16c5.431-6.256,14.904-6.928,21.161-1.496
											c5.07,4.4,146.594,127.231,155.799,135.22c7.972-6.919,150.305-130.451,155.799-135.22c6.256-5.431,15.731-4.762,21.161,1.496
											c5.43,6.257,4.76,15.731-1.497,21.16L301.162,227.93L403.394,316.659z" fill="#FFF" />
											</svg>
										</div>
										<textarea
											id="message"
											name="message"
											type="text"
											placeholder="Message"
											autoComplete="off"
											value={formData.message}
											onChange={handleChange}
											className="connectBoxIn connectBoxTextArea" />
									</div>

									<button
										id="sendMailToAdi"
										className="sendMailButton">SUBMIT</button>
								</form>

							</div>
						</div>



						<div className="col-2">

							<div className="homeComponent">
								<div className="homeComponentHeading">SOCIAL MEDIA</div>
								<div className="connectSocialBox">
									{
										Data.connectPage.socialMedia.map((elem) => {
											return (
												<div key={elem.id} className='connectSocialBoxContent'>
													<Link to={elem.link} target="_blank">
														<img
															src={elem.logo}
															alt=''
															className="homeXPimg PC"
															title={elem.title} />
														<img
															src={elem.logoM}
															alt=''
															className="homeXPimg Mobile" />
													</Link>
													<div className='homeAcadHeading' style={{ fontFamily: "Iceberg" }}>{elem.name}</div>
												</div>
											)
										})
									}
								</div>
							</div>
						</div>
					</div>

				</motion.div>
			</AnimatePresence>
		</>
	)
}

export default Connect;