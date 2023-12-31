// import React from "react";
// import { NavLink } from "react-router-dom";
// import "../CSS/Navbar.css";
// import logo from "../img/logo.png";

// function Nav() {
// 	const navbar = ({ isActive }) => {
// 		if (isActive) {
// 			return "active";
// 		} else {
// 			return "";
// 		}
// 	};
// 	return (
// 		<div className="navbar">
// 			<img src={logo} alt="logo" style={{ height: "100%", marginLeft: "8%" }} />
// 			<ul>
// 				<li>
// 					<NavLink to="/" className={{ navbar }}>
// 						Home
// 					</NavLink>
// 				</li>
// 				<li>
// 					<NavLink to="/ourProjects" className={{ navbar }}>
// 						Our Projects
// 					</NavLink>
// 				</li>
// 				<li>
// 					<NavLink to="/ourProcess" className={{ navbar }}>
// 						Our Process
// 					</NavLink>
// 				</li>
// 				<li>
// 					<NavLink to="/careers" className={{ navbar }}>
// 						Careers
// 					</NavLink>
// 				</li>
// 				<li>
// 					<NavLink to="/about" className={{ navbar }}>
// 						About
// 					</NavLink>
// 				</li>
// 			</ul>
// 			<nav className="hire">
// 				<svg
// 					width="20"
// 					height="21"
// 					viewBox="0 0 20 21"
// 					fill="none"
// 					xmlns="http://www.w3.org/2000/svg">
// 					<path
// 						d="M19 13.5C19 14.0304 18.7893 14.5391 18.4142 14.9142C18.0391 15.2893 17.5304 15.5 17 15.5H5L1 19.5V3.5C1 2.96957 1.21071 2.46086 1.58579 2.08579C1.96086 1.71071 2.46957 1.5 3 1.5H17C17.5304 1.5 18.0391 1.71071 18.4142 2.08579C18.7893 2.46086 19 2.96957 19 3.5V13.5Z"
// 						stroke="white"
// 						stroke-width="2"
// 						stroke-linecap="round"
// 						stroke-linejoin="round"
// 					/>
// 					<circle cx="5" cy="8.5" r="1" fill="white" />
// 					<circle cx="5" cy="8.5" r="1" fill="white" />
// 					<circle cx="5" cy="8.5" r="1" fill="white" />
// 					<circle cx="5" cy="8.5" r="1" fill="white" />
// 					<circle cx="10" cy="8.5" r="1" fill="white" />
// 					<circle cx="10" cy="8.5" r="1" fill="white" />
// 					<circle cx="10" cy="8.5" r="1" fill="white" />
// 					<circle cx="10" cy="8.5" r="1" fill="white" />
// 					<circle cx="15" cy="8.5" r="1" fill="white" />
// 					<circle cx="15" cy="8.5" r="1" fill="white" />
// 					<circle cx="15" cy="8.5" r="1" fill="white" />
// 					<circle cx="15" cy="8.5" r="1" fill="white" />
// 				</svg>
// 				<p>Hire Us</p>
// 			</nav>
// 		</div>
// 	);
// }

// export default Nav;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Navbar.css";
import logo from "../img/logo.png";

function Nav() {
	const navbar = ({ isActive }) => {
		if (isActive) {
			return "active";
		} else {
			return "";
		}
	};
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<div className={`navbar ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
			<img src={logo} alt="logo" style={{ height: "100%", marginLeft: "8%" }} />
			<div className="menu-toggle" onClick={toggleMobileMenu}>
				<svg
					width="30"
					height="30"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M4 7H26M4 15H26M4 23H26"
						stroke="black"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			<ul className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
				<li>
					<NavLink to="/" className={{ navbar }}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/ourProjects" className={{ navbar }}>
						Our Projects
					</NavLink>
				</li>
				<li>
					<NavLink to="/ourProcess" className={{ navbar }}>
						Our Process
					</NavLink>
				</li>
				<li>
					<NavLink to="/careers" className={{ navbar }}>
						Careers
					</NavLink>
				</li>
				<li>
					<NavLink to="/about" className={{ navbar }}>
						About
					</NavLink>
				</li>{" "}
			</ul>
			<nav className="hire">
				<svg
					width="20"
					height="21"
					viewBox="0 0 20 21"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M19 13.5C19 14.0304 18.7893 14.5391 18.4142 14.9142C18.0391 15.2893 17.5304 15.5 17 15.5H5L1 19.5V3.5C1 2.96957 1.21071 2.46086 1.58579 2.08579C1.96086 1.71071 2.46957 1.5 3 1.5H17C17.5304 1.5 18.0391 1.71071 18.4142 2.08579C18.7893 2.46086 19 2.96957 19 3.5V13.5Z"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<circle cx="5" cy="8.5" r="1" fill="white" />
					<circle cx="5" cy="8.5" r="1" fill="white" />
					<circle cx="5" cy="8.5" r="1" fill="white" />
					<circle cx="5" cy="8.5" r="1" fill="white" />
					<circle cx="10" cy="8.5" r="1" fill="white" />
					<circle cx="10" cy="8.5" r="1" fill="white" />
					<circle cx="10" cy="8.5" r="1" fill="white" />
					<circle cx="10" cy="8.5" r="1" fill="white" />
					<circle cx="15" cy="8.5" r="1" fill="white" />
					<circle cx="15" cy="8.5" r="1" fill="white" />
					<circle cx="15" cy="8.5" r="1" fill="white" />
					<circle cx="15" cy="8.5" r="1" fill="white" />
				</svg>
				<p>Hire Us</p>
			</nav>
		</div>
	);
}

export default Nav;
