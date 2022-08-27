import { gql } from "@apollo/client";

export const productQuery = gql`query ctgQuery {
  category {
    products {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
    	}
      prices {
        currency {
          label
          symbol
        }
        amount
    	}
      brand
    }
  }
}`

// export const categoryQuery = gql`query category($ctg: String!){
//   category(input: { title: $ctg }){
//     products {
//       id
//       name
//       inStock
//       gallery
//       description
//       category
//       prices {
//         amount
//       }
//       brand
//     }
//   }
// }`

export const currency = gql`{
  currencies {
    label
    symbol
  }
}`