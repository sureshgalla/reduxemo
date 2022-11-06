import { combineReducers } from "redux";
import patients from "./patients";
import medications from "./medications";
 const rootReducer = combineReducers({
     patients,
     medications
 })

export default rootReducer;