import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import founder from "../images/IMG_2251.jpg";
import vp from "../images/vice-president.jpg";
import model from "../images/IMG_8293.JPG";
import "./Team.css";

export default function Team() {
	return (
		<div className='team'>
			<Container>
				<h1>Team</h1>
				<Row>
					<Col className='center-column' sm>
						<Image src={founder} width={500} rounded />
					</Col>
					<Col className='center-column' sm>
						<h1> Meet the Founder </h1>
						<h3>Dr. Arinayo Apara</h3>
						<p>
							Dr. Arinayo Apara, is Nigerian-American born in Brooklyn, New
							York. He is the youngest of 4 boys. Dr. Apara was born with Sickle
							Cell Anemia and knew from a very early age he was purposed to
							help, inspire, and advocate for individuals with health concerns.
							After working in a pediatric inpatient Hematology/Oncology for 4
							years, Dr. Apara decided to pursue a doctorate in Clinical
							research and Health Advocacy. Having extensive experience in both
							sides of medical care (from research to the bedside), Dr. Apara
							feels this experience allows for him to advocate for individuals
							with an array of health conditions.
						</p>
					</Col>
				</Row>

				<Row>
					<Col className='center-column'>
						<h1> Meet the Vice President </h1>
						<h3>Adesola Rosiji</h3>
						<p>
							Adesola Rosiji, is Nigerian-American born in Brooklyn, New York.
							Ade is a healthcare administrator with over 8 years experience in
							the health care industry with a Masters in Public Administration.
							She is also a entrepreneur and event producer. At an early age Ade
							lost her best friend (age 23)to the disease Lupus and knew she
							wanted to keep her legacy alive by advocating for those with Lupus
							and similar health conditions.
						</p>
					</Col>
					<Col>
						<Image src={vp} width={500} rounded />
					</Col>
				</Row>

				<Row>
					<Col>
						<Image src={model} width={500} rounded />
					</Col>
					<Col className='center-column'>
						<h1> Fun Fact </h1>
						<h3>Dr. Arinayo Apara</h3>
						<p>
							Dr. Apara began modeling at the age of 15 to prove to himself and
							the world that individuals with sickle cell anemia were capable of
							being in magazines and runways. He continued modeling all the way
							through college and participated in many NYFW runway shows.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
