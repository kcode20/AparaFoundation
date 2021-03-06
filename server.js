const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/send_email', function(req, res) {
	const { name, email, message, subject } = req.body;

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.REACT_APP_EMAIL, // generated ethereal user
			pass: process.env.REACT_APP_PASSWORD, // generated ethereal password
		},
	});

	const htmlMessage = `
	<body style="margin: 0; padding: 0;">
		<table border="0" cellpadding="0" cellspacing="0" width="100%">
			<tr>
				<td style="padding: 10px 0 30px 0;">
					<table
						align="center"
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="600"
						style="border: 1px solid #cccccc; border-collapse: collapse;"
					>
						<tr>
							<td
								align="center"
								bgcolor="#70bbd9"
								style="padding: 40px 0 30px 0; color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;"
							>
								<img
									src="cid:aparalogo"
									style="display: block;"
								/>
							</td>
						</tr>
						<tr>
							<td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
								<p
									style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;"
								>
									You got a new message from the Apara Foundation Website!
								</p>
								<table border="0" cellpadding="0" cellspacing="0" width="100%">
									<tr>
									<td
											style="padding: 20px 0 10px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;"
										>
											From: ${name}
										</td>
									</tr>
									<tr>
										<td
											style="padding: 0px 0 30px 0;color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;"
										>
											Subject: ${subject}
										<td>
									</tr>
									<tr>
										<td
											style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;"
										>
											${message}
										<td>
									</tr>
									<tr>
										<td 
											style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 11px; line-height: 20px;"
										>
											To respond, reply to this email: ${email}
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>
	`;

	const mailOptions = {
		from: 'aparafoundation.dev@gmail.com',
		to: 'info@theaparafoundation.org',
		subject: `Website Message: ${subject} `,
		html: htmlMessage,
		attachments: [
			{
				filename: 'IMG_9879.JPG',
				path: path.join(__dirname, '/src/images/IMG_9879.JPG'),
				cid: 'aparalogo', //same cid value as in the html img src
			},
		],
	};

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
			res.status(200).end();
		}
	});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
