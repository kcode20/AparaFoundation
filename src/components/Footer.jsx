import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import "./Footer.css";
import logo from "../images/IMG_9879.JPG";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";

export default function Footer() {
	return (
		<div
			className='footer'
			style={{
				backgroundColor: "#301934",
				color: "white",
			}}
		>
			<footer className='font-small mdb-color pt-4'>
				<Container>
					<Row className='text-center'>
						<Col>
							<h6 className='text-uppercase mb-4 font-weight-bold'>
								<img src={logo} height={75} />
							</h6>
							<p>
								We strive to provide support to enable individuals to achieve
								better health outcomes and a stronger quality of life.
							</p>
						</Col>

						<Col>
							<h6 className='text-uppercase mb-4 font-weight-bold'>Contact</h6>
							<p>
								<i className='fas fa-home mr-3'></i> New York, NY 10012, US
							</p>
							<p>
								<i className='fas fa-envelope mr-3'></i> info@gmail.com
							</p>
							<p>
								<i className='fas fa-phone mr-3'></i> + 01 234 567 88
							</p>
							<p>
								<i className='fas fa-print mr-3'></i> + 01 234 567 89
							</p>
						</Col>

						<Col>
							<div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
								<h6 className='text-uppercase mb-4 font-weight-bold'>
									Follow Us On Social Media
								</h6>
								<ul className='list-unstyled list-inline'>
									<li className='list-inline-item'>
										<a className='btn-floating btn-sm rgba-white-slight mx-1'>
											<img
												src={facebook}
												height={25}
												className='fab fa-facebook-f'
											/>
										</a>
									</li>
									<li className='list-inline-item'>
										<a className='btn-floating btn-sm rgba-white-slight mx-1'>
											<img
												src={twitter}
												height={25}
												className='fab fa-twitter'
											/>
										</a>
									</li>
									<li className='list-inline-item'>
										<a className='btn-floating btn-sm rgba-white-slight mx-1'>
											<img
												src={instagram}
												height={25}
												className='fab fa-google-plus-g'
											/>
										</a>
									</li>
								</ul>
							</div>
						</Col>
					</Row>

					<hr />

					<Row className='align-items-center'>
						<div>
							Made with <span style={{ color: "#e25555;" }}>&#9829;</span> by
							@kcode
							<div>
								Icons made by{" "}
								<a
									href='https://www.flaticon.com/authors/freepik'
									title='Freepik'
								>
									Freepik
								</a>{" "}
								from{" "}
								<a href='https://www.flaticon.com/' title='Flaticon'>
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
