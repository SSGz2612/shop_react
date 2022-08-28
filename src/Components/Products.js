import React from "react";
// Apollo
import { Query } from "@apollo/client/react/components";
import { productQuery } from "../Controls/queries";
// Redux
import { connect } from "react-redux";
import { updateBasket } from "../redux";
// Styled
import {
  Card,
  ContentBox,
  ContentImage,
  Image,
  ImageBlock,
  AddItemBox,
  Text1
} from "../Controls/styled";
// Router
import { Link } from "react-router-dom";

class Products extends React.Component {
	render(){
		return <>
			{ this.props.data.map((i) =>
				<Card className="contentAdd" key={ i.id }>
					<ContentBox>

            <Link to={{ pathname:`pdp/${ i.id }`}}>
              <ContentImage className="flexCenter">
                { i.inStock === false ?
                  <Image url={ i.gallery[0]}>
                    <ImageBlock className="textImage flexCenter">OUT OF STOCK</ImageBlock>
                  </Image> : <Image url={ i.gallery[0]}/>
                }
              </ContentImage>
            </Link>

            <AddItemBox>
              { i.inStock &&
                <Query query={ productQuery }>
                  {({ data, loading, error }) => {
                    if(loading) return <div>Loading...</div>
                    if(error) return <div>Error :(</div>

                    // console.log(data.category.products.map((x) => x.id));

                    return(
                      <button
                        className="addItem flexCenter"
                        onClick={() =>
                          this.props.updateBasket(i.id)}
                      >
                        <div className="shopCar flexCenter"></div>
                      </button>
                    );
                  }}
                </Query>
              }
            </AddItemBox>

            <Text1>{ i.name }</Text1>
            <Text1><b>{ '$' + 10 }</b></Text1>

					</ContentBox>
				</Card>
			)}
		</>;
	}
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    updateBasket: (data) => dispatch(updateBasket(data)),
    selectProduct: (data) => dispatch(updateBasket(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);