import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";

export function Home() {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbotron />
			<Card />
		</div>
	);
}
