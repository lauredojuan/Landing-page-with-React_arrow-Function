import React from "react";
import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";
import { Body } from "./body.js";

const Home = () => {
	return (
		<div className="container-fluid mb-3">
			<Navbar />
			<Body />
			<Footer />
		</div>
	);
}

export default Home;