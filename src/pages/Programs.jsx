import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
// import "./Programs.css";

import boomie from "../images/boomie.jpg";
import puzzle from "../images/puzzle.jpg";

export default function Programs() {
	return (
		<div className='Programs'>
			<Container>
				<h1>Programs</h1>
				<Row>
					<Col>
						<img src={boomie} height={300} />
					</Col>
					<Col>
						<p>
							Bunmi “Boomie” Apara was the oldest sibling of the APARA boys. He
							shaped his life and values around playing basketball, in which he
							mentored many young individuals within his community of Hollis,
							Queens. Earning a scholarship to play college basketball from high
							school, Boomie was determined to use his talent to give back to
							his community. After graduating college and having his daughter
							Felicia, one of Boomie goals was to start a mentorship program and
							basketball camp. Unfortunately, Boomie passed away in 2012. The
							“Baskets for Boomie” program was started by Dr. Apara to benefit
							kids in underprivileged areas. Through charity basketball games
							and other community outreach events, this program aims to raise
							funds to assist kids with their school needs and also send kids
							away to basketball camps. We are a non-profit organization, we are
							looking forward to a peaceful world by helping each other to join
							hands together to bring a better future for all children.
						</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<p>
							Puzzle Pieces is a peer mentorship program formulated to connect
							individuals with similar life experiences for purpose of
							inspiration, guidance, and peer support. This program also connect
							families where members may be battling similar health conditions.
							All influencers and supporters are voluntary and
						</p>
					</Col>
					<Col>
						<img src={puzzle} height={300} />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
