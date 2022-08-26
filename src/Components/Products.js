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
  AddItemBox
} from "../Controls/styled";
// Router
import { Link } from "react-router-dom";

class Products extends React.Component {
	render(){
		return <>
			{ this.props.data.map((i) =>
				<Card className="ContentAdd" key={ i.id }>
					<ContentBox>

            <Link to={{ pathname:`pdp/${ i.id }`}}>
              <ContentImage>
                { i.inStock === false ?
                  <Image url={ i.gallery[0]}>
                    <ImageBlock className="textImage">OUT OF STOCK</ImageBlock>
                  </Image> : <Image url={ i.gallery[0]}/>
                }
              </ContentImage>
            </Link>

            <AddItemBox>
              { i.inStock === true ?
                <Query query={ productQuery }>
                  {({ data, loading, error }) => {
                    if(loading) return <div>Loading...</div>
                    if(error) return <div>Error :(</div>

                    // console.log(data.category.products.map((x) => x.id));

                    return(
                      <button
                        className="addItem"
                        onClick={() =>
                          this.props.updateBasket(i.id)}
                      >
                        <div className="shopCar flexBox"></div>
                      </button>
                    );
                  }}
                </Query> : null
              }
            </AddItemBox>

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
    // selectProduct: (data) => dispatch(updateBasket(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);