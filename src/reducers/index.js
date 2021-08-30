import { combineReducers } from "redux";

import apiReducers from './apiReducers'
import uiReducers from "./uiReducers";

const rootReducer = combineReducers({
    apiReducers,
    uiReducers
})

export default rootReducer