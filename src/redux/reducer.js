export const initialState = {
    item: []
}

export const updateItem = (data) => {
    return {
        type: "UPDATE_ITEM",
        payload: data
    }
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

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_ITEM":
            return {
                ...state,
                item: [...state.item, action.payload]
            }

        case "UPDATE_BASKET":
            console.log(action.payload);
            return {}

        default: return state
    }
}

export default reducer;