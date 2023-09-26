import React from "react";
import "../CSS/About.css";
import Title from "../Components/Title";

function About() {
	return (
		<section id="AboutUs">
			<section id="first">
				<div className="wave">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1440"
						height="303"
						viewBox="0 0 1440 303"
						fill="none">
						<path
							d="M-0.961914 347.485L-1.03188 -11.624L1447.57 -14.8227L1448.26 298.804L-0.961914 347.485Z"
							fill="url(#paint0_linear_171_3098)"
							fill-opacity="0.3"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_171_3098"
								x1="1279.43"
								y1="-110.586"
								x2="1201.39"
								y2="467.786"
								gradientUnits="userSpaceOnUse">
								<stop stop-color="#6587FF" />
								<stop offset="1" stop-color="white" />
							</linearGradient>
						</defs>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1440"
						height="44"
						viewBox="0 0 1440 44"
						fill="none">
						<path
							d="M-0.386959 21.2235L-0.338867 43.0029L1448.26 39.8042L1448.18 0.891654C1411.38 4.84483 1325.87 13.9971 1278.24 18.9809C1218.71 25.2106 1144.01 28.8603 1033.59 33.46C923.166 38.0598 733.658 19.6026 721.747 18.7578C709.836 17.9129 609.118 4.19638 416.397 1.42761C262.22 -0.787412 74.3005 13.702 -0.386959 21.2235Z"
							fill="white"
						/>
					</svg>
				</div>

				<Title
					Title="About US"
					FirstP="We help build and manage a team of world-class developers"
					SecondP="to bring your vision to life"
				/>
			</section>
			<section className="dev">
				<img src={require("../img/AdobeStock_170801444 1.png")} alt="" />
				<div className="liftItems">
					<nav>
						<h2>
							we <br /> are dev
						</h2>
						<svg
							width="50"
							height="23"
							viewBox="0 0 50 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M49.5357 12.3485C50.1215 11.7627 50.1215 10.813 49.5357 10.2272L39.9897 0.68124C39.404 0.0954533 38.4542 0.0954533 37.8684 0.68124C37.2826 1.26703 37.2826 2.21677 37.8684 2.80256L46.3537 11.2878L37.8684 19.7731C37.2826 20.3589 37.2826 21.3087 37.8684 21.8944C38.4542 22.4802 39.404 22.4802 39.9897 21.8944L49.5357 12.3485ZM0.204102 12.7878H48.475V9.78784H0.204102V12.7878Z"
								fill="#19A5FF"
							/>
						</svg>
					</nav>
					<nav>
						<h1>Lorem ipsum dolor sit amet sit amet</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum
						</p>
					</nav>
				</div>
			</section>
			<section className="Solution">
				<img src={require("../img/AdobeStock_227421922 1.png")} alt="" />
				<div className="liftItems">
					<nav>
						<h2>
							we are
							<br /> Solution
						</h2>
						<svg
							width="51"
							height="23"
							viewBox="0 0 51 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1.40571 12.5162C0.819927 11.9304 0.819927 10.9807 1.40571 10.3949L10.9517 0.848965C11.5374 0.263178 12.4872 0.263178 13.073 0.848965C13.6588 1.43475 13.6588 2.3845 13.073 2.97029L4.58769 11.4556L13.073 19.9408C13.6588 20.5266 13.6588 21.4764 13.073 22.0622C12.4872 22.648 11.5374 22.648 10.9517 22.0622L1.40571 12.5162ZM50.7373 12.9556H2.46637V9.95557H50.7373V12.9556Z"
								fill="#19A5FF"
							/>
						</svg>
					</nav>
					<nav>
						<h1>Lorem ipsum dolor sit amet sit amet</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum
						</p>
					</nav>
				</div>
			</section>
			<section className="OurProducts">
				<nav>
					<h2>
						our <br />
						Products
					</h2>
					<svg
						width="50"
						height="23"
						viewBox="0 0 50 23"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M49.5357 12.4025C50.1215 11.8167 50.1215 10.8669 49.5357 10.2811L39.9897 0.735195C39.404 0.149408 38.4542 0.149408 37.8684 0.735195C37.2826 1.32098 37.2826 2.27073 37.8684 2.85652L46.3537 11.3418L37.8684 19.8271C37.2826 20.4129 37.2826 21.3626 37.8684 21.9484C38.4542 22.5342 39.404 22.5342 39.9897 21.9484L49.5357 12.4025ZM0.204102 12.8418H48.475V9.8418H0.204102V12.8418Z"
							fill="#19A5FF"
						/>
					</svg>
				</nav>
				<div id="content">
					<nav>
						<h1>Product 1</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum
						</p>
					</nav>
					<img src={require("../img/our products.png")} alt="ourproducts" />
					<ul>
						<li>Product 1</li>
						<li>Product 2</li>
						<li>Product 3</li>
						<li>Product 4</li>
						<li>Product 5</li>
					</ul>
				</div>
			</section>
		</section>
	);
}

export default About;
