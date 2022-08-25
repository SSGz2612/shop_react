query prdQuery( $product: String! = "huarache-x-stussy-le" ) {
    product( id: $product ) {
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

query ctgQuery( $all: String = "all" ) {
    category( input: { title: $all }) {
      products {
        id
        name
        inStock
        gallery
        description
        category
        prices {
          amount
        }
        brand
      }
    }
  }

  {
    currencies {
      label
      symbol
    }
  }