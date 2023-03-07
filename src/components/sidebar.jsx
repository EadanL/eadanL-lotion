import React from "react";

export default function Sidebar() {
	return (
		<div id="sidebar-container" className="visible">
			<div id="sidebar-header">
				<h2>Notes</h2>
				<button>+</button>
			</div>
			<div id="sidebar-content">
				<p id="empty-notes">No notes yet</p>
			</div>
		</div>
	);
}
