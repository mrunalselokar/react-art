import logo from '../assets/logo.png';
import { StyledHeader } from './header.styles';
export default function Header() {
	return (
		<StyledHeader>
			<img
				src={logo}
				alt="A canvas"
			/>
			<h1>ReactArt</h1>
			<p>A community of artists and art-lovers.</p>
		</StyledHeader>
	);
}
