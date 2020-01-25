import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import donate from "../images/donation.png";
import volunteer from "../images/volunteer.png";
import scholarship from "../images/scholarship.png";
import project from "../images/world.png";
import depression from "../images/kids.png";

import "./Home.css";

export default function Home() {
	return (
		<div className='Home'>
			<div className='cover'>
				<div className='cover-text'>
					<p className='quote'>
						“Those blessed with a struggle, are also blessed with the gift to
						inspire”
						<br />
						–Dr. Apara
					</p>
					<p className='quote-subtitle'>
						We strive to provide support to enable individuals to achieve better
						health outcomes and a stronger quality of life.
					</p>
				</div>
			</div>
			<div>
				<Container>
					<Row>
						<Col xs={6}>
							<p>
								The APARA Foundation is a 501c3 not for profit organization
								centered on increasing the quality of life in individuals
								battling a variety of health conditions. The APARA foundation
								partners with local and national health care organizations to
								help increase the quality of life in individuals battling what
								we identify as “invisible illnesses.” Invisible Illnesses are
								diseases or conditions that may not be noticeable on the
								individuals battling them. These conditions include, but are not
								limited to, sickle cell anemia, lupus, mental health conditions,
								and some cancers. Founded in 2019 by Dr. Arinayo Apara, the
								foundation’s mission is to extend the outlet of support for our
								invisible warriors. We do this through a series of educational,
								peer support, and financial programs.
							</p>
							<p>
								Through the APARA foundation, Dr. Apara aims to change the face
								of what is means to battle and conquer these difficult
								conditions. The foundation strives to highlight the strength and
								benefits that comes from adversity. Shifting the outlook of
								these conditions from a negative to a positive allows for
								individuals to find strength in their struggles. With the
								additional support the foundation aims to provide, individuals
								will be able to achieve better health outcomes and a stronger
								quality of life.
							</p>
						</Col>
						<Col className='depression'>
							<Image src={depression} width={500} />
						</Col>
					</Row>
				</Container>
			</div>
			<div className='callToAction'>
				<Container>
					<h1>Get Involved</h1>
					<Row>
						<Col className='action'>
							<Image src={donate} width={100} />
							<h3> Send Donation</h3>
							<p>
								Give online, and your contribution will make a difference. Your
								donations will go to help furthering our foundation’s goals and
								visions.
							</p>
						</Col>
						<Col className='action'>
							<Image src={volunteer} width={100} />
							<h3>Become a Volunteer</h3>
							<p>
								You can get involved today by becoming a Volunteer. Sign up and
								you will be joining a group of change-makers, a network strong
								enough to impact positive change.
							</p>
						</Col>
						<Col className='action'>
							<Image src={scholarship} width={100} />
							<h3>Give Scholarship</h3>
							<p>
								Your gift will help equip children in need with necessary
								resources, training and education while offering the promise of
								a brighter future. You can make a difference today by signing
								up.
							</p>
						</Col>
						<Col className='action'>
							<Image src={project} width={100} />
							<h3>Sponsor a Project</h3>
							<p>
								The APARA Foundation has many projects that need your support.
								Whether that be our Sickle Cell Walk, Baskets for Boomie, Puzzle
								Pieces, or other projects, your contribution will ensure its
								progression.
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}
