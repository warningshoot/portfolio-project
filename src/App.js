import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./App.scss";
import Resume from "./components/Resume";
import FactorialR from "./components/Factorial";
import Weather from "./components/Weather";
import WikiBattle from "./components/WikiBattle";

const App = () => {
	return (
		<>
			<Router>
				<Navbar MenuItems={MenuItems} />
				<Switch>
					<Route exact path="/">
						<Resume />
					</Route>
					<Route exact path="/projects/factorial">
						<FactorialR />
					</Route>
					<Route exact path="/projects/weather">
						<Weather />
					</Route>
					<Route exact path="/projects/wikibattle">
						<WikiBattle />
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default App;
