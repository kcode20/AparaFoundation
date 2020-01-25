import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Programs.css";

import boomie from "../images/boomie.jpg";
import puzzlePiece from "../images/puzzle-piece.png";

export default function Programs() {
	return (
		<div className='Programs'>
			<Row className='court-cover'>
				<h1>Programs</h1>
				<div className='boomie-text'>
					<Row className='justify-content-md-center'>
						<Col md='auto'>
							<img src={boomie} width={200} alt='' />
						</Col>
						<Col xs={8}>
							<p>
								Bunmi “Boomie” Apara was the oldest sibling of the APARA boys.
								He shaped his life and values around playing basketball, in
								which he mentored many young individuals within his community of
								Hollis, Queens. Earning a scholarship to play college basketball
								from high school, Boomie was determined to use his talent to
								give back to his community. After graduating college and having
								his daughter Felicia, one of Boomie goals was to start a
								mentorship program and basketball camp. Unfortunately, Boomie
								passed away in 2012. The “Baskets for Boomie” program was
								started by Dr. Apara to benefit kids in underprivileged areas.
								Through charity basketball games and other community outreach
								events, this program aims to raise funds to assist kids with
								their school needs and also send kids away to basketball camps.
								We are a non-profit organization, we are looking forward to a
								peaceful world by helping each other to join hands together to
								bring a better future for all children.
							</p>
						</Col>
					</Row>
				</div>
			</Row>

			<Row className='puzzle-cover justify-content-md-center'>
				<Col md='auto' className='center-column'>
					<img src={puzzlePiece} height={50} alt='' />
				</Col>
				<Col md='auto' className='center-column'>
					<h2> Puzzle Pieces</h2>
				</Col>
				<Col className='center-column'>
					<p>
						Puzzle Pieces is a peer mentorship program formulated to connect
						individuals with similar life experiences for purpose of
						inspiration, guidance, and peer support. This program also connect
						families where members may be battling similar health conditions.
						All influencers and supporters are voluntary and have experience
						battling those conditions.
					</p>
				</Col>
			</Row>
		</div>
	);
}
