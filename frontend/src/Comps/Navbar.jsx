import { Link, replace, useNavigate } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = (pageName) => {
	const Pages = [
		// {
		// ["Home", "https://i.postimg.cc/8PvnzhHj/Adi-Pro-Folio-Logo.png", "homeNav", "/"],
		// ["Skills", "https://i.postimg.cc/x10yVHFr/skills.png", "skillsNav", "/skills"],
		// ["Success", "https://cdn4.iconfinder.com/data/icons/educations-5/512/1226.png", "achieveNav", "/achievements"],
		// ["Projects", "https://i.postimg.cc/SQMG6mzP/projects.png", "projNav", "/projects"],
		// ["Gallery", "https://cdn3d.iconscout.com/3d/premium/thumb/gallery-5560962-4644628.png", "galleryNav", "/gallery"],
		// ["Connect", "https://i.postimg.cc/WpBXCdvj/connect.png", "connectNav", "/connect"],
		// },

		{
			name: "Home",
			logo: "https://i.postimg.cc/QxvTKf0Y/home.png",
			pageName: "homeNav",
			path: "/",
		},
		{
			name: "Skills",
			logo: "https://i.postimg.cc/hjCJDsXr/skills.png",
			pageName: "skillsNav",
			path: "/skills",
		},
		{
			name: "Achievements",
			logo: "https://i.postimg.cc/nLWzNzgR/success.png",
			pageName: "achieveNav",
			path: "/achievements",
		},
		{
			name: "Projects",
			logo: "https://i.postimg.cc/136NGDdm/projects.png",
			pageName: "projNav",
			path: "/projects",
		},

		{
			name: "Designs",
			logo: "https://i.postimg.cc/DzPJDnFR/gallery.png",
			pageName: "galleryNav",
			path: "/designs",
		},

		{
			name: "Connect",
			logo: "https://i.postimg.cc/s2rGwvFp/connect.png",
			pageName: "connectNav",
			path: "/connect",
		},
	];

	const navigate = useNavigate();

	// const goToPage = useNavigate();
	// const navigate = (pagePath) => {
	// 	goToPage(pagePath, { replace: true });
	// };

	return (
		<>
			<div className="navContainer">
				<div className="navUL">
					<ul className="navCurPage">
						<li>
							<img src={Pages[window.localStorage.getItem("page")].logo} alt="PFP" />
						</li>
						<li className="nameNav">{Pages[window.localStorage.getItem("page")].name}</li>
					</ul>
					<ul className="navItems">
						{Pages.map((elem) => {
							return (
								<li key={elem.pageName}>
									{/* <Link to={elem.path}> */}
									<div
										onClick={() => {
											navigate(elem.path, { replace: true });
										}}
									>
										<div className={`nameNavItems ${elem.pageName === pageName.navElem ? "navActive" : ""} navActivePC PC`} id={elem.pageName}>
											<img src={elem.logo} alt="" style={{ width: "2rem" }} />
											<span
												style={{
													position: "relative",
													fontSize: "1rem",
													fontWeight: 100,
													bottom: "0.5rem",
													paddingLeft: "1rem",
												}}
											>
												{elem.name}
											</span>
										</div>

										<div className={`nameNavItems ${elem.pageName === pageName.navElem ? "navActive" : ""} Mobile`} id={elem.pageName}>
											<img src={elem.logo} alt="" style={{ width: "2rem" }} />
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
