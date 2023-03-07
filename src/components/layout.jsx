import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default class Layout extends Component {
	render() {
		return (
			<div id="layout-container">
				<Navbar />
				<div id="content">
					<Sidebar />
					<Outlet />
				</div>
			</div>
		);
	}
}
