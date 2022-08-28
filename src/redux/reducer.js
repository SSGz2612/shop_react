export const initialState = {
	basket: [],
	product: [],
	page: ["all"],
	counter: 5,
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

export const changeCurrency = (data) => {
	return {
		type: "CHANGE_CURRENCY",
		payload: data
	}
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case "UPDATE_BASKET":
			console.log(action.payload);
			return {}
		
		case "SELECT_BASKET":
			return {}

		case "SELECT_PAGE":
			return {
				...state,
				page: [action.payload]
			}
		
		case "CHANGE_CURRENCY":
			return {
				...state,
				currency: [action.payload]
			}
		
		default: return state
	}
}

export default reducer;