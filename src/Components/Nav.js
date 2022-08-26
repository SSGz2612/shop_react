import React from "react";
import Menu from "./Menu";
// Styled
import {
	NavContent,
	NavContentBox
} from "../Controls/styled";
// Router
import { Link } from "react-router-dom";

class Nav extends React.Component {
	render(){
		return(
			<NavContent>
				<NavContentBox>
					<div className="flexBox">
						<Menu />
					</div>
					
					<div className="flexBox">
						<Link to="/">
							<div className="logo"></div>
						</Link>
					</div>
					
					<div className="flexBox"></div>
				</NavContentBox>
			</NavContent>
		);
	}
}

export default Nav;