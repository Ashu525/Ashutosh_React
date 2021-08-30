const initialState = {dataLoaded:false}

const apiReducers = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            return { ...state, userName: action.payload }
        case "SET_DATA": {
            return {...state, data:action.payload, dataLoaded:true}
        }
        default: return state
    }
}

export default apiReducers