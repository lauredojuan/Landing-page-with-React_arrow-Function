import React from "react";

export function Footer() {
	return (
		<ul className="nav justify-content-center  bg-light mt-3 p-2">
			<li className="nav-item">
				<a className="nav-link active" href="#">
					Active
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Link
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Link
				</a>
			</li>
			<li className="nav-item">
				<a
					className="nav-link disabled"
					href="#"
					tabIndex="-1"
					aria-disabled="true">
					Disabled
				</a>
			</li>
		</ul>
	);
}
