import { useState } from 'react';
import { SolidButton, CustomInput } from './auth-inputs.styles';

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
		<div
			id="auth-inputs"
			className="w-full max-w-md p-8 rounded mx-auto shadow-md bg-gradient-to-b from-blue-900 to-blue-700">
			<div className="flex flex-col gap-2 mb-6">
				<CustomInput
					label={'Email'}
					type="email"
					invalid={emailNotValid}
					onChange={(event) => handleInputChange('email', event.target.value)}
				/>

				<CustomInput
					label={'Password'}
					type="password"
					invalid={passwordNotValid}
					onChange={(event) =>
						handleInputChange('password', event.target.value)
					}
				/>
			</div>
			<div className="flex justify-end gap-4">
				<button
					type="button"
					className="text-white hover:text-cyan-300">
					Create a new account
				</button>
				<SolidButton
					className="bg-indigo-500"
					onClick={handleLogin}>
					Sign In
				</SolidButton>
			</div>
		</div>
	);
}
