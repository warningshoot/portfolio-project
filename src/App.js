import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./App.scss";

const App = () => {
	return (
		<>
			<Router>
				<Navbar MenuItems={MenuItems} />
			</Router>
		</>
	);
};

export default App;
