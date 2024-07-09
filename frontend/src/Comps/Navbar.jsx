import { Link } from 'react-router-dom';
import Data from '../Data';

import './css/Navbar.css';

const Navbar = (pageName) => {

	return (
		<>
			<div className='navContainer'>
				<ul className='navUL'>
					<div className='navCurPage'>
						<li>
							<img
								src={Data.pages[window.localStorage.getItem("page")].logo}
								alt='PFP' />
						</li>
						<li className='nameNav'>{Data.pages[window.localStorage.getItem("page")].name}</li>
					</div>
					<div className='navItems'>
						{
							Data.pages.map((elem) => {
								return (
									<div key={elem.pageName}>
										<Link to={elem.path}>
											<li className={`nameNavItems ${elem.pageName === pageName.navElem ? "navActive" : ""} navActivePC PC`} id={elem.pageName}>
												<img
													src={elem.logo}
													alt=''
													style={{ width: "2rem" }} />
												<span style={{ position: 'relative', fontSize: "1rem", fontWeight: 100, bottom: '0.5rem', paddingLeft: '1rem' }}>{elem.name}</span>
											</li>


											<li className={`nameNavItems ${elem.pageName === pageName.navElem ? "navActive" : ""} Mobile`} id={elem.pageName}>
												<img
													src={elem.logo}
													alt=''
													style={{ width: "2rem" }} />
											</li>







											{/* {elem.pageName === pageName.navElem ?
												<li className='nameNavItems navActive Mobile' id={elem.pageName}>
													<img
														src={elem.logo}
														alt=''
														style={{ width: "2rem" }} />
												</li> : <li className='nameNavItems Mobile' id={elem.pageName}>
													<img
														src={elem.logo}
														alt=''
														style={{ width: "2rem" }} />
												</li>
											} */}
										</Link>
									</div>
								)
							})
						}
					</div>
				</ul >
			</div >
		</>
	);
};

export default Navbar;