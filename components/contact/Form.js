import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Button from '../button/Button';
import TextArea from '../textField/TextArea';
import TextField from '../textField/TextField';

const useStyles = createUseStyles({
	form: {
		fontFamily: "'Lato', sans-serif",
		boxSizing: 'border-box',
		marginBottom: '0 !important',
		position: 'relative',
		fontSize: '0.875rem'
	},
	column: {
		flex: '1 1 ',
		width: '100%',
		display: 'block',
		position: 'relative',
		paddingRight: '4%',
		float: 'left',
		marginBottom: 25,
		fontSize: '0.875rem'
	},
	textFieldWrapper: {
		display: 'flex'
	},
	'@media (max-width: 767.98px)': {
		textFieldWrapper: {
			display: 'block',
			width: '100%'
		}
	}
});

const Form = ({
	values,
	touched,
	errors,
	dirty,
	isSubmitting,
	handleChange,
	handleBlur,
	handleSubmit,
	handleReset
}) => {
	const classes = useStyles();

	const [data, setData] = useState(values);
	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		info: { error: false, msg: null }
	});

	handleChange = (name, value) => {
		const newData = {
			...data,
			[name]: value
		};
		setData(newData);
		console.log('data', data);
	};

	// const mailjet = require('node-mailjet').connect(
		// '2755a7971b86b6de45a13cece362bbfe',
		// 'aa57a558358640e2976587a2d79236b1'
	// );
	// const request = mailjet.post('send', { version: 'v3.1' }).request({
	// 	Messages: [
	// 		{
	// 			From: {
	// 				Email: 'tarbudproject@gmail.com',
	// 				Name: 'Lestari'
	// 			},
	// 			To: [
	// 				{
	// 					Email: 'tarbudproject@gmail.com',
	// 					Name: 'Lestari'
	// 				}
	// 			],
	// 			Subject: 'Greetings from Mailjet.',
	// 			TextPart: 'My first Mailjet email',
	// 			HTMLPart:
	// 				"<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
	// 			CustomID: 'AppGettingStartedTest'
	// 		}
	// 	]
	// });
	// request
	// 	.then((result) => {
	// 		console.log(result.body);
	// 	})
	// 	.catch((err) => {
	// 		console.log(err.statusCode);
	// 	});

	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			<div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						marginRight: '-4%'
					}}
				>
					<div className={classes.textFieldWrapper}>
						<div className={classes.column}>
							<TextField label="name" required onChange={handleChange} />
						</div>
						<div className={classes.column}>
							<TextField label="email" required onChange={handleChange} />
						</div>
						<div className={classes.column}>
							<TextField label="phone" onChange={handleChange} />
						</div>
					</div>
					<div className={classes.column}>
						<TextField label="subject" required onChange={handleChange} />
					</div>
					<div className={classes.column}>
						<TextArea label="message" required onChange={handleChange} />
					</div>
					<div>
						<Button text="Submit Comment" style={{ backgroundColor: '#8bc865' }} />
					</div>
				</div>
			</div>
		</form>
	);
};

export default Form;
