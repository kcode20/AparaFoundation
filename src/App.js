import React from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
	return (
		<Router>
			<div>
				<Navigation />
			</div>
			<div style={{ paddingTop: "56px" }}>
				<Switch>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/users'>
						<Users />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function About() {
	return <h2>About</h2>;
}

function Users() {
	return <h2>Users</h2>;
}
