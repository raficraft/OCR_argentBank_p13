import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { initialeState } from "./initialState";
import userAuth from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  userAuth,
  initialeState,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

console.log(store);

export default store;
