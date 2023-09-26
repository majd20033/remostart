import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Routers/Home";
import OurProjects from "./Routers/OurProjects";
import OurProcess from "./Routers/OurProcess";
import Careers from "./Routers/Careers";
import About from "./Routers/About";
import Footer from "./Components/Footer";
import JoinUs from "./Components/JoinUs";
import ViewCase from "./Components/ViewCase";

function App() {
	return (
		<>
			<Router>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/remostart" element={<Home />} />
					<Route path="/ourProjects" element={<OurProjects />} />
					<Route path="/ourProcess" element={<OurProcess />} />
					<Route path="/careers" element={<Careers />} />
					<Route path="/about" element={<About />} />
					<Route path="/joinUs" element={<JoinUs />} />
					<Route path="/viewCase" element={<ViewCase />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
