import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Footer.css';
import logo from '../images/IMG_9879.JPG';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import home from '../images/home.png';
import email from '../images/email.png';
import phone from '../images/phone.png';

export default function Footer() {
	return (
		<div
			className='footer'
			style={{
				backgroundColor: '#301934',
				color: 'white',
			}}
		>
			<footer className='font-small mdb-color pt-4'>
				<Container>
					<Row className='text-center'>
						<Col>
							<h6 className='text-uppercase mb-4 font-weight-bold'>
								<img alt='' src={logo} height={75} />
							</h6>
							<p>
								We strive to provide support to enable individuals to achieve
								better health outcomes and a stronger quality of life.
							</p>
						</Col>

						<Col>
							<h6 className='text-uppercase mb-4 font-weight-bold'>Contact</h6>
							<p>
								<img alt='' src={home} height={15} /> Long Island, NY, US
							</p>
							<p>
								<img alt='' src={email} height={15} />{' '}
								info@theaparafoundation.com
							</p>
							<p>
								<img alt='' src={phone} height={15} /> + 01 234 567 88
							</p>
						</Col>

						<Col>
							<h6 className='text-uppercase mb-4 font-weight-bold'>
								Follow Us On Social Media
							</h6>
							<ul className='list-unstyled list-inline'>
								<li className='list-inline-item'>
									<img
										src={facebook}
										alt='facebook'
										height={25}
										className='fab fa-facebook-f'
									/>
								</li>
								<li className='list-inline-item'>
									<img
										alt='twitter'
										src={twitter}
										height={25}
										className='fab fa-twitter'
									/>
								</li>
								<li className='list-inline-item'>
									<img
										src={instagram}
										alt='instagram'
										height={25}
										className='fab fa-google-plus-g'
									/>
								</li>
							</ul>
						</Col>
					</Row>

					<hr className='separator' />

					<Row className='align-items-center'>
						<div>
							Made with <span style={{ color: '#e25555;' }}>&#9829;</span> by
							@kcode
							<div>
								Icons made by{' '}
								<a
									href='https://www.flaticon.com/authors/freepik'
									title='Freepik'
									className='freepik'
								>
									Freepik
								</a>{' '}
								from{' '}
								<a
									href='https://www.flaticon.com/'
									title='Flaticon'
									className='freepik'
								>
									www.flaticon.com
								</a>
							</div>
						</div>
					</Row>
				</Container>
			</footer>
		</div>
	);
}
