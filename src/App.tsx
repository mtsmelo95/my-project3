import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import GalleryPage from "./components/GalleryPage";
import HomePage from "./components/HomePage";

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/gallery"
						element={<GalleryPage />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
