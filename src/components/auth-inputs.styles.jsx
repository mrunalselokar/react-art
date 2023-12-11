import { styled } from 'styled-components';

export const ControlContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 1.5rem;
`;
const Label = styled.label`
	display: block;
	margin-bottom: 0.5rem;
	font-size: 0.75rem;
	font-weight: 700;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: ${({ invalid }) => (invalid ? '#f87171' : '#c1cbde ')};
`;
const Input = styled.input`
	width: 100%;
	padding: 0.75rem 1rem;
	line-height: 1.5;
	background-color: ${({ invalid }) => (invalid ? '#fed2d2' : '#fff ')};
	color: ${({ invalid }) => (invalid ? '#ef4444' : '#374151 ')};
	border: 1px solid ${({ invalid }) => (invalid ? '#f73f3f' : 'transparent')};
	border-radius: 0.25rem;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export function CustomInput({ label, invalid, ...props }) {
	return (
		<p>
			<Label $invalid={invalid}>{label}</Label>
			<Input
				$invalid={invalid}
				{...props}
			/>
		</p>
	);
}

export const SolidButton = styled.button`
	padding: 1rem 2rem;
	font-weight: 600;
	text-transform: uppercase;
	border-radius: 0.25rem;
	color: white;
	background-color: #7892ff;
	border-radius: 6px;
	border: none;
	&:hover {
		background-color: #0e4fd9;
	}
`;

export const TextButton = styled.button`
	color: white;
	border: none;
	&:hover {
		color: #7892ff;
	}
`;
