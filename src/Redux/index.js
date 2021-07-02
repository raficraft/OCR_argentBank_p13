import { combineReducers } from "redux";
import { createStore } from "redux";
import { isAuth, user } from "./reducers";

const appAuthReducer = combineReducers({ isAuth, user });
const store = createStore(appAuthReducer);

export default store;
