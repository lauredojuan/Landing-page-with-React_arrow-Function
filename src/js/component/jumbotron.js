import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron mx-3">
			<h1 className="display-4">Hello World, This is a React View!</h1>
			<p className="lead">
				React is a JavaScript library for building user interfaces.
			</p>
			<hr className="my-4" />
			<p>
				When starting a React project, a simple HTML page with script
				tags might still be the best option. It only takes a minute to
				set up!
			</p>
			<a
				className="btn btn-primary btn-lg"
				href="https://reactjs.org/"
				role="button">
				Learn more
			</a>
		</div>
	);
}
