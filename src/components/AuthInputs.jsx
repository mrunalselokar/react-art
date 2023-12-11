import { useState } from 'react';
import {
	ControlContainer,
	Input,
	SolidButton,
	TextButton,
	Label,
} from './auth-inputs.styles';

export default function AuthInputs() {
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredPassword, setEnteredPassword] = useState('');
	const [submitted, setSubmitted] = useState(false);

	function handleInputChange(identifier, value) {
		if (identifier === 'email') {
			setEnteredEmail(value);
		} else {
			setEnteredPassword(value);
		}
	}

	function handleLogin() {
		setSubmitted(true);
	}

	const emailNotValid = submitted && !enteredEmail.includes('@');
	const passwordNotValid = submitted && enteredPassword.trim().length < 6;

	return (
		<div id="auth-inputs">
			<ControlContainer>
				<p>
					<Label invalid={emailNotValid}>Email</Label>
					<Input
						type="email"
						invalid={emailNotValid}
						onChange={(event) => handleInputChange('email', event.target.value)}
					/>
				</p>
				<p>
					<Label invalid={passwordNotValid}>Password</Label>
					<Input
						type="password"
						invalid={passwordNotValid}
						onChange={(event) =>
							handleInputChange('password', event.target.value)
						}
					/>
				</p>
			</ControlContainer>
			<div className="actions">
				<TextButton type="button">Create a new account</TextButton>
				<SolidButton onClick={handleLogin}>Sign In</SolidButton>
			</div>
		</div>
	);
}
