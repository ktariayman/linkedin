import { combineReducers } from "redux";
import  userReducer  from "./userReducer";
import articleReduccer from "./articleReducer";
const rootReducer = combineReducers({
    userState : userReducer,
    articleState : articleReduccer,
});

export default rootReducer;