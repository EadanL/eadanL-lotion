import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import Layout from "./components/layout";
import Editor from "./components/editor";
import Blank from "./components/blank";
import Viewer from "./components/viewer";

function App() {
	let { pageId } = useParams();
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					{/* <Route path="/" element={<Blank />}></Route> */}
					<Route path="/edit" element={<Editor />}></Route>
					<Route path="/" element={<Viewer />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
