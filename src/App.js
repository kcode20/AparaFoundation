import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Team from "./pages/Team";

export default function App() {
	return (
		<Router>
			<div>
				<Navigation />
			</div>
			<div className='pageBody'>
				<Switch>
					<Route path='/team'>
						<Team />
					</Route>
					<Route path='/users'>
						<Users />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
			<Footer />
		</Router>
	);
}

function Users() {
	return <h2>Users</h2>;
}
