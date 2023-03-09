import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import Notes from "./components/notes";

import Layout from "./components/layout";
import Editor from "./components/editor";
import Viewer from "./components/viewer";

function App() {
	// const [notes, setNotes] = useState([]);

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					{/* <Route path="/edit" element={<Viewer />}></Route> */}
					<Route
						path="/"
						element={
							<div id="note-container">
								<p id="empty-notes">
									Select a note, or create a new one.
								</p>
							</div>
						}
					></Route>
					<Route path="/edit" element={<Editor />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
