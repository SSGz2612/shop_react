import React from "react";
// Apollo
import { Query } from "@apollo/client/react/components";
import { productQuery } from "../Controls/queries";
// Redux
import { connect } from "react-redux";

class Category extends React.Component {
    render(){
        return(
            <Query query={ productQuery } variables={{}}>
                {({ data, loading, error }) => {
                    if(loading) return <div>Loading...</div>;
                    if(error) return <div>Error :(</div>;
                    
                    console.log(data);

                    return(<div></div>);
                }}
            </Query>
        )
    }
}

const mapStateToProps = state => {
    return {
        item: state.item
    }
}

export default connect(mapStateToProps, null)(Category);