import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Editor() {
	const [title, setTitle] = useState(() => {
		const saved = localStorage.getItem("title");
		const initialValue = JSON.parse(saved);
		return initialValue || "";
	});

	/* Date formatting */
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	};

	const date = new Date().toLocaleString("en-US", options);
	console.log(date);

	useEffect(() => {
		localStorage.setItem("title", JSON.stringify(title));
	}, [title]);

	return (
		<div id="note-container">
			<form>
				<div id="note-head-container">
					<div id="note-info">
						<input
							type="text"
							id="note-title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="Untitled"
						/>
						<input
							id="date"
							type="datetime-local"
							defaultValue={date}
						/>
					</div>
					<div id="note-buttons">
						<input
							type="submit"
							id="save-button"
							value="Save"
						></input>
						<button id="delete-button">Delete</button>
					</div>
				</div>
				<div id="text-editor">
					<ReactQuill theme="snow" placeholder="Your note here" />
				</div>
			</form>
		</div>
	);
}
