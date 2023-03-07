import React, { useState } from "react";

export default function Navbar(props) {
	const { hideSidebar } = props;

	const handleClick = () => {
		hideSidebar();
	};

	return (
		<div id="nav-container">
			<div id="frame">
				<button id="sidebar-menu" onClick={handleClick}>
					&#9776;
				</button>
				<div id="header-container">
					<h1 id="nav-header">Lotion</h1>
					<p id="slogan">Like Notion, but worse.</p>
				</div>
			</div>
		</div>
	);
}
