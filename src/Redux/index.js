import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { initialStateAuth, initialStateUser } from "./initialState";
import {  userAuth,  getUser  } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";



const store = createStore(
  userAuth,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

console.log(store);

export default store;
