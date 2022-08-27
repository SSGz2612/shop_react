export const initialState = {
	basket: [],
	product: [],
	page: ["all"],
	counter: 0,
	currency: [["USD"], [0], ["$"]]
}

export const updateBasket = (data) => {
	return {
		type: "UPDATE_BASKET",
		payload: data
	}
}

export const selectProduct = (data) => {
	return {
		type: "SELECT_PRODUCT",
		payload: data
	}
}

// update the page
export const selectPage = (data) => {
	return {
		type: "SELECT_PAGE",
		payload: data
	}
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		// case "UPDATE_ITEM":
		// 	return {
		// 		...state,
		// 		item: [...state.item, action.payload]
		// 	}

		case "UPDATE_BASKET":
			console.log(action.payload);
			return {}
		
		case "SELECT_BASKET":
			return {}

		default: return state

		case "SELECT_PAGE":
			return {
				...state,
				page: [action.payload]
			}
	}
}

export default reducer;