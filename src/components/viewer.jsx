import React from "react";

export default function Viewer() {
	return (
		<div id="note-container">
			<div id="toolbar">
				<div id="note-info">
					<h2>{/* note title here */}Title</h2>
					<p id="note-date">
						Date
						{/* date of note creation here */}
					</p>
				</div>
				<div id="toolbar-buttons">
					<button id="edit-button">Edit</button>
					<button id="delete-button">Delete</button>
				</div>
			</div>
		</div>
	);
}
