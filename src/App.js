import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Editor from "./components/editor";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Editor />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
