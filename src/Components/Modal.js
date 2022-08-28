import React from "react";
// Redux
import { connect } from "react-redux";
// Router
import { Link } from "react-router-dom";
// Styled
import {
	ContentText,
	ModalContent,
	ModalParts,
	Overview,
	Text2,
	Text3,
	ButtonGreen,
	ButtonWhite
} from "../Controls/styled";

class Modal extends React.Component {
	render(){
		return<>
			{ this.props.initialModal &&
				<Overview onClick={ this.props.handleState }>
					<ModalContent onClick={ this.props.stopPropagation }>
						<ModalParts>
							<Text2>
								<span><b>My Bag, </b>{`${ this.props.counter <= 1 ?
									this.props.counter + " Item" :
									this.props.counter + " Items" }`}
								</span>
							</Text2>
						</ModalParts>

						<ModalParts>
							<Text3>
								<ContentText><b>Total</b></ContentText>
								<ContentText>
									<b>{ this.props.currency[2] === "$" ? "$" : this.props.currency[0][2]}
										{(this.props.basket.map((total) =>
											total.prices[this.props.currency[0][1] == null ? 0
											: this.props.currency[0][1]].amount * total.quantity
											).reduce((sum, value) =>
												sum + value, 0
												)).toFixed(2)}
									</b>
								</ContentText>
							</Text3>
						</ModalParts>

						<ModalParts>
							<Link to="/cardclient">
								<ButtonWhite
									onClick={ this.props.handleState }
									className="flexCenter"
								>
									<b>VIEW BAG</b>
								</ButtonWhite>
							</Link>
        					<Link to="/">
								<ButtonGreen
									onClick={ this.props.handleState }
									className="flexCenter"
								>
									<b>CHECK OUT</b>
								</ButtonGreen>
							</Link>
						</ModalParts>
					</ModalContent>
				</Overview>
			}
		</>
	}
}

const mapStateToProps = state => {
	return {
		basket: state.basket,
		counter: state.counter,
		currency: state.currency
	}
}

export default connect(
	mapStateToProps,
	null
)(Modal);