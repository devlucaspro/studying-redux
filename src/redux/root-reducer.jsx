import { combineReducers } from "redux";
import userReducer from "./user/slice";

// dados dos nossos reducers (user: userSlice)
export default combineReducers({
    user: userReducer,
    // cart: cartSlice
    // moreone: moreoneSlice
})