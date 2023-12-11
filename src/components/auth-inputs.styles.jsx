import { styled } from 'styled-components';

export function CustomInput({ label, invalid, ...props }) {
	let labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase';
	let inputClasses = 'w-full px-3 py-2 leading-tight border rounded shadow';
	if (invalid) {
		labelClasses += ' text-red-400';
		inputClasses += ' text-red-500 bg-red-100 border-red-300';
	} else {
		labelClasses += ' text-stone-300';
		inputClasses += ' text-gray-700 bg-stone-300';
	}
	return (
		<p>
			<label className={labelClasses}>{label}</label>
			<input
				className={inputClasses}
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
	border-radius: 6px;
	border: none;
	&:hover {
		background-color: #0e4fd9;
	}
`;
