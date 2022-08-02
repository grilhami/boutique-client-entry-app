import { h } from 'preact';
import stackLogo from "../../assets/header/stack-logos.png"
import style from './style.css';


const Header = () => (
	<div class={style.header}>
			<div class={style.headcontent}>
				{/* Need to change using <p> */}
				<h1>Mom's Boutique</h1>
				<div><p>powered by</p></div>
				<div><img src={stackLogo}/></div>
			</div>
			<hr class={style.seperator}/>
	</div>
);

export default Header;
