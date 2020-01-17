import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import contact from "../images/contact.png";
import "./Contact.css";

export default function Contact() {
	return (
		<div className='contact'>
			<Container>
				<h1>Contact Us</h1>
				<Row>
					<Col md='auto'>
						<Image src={contact} width={300} rounded />
					</Col>
					<Col className='center-column'>
						<Form>
							<Form.Group controlId='name.ControlInput1'>
								<Form.Label>Name</Form.Label>
								<Form.Control size='lg' type='text' placeholder='Jane Doe' />
							</Form.Group>

							<Form.Group controlId='email.ControlInput1'>
								<Form.Label>Email address</Form.Label>
								<Form.Control
									size='lg'
									type='email'
									placeholder='name@example.com'
								/>
							</Form.Group>

							<Form.Group controlId='message.ControlTextarea1'>
								<Form.Label>Message</Form.Label>
								<Form.Control size='lg' as='textarea' rows='3' />
							</Form.Group>
							<Button>Submit</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
