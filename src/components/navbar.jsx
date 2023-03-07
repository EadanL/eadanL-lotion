import React, { Component } from "react";

export default class Navbar extends Component {
	render() {
		return (
			<div id="nav-container">
				<div id="frame">
					<button>&#9776;</button>
					<div id="header-container">
						<h1 id="nav-header">Lotion</h1>
						<p id="slogan">Like Notion, but worse.</p>
					</div>
				</div>
			</div>
		);
	}
}
