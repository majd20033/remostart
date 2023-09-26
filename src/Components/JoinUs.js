import Title from "./Title";
import "../CSS/JoinUs.css";

function JoinUs() {
	return (
		<section id="JoinUs">
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
					Title="Join Us!"
					FirstP="We help build and manage a team of world-class developers "
					SecondP="to bring your vision to life"
				/>
			</section>
			<section id="firstContent">
				<form>
					<div className="file-input-container">
						<h2>Upload your CV</h2>
						<label className="file-input-label">
							<input
								type="file"
								accept=".pdf"
								className="file-input"
								required
							/>
							attach your CV
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M21.4403 11.0499L12.2503 20.2399C11.1244 21.3658 9.59747 21.9983 8.00529 21.9983C6.41311 21.9983 4.88613 21.3658 3.76029 20.2399C2.63445 19.1141 2.00195 17.5871 2.00195 15.9949C2.00195 14.4027 2.63445 12.8758 3.76029 11.7499L12.9503 2.55992C13.7009 1.80936 14.7188 1.3877 15.7803 1.3877C16.8417 1.3877 17.8597 1.80936 18.6103 2.55992C19.3609 3.31048 19.7825 4.32846 19.7825 5.38992C19.7825 6.45138 19.3609 7.46936 18.6103 8.21992L9.41029 17.4099C9.03501 17.7852 8.52602 17.996 7.99529 17.996C7.46456 17.996 6.95557 17.7852 6.58029 17.4099C6.20501 17.0346 5.99418 16.5256 5.99418 15.9949C5.99418 15.4642 6.20501 14.9552 6.58029 14.5799L15.0703 6.09992"
									stroke="#406AFF"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</label>
					</div>
					<div>
						<label>
							First Name:
							<input type="text" required />
						</label>
						<label>
							Second Name:
							<input type="text" required />
						</label>
						<label>
							Email
							<input type="email" required />
						</label>
						<label>
							Phone num
							<input type="number" required />
						</label>
						<label>
							Address
							<input type="text" required />
						</label>
						<div style={{ display: "inherit" }}>
							<h2>Add picture</h2>

							<label>
								<input
									type="file"
									accept=".jpg .png"
									required
									style={{ display: "none" }}
								/>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
										stroke="#353546"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
										stroke="#353546"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								Upload personal picture
							</label>
						</div>
					</div>
					<h1>Job Information</h1>
					<div>
						<label>
							Position
							<select id="position">
								<option selected disabled>
									Select a Position{" "}
								</option>
								<option value="training">Training</option>
								<option value="job">Job</option>
							</select>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M6 9L12 15L18 9"
									stroke="#353546"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</label>
						<label>
							Position
							<select id="position Type">
								<option selected disabled>
									Select a Position Type
								</option>
								<option value="type1">type1</option>
								<option value="type2">type2</option>
							</select>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M6 9L12 15L18 9"
									stroke="#353546"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</label>
						<label>
							Linked in profile
							<input type="url" />
						</label>
						<label>
							Other links (Behance, Git hub, etc..)
							<input type="url" />
						</label>
					</div>
					<label>
						talk about your self in 150 Characters
						<input type="text" minLength={150} />
					</label>
					<button type="submit">submit</button>
				</form>
			</section>
		</section>
	);
}

export default JoinUs;
