import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./App.scss";
import Resume from "./components/Home";
import FactorialR from "./components/Factorial";

const App = () => {
	return (
		<>
			<Router>
				<Navbar MenuItems={MenuItems} />
				<Switch>
					<Route exact path="/">
						<Resume />
					</Route>
					<Route exact path="/services/factorial">
						<FactorialR />
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default App;
