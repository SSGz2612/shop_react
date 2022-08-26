export const initialState = {
    item: ["1"]
}

export const updateItem = (data) => {
    return {
        type: "UPDATE_ITEM",
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
        default: return state
    }
}

export default reducer;