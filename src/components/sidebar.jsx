import React, { Component } from "react";

export default class Sidebar extends Component {
	render() {
		return (
			<div id="sidebar-container">
				<div id="sidebar-header">
					<h2>Notes</h2>
					<button>+</button>
				</div>
				<div id="sidebar-content">
					<p>No notes yet</p>
				</div>
			</div>
		);
	}
}
