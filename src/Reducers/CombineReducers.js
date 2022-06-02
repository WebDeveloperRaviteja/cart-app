import { combineReducers } from "redux";
import TableReducer from "./TableReducer";
import FilterReducer from "./FilterReducer"
import OrderReducer from "./OrderReducer";

const reducer = combineReducers({
    TableReducer : TableReducer,
    FilterReducer : FilterReducer,
    OrderReducer:OrderReducer
})
export default reducer;