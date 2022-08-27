import React from "react";
// Apollo
import { Query } from "@apollo/client/react/components";
import { productQuery } from "../Controls/queries";
// Redux
import { connect } from "react-redux";
import { selectPage } from "../redux";
// Router
import { Link } from "react-router-dom";

class Menu extends React.Component {
	selectMenu = (i) => {
		this.props.selectPage(i);
	};

	render(){
		return(
			<Query query={ productQuery }>
				{({data, loading, error}) => {
					if(loading) return <div>loading...</div>
					if(error) return <div>error :(</div>

					const list = data.category.products.map((x) => x.category);
					const listCategory = list.filter((i, index) => {
						return list.indexOf(i) === index
					});
					const listMenu = ["all"].concat(listCategory);

					return<>{
						listMenu.map((i, index) => (
							<div key={ index }>
								<Link
									className="listMenu"
									onClick={() => this.selectMenu(i)}
									to="/"
								>
									{ i.toUpperCase()}
								</Link>
							</div>
						))
					}</>
				}}
			</Query>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		selectPage: (data) => dispatch(selectPage(data))
	}
}

export default connect(null, mapDispatchToProps)(Menu);