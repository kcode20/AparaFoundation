import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/transparent-logo.png";
import "./Navigation.css";

export default function App() {
	return (
		<>
			<Navbar bg='light' variant='light' fixed='top'>
				<Navbar.Brand href='/'>
					<img src={logo} height={100} alt='Apara Foundation' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'></Nav>
					<Nav>
						<Nav.Link className='linkStyle' href='/'>
							Home
						</Nav.Link>
						<Nav.Link className='linkStyle' href='/team'>
							Team
						</Nav.Link>
						<Nav.Link className='linkStyle' href='/contact'>
							Contact
						</Nav.Link>
						<Nav.Link className='linkStyle' href='/programs'>
							Programs
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
