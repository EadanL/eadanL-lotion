import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

/* site functionality code */
/* document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("sidebar-menu").addEventListener("click", () => {
		// TODO: show/hide sidebar
		const sidebar = document.getElementById("sidebar-container");
		if (sidebar.classList.contains("visible")) {
			sidebar.classList.remove("visible");
		} else {
			sidebar.classList.add("visible");
		}
	});
}); */

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
