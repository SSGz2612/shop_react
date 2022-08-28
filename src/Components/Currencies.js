import React from "react";
// Apollo
import { Query } from "@apollo/client/react/components";
import { currency } from "../Controls/queries";
// Redux
import { connect } from "react-redux";
import { changeCurrency } from "../redux";
// Styled
import {
	ContentCurrency,
	Currency,
	CurrencyBox
} from "../Controls/styled";

class Currencies extends React.Component {
	render(){
		return(
			<Query query={ currency }>
				{({data, loading, error}) => {
					if(loading) return <div>Loading...</div>;
					if(error) return <div>Error :(</div>;

					const selectCurrency = (e) => {
						let value = data.currencies.findIndex((x) => x.label === e);
            let symbol = data.currencies[
							data.currencies.findIndex((x) => x.label === e)
						].symbol;

            this.props.changeCurrency([e, value, symbol]);
					}

					return(<>
							{ this.props.initialCurrencyBox &&
								<ContentCurrency onClick={ this.props.handleState }>
            
									<CurrencyBox>
										{ data.currencies.map((currency, index) =>
												<Currency
													onClick={() => selectCurrency(currency.label)}
													className="optionCurrency" key={ index }
												>
														<div>{ currency.symbol }</div>
														<div>{ currency.label }</div>
												</Currency>
										)}
									</CurrencyBox>
		
								</ContentCurrency>
							}
					</>)
				}}

			</Query>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeCurrency: (data) => dispatch(changeCurrency(data))
	}
}

export default connect(null, mapDispatchToProps)(Currencies);