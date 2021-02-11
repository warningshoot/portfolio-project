import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import Resume from "./components/Resume";
import FactorialR from "./components/Factorial";
import Weather from "./components/Weather";
import WikiBattle from "./components/WikiBattle";
import NoMatch from "./components/NoMatch";
import Projects from "./components/Projects";
import AboutMe from "./components/AbouteMe";
import Todo from "./components/Todo";

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Resume />
					</Route>
					<Route exact path="/aboutme">
						<AboutMe />
					</Route>
					<Route exact path="/projects">
						<Projects />
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
					<ProtectedRoute exact path="/projects/todo" component={Todo} />
					<Route path="*">
						<NoMatch />
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default App;
