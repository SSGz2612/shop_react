import React from "react";
// Redux
import { connect } from "react-redux";
// Styled
import {
	BotonContent,
	ModalContent,
	Overview,
	Text2
} from "../Controls/styled";

class Modal extends React.Component {
	render(){
		return<>
			{ this.props.initialModal &&
				<Overview onClick={ this.props.handleState }>
					<ModalContent onClick={ this.props.stopPropagation }>
						<BotonContent>
							<Text2>
								<span><b>My Bag, </b>{`${ this.props.counter <= 1 ?
									this.props.counter + " Item" :
									this.props.counter + " Items" }`}
								</span>
							</Text2>
						</BotonContent>

						<BotonContent></BotonContent>

						<BotonContent></BotonContent>
					</ModalContent>
				</Overview>
			}
		</>
	}
}

const mapStateToProps = state => {
	return {
		counter: state.counter
	}
}

export default connect(
	mapStateToProps,
	null
)(Modal);