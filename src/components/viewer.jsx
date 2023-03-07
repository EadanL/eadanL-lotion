import React, { Component } from "react";

export default class Viewer extends Component {
	render() {
		return (
			<div id="note-container">
				<div id="toolbar">
					<div id="note-info">
						<h2>{/* note title here */}Title</h2>
						<p id="note-date">
							Date{/* date of note creation here */}
						</p>
					</div>
					<button id="edit-button">Edit</button>
					<button id="delete-button">Delete</button>
				</div>
			</div>
		);
	}
}
