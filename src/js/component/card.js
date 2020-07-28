import React from "react";

export function Card() {
	const cardTitles = ["Title1", "Title2", "Title3", "Title4"];

	const cardList = cardTitles.map(function(cards, index) {
		return (
			<div key={index} className="card mx-3" style={{ width: "18rem" }}>
				<img
					src="https://fe154d7d-1cbc-41cf-a32a-929f3ee5aacc.ws-us02.gitpod.io/mini-browser/workspace/Landing-page-with-React/src/img/rigo-baby.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		);
	});

	return <div className="d-flex justify-content-around">{cardList}</div>;
}
