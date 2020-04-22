import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/transparent-logo.png';
import './Navigation.css';

export default function App() {
	return (
		<>
			<Navbar bg='light' variant='light' fixed='top' expand='lg'>
				<Navbar.Brand href='/'>
					<img src={logo} height={100} alt='Apara Foundation' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
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
						<Nav.Link className='linkStyle' href='/donate'>
							Donate
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
