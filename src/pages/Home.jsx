import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import donate from "../images/heart.png";
import volunteer from "../images/respect.png";
import scholarship from "../images/ribbon.png";
import project from "../images/animal.png";

import "./Home.css";

export default function Home() {
	return (
		<div className='Home'>
			<div className='cover'>
				<p>
					The APARA Foundation is a 501c3 not for profit organization centered
					on increasing the quality of life in individuals battling a variety of
					health conditions. The APARA foundation partners with local and
					national health care organizations to help increase the quality of
					life in individuals battling what we identify as “invisible
					illnesses.” Invisible Illnesses are diseases or conditions that may
					not be noticeable on the individuals battling them. These conditions
					include, but are not limited to, sickle cell anemia, lupus, mental
					health conditions, and some cancers. Founded in 2019 by Dr. Arinayo
					Apara, the foundation’s mission is to extend the outlet of support for
					our invisible warriors. We do this through a series of educational,
					peer support, and financial programs.
				</p>
			</div>
			<Container>
				<h1>How You Can Help</h1>
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
							resources, training and education while offering the promise of a
							brighter future. You can make a difference today by signing up.
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
	);
}
