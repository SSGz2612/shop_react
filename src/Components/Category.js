import React from "react";
import Products from "./Products";
// Apollo
import { Query } from "@apollo/client/react/components";
import { productQuery } from "../Controls/queries";
// Redux
import { connect } from "react-redux";
// Styled
import { Body } from "../Controls/styled";

class Category extends React.Component {
  render(){
    return(
      <Query query={ productQuery }>
        {({ data, loading, error }) => {
          if(loading) return <div>Loading...</div>;
          if(error) return <div>Error :(</div>;
          
          // console.log(data.category.products);

          return(
            <Body>
              <Products data={ data.category.products }></Products>
            </Body>
          );
        }}
      </Query>
    )
  }
}

const mapStateToProps = state => {
  return {
    basket: state.basket
  }
}

export default connect(mapStateToProps, null)(Category);