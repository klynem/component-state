import { Routes, Route } from "react-router-dom";
import {
	LandingScreen,
	FirstExampleScreen,
	SecondExampleScreen,
} from "./screens";

function App() {
	return (
		<div className="absolute h-full w-full flex">
			<Routes>
				<Route path="/" element={<LandingScreen />} />
				<Route path="first" element={<FirstExampleScreen />} />
				<Route path="second" element={<SecondExampleScreen />} />
			</Routes>
		</div>
	);
}

export default App;
