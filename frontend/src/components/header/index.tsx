import React from 'react';
import stackLogo from "../../assets/stack-logos.png"
import './style.css';


const Header = () => (
	<div className="header">
			<div className="headcontent">
				{/* Need to change using <p> */}
				<h1>Mom's Boutique</h1>
				<div><p>powered by</p></div>
				<div><img alt="" src={stackLogo}/></div>
			</div>
			<hr className="seperator"/>
	</div>
);

export default Header;