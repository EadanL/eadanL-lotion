import React, { Component, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Layout({ notes, onAddNote }) {
	const [sidebarVisibility, setVisibility] = useState(true);

	const changeVisibility = () => {
		setVisibility(!sidebarVisibility);
	};

	return (
		<div id="layout-container">
			<Navbar hideSidebar={changeVisibility} />
			<div id="content">
				<Sidebar
					visibility={sidebarVisibility}
					notes={notes}
					onAddNote={onAddNote}
				/>
				<Outlet />
			</div>
		</div>
	);
}
