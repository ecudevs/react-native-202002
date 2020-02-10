import { combineReducers } from "redux";
import clienteReducer from "./clienteReducer";
export default combineReducers({
    clienteState: clienteReducer
});

