import React from "react";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";

export function Body() {
	return (
		<div className="container mt-3">
			<Jumbotron />
			<Card />
		</div>
	);
}
