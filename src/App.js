import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";

import Nav from "./Components/Nav";
import Home from "./Components/Home";
import OurProjects from "./Components/OurProjects";
import Careers from "./Components/Careers";
import OurProcess from "./Components/OurProcess";
import About from "./Components/About";

function App() {
	return (
		<>
			<Router>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/ourProjects" element={<OurProjects />} />
					<Route path="/ourProcess" element={<OurProcess />} />
					<Route path="/careers" element={<Careers />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
