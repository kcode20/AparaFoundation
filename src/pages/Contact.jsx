import React from 'react';
import axios from 'axios';
import {
	Container,
	Row,
	Col,
	Image,
	Form,
	Button,
	Alert,
} from 'react-bootstrap';

import contact from '../images/contact.png';
import './Contact.css';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
			subject: '',
			success: false,
		};
	}

	handleInputChange = event => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.id;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = e => {
		const { name, email, message, subject } = this.state;
		axios
			.post('/send_email', {
				name,
				email,
				message,
				subject,
			})
			.then(response => {
				const { status } = response;
				if (status == 200) {
					this.setState({ success: true });
				}
			});
		e.preventDefault();
	};

	render() {
		return (
			<div className='contact'>
				<Container>
					<h1>Contact Us</h1>
					<Row>
						<Col md='auto'>
							<Image src={contact} width={300} rounded />
						</Col>
						<Col className='center-column'>
							{this.state.success && (
								<Alert variant='success'>Successfully sent email.</Alert>
							)}
							<Form onSubmit={this.handleSubmit}>
								<Form.Group controlId='name' onChange={this.handleInputChange}>
									<Form.Label>Name</Form.Label>
									<Form.Control size='lg' type='text' placeholder='Jane Doe' />
								</Form.Group>

								<Form.Group controlId='email' onChange={this.handleInputChange}>
									<Form.Label>Email address</Form.Label>
									<Form.Control
										size='lg'
										type='email'
										placeholder='name@example.com'
									/>
								</Form.Group>

								<Form.Group
									controlId='subject'
									onChange={this.handleInputChange}
								>
									<Form.Label>Subject</Form.Label>
									<Form.Control size='lg' type='text' />
								</Form.Group>

								<Form.Group
									controlId='message'
									onChange={this.handleInputChange}
								>
									<Form.Label>Message</Form.Label>
									<Form.Control size='lg' as='textarea' rows='3' />
								</Form.Group>
								<Button type='submit'>Submit</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Contact;
