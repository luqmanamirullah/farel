import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	label: {
		lineHeight: 1.5,
		display: 'inline-block',
		fontSize: 13,
		fontFamily: "'Raleway',sans-serif",
		fontWeight: 700,
		textTransform: 'uppercase',
		letterSpacing: 1,
		color: '#555',
		marginBottom: 10,
		cursor: 'pointer'
	},
	input: {
		margin: 0,
		overflow: 'visible',
		width: '100%',
		padding: '8px 14px',
		fontSize: 15,
		lineHeight: 1.42857143,
		color: '#555555',
		backgroundColor: '#ffffff',
		backgroundImage: 'none',
		border: '2px solid #ddd',
		borderRadius: '0 !important',
		transition: 'border-color ease-in-out .15s',
		height: 'auto'
	}
});
const TextField = ({ label, onChange, required }) => {
	const handleChange = (name, value) => {
		onChange(name, value);
	};
	const classes = useStyles();
	return (
		<>
			<label className={classes.label}>
				{label}
				{required && <small> -</small>}
			</label>
			<input
				className={classes.input}
				name={label}
				onChange={(e) => handleChange(e.target.name, e.target.value)}
			></input>
		</>
	);
};

export default TextField;
