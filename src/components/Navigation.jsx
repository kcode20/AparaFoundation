import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/transparent-logo.png";

export default function App() {
	return (
		<>
			<Navbar bg='light' variant='light' fixed='top'>
				<Navbar.Brand href='/'>
					<img src={logo} height={75} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'></Nav>
					<Nav>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/team'>Team</Nav.Link>
						<Nav.Link href='/users'>Users</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
