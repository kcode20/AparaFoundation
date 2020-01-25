import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Programs from "./pages/Programs";

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
					<Route path='/contact'>
						<Contact />
					</Route>
					<Route path='/programs'>
						<Programs />
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
