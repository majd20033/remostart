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
				<img src={require("../img/AdobeStock_170801444 1.png")} alt="" />
			</section>
			<section className="Solution">
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
				<img src={require("../img/AdobeStock_227421922 1.png")} alt="" />
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
			<section id="last">
				<h1>That Great?! Let’s work together!</h1>
				<nav className="grid">
					<svg
						width="420"
						height="105"
						viewBox="0 0 420 105"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<g filter="url(#filter0_d_174_3605)">
							<rect
								x="10"
								y="6"
								width="400"
								height="85"
								rx="35"
								fill="#19A5FF"
								shape-rendering="crispEdges"
							/>
							<path
								d="M66.1395 54.4424C66.5825 53.9174 66.889 53.2402 66.9655 52.4766C66.996 52.2969 67 52.1278 67 52C67 50.0698 65.6545 48.5 64 48.5C62.3455 48.5 61 50.0698 61 52C61 52.1278 61.004 52.2969 61.0285 52.4299C61.1078 53.1901 61.4022 53.8977 61.865 54.4407C60.795 54.7708 60 55.8996 60 57.25V63.0833C60 63.238 60.0527 63.3864 60.1464 63.4958C60.2402 63.6052 60.3674 63.6667 60.5 63.6667H67.5C67.6326 63.6667 67.7598 63.6052 67.8536 63.4958C67.9473 63.3864 68 63.238 68 63.0833V57.25C68 55.9013 67.207 54.7743 66.1395 54.4424ZM64 49.6667C64.3376 49.6674 64.6695 49.7681 64.9646 49.9593C65.2597 50.1505 65.5085 50.4259 65.6875 50.7598C65.1785 50.432 64.6005 50.25 64 50.25C63.3995 50.25 62.8215 50.432 62.3125 50.7598C62.4915 50.4259 62.7403 50.1505 63.0354 49.9593C63.3305 49.7681 63.6624 49.6674 64 49.6667ZM64 51.4167C64.761 51.4167 65.4705 51.8221 65.9395 52.5058C65.8443 53.0233 65.5998 53.4871 65.2468 53.8197C64.8938 54.1524 64.4537 54.3336 64 54.3333C63.0635 54.3333 62.272 53.5762 62.0615 52.5034C62.2941 52.1643 62.5891 51.8905 62.9246 51.7024C63.2602 51.5143 63.6277 51.4166 64 51.4167ZM64.4555 58.9008L64 59.6982L63.5445 58.9008L64 57.04L64.4555 58.9008ZM67 62.5H61V57.25C61 56.2852 61.673 55.5 62.5 55.5H63.337L62.519 58.8396C62.479 59.0041 62.5025 59.1808 62.584 59.3238L63.584 61.0738C63.6297 61.1535 63.6916 61.2189 63.7642 61.2641C63.8367 61.3093 63.9177 61.333 64 61.333C64.0823 61.333 64.1633 61.3093 64.2358 61.2641C64.3084 61.2189 64.3703 61.1535 64.416 61.0738L65.416 59.3238C65.4975 59.1814 65.521 59.0047 65.481 58.8396L64.663 55.5H65.5C66.327 55.5 67 56.2852 67 57.25V62.5ZM48.1395 54.4424C48.5825 53.9174 48.889 53.2402 48.9655 52.4766C48.996 52.2969 49 52.1278 49 52C49 50.0698 47.6545 48.5 46 48.5C44.3455 48.5 43 50.0698 43 52C43 52.1278 43.004 52.2969 43.0285 52.4299C43.1078 53.1901 43.4022 53.8977 43.865 54.4407C42.795 54.7708 42 55.8996 42 57.25V63.0833C42 63.238 42.0527 63.3864 42.1464 63.4958C42.2402 63.6052 42.3674 63.6667 42.5 63.6667H49.5C49.6326 63.6667 49.7598 63.6052 49.8536 63.4958C49.9473 63.3864 50 63.238 50 63.0833V57.25C50 55.9013 49.207 54.7743 48.1395 54.4424ZM46 49.6667C46.3376 49.6674 46.6695 49.7681 46.9646 49.9593C47.2597 50.1505 47.5085 50.4259 47.6875 50.7598C47.1785 50.432 46.6005 50.25 46 50.25C45.3995 50.25 44.8215 50.432 44.3125 50.7598C44.4915 50.4259 44.7403 50.1505 45.0354 49.9593C45.3305 49.7681 45.6624 49.6674 46 49.6667ZM46 51.4167C46.761 51.4167 47.4705 51.8221 47.9395 52.5058C47.8443 53.0233 47.5998 53.4871 47.2468 53.8197C46.8938 54.1524 46.4537 54.3336 46 54.3333C45.0635 54.3333 44.272 53.5762 44.0615 52.5034C44.2941 52.1643 44.5891 51.8905 44.9246 51.7024C45.2602 51.5143 45.6277 51.4166 46 51.4167ZM46.4555 58.9008L46 59.6982L45.5445 58.9008L46 57.04L46.4555 58.9008ZM49 62.5H43V57.25C43 56.2852 43.673 55.5 44.5 55.5H45.337L44.519 58.8396C44.479 59.0041 44.5025 59.1808 44.584 59.3238L45.584 61.0738C45.6297 61.1535 45.6916 61.2189 45.7642 61.2641C45.8367 61.3093 45.9177 61.333 46 61.333C46.0823 61.333 46.1633 61.3093 46.2358 61.2641C46.3084 61.2189 46.3703 61.1535 46.416 61.0738L47.416 59.3238C47.4975 59.1814 47.521 59.0047 47.481 58.8396L46.663 55.5H47.5C48.327 55.5 49 56.2852 49 57.25V62.5ZM54.9895 49.6352H54.963C54.428 49.6433 53.9275 49.8936 53.554 50.341C53.1805 50.7884 52.979 51.3782 52.9855 52.0023C52.9882 52.3094 53.043 52.6128 53.1468 52.895C53.2507 53.1771 53.4015 53.4325 53.5905 53.6462C53.9634 54.0729 54.4652 54.3114 54.9875 54.31H55.0145C55.2777 54.3069 55.5378 54.2429 55.7796 54.1218C56.0215 54.0006 56.2403 53.8247 56.4235 53.6042C56.6078 53.3849 56.753 53.1252 56.8506 52.84C56.9483 52.5548 56.9965 52.2499 56.9925 51.9428C56.9853 51.3284 56.7711 50.7419 56.3964 50.3101C56.0216 49.8783 55.5162 49.6359 54.9895 49.6352ZM55.708 52.7898C55.6162 52.9003 55.5065 52.9884 55.3853 53.0491C55.2642 53.1097 55.1339 53.1418 55.002 53.1433H54.9885C54.7271 53.1439 54.476 53.0245 54.2895 52.8108C54.097 52.5921 53.9895 52.3004 53.9865 51.9872C53.9835 51.6739 54.084 51.3787 54.271 51.1547C54.3627 51.0443 54.4723 50.9562 54.5934 50.8955C54.7145 50.8349 54.8447 50.8028 54.9765 50.8012H54.9895C55.1867 50.802 55.3793 50.8703 55.5434 50.9978C55.7075 51.1253 55.8359 51.3063 55.9125 51.5183C55.9891 51.7303 56.0105 51.9639 55.9742 52.19C55.9378 52.416 55.8452 52.6247 55.708 52.7898Z"
								fill="white"
							/>
							<path
								d="M59.977 50.8783C59.9753 50.7249 59.9219 50.5785 59.8283 50.4707C59.7347 50.363 59.6085 50.3025 59.477 50.3026H59.4705L58.823 50.3125C58.7806 50.1825 58.7335 50.0547 58.682 49.9292L59.1335 49.3885C59.1794 49.3337 59.2156 49.2688 59.24 49.1977C59.2644 49.1265 59.2765 49.0505 59.2757 48.9739C59.2748 48.8973 59.261 48.8216 59.2351 48.7512C59.2092 48.6808 59.1716 48.6171 59.1245 48.5636L57.839 47.1018C57.7418 46.998 57.6154 46.9391 57.4835 46.9361C57.4179 46.937 57.353 46.953 57.2927 46.9832C57.2323 47.0134 57.1778 47.0573 57.132 47.1123L56.6805 47.6531C56.5717 47.596 56.4607 47.5444 56.348 47.4985L56.34 46.7431C56.3392 46.6665 56.3255 46.5908 56.2996 46.5205C56.2737 46.4501 56.2361 46.3864 56.189 46.333C56.1428 46.2782 56.0874 46.2351 56.0262 46.2066C55.965 46.1781 55.8994 46.1647 55.8335 46.1673L54.038 46.1941C53.9724 46.1951 53.9075 46.2112 53.8472 46.2414C53.7869 46.2717 53.7322 46.3155 53.6864 46.3703C53.6406 46.4252 53.6044 46.4901 53.5801 46.5612C53.5558 46.6324 53.5437 46.7085 53.5445 46.7851L53.553 47.5405C53.4415 47.5895 53.3319 47.6441 53.2245 47.7044L52.761 47.1776C52.6652 47.0712 52.5379 47.0119 52.4055 47.012C52.3399 47.0128 52.275 47.0288 52.2147 47.059C52.1543 47.0893 52.0998 47.1331 52.054 47.1881L50.8005 48.6885C50.7546 48.7433 50.7185 48.8082 50.6941 48.8794C50.6697 48.9506 50.6575 49.0267 50.6584 49.1034C50.6592 49.18 50.673 49.2557 50.6989 49.3262C50.7249 49.3966 50.7625 49.4604 50.8095 49.5139L51.2735 50.0406C51.2244 50.1674 51.1802 50.2966 51.141 50.428L50.4935 50.4379C50.4279 50.4389 50.363 50.455 50.3027 50.4852C50.2424 50.5154 50.1877 50.5592 50.1419 50.6141C50.0961 50.669 50.0599 50.7338 50.0356 50.805C50.0113 50.8761 49.9992 50.9522 50 51.0288L50.023 53.123C50.0248 53.2764 50.0782 53.4228 50.1718 53.5306C50.2654 53.6383 50.3916 53.6987 50.523 53.6987H50.5295L51.177 53.6888C51.2195 53.8189 51.2665 53.9466 51.318 54.0721L50.8665 54.6128C50.8207 54.6676 50.7845 54.7325 50.7601 54.8036C50.7357 54.8747 50.7236 54.9508 50.7244 55.0274C50.7253 55.104 50.739 55.1797 50.765 55.2501C50.7909 55.3205 50.8285 55.3842 50.8755 55.4376L52.161 56.8995C52.2074 56.9541 52.2629 56.9969 52.324 57.0254C52.3852 57.0539 52.4507 57.0675 52.5165 57.0651C52.5822 57.0643 52.6471 57.0483 52.7074 57.0181C52.7677 56.9879 52.8223 56.944 52.868 56.889L53.3195 56.3482C53.4285 56.4054 53.539 56.4567 53.652 56.5028L53.66 57.2582C53.6616 57.4115 53.715 57.5579 53.8085 57.6656C53.902 57.7733 54.0281 57.8336 54.1595 57.8334H54.166L55.9615 57.8066C56.0272 57.8056 56.0921 57.7895 56.1524 57.7593C56.2127 57.729 56.2674 57.6852 56.3132 57.6304C56.359 57.5755 56.3951 57.5106 56.4195 57.4395C56.4438 57.3683 56.4559 57.2922 56.455 57.2156L56.4465 56.4602C56.5585 56.4112 56.6675 56.3564 56.775 56.2963L57.2385 56.8231C57.3335 56.9316 57.4665 56.9899 57.594 56.9887C57.6597 56.9879 57.7246 56.9719 57.7849 56.9417C57.8452 56.9114 57.8998 56.8676 57.9455 56.8126L59.199 55.3122C59.2449 55.2574 59.2811 55.1925 59.3055 55.1213C59.3299 55.0501 59.342 54.974 59.3412 54.8973C59.3404 54.8207 59.3266 54.745 59.3006 54.6745C59.2747 54.6041 59.2371 54.5403 59.19 54.4868L58.726 53.9601C58.775 53.8335 58.8195 53.704 58.8585 53.5727L59.506 53.5628C59.5717 53.5618 59.6366 53.5457 59.6969 53.5155C59.7572 53.4853 59.8119 53.4415 59.8577 53.3866C59.9035 53.3317 59.9396 53.2669 59.964 53.1957C59.9883 53.1246 60.0004 53.0485 59.9995 52.9719L59.977 50.8783ZM58.478 52.4125C58.367 52.414 58.2596 52.4587 58.1728 52.5394C58.086 52.6201 58.0247 52.7323 57.9985 52.8581C57.9306 53.1845 57.8233 53.4979 57.68 53.7891C57.625 53.9014 57.6034 54.0318 57.6188 54.1599C57.6342 54.288 57.6856 54.4065 57.765 54.4967L58.134 54.9161L57.579 55.5811L57.21 55.1611C57.1305 55.0707 57.0275 55.0136 56.9171 54.999C56.8068 54.9845 56.6954 55.0132 56.6005 55.0806C56.3545 55.2548 56.0887 55.3879 55.811 55.4761C55.7041 55.5101 55.6099 55.5846 55.5432 55.6879C55.4765 55.7912 55.4411 55.9173 55.4425 56.0466L55.449 56.6481L54.6535 56.6603L54.647 56.0589C54.6457 55.9295 54.6074 55.8043 54.5384 55.703C54.4693 55.6017 54.3733 55.5301 54.2655 55.4995C53.9857 55.42 53.7169 55.2949 53.467 55.1279C53.3708 55.0636 53.259 55.0384 53.1491 55.0563C53.0393 55.0741 52.9376 55.134 52.86 55.2265L52.5 55.657L51.9305 55.0095L52.29 54.579C52.3674 54.4864 52.4163 54.3664 52.4289 54.2379C52.4414 54.1094 52.4171 53.9796 52.3595 53.8691C52.2102 53.5818 52.0961 53.2716 52.0205 52.9474C51.9605 52.6907 51.76 52.4895 51.5315 52.5169L51.016 52.5245L51.0055 51.5964L51.521 51.5888C51.6321 51.5873 51.7395 51.5426 51.8263 51.4619C51.9131 51.3812 51.9744 51.269 52.0005 51.1431C52.0685 50.8171 52.1755 50.5038 52.319 50.2121C52.3741 50.0999 52.3957 49.9695 52.3803 49.8414C52.3649 49.7133 52.3134 49.5948 52.234 49.5046L51.865 49.0851L52.42 48.4201L52.789 48.8401C52.953 49.0256 53.2035 49.0589 53.3985 48.9206C53.6446 48.7465 53.9104 48.6134 54.188 48.5251C54.295 48.4911 54.3892 48.4167 54.4559 48.3134C54.5226 48.2101 54.558 48.0839 54.5565 47.9546L54.55 47.3532L55.3455 47.341L55.352 47.9424C55.3534 48.0718 55.3917 48.197 55.4607 48.2983C55.5298 48.3995 55.6258 48.4711 55.7335 48.5018C56.0134 48.5813 56.2822 48.7064 56.532 48.8734C56.6283 48.9379 56.7401 48.9632 56.85 48.9453C56.9599 48.9275 57.0616 48.8675 57.139 48.7748L57.499 48.3443L58.0685 48.9918L57.709 49.4223C57.6316 49.5149 57.5828 49.6349 57.5702 49.7634C57.5576 49.8919 57.582 50.0217 57.6395 50.1322C57.789 50.4192 57.9025 50.729 57.9785 51.0539C58.038 51.31 58.2445 51.4605 58.4675 51.4844L58.983 51.4768L58.9935 52.4049L58.478 52.4125Z"
								fill="white"
							/>
							<path
								d="M40.5 66H69.5C69.6326 66 69.7598 65.9385 69.8536 65.8291C69.9473 65.7197 70 65.5714 70 65.4167V44.4167C70 44.262 69.9473 44.1136 69.8536 44.0042C69.7598 43.8948 69.6326 43.8333 69.5 43.8333H40.5C40.3674 43.8333 40.2402 43.8948 40.1464 44.0042C40.0527 44.1136 40 44.262 40 44.4167V65.4167C40 65.5714 40.0527 65.7197 40.1464 65.8291C40.2402 65.9385 40.3674 66 40.5 66ZM41 45H69V64.8333H41V45ZM55 42.6667C57.757 42.6667 60 40.0498 60 36.8333C60 33.6168 57.757 31 55 31C52.243 31 50 33.6168 50 36.8333C50 40.0498 52.243 42.6667 55 42.6667ZM55 32.1667C57.2055 32.1667 59 34.2603 59 36.8333C59 39.4064 57.2055 41.5 55 41.5C52.7945 41.5 51 39.4064 51 36.8333C51 34.2603 52.7945 32.1667 55 32.1667Z"
								fill="white"
							/>
							<path
								d="M55 38.5835C54.724 38.5835 54.5 38.3216 54.5 38.0002H53.5C53.5 38.7597 53.9195 39.4013 54.5 39.6428V40.3335H55.5V39.6428C55.7916 39.5229 56.0443 39.3006 56.2233 39.0065C56.4023 38.7124 56.499 38.3609 56.5 38.0002C56.5 37.0353 55.827 36.2502 55 36.2502C54.8712 36.2434 54.7497 36.1791 54.6606 36.0704C54.5716 35.9617 54.5219 35.8172 54.5219 35.6668C54.5219 35.5165 54.5716 35.3719 54.6606 35.2633C54.7497 35.1546 54.8712 35.0902 55 35.0835C55.276 35.0835 55.5 35.3454 55.5 35.6668H56.5C56.499 35.3061 56.4023 34.9546 56.2233 34.6605C56.0443 34.3663 55.7916 34.1441 55.5 34.0242V33.3335H54.5V34.0242C54.2084 34.1441 53.9557 34.3663 53.7767 34.6605C53.5976 34.9546 53.501 35.3061 53.5 35.6668C53.5 36.6317 54.173 37.4168 55 37.4168C55.1287 37.4235 55.2503 37.4879 55.3393 37.5966C55.4284 37.7053 55.4781 37.8498 55.4781 38.0002C55.4781 38.1505 55.4284 38.2951 55.3393 38.4037C55.2503 38.5124 55.1287 38.5768 55 38.5835ZM63 36.2502H64V37.4168H63V36.2502ZM61 36.2502H62V37.4168H61V36.2502ZM65 36.2502H66V37.4168H65V36.2502ZM65.1465 42.4959C65.1928 42.5503 65.2479 42.5934 65.3086 42.6228C65.3692 42.6523 65.4343 42.6674 65.5 42.6674C65.5657 42.6674 65.6307 42.6523 65.6914 42.6228C65.7521 42.5934 65.8072 42.5503 65.8535 42.4959L67.3535 40.7459L66.6465 39.9211L66 40.6753V38.5835H65V40.6753L64.3535 39.9211L63.6465 40.7459L65.1465 42.4959ZM48 36.2502H49V37.4168H48V36.2502ZM44 36.2502H45V37.4168H44V36.2502ZM46 36.2502H47V37.4168H46V36.2502ZM44.5 42.6668C44.5657 42.6669 44.6307 42.6518 44.6914 42.6225C44.752 42.5932 44.8071 42.5502 44.8535 42.4959L46.3535 40.7459L45.6465 39.9211L45 40.6753V38.5835H44V40.6753L43.3535 39.9211L42.6465 40.7459L44.1465 42.4959C44.1929 42.5502 44.248 42.5932 44.3086 42.6225C44.3693 42.6518 44.4343 42.6669 44.5 42.6668Z"
								fill="white"
							/>
							<path
								d="M138.438 56.5V40.5H140.375V54.7812H147.813V56.5H138.438ZM155.814 56.75C154.658 56.75 153.66 56.4948 152.822 55.9844C151.988 55.4688 151.345 54.75 150.892 53.8281C150.444 52.901 150.22 51.8229 150.22 50.5938C150.22 49.3646 150.444 48.2812 150.892 47.3437C151.345 46.401 151.975 45.6667 152.783 45.1406C153.595 44.6094 154.543 44.3438 155.626 44.3438C156.251 44.3438 156.868 44.4479 157.478 44.6562C158.087 44.8646 158.642 45.2031 159.142 45.6719C159.642 46.1354 160.04 46.75 160.337 47.5156C160.634 48.2812 160.783 49.224 160.783 50.3437V51.125H151.533V49.5312H158.908C158.908 48.8542 158.772 48.25 158.501 47.7187C158.236 47.1875 157.855 46.7682 157.361 46.4609C156.871 46.1536 156.293 46 155.626 46C154.892 46 154.256 46.1823 153.72 46.5469C153.189 46.9062 152.78 47.375 152.493 47.9531C152.207 48.5312 152.064 49.151 152.064 49.8125V50.875C152.064 51.7813 152.22 52.5495 152.533 53.1797C152.85 53.8047 153.29 54.2812 153.853 54.6094C154.415 54.9323 155.069 55.0938 155.814 55.0938C156.298 55.0938 156.736 55.026 157.126 54.8906C157.522 54.75 157.863 54.5417 158.15 54.2656C158.436 53.9844 158.658 53.6354 158.814 53.2187L160.595 53.7188C160.408 54.3229 160.092 54.8542 159.65 55.3125C159.207 55.7656 158.66 56.1198 158.009 56.375C157.358 56.625 156.626 56.75 155.814 56.75ZM169.026 44.5V46.0625H162.807V44.5H169.026ZM164.62 41.625H166.463V53.0625C166.463 53.5833 166.539 53.974 166.69 54.2344C166.846 54.4896 167.044 54.6615 167.284 54.75C167.529 54.8333 167.786 54.875 168.057 54.875C168.26 54.875 168.427 54.8646 168.557 54.8437C168.687 54.8177 168.792 54.7969 168.87 54.7812L169.245 56.4375C169.12 56.4844 168.945 56.5313 168.721 56.5781C168.497 56.6302 168.213 56.6563 167.87 56.6563C167.349 56.6563 166.838 56.5443 166.338 56.3203C165.844 56.0964 165.432 55.7552 165.104 55.2969C164.781 54.8385 164.62 54.2604 164.62 53.5625V41.625ZM174.267 40.5V41.9062C174.267 42.3333 174.189 42.7891 174.033 43.2734C173.882 43.7526 173.658 44.2187 173.361 44.6719C173.07 45.1198 172.715 45.5104 172.299 45.8438L171.299 45.0313C171.627 44.5625 171.911 44.0755 172.15 43.5703C172.395 43.0599 172.517 42.5156 172.517 41.9375V40.5H174.267ZM183.726 47.1875L182.069 47.6562C181.965 47.3802 181.812 47.112 181.609 46.8516C181.411 46.5859 181.14 46.3672 180.796 46.1953C180.452 46.0234 180.012 45.9375 179.476 45.9375C178.741 45.9375 178.129 46.1068 177.64 46.4453C177.155 46.7786 176.913 47.2031 176.913 47.7187C176.913 48.1771 177.08 48.5391 177.413 48.8047C177.747 49.0703 178.267 49.2917 178.976 49.4687L180.757 49.9063C181.83 50.1667 182.629 50.5651 183.155 51.1016C183.681 51.6328 183.944 52.3177 183.944 53.1562C183.944 53.8437 183.747 54.4583 183.351 55C182.96 55.5417 182.413 55.9688 181.71 56.2813C181.007 56.5938 180.189 56.75 179.257 56.75C178.033 56.75 177.02 56.4844 176.218 55.9531C175.416 55.4219 174.908 54.6458 174.694 53.625L176.444 53.1875C176.611 53.8333 176.926 54.3177 177.39 54.6406C177.859 54.9635 178.47 55.125 179.226 55.125C180.085 55.125 180.767 54.9427 181.273 54.5781C181.783 54.2083 182.038 53.7656 182.038 53.25C182.038 52.8333 181.892 52.4844 181.601 52.2031C181.309 51.9167 180.861 51.7031 180.257 51.5625L178.257 51.0937C177.158 50.8333 176.351 50.4297 175.835 49.8828C175.325 49.3307 175.069 48.6406 175.069 47.8125C175.069 47.1354 175.26 46.5365 175.64 46.0156C176.025 45.4948 176.549 45.0859 177.21 44.7891C177.877 44.4922 178.632 44.3438 179.476 44.3438C180.663 44.3438 181.595 44.6042 182.273 45.125C182.955 45.6458 183.439 46.3333 183.726 47.1875ZM193.597 56.5V40.5H195.535V47.625H204.066V40.5H206.004V56.5H204.066V49.3437H195.535V56.5H193.597ZM209.853 56.5V44.5H211.696V56.5H209.853ZM210.79 42.5C210.431 42.5 210.121 42.3776 209.86 42.1328C209.605 41.888 209.478 41.5938 209.478 41.25C209.478 40.9063 209.605 40.612 209.86 40.3672C210.121 40.1224 210.431 40 210.79 40C211.149 40 211.457 40.1224 211.712 40.3672C211.972 40.612 212.103 40.9063 212.103 41.25C212.103 41.5938 211.972 41.888 211.712 42.1328C211.457 42.3776 211.149 42.5 210.79 42.5ZM215.293 56.5V44.5H217.074V46.3125H217.199C217.418 45.7188 217.814 45.237 218.387 44.8672C218.96 44.4974 219.606 44.3125 220.324 44.3125C220.46 44.3125 220.629 44.3151 220.832 44.3203C221.035 44.3255 221.189 44.3333 221.293 44.3438V46.2187C221.231 46.2031 221.087 46.1797 220.864 46.1484C220.645 46.112 220.413 46.0937 220.168 46.0937C219.585 46.0937 219.064 46.2161 218.606 46.4609C218.153 46.7005 217.793 47.0339 217.528 47.4609C217.267 47.8828 217.137 48.3646 217.137 48.9062V56.5H215.293ZM228.365 56.75C227.209 56.75 226.211 56.4948 225.373 55.9844C224.539 55.4688 223.896 54.75 223.443 53.8281C222.995 52.901 222.771 51.8229 222.771 50.5938C222.771 49.3646 222.995 48.2812 223.443 47.3437C223.896 46.401 224.526 45.6667 225.334 45.1406C226.146 44.6094 227.094 44.3438 228.177 44.3438C228.802 44.3438 229.419 44.4479 230.029 44.6562C230.638 44.8646 231.193 45.2031 231.693 45.6719C232.193 46.1354 232.591 46.75 232.888 47.5156C233.185 48.2812 233.334 49.224 233.334 50.3437V51.125H224.084V49.5312H231.459C231.459 48.8542 231.323 48.25 231.052 47.7187C230.787 47.1875 230.406 46.7682 229.912 46.4609C229.422 46.1536 228.844 46 228.177 46C227.443 46 226.807 46.1823 226.271 46.5469C225.74 46.9062 225.331 47.375 225.044 47.9531C224.758 48.5312 224.615 49.151 224.615 49.8125V50.875C224.615 51.7813 224.771 52.5495 225.084 53.1797C225.401 53.8047 225.841 54.2812 226.404 54.6094C226.966 54.9323 227.62 55.0938 228.365 55.0938C228.849 55.0938 229.287 55.026 229.677 54.8906C230.073 54.75 230.414 54.5417 230.701 54.2656C230.987 53.9844 231.209 53.6354 231.365 53.2187L233.146 53.7188C232.959 54.3229 232.643 54.8542 232.201 55.3125C231.758 55.7656 231.211 56.1198 230.56 56.375C229.909 56.625 229.177 56.75 228.365 56.75ZM253.516 40.5H255.453V51.0937C255.453 52.1875 255.195 53.1641 254.68 54.0234C254.169 54.8776 253.448 55.5521 252.516 56.0469C251.583 56.5365 250.49 56.7813 249.234 56.7813C247.979 56.7813 246.885 56.5365 245.953 56.0469C245.021 55.5521 244.297 54.8776 243.781 54.0234C243.271 53.1641 243.016 52.1875 243.016 51.0937V40.5H244.953V50.9375C244.953 51.7187 245.125 52.4141 245.469 53.0234C245.813 53.6276 246.302 54.1042 246.938 54.4531C247.578 54.7969 248.344 54.9687 249.234 54.9687C250.125 54.9687 250.891 54.7969 251.531 54.4531C252.172 54.1042 252.662 53.6276 253 53.0234C253.344 52.4141 253.516 51.7187 253.516 50.9375V40.5ZM267.792 47.1875L266.136 47.6562C266.032 47.3802 265.878 47.112 265.675 46.8516C265.477 46.5859 265.206 46.3672 264.863 46.1953C264.519 46.0234 264.079 45.9375 263.542 45.9375C262.808 45.9375 262.196 46.1068 261.706 46.4453C261.222 46.7786 260.98 47.2031 260.98 47.7187C260.98 48.1771 261.147 48.5391 261.48 48.8047C261.813 49.0703 262.334 49.2917 263.042 49.4687L264.824 49.9063C265.897 50.1667 266.696 50.5651 267.222 51.1016C267.748 51.6328 268.011 52.3177 268.011 53.1562C268.011 53.8437 267.813 54.4583 267.417 55C267.027 55.5417 266.48 55.9688 265.777 56.2813C265.074 56.5938 264.256 56.75 263.324 56.75C262.1 56.75 261.087 56.4844 260.285 55.9531C259.482 55.4219 258.975 54.6458 258.761 53.625L260.511 53.1875C260.678 53.8333 260.993 54.3177 261.456 54.6406C261.925 54.9635 262.537 55.125 263.292 55.125C264.152 55.125 264.834 54.9427 265.339 54.5781C265.85 54.2083 266.105 53.7656 266.105 53.25C266.105 52.8333 265.959 52.4844 265.667 52.2031C265.376 51.9167 264.928 51.7031 264.324 51.5625L262.324 51.0937C261.225 50.8333 260.417 50.4297 259.902 49.8828C259.391 49.3307 259.136 48.6406 259.136 47.8125C259.136 47.1354 259.326 46.5365 259.706 46.0156C260.092 45.4948 260.615 45.0859 261.277 44.7891C261.943 44.4922 262.699 44.3438 263.542 44.3438C264.73 44.3438 265.662 44.6042 266.339 45.125C267.022 45.6458 267.506 46.3333 267.792 47.1875Z"
								fill="white"
							/>
							<path
								d="M349 53.5L354 48.5L349 43.5"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M342 53.5L347 48.5L342 43.5"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
						<defs>
							<filter
								id="filter0_d_174_3605"
								x="0"
								y="0"
								width="420"
								height="105"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB">
								<feFlood flood-opacity="0" result="BackgroundImageFix" />
								<feColorMatrix
									in="SourceAlpha"
									type="matrix"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
									result="hardAlpha"
								/>
								<feOffset dy="4" />
								<feGaussianBlur stdDeviation="5" />
								<feComposite in2="hardAlpha" operator="out" />
								<feColorMatrix
									type="matrix"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
								/>
								<feBlend
									mode="normal"
									in2="BackgroundImageFix"
									result="effect1_dropShadow_174_3605"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="effect1_dropShadow_174_3605"
									result="shape"
								/>
							</filter>
						</defs>
					</svg>
				</nav>
			</section>
		</section>
	);
}

export default About;