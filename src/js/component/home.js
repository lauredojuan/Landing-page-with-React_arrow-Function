import React from "react";
import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";
import { Body } from "./body.js";

export function Home() {
	return (
		<div className="container-fluid">
			<Navbar />
			<Body />
			<Footer />
		</div>
	);
}
