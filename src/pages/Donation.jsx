import React from 'react';
import {
	Container,
	Row,
	Col,
	Image,
	Form,
	Button,
	InputGroup,
} from 'react-bootstrap';
import donation from '../images/donation.jpg';
import PaypalButton from '../components/PaypalButton';
import './Donation.css';

const CLIENT = {
	sandbox: process.env.REACT_APP_PAYPAL_SANDBOX_KEY,
	production: process.env.REACT_APP_PAYPAL_PRODUCTION_KEY,
};

const ENV = 'production';

export default class Donation extends React.Component {
	constructor() {
		super();
		this.state = {
			amountValue: 5,
		};
	}
	onSuccess = payment => console.log(payment);
	onError = error => console.log(error);
	onCancel = data => console.log(data);
	handleInputChange = event => {
		const target = event.target;
		const amountValue = target.value;
		this.setState({
			amountValue,
		});
	};

	render() {
		return (
			<div className='donation'>
				<Container>
					<h1>Donation</h1>
					<Row>
						<Col md='auto'>
							<Image src={donation} width={300} rounded />
						</Col>
						<Col className='center-column'>
							<p>
								We thank you for your generosity in supporting such an amazing
								cause. Please ask us about our automated donation program by
								contacting info@theaparafoundation.org
							</p>
							<Form>
								<Form.Row>
									<Form.Group
										as={Col}
										md='4'
										controlId='name.ControlInput1'
										onChange={this.handleInputChange}
									>
										<Form.Label>Amount</Form.Label>
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text id='inputGroupPrepend'>
													$
												</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control
												type='text'
												aria-describedby='inputGroupPrepend'
												placeholder='5'
												required
											/>
											<Form.Control.Feedback type='invalid'>
												Please enter the dollar amount you would like to donate.
											</Form.Control.Feedback>
										</InputGroup>
									</Form.Group>

									<Form.Group as={Col} md='4' controlId='name.ControlInput1'>
										<Form.Label></Form.Label>
										<div className='bottom-align'>
											<PaypalButton
												client={CLIENT}
												env={ENV}
												commit={true}
												currency={'USD'}
												total={this.state.amountValue}
												onSuccess={this.onSuccess}
												onError={this.onError}
												onCancel={this.onCancel}
											/>
										</div>
									</Form.Group>
								</Form.Row>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
