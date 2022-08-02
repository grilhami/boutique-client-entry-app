import { h } from 'preact';
import stackLogo from "../../assets/header/stack-logos.png"
import style from './style.css';


const Header = () => (
	<header class={style.header}>
		<div>
			<h1>Preact App</h1>
			<div><p>powered by</p></div>
			<div><img src={stackLogo}/></div>
		</div>
		<hr/>
	</header>
);

export default Header;
