import React from "react";
import Menu from "./Menu";
import Modal from "./Modal";
// Styled
import {
	NavContent,
	NavContentBox
} from "../Controls/styled";
// Router
import { Link } from "react-router-dom";

class Nav extends React.Component {
	constructor(){
		super();
		this.state = {
			initialModal: false,
			initialCurrencyBox: false
		}
	}

	// showCurrency = () => {
		// 	this.setState({ initialCurrencyBox: true });
		// }
	
	showModal = () => {
		this.setState({ initialModal: true });
	}

	stopPropagation = (e) => {
		e.stopPropagation();
	}

	handleState = () => {
		this.setState({ initialModal: false });
	}

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

					<div className="flexBox">
						{/* <div onClick={() => this.showCurrency()}>A</div> */}
						<div onClick={() => this.showModal()}>B</div>
					</div>

				</NavContentBox>

				<Modal
					initialModal={ this.state.initialModal }
					handleState={ this.handleState }
					stopPropagation={ this.stopPropagation }
				>
				</Modal>

			</NavContent>
		);
	}
}

export default Nav;