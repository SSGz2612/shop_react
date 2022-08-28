import React from "react";
import Menu from "./Menu";
import Modal from "./Modal";
// Redux
import { connect } from "react-redux";
// Styled
import {
	ContentCard,
	ContentCounter,
	Counter,
	NavContent,
	NavContentBox,
	SelectBox
} from "../Controls/styled";
// Router
import { Link } from "react-router-dom";
import Currencies from "./Currencies";

class Nav extends React.Component {
	constructor(){
		super();
		this.state = {
			initialModal: false,
			initialCurrencyBox: false
		}
	}

	showCurrency = () => {
		this.setState({ initialCurrencyBox: true });
	}
	
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

				<Currencies
					initialCurrencyBox={ this.state.initialCurrencyBox }
					handleState={ this.handleState }
				>
				</Currencies>

				<NavContentBox>

					<div className="flexCenter">
						<Menu />
					</div>

					<div className="flexCenter">
						<Link to="/">
							<div className="logo"></div>
						</Link>
					</div>

					<div className="flexCenter">
						<div onClick={() => this.showCurrency()}>
						<SelectBox>
							{ this.props.currency[2] == "$" ?
								"$" :
								this.props.currency[0][2]
							}
							<div className="v"></div>
						</SelectBox>
						</div>
						<div onClick={() => this.showModal()}>
							<ContentCard className="carIcon">
								{ this.props.basket.length ?
									<ContentCounter className="flexCenter">
										<Counter
											className="flexCenter"
										>
											<b>{ this.props.counter }</b>
										</Counter>
									</ContentCounter> :
									false
								}
							</ContentCard>
						</div>
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

const mapStateToProps = (state) => {
	return {
		basket: state.basket,
		counter: state.counter,
		currency: state.currency
	}
}

export default connect(mapStateToProps, null)(Nav);