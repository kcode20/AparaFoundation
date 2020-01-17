import React from "react";

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
			<footer class='font-small mdb-color pt-4'>
				<div class='container text-center text-md-left'>
					<div class='row text-center text-md-left mt-3 pb-3'>
						<div class='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
							<h6 class='text-uppercase mb-4 font-weight-bold'>
								<img src={logo} height={75} />
							</h6>
							<p>
								Here you can use rows and columns to organize your footer
								content. Lorem ipsum dolor sit amet, consectetur adipisicing
								elit.
							</p>
						</div>

						<hr class='w-100 clearfix d-md-none' />

						<hr class='w-100 clearfix d-md-none' />

						<div class='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
							<h6 class='text-uppercase mb-4 font-weight-bold'>Useful links</h6>
							<p>
								<a href='#!'>Your Account</a>
							</p>
							<p>
								<a href='#!'>Become an Affiliate</a>
							</p>
							<p>
								<a href='#!'>Shipping Rates</a>
							</p>
							<p>
								<a href='#!'>Help</a>
							</p>
						</div>

						<hr class='w-100 clearfix d-md-none' />

						<div class='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
							<h6 class='text-uppercase mb-4 font-weight-bold'>Contact</h6>
							<p>
								<i class='fas fa-home mr-3'></i> New York, NY 10012, US
							</p>
							<p>
								<i class='fas fa-envelope mr-3'></i> info@gmail.com
							</p>
							<p>
								<i class='fas fa-phone mr-3'></i> + 01 234 567 88
							</p>
							<p>
								<i class='fas fa-print mr-3'></i> + 01 234 567 89
							</p>
						</div>
					</div>

					<hr />

					<div class='row d-flex align-items-center'>
						<div class='col-md-7 col-lg-8'>
							<p class='text-center text-md-left'>
								© 2020 Copyright:
								<a href='https://mdbootstrap.com/education/bootstrap/'>
									<strong> MDBootstrap.com</strong>
								</a>
							</p>
						</div>

						<div class='col-md-5 col-lg-4 ml-lg-0'>
							<div class='text-center text-md-right'>
								<ul class='list-unstyled list-inline'>
									<li class='list-inline-item'>
										<a class='btn-floating btn-sm rgba-white-slight mx-1'>
											<img
												src={facebook}
												height={25}
												class='fab fa-facebook-f'
											/>
										</a>
									</li>
									<li class='list-inline-item'>
										<a class='btn-floating btn-sm rgba-white-slight mx-1'>
											<img src={twitter} height={25} class='fab fa-twitter' />
										</a>
									</li>
									<li class='list-inline-item'>
										<a class='btn-floating btn-sm rgba-white-slight mx-1'>
											<img
												src={instagram}
												height={25}
												class='fab fa-google-plus-g'
											/>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
