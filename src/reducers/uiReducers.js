const initialState = ""

const uiReducers = (state = initialState, action) => {
    switch (action.type) {
        case "SET_UI":
            return action.payload
        default: return state
    }
}

export default uiReducers